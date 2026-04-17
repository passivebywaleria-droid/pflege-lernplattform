#!/usr/bin/env python3
"""
Zweite Runde von Fixes fuer verbleibende 77 TypeScript-Fehler in LE-06.

Fokus:
1. DialogPhase: situation -> context (21 Fehler)
2. CategoryDef: id aus { id, name } entfernen (34 Fehler)
3. ComparisonColumn: String -> { label: String } wrappen (6 Fehler)
4. LabelImageLabel: id number -> string (4 Fehler)
5. RevealData / TimelineData / ComparisonData: instruction hinzufuegen (7 Fehler)
6. ReflectionData: placeholder + systemPrompt hinzufuegen (2 Fehler)
7. MatrixData: instruction + axisX + axisY hinzufuegen (2 Fehler)
8. DiagramData: centralNode entfernen
"""
import re
from pathlib import Path

LE06_DIR = Path("/Users/macminiwaleria/Desktop/Moneymaker/pflege-lernplattform/content/le-06")
FILES = ["steps-s2.ts", "steps-s3.ts", "steps-s4.ts", "steps-s5.ts", "steps-s6.ts"]


def find_balanced_block(text, start_idx, open_char="{", close_char="}"):
    depth = 0
    in_string = False
    string_char = None
    i = start_idx
    while i < len(text):
        c = text[i]
        if in_string:
            if c == "\\":
                i += 2
                continue
            if c == string_char:
                in_string = False
        else:
            if c == '"' or c == "'" or c == "`":
                in_string = True
                string_char = c
            elif c == open_char:
                depth += 1
            elif c == close_char:
                depth -= 1
                if depth == 0:
                    return i
        i += 1
    return -1


def fix_dialog_situation_to_context(content):
    """
    DialogPhase hat 'context', nicht 'situation'. Einfach rename.
    Auch situationB1 -> contextB1.
    """
    # Scope: innerhalb von dialogPhases-Arrays. Aber global safe weil 'situation' nur hier vorkommt.
    # Sicherheitshalber nur in dialogPhases-Kontexten.
    pattern = re.compile(r'\bdialogPhases\s*:\s*\[')
    matches = list(pattern.finditer(content))
    for m in reversed(matches):
        arr_start = m.end() - 1
        arr_end = find_balanced_block(content, arr_start, "[", "]")
        if arr_end == -1:
            continue
        arr_body = content[arr_start + 1:arr_end]
        new_body = re.sub(r'\bsituation\s*:', 'context:', arr_body)
        new_body = re.sub(r'\bsituationB1\s*:', 'contextB1:', new_body)
        content = content[:arr_start + 1] + new_body + content[arr_end:]
    return content


def fix_category_def_id_global(content):
    """
    CategoryDef hat nur {name: string}, nicht {id, name}.
    Entferne id: "..." aus allen Objekten in allen categories: [...] Arrays.
    """
    pattern = re.compile(r'\bcategories\s*:\s*\[')
    matches = list(pattern.finditer(content))
    for m in reversed(matches):
        arr_start = m.end() - 1
        arr_end = find_balanced_block(content, arr_start, "[", "]")
        if arr_end == -1:
            continue
        arr_body = content[arr_start + 1:arr_end]
        # Parse category objects first to build id -> index map
        cat_entries = []
        obj_pattern = re.compile(r'\{\s*(?:id:\s*"([^"]*)"\s*,\s*)?(?:name|label):\s*"((?:[^"\\]|\\.)*)"\s*\}')
        for cm in obj_pattern.finditer(arr_body):
            cid = cm.group(1)
            cname = cm.group(2)
            cat_entries.append((cid, cname))

        # Now rebuild: remove id, rename label -> name
        def obj_replace(match):
            cid = match.group(1)
            cname = match.group(2)
            return f'{{ name: "{cname}" }}'
        new_body = obj_pattern.sub(obj_replace, arr_body)

        content = content[:arr_start + 1] + new_body + content[arr_end:]

        # Now also need to convert items.categoryId: "X" to items.correctCategory: N
        # Find the enclosing categorize/question structure that holds items
        # Strategy: find items: [ ... ] close to this categories array (within ~500 chars after)
        search_start = arr_end
        search_end = min(len(content), arr_end + 2000)
        items_match = re.search(r'\bitems\s*:\s*\[', content[search_start:search_end])
        if items_match and cat_entries:
            # build id -> idx
            id_to_idx = {}
            for idx, (cid, _) in enumerate(cat_entries):
                if cid:
                    id_to_idx[cid] = idx

            items_abs_start = search_start + items_match.end() - 1
            items_end = find_balanced_block(content, items_abs_start, "[", "]")
            if items_end != -1 and id_to_idx:
                items_body = content[items_abs_start + 1:items_end]
                def item_replace(mm):
                    before = mm.group(1)
                    cat_id = mm.group(2)
                    after = mm.group(3)
                    idx = id_to_idx.get(cat_id)
                    if idx is None:
                        return mm.group(0)
                    return f'{before}correctCategory: {idx}{after}'
                new_items_body = re.sub(
                    r'(\s*)categoryId:\s*"([^"]*)"(\s*[,}])',
                    item_replace,
                    items_body
                )
                # Also remove id: "iX" from item objects (not in CategoryItem schema)
                new_items_body = re.sub(r'(\{\s*)id:\s*"[^"]*",\s*', r'\1', new_items_body)
                content = content[:items_abs_start + 1] + new_items_body + content[items_end:]

    return content


def fix_comparison_columns_strings(content):
    """
    columns: ["Aktiv", "Passiv"] -> columns: [{ label: "Aktiv" }, { label: "Passiv" }]
    Nur wenn Elemente Strings sind.
    """
    # Find comparison: { ... } blocks
    pattern = re.compile(r'\bcomparison\s*:\s*\{')
    matches = list(pattern.finditer(content))
    for m in reversed(matches):
        ob = content.find("{", m.end() - 1)
        cb = find_balanced_block(content, ob)
        if cb == -1:
            continue
        block = content[ob:cb + 1]

        # Find columns: [ ... ]
        cols_match = re.search(r'\bcolumns\s*:\s*\[', block)
        if not cols_match:
            continue
        cols_start = cols_match.end() - 1
        cols_end = find_balanced_block(block, cols_start, "[", "]")
        if cols_end == -1:
            continue
        cols_body = block[cols_start + 1:cols_end]

        # Check if entries are strings (not objects)
        # Entries are strings if they don't contain "{"
        if "{" in cols_body:
            # Already objects, skip
            continue

        # Extract string values
        string_vals = re.findall(r'"((?:[^"\\]|\\.)*)"', cols_body)
        if not string_vals:
            continue

        new_cols = ", ".join(f'{{ label: "{v}" }}' for v in string_vals)
        new_block = block[:cols_start + 1] + new_cols + block[cols_end:]

        content = content[:ob] + new_block + content[cb + 1:]

    return content


def fix_labelimage_id_number_to_string(content):
    """
    LabelImageLabel.id ist string. Manchmal steht dort Nummer (id: 1).
    Wandle zu string um: id: "1"
    """
    # Find labelImage: { ... } blocks
    pattern = re.compile(r'\blabelImage\s*:\s*\{')
    matches = list(pattern.finditer(content))
    for m in reversed(matches):
        ob = content.find("{", m.end() - 1)
        cb = find_balanced_block(content, ob)
        if cb == -1:
            continue
        block = content[ob:cb + 1]
        # Replace id: N with id: "N" (where N is a number)
        new_block = re.sub(r'\bid:\s*(\d+)\b', lambda mm: f'id: "{mm.group(1)}"', block)
        content = content[:ob] + new_block + content[cb + 1:]
    return content


def add_instruction_to_key(content, key):
    """
    Fuege instruction: "..." zu <key>: { ... } hinzu, falls fehlt.
    """
    default_msgs = {
        "reveal": "Tippe die Karten an.",
        "timeline": "Lies die Zeitleiste.",
        "comparison": "Vergleiche die Optionen.",
    }
    pattern = re.compile(r'\b' + key + r'\s*:\s*\{')
    matches = list(pattern.finditer(content))
    for m in reversed(matches):
        ob = content.find("{", m.end() - 1)
        cb = find_balanced_block(content, ob)
        if cb == -1:
            continue
        block = content[ob:cb + 1]
        if "instruction:" in block:
            continue
        # Insert instruction: "..." after opening brace
        default = default_msgs.get(key, "Bitte beachten.")
        # Find the opening { and insert after it (with proper indentation)
        # Determine indentation from the next non-empty line
        after_brace = block[1:]  # skip "{"
        # Take first line after brace
        first_newline = after_brace.find("\n")
        if first_newline == -1:
            indent = "        "
        else:
            next_line_start = first_newline + 1
            # Find indentation of that line
            ind_match = re.match(r'[ \t]*', after_brace[next_line_start:])
            indent = ind_match.group(0) if ind_match else "        "
        new_block = "{" + f'\n{indent}instruction: "{default}",' + after_brace
        content = content[:ob] + new_block + content[cb + 1 + (len(new_block) - len(block)):]
        # Simpler: reconstruct
        # Actually let's just rebuild:
        # new_block is correctly built - but cb is in the original content, not block

    return content


def add_instruction_simple(content, key, default_msg):
    """
    Einfacher Ansatz: Fuegt 'instruction: "..."' direkt nach '<key>: {' ein.
    """
    pattern = re.compile(r'\b(' + key + r')\s*:\s*\{')
    def replace(m):
        # Look ahead in content to check if block already has instruction
        # This is tricky - we need to handle it at the content level
        return m.group(0)
    # Simpler: just find blocks, check, and insert

    matches = list(pattern.finditer(content))
    for m in reversed(matches):
        ob = content.find("{", m.end() - 1)
        cb = find_balanced_block(content, ob)
        if cb == -1:
            continue
        block = content[ob:cb + 1]
        if "instruction:" in block:
            continue
        # Insert after opening brace - find next newline and match its indent
        rest_of_block = block[1:]
        nl_pos = rest_of_block.find("\n")
        if nl_pos == -1:
            indent = "        "
        else:
            # Get indent of next line
            line_start = nl_pos + 1
            ind_match = re.match(r'[ \t]*', rest_of_block[line_start:])
            indent = ind_match.group(0) if ind_match else "        "

        insertion = f'\n{indent}instruction: "{default_msg}",'
        new_block = "{" + insertion + rest_of_block
        content = content[:ob] + new_block + content[cb + 1:]
    return content


def add_reflection_required_fields(content):
    """
    ReflectionData braucht placeholder und systemPrompt. Fuege hinzu wenn fehlen.
    """
    pattern = re.compile(r'\breflection\s*:\s*\{')
    matches = list(pattern.finditer(content))
    for m in reversed(matches):
        ob = content.find("{", m.end() - 1)
        cb = find_balanced_block(content, ob)
        if cb == -1:
            continue
        block = content[ob:cb + 1]

        # Check if already has both
        has_placeholder = "placeholder:" in block
        has_system = "systemPrompt:" in block
        if has_placeholder and has_system:
            continue

        # Get indent
        rest_of_block = block[1:]
        nl_pos = rest_of_block.find("\n")
        if nl_pos == -1:
            indent = "        "
        else:
            line_start = nl_pos + 1
            ind_match = re.match(r'[ \t]*', rest_of_block[line_start:])
            indent = ind_match.group(0) if ind_match else "        "

        insertions = []
        if not has_placeholder:
            insertions.append(f'{indent}placeholder: "Deine Antwort...",')
        if not has_system:
            insertions.append(f'{indent}systemPrompt: "Gib konstruktives Feedback zur Reflexion.",')

        if insertions:
            insertion_str = "\n" + "\n".join(insertions)
            new_block = "{" + insertion_str + rest_of_block
            content = content[:ob] + new_block + content[cb + 1:]

    return content


def add_matrix_required_fields(content):
    """
    MatrixData braucht instruction, axisX, axisY, items. Fuege fehlende hinzu.
    """
    pattern = re.compile(r'\bmatrix\s*:\s*\{')
    matches = list(pattern.finditer(content))
    for m in reversed(matches):
        ob = content.find("{", m.end() - 1)
        cb = find_balanced_block(content, ob)
        if cb == -1:
            continue
        block = content[ob:cb + 1]

        has_instruction = "instruction:" in block
        has_axisX = "axisX:" in block
        has_axisY = "axisY:" in block
        has_items = re.search(r'\bitems\s*:', block)

        if has_instruction and has_axisX and has_axisY and has_items:
            continue

        # Get indent
        rest_of_block = block[1:]
        nl_pos = rest_of_block.find("\n")
        if nl_pos == -1:
            indent = "        "
        else:
            line_start = nl_pos + 1
            ind_match = re.match(r'[ \t]*', rest_of_block[line_start:])
            indent = ind_match.group(0) if ind_match else "        "

        insertions = []
        if not has_instruction:
            insertions.append(f'{indent}instruction: "Ordne die Items in die Matrix.",')
        if not has_axisX:
            insertions.append(f'{indent}axisX: {{ label: "X-Achse", low: "gering", high: "hoch" }},')
        if not has_axisY:
            insertions.append(f'{indent}axisY: {{ label: "Y-Achse", low: "gering", high: "hoch" }},')
        if not has_items:
            insertions.append(f'{indent}items: [],')

        if insertions:
            insertion_str = "\n" + "\n".join(insertions)
            new_block = "{" + insertion_str + rest_of_block
            content = content[:ob] + new_block + content[cb + 1:]

    return content


def remove_diagram_centralnode(content):
    """
    DiagramData hat kein 'centralNode'. Entferne es.
    """
    pattern = re.compile(r'\bdiagram\s*:\s*\{')
    matches = list(pattern.finditer(content))
    for m in reversed(matches):
        ob = content.find("{", m.end() - 1)
        cb = find_balanced_block(content, ob)
        if cb == -1:
            continue
        block = content[ob:cb + 1]
        # Entferne centralNode: { ... }
        # Use balanced matching to find the value
        cn_match = re.search(r'\bcentralNode\s*:\s*\{', block)
        if cn_match:
            inner_ob = block.find("{", cn_match.end() - 1)
            inner_cb = find_balanced_block(block, inner_ob)
            if inner_cb != -1:
                # Include the preceding "centralNode:" and trailing ","+newline if present
                # Find start of line
                line_start = block.rfind("\n", 0, cn_match.start()) + 1
                # End: after closing brace, maybe comma + newline
                end_pos = inner_cb + 1
                if end_pos < len(block) and block[end_pos] == ",":
                    end_pos += 1
                while end_pos < len(block) and block[end_pos] in " \t":
                    end_pos += 1
                if end_pos < len(block) and block[end_pos] == "\n":
                    end_pos += 1
                new_block = block[:line_start] + block[end_pos:]
                content = content[:ob] + new_block + content[cb + 1:]
    return content


def process_file(filepath):
    print(f"Processing {filepath.name}...")
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    original = content

    content = fix_dialog_situation_to_context(content)
    content = fix_category_def_id_global(content)
    content = fix_comparison_columns_strings(content)
    content = fix_labelimage_id_number_to_string(content)

    content = add_instruction_simple(content, "reveal", "Tippe die Karten an.")
    content = add_instruction_simple(content, "timeline", "Lies die Zeitleiste.")
    content = add_instruction_simple(content, "comparison", "Vergleiche die Optionen.")

    content = add_reflection_required_fields(content)
    content = add_matrix_required_fields(content)
    content = remove_diagram_centralnode(content)

    if content != original:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"  -> Updated")
    else:
        print(f"  -> No changes")


def main():
    for fname in FILES:
        fp = LE06_DIR / fname
        if fp.exists():
            process_file(fp)


if __name__ == "__main__":
    main()
