#!/usr/bin/env python3
"""
Fixt TypeScript-Schema-Mismatches in content/le-06/steps-s*.ts
Systematisch und vorsichtig, mit Bracket-Matching-Parser.
"""
import re
import os
from pathlib import Path

LE06_DIR = Path("/Users/macminiwaleria/Desktop/Moneymaker/pflege-lernplattform/content/le-06")
FILES = ["steps-s2.ts", "steps-s3.ts", "steps-s4.ts", "steps-s5.ts", "steps-s6.ts"]


def find_balanced_block(text, start_idx, open_char="{", close_char="}"):
    """Findet die Position des schliessenden Klammers zum offenen an start_idx."""
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


def find_key_block(text, key_pattern):
    """
    Findet alle Vorkommen von `<key_pattern>: {` und gibt (start, end_of_value) zurueck.
    end_of_value ist die Position der schliessenden Klammer der Value.
    """
    results = []
    pattern = re.compile(r'\b(' + key_pattern + r')\s*:\s*\{')
    for m in pattern.finditer(text):
        open_brace = text.find("{", m.end() - 1)
        if open_brace == -1:
            continue
        close_brace = find_balanced_block(text, open_brace)
        if close_brace == -1:
            continue
        results.append((m.start(), m.end(), open_brace, close_brace, m.group(1)))
    return results


def fix_themenblockphase(content):
    mapping = {
        '"einstieg"': '"SZENE"',
        '"erarbeitung"': '"ERKLÄRUNG"',
        '"vertiefung"': '"ANWENDUNG"',
        '"transfer"': '"ANWENDUNG"',
    }
    for old, new in mapping.items():
        content = re.sub(r'themenblockPhase:\s*' + re.escape(old), f'themenblockPhase: {new}', content)
    return content


def fix_displayformat_tablefillin(content):
    return re.sub(r'\s*displayFormat:\s*"tablefillin",?\n', '\n', content)


def fix_reflection_promptb1(content):
    # promptB1 -> entfernen (ReflectionData hat nur prompt)
    # Finde reflection: { ... } und entferne promptB1 darin
    blocks = find_key_block(content, "reflection")
    # Von hinten nach vorne arbeiten
    for _, _, open_b, close_b, _ in reversed(blocks):
        block_content = content[open_b:close_b + 1]
        new_block = re.sub(r',?\s*promptB1:\s*"(?:[^"\\]|\\.)*",?', ',', block_content)
        # cleanup mehrfache Kommas
        new_block = re.sub(r',\s*,', ',', new_block)
        new_block = re.sub(r'\{\s*,', '{', new_block)
        new_block = re.sub(r',\s*\}', '\n        }', new_block)
        content = content[:open_b] + new_block + content[close_b + 1:]
    return content


def fix_diagram_type(content):
    # diagram: { type: "..." } -> diagram: { diagramType: "..." }
    blocks = find_key_block(content, "diagram")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        new_block = re.sub(r'(\s)type:', r'\1diagramType:', block, count=1)
        content = content[:open_b] + new_block + content[close_b + 1:]
    return content


def fix_timeline_date(content):
    # Bei TimelineEvent-Eintraegen: date: -> time:
    # Nur innerhalb von timeline: { events: [...] } oder timeline: { ... }
    blocks = find_key_block(content, "timeline")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        new_block = re.sub(r'\bdate:\s*"', 'time: "', block)
        content = content[:open_b] + new_block + content[close_b + 1:]
    return content


def fix_swipe_blocks(content):
    """
    swipe: { leftLabel, rightLabel, items: [{id,text,direction,feedback}] }
    -> swipe: { instruction, cards: [{statement, isCorrect, explanation}] }
    """
    blocks = find_key_block(content, "swipe")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        # Nur wenn leftLabel vorhanden ist (Legacy-Format)
        if "leftLabel" not in block and "items:" not in block:
            continue
        # Extract labels
        lm = re.search(r'leftLabel:\s*"((?:[^"\\]|\\.)*)"', block)
        rm = re.search(r'rightLabel:\s*"((?:[^"\\]|\\.)*)"', block)
        left = lm.group(1) if lm else "falsch"
        right = rm.group(1) if rm else "richtig"

        # Extract items array (items: [ ... ])
        items_match = re.search(r'items:\s*\[', block)
        if not items_match:
            continue
        items_start = items_match.end() - 1  # Position des [
        items_end = find_balanced_block(block, items_start, "[", "]")
        if items_end == -1:
            continue
        items_body = block[items_start + 1:items_end]

        # Parse individual items
        # Each item: { id?: "...", text: "...", direction: "left|right", feedback: "..." }
        item_pattern = re.compile(
            r'\{\s*(?:id:\s*"[^"]*",\s*)?text:\s*"((?:[^"\\]|\\.)*)",\s*direction:\s*"(left|right)",\s*feedback:\s*"((?:[^"\\]|\\.)*)"\s*\}',
            re.DOTALL
        )
        cards = []
        for im in item_pattern.finditer(items_body):
            text = im.group(1)
            direction = im.group(2)
            feedback = im.group(3)
            is_correct = "true" if direction == "right" else "false"
            cards.append((text, is_correct, feedback))

        if not cards:
            continue

        # Neuen Block bauen
        indent = "        "
        # Escape backslashes first, then quotes inside the values
        safe_right = right.replace("\\", "\\\\").replace('"', '\\"')
        safe_left = left.replace("\\", "\\\\").replace('"', '\\"')
        instruction_text = f'Wische nach rechts fuer \\"{safe_right}\\", nach links fuer \\"{safe_left}\\".'
        new_lines = [f"{{", f'{indent}instruction: "{instruction_text}",', f'{indent}cards: [']
        for t, ic, fb in cards:
            new_lines.append(f'{indent}  {{ statement: "{t}", isCorrect: {ic}, explanation: "{fb}" }},')
        new_lines.append(f'{indent}],')
        new_lines.append(f'{indent[:-2]}}}')
        new_block = "\n".join(new_lines)

        content = content[:open_b] + new_block + content[close_b + 1:]

    return content


def fix_estimation_blocks(content):
    """
    estimation: { zielwert, einheit, toleranz, feedback, feedbackB1 }
    -> { instruction, unit, correctValue, tolerance, funFact, explanation, explanationB1 }
    """
    blocks = find_key_block(content, "estimation")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        if "zielwert" not in block:
            continue
        fields = {}
        # Parse key-value pairs (nur top-level)
        for fm in re.finditer(r'(\w+):\s*(?:"((?:[^"\\]|\\.)*)"|([-0-9.]+))', block):
            key = fm.group(1)
            val = fm.group(2) if fm.group(2) is not None else fm.group(3)
            if key not in fields:
                fields[key] = val

        indent = "        "
        instruction = fields.get("instruction", "Schaetze den Wert.")
        unit = fields.get("einheit", fields.get("unit", ""))
        correct_value = fields.get("zielwert", fields.get("correctValue", "0"))
        tol_raw = fields.get("toleranz", fields.get("tolerance", "0"))
        try:
            tol = float(tol_raw)
        except ValueError:
            tol = 0.0
        tolerance = int(tol) if tol > 0 else 10  # 0 nicht erlaubt, default 10%
        explanation = fields.get("feedback", fields.get("explanation", ""))
        explanation_b1 = fields.get("feedbackB1", fields.get("explanationB1"))
        fun_fact = fields.get("funFact", "")

        new_lines = [
            "{",
            f'{indent}instruction: "{instruction}",',
            f'{indent}unit: "{unit}",',
            f'{indent}correctValue: {correct_value},',
            f'{indent}tolerance: {tolerance},',
            f'{indent}funFact: "{fun_fact}",',
            f'{indent}explanation: "{explanation}",',
        ]
        if explanation_b1:
            new_lines.append(f'{indent}explanationB1: "{explanation_b1}",')
        new_lines.append(f'{indent[:-2]}}}')
        new_block = "\n".join(new_lines)

        content = content[:open_b] + new_block + content[close_b + 1:]

    return content


def fix_slider_blocks(content):
    """
    slider: { ..., zielwert, toleranz, feedback, feedbackB1, ... }
    -> slider: { instruction, min, max, step, correctValue, tolerance, unit?, explanation, explanationB1? }
    """
    blocks = find_key_block(content, "slider")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        # Nur fixen wenn Legacy-Feldnamen vorhanden
        has_legacy = ("zielwert" in block or "toleranz" in block or
                      "feedback:" in block or "feedbackB1" in block)
        needs_instruction = "instruction:" not in block
        if not has_legacy and not needs_instruction:
            continue

        fields = {}
        for fm in re.finditer(r'(\w+):\s*(?:"((?:[^"\\]|\\.)*)"|([-0-9.]+))', block):
            key = fm.group(1)
            val = fm.group(2) if fm.group(2) is not None else fm.group(3)
            if key not in fields:
                fields[key] = val

        indent = "        "
        instruction = fields.get("instruction", "Waehle den Wert.")
        min_v = fields.get("min", "0")
        max_v = fields.get("max", "100")
        step = fields.get("step", "1")
        unit = fields.get("unit", fields.get("einheit", ""))
        correct_value = fields.get("zielwert", fields.get("correctValue", "0"))
        tol_raw = fields.get("toleranz", fields.get("tolerance", "0"))
        explanation = fields.get("feedback", fields.get("explanation", ""))
        explanation_b1 = fields.get("feedbackB1", fields.get("explanationB1"))

        new_lines = [
            "{",
            f'{indent}instruction: "{instruction}",',
            f'{indent}unit: "{unit}",',
            f'{indent}min: {min_v},',
            f'{indent}max: {max_v},',
            f'{indent}step: {step},',
            f'{indent}correctValue: {correct_value},',
            f'{indent}tolerance: {tol_raw},',
            f'{indent}explanation: "{explanation}",',
        ]
        if explanation_b1:
            new_lines.append(f'{indent}explanationB1: "{explanation_b1}",')
        new_lines.append(f'{indent[:-2]}}}')
        new_block = "\n".join(new_lines)
        content = content[:open_b] + new_block + content[close_b + 1:]

    return content


def fix_reveal_blocks(content):
    """
    reveal: { instruction, items: [...] } or { instruction, sections: [...] }
    -> reveal: { instruction, cards: [...], revealMode: "free" }
    """
    blocks = find_key_block(content, "reveal")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        if "items:" not in block and "sections:" not in block and "revealMode" in block:
            continue

        new_block = block
        # Rename items: -> cards:
        if "items:" in new_block:
            new_block = re.sub(r'\bitems:\s*\[', 'cards: [', new_block, count=1)
        # Rename sections: -> cards:
        if "sections:" in new_block and "cards:" not in new_block:
            new_block = re.sub(r'\bsections:\s*\[', 'cards: [', new_block, count=1)

        # revealMode hinzufuegen
        if "revealMode" not in new_block:
            # Vor dem letzten } einfuegen
            # Finde schliessendes }
            # Ersetze \n\s*}$ mit ,\n    revealMode: "free"\n  }
            new_block = re.sub(r',?\s*\}\s*$', ',\n        revealMode: "free"\n      }', new_block)

        content = content[:open_b] + new_block + content[close_b + 1:]

    return content


def fix_hotspot_blocks(content):
    """
    hotspot: { imageUrl, imageAlt, hotspots: [{id,x,y,radius,label,feedback}] , feedbackComplete?, feedbackCompleteB1? }
    -> hotspot: { imageUrl, imageAlt, instruction, zones: [{id,x,y,radius,label}] }
    Wir entfernen feedback und feedbackComplete (nicht im Schema).
    """
    blocks = find_key_block(content, "hotspot")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        if "hotspots:" not in block:
            continue

        new_block = block
        # Rename hotspots -> zones
        new_block = re.sub(r'\bhotspots:\s*\[', 'zones: [', new_block)
        # Entferne feedbackComplete / feedbackCompleteB1 (nicht in HotspotData)
        new_block = re.sub(r',?\s*feedbackComplete(?:B1)?:\s*"(?:[^"\\]|\\.)*"', '', new_block)
        # Entferne feedback: "..." aus Zones (HotspotZone hat kein feedback)
        new_block = re.sub(r',\s*feedback:\s*"(?:[^"\\]|\\.)*"', '', new_block)
        # Entferne feedbackB1 aus Zones
        new_block = re.sub(r',\s*feedbackB1:\s*"(?:[^"\\]|\\.)*"', '', new_block)
        # Stelle sicher, dass instruction vorhanden
        if "instruction:" not in new_block:
            new_block = re.sub(
                r'(imageAlt:\s*"[^"]*",\s*\n)',
                r'\1        instruction: "Markiere die relevanten Stellen.",\n',
                new_block, count=1
            )
        content = content[:open_b] + new_block + content[close_b + 1:]

    return content


def fix_labelimage_blocks(content):
    """
    labelImage: { imageUrl, imageAlt, labels: [{id, x, y, text}] }
    -> labelImage: { imageUrl, imageAlt, instruction, labels: [{id, correct, position:{x,y}}], mode: "select" }
    """
    blocks = find_key_block(content, "labelImage")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        # Check ob es Legacy-Format ist
        # Pattern: { id: "X", x: N, y: N, text: "..." }
        if not re.search(r'\{\s*id:\s*"[^"]*",\s*x:\s*[0-9.]+,\s*y:\s*[0-9.]+,\s*text:', block):
            continue

        new_block = block
        # Transform labels
        new_block = re.sub(
            r'\{\s*id:\s*"([^"]*)",\s*x:\s*([0-9.]+),\s*y:\s*([0-9.]+),\s*text:\s*"((?:[^"\\]|\\.)*)"\s*\}',
            lambda m: f'{{ id: "{m.group(1)}", correct: "{m.group(4)}", position: {{ x: {m.group(2)}, y: {m.group(3)} }} }}',
            new_block
        )
        # mode hinzufuegen falls fehlt
        if "mode:" not in new_block:
            # Vor dem letzten } einfuegen
            new_block = re.sub(r',?\s*\}\s*$', ',\n        mode: "select"\n      }', new_block)
        # instruction hinzufuegen falls fehlt
        if "instruction:" not in new_block:
            new_block = re.sub(
                r'(imageAlt:\s*"[^"]*",\s*\n)',
                r'\1        instruction: "Beschrifte das Bild.",\n',
                new_block, count=1
            )

        content = content[:open_b] + new_block + content[close_b + 1:]

    return content


def fix_comparison_blocks(content):
    """
    comparison: {
      columns: [{id, label, icon?}],
      rows: [{id, label, values: {"30":"x","90":"y"}, highlight?}]
    }
    -> comparison: {
      instruction,
      columns: [{label, icon?}],
      rows: [{criterion, values: [string], highlight?}]
    }
    """
    blocks = find_key_block(content, "comparison")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        # Nur wenn Legacy-Format
        needs_fix = re.search(r'\{\s*id:\s*"[^"]*",\s*label:', block) or "values: {" in block
        if not needs_fix and "instruction:" in block:
            continue

        new_block = block

        # Fix columns: { id: "X", label: "Y", icon?: "Z" } -> { label: "Y", icon?: "Z" }
        new_block = re.sub(
            r'\{\s*id:\s*"[^"]*",\s*label:\s*"((?:[^"\\]|\\.)*)"(?:,\s*icon:\s*"((?:[^"\\]|\\.)*)")?\s*\}',
            lambda m: f'{{ label: "{m.group(1)}"' + (f', icon: "{m.group(2)}"' if m.group(2) else '') + ' }',
            new_block
        )

        # Fix rows: {id?, label: "X", values: {...}, highlight?}
        # Strategy: finde rows: [ ... ] und fixe innerhalb
        rows_match = re.search(r'rows:\s*\[', new_block)
        if rows_match:
            rows_start = rows_match.end() - 1  # Position des [
            rows_end = find_balanced_block(new_block, rows_start, "[", "]")
            if rows_end != -1:
                rows_body = new_block[rows_start + 1:rows_end]
                # Fix jede row
                row_pattern = re.compile(
                    r'\{\s*(?:id:\s*"[^"]*",\s*)?label:\s*"((?:[^"\\]|\\.)*)",\s*values:\s*\{([^}]*)\}(?:,\s*highlight:\s*(\d+))?\s*\}',
                    re.DOTALL
                )
                def row_replace(m):
                    criterion = m.group(1)
                    values_body = m.group(2)
                    highlight = m.group(3)
                    # Parse key:value pairs in order
                    # Sowohl "30":"x" als auch ungequoted key: "x"
                    vals = []
                    for vm in re.finditer(r'(?:"[^"]*"|\w+):\s*"((?:[^"\\]|\\.)*)"', values_body):
                        vals.append(vm.group(1))
                    vals_arr = ", ".join(f'"{v}"' for v in vals)
                    result = f'{{ criterion: "{criterion}", values: [{vals_arr}]'
                    if highlight:
                        result += f', highlight: {highlight}'
                    result += ' }'
                    return result

                new_rows_body = row_pattern.sub(row_replace, rows_body)
                new_block = new_block[:rows_start + 1] + new_rows_body + new_block[rows_end:]

        # instruction hinzufuegen falls fehlt
        if "instruction:" not in new_block:
            new_block = re.sub(
                r'(comparison:\s*\{\s*\n)',
                r'\1        instruction: "Vergleiche die Optionen.",\n',
                new_block, count=1
            )

        content = content[:open_b] + new_block + content[close_b + 1:]

    return content


def fix_categorize_blocks(content):
    """
    categorize: {
      categories: [{id, label}],
      items: [{id, text, correctCategory: "id"}]
    }
    -> categorize: {
      categories: [{name}],
      items: [{text, correctCategory: N}]  # N = index of category
    }
    """
    blocks = find_key_block(content, "categorize")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        # Check ob Legacy-Format
        if not re.search(r'categories:\s*\[\s*\{[^}]*id:', block) and not re.search(r'categories:\s*\[\s*\{[^}]*label:', block):
            continue

        new_block = block

        # Finde categories: [ ... ]
        cat_match = re.search(r'categories:\s*\[', new_block)
        if not cat_match:
            continue
        cat_start = cat_match.end() - 1
        cat_end = find_balanced_block(new_block, cat_start, "[", "]")
        if cat_end == -1:
            continue
        cat_body = new_block[cat_start + 1:cat_end]

        # Parse categories and build id -> idx map
        cat_entries = re.findall(
            r'\{\s*(?:id:\s*"([^"]*)",\s*)?(?:name|label):\s*"((?:[^"\\]|\\.)*)"\s*\}',
            cat_body
        )
        cat_id_to_idx = {}
        new_cats = []
        for i, (cid, clabel) in enumerate(cat_entries):
            if cid:
                cat_id_to_idx[cid] = i
            new_cats.append(f'{{ name: "{clabel}" }}')
        new_cats_str = ", ".join(new_cats)
        new_block = new_block[:cat_start + 1] + new_cats_str + new_block[cat_end:]

        # Jetzt Items fixen
        items_match = re.search(r'items:\s*\[', new_block)
        if items_match:
            items_start = items_match.end() - 1
            items_end = find_balanced_block(new_block, items_start, "[", "]")
            if items_end != -1:
                items_body = new_block[items_start + 1:items_end]
                # Pattern: { id?: "X", text: "...", correctCategory: "id" }
                item_pattern = re.compile(
                    r'\{\s*(?:id:\s*"[^"]*",\s*)?text:\s*"((?:[^"\\]|\\.)*)",\s*correctCategory:\s*"([^"]*)"\s*\}'
                )
                def item_replace(m):
                    text = m.group(1)
                    cat_id = m.group(2)
                    idx = cat_id_to_idx.get(cat_id, 0)
                    return f'{{ text: "{text}", correctCategory: {idx} }}'
                new_items_body = item_pattern.sub(item_replace, items_body)
                new_block = new_block[:items_start + 1] + new_items_body + new_block[items_end:]

        content = content[:open_b] + new_block + content[close_b + 1:]

    return content


def fix_matrix_blocks(content):
    """
    matrix: { items: [{rowId, ...}], columns: [...] (falsch)}
    -> matrix: { instruction, axisX, axisY, items: [{id, text, correctQuadrant: 1-4}] }
    """
    blocks = find_key_block(content, "matrix")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        # Wenn bereits axisX vorhanden und kein rowId: skip
        if "axisX" in block and "rowId" not in block and "columns:" not in block:
            continue

        new_block = block

        # Entferne columns: [ ... ] block
        columns_match = re.search(r'columns:\s*\[', new_block)
        if columns_match:
            col_start = columns_match.end() - 1
            col_end = find_balanced_block(new_block, col_start, "[", "]")
            if col_end != -1:
                # Entferne von Start-der-Zeile (columns:) bis nach ] plus Komma
                # Finde den Start der columns-Zeile
                full_start = new_block.rfind("\n", 0, columns_match.start()) + 1
                # Nach dem ] ist evtl. Komma und Newline
                end_pos = col_end + 1
                if end_pos < len(new_block) and new_block[end_pos] == ",":
                    end_pos += 1
                while end_pos < len(new_block) and new_block[end_pos] in " \t":
                    end_pos += 1
                if end_pos < len(new_block) and new_block[end_pos] == "\n":
                    end_pos += 1
                new_block = new_block[:full_start] + new_block[end_pos:]

        # Add axisX / axisY falls nicht vorhanden
        if "axisX:" not in new_block:
            new_block = re.sub(
                r'(matrix:\s*\{\s*\n)',
                r'\1        axisX: { label: "X-Achse", low: "gering", high: "hoch" },\n        axisY: { label: "Y-Achse", low: "gering", high: "hoch" },\n',
                new_block, count=1
            )
        if "instruction:" not in new_block:
            new_block = re.sub(
                r'(matrix:\s*\{\s*\n)',
                r'\1        instruction: "Ordne die Items in die Matrix.",\n',
                new_block, count=1
            )

        content = content[:open_b] + new_block + content[close_b + 1:]
    return content


def fix_cloze_blanks(content):
    """
    ClozeBlank: {id: number, correct: string, distractors: string[]}
    Aktuell: {id: "1", correct, alternatives: []}
    """
    # Global safe replacement:
    # alternatives -> distractors
    content = re.sub(r'\balternatives:\s*\[', 'distractors: [', content)
    # id: "N" -> id: N innerhalb Cloze-Blank-Kontexts:
    # Pattern: { id: "N", correct: "...", distractors: [...] }
    content = re.sub(
        r'(\{\s*)id:\s*"(\d+)"(\s*,\s*correct:)',
        r'\1id: \2\3',
        content
    )
    return content


def remove_id_in_array(content, array_key_pattern):
    """
    Entfernt `id: "xxx", ` aus allen Objekten in einem Array namens <array_key_pattern>.
    Z.B. array_key_pattern = "options|memoryPairs" (regex).
    """
    # Finde alle <array_key>: [ ... ]
    pattern = re.compile(r'\b(' + array_key_pattern + r')\s*:\s*\[')
    matches = list(pattern.finditer(content))
    for m in reversed(matches):
        arr_start = m.end() - 1  # Position des [
        arr_end = find_balanced_block(content, arr_start, "[", "]")
        if arr_end == -1:
            continue
        arr_body = content[arr_start + 1:arr_end]
        # Entferne id: "xxx", am Anfang jedes Objekts im Array
        new_body = re.sub(r'(\{\s*)id:\s*"[^"]*",\s*', r'\1', arr_body)
        content = content[:arr_start + 1] + new_body + content[arr_end:]
    return content


def remove_rowid_in_matrix_items(content):
    """
    Entfernt rowId aus Items in matrix-Bloecken.
    """
    blocks = find_key_block(content, "matrix")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        new_block = re.sub(r'(\{\s*)rowId:\s*"[^"]*",\s*', r'\1', block)
        new_block = re.sub(r',\s*rowId:\s*"[^"]*"', '', new_block)
        new_block = re.sub(r',\s*columnId:\s*"[^"]*"', '', new_block)
        new_block = re.sub(r'(\{\s*)columnId:\s*"[^"]*",\s*', r'\1', new_block)
        content = content[:open_b] + new_block + content[close_b + 1:]
    return content


def remove_id_from_dialog_and_memory(content):
    """
    Zielgerichtet id aus bestimmten Objekt-Arrays entfernen:
    - options (in dialogPhases[i].options -> DialogOption)
    - memoryPairs (-> MemoryPair)

    Fuer comparison (columns/rows) und categorize (categories/items) wurde das
    bereits in den Block-Fixes gemacht.
    """
    content = remove_id_in_array(content, "options")
    content = remove_id_in_array(content, "memoryPairs")
    return content


def add_patient_response_to_dialog_options(content):
    """
    DialogOption braucht 'patientResponse' (Pflicht).
    Wir fuegen es als leeren String hinzu.
    Scope: options-Arrays innerhalb von dialogPhases-Bloecken.
    """
    # Finde dialogPhases: [ ... ] Bloecke
    pattern = re.compile(r'\bdialogPhases\s*:\s*\[')
    matches = list(pattern.finditer(content))
    for m in reversed(matches):
        arr_start = m.end() - 1
        arr_end = find_balanced_block(content, arr_start, "[", "]")
        if arr_end == -1:
            continue
        arr_body = content[arr_start + 1:arr_end]
        # Finde alle options: [ ... ] darin
        options_pattern = re.compile(r'\boptions\s*:\s*\[')
        new_body = arr_body
        opt_matches = list(options_pattern.finditer(new_body))
        for om in reversed(opt_matches):
            opt_start = om.end() - 1
            opt_end = find_balanced_block(new_body, opt_start, "[", "]")
            if opt_end == -1:
                continue
            opt_body = new_body[opt_start + 1:opt_end]
            # Fuege patientResponse hinzu in Objekten die es nicht haben
            # Pattern: { text: "...", score: N, feedback: "..." , ... }
            def add_pr(match_obj):
                obj_text = match_obj.group(0)
                if "patientResponse" in obj_text:
                    return obj_text
                # Fuege patientResponse: "" NACH "text: "..."," hinzu
                return re.sub(
                    r'(text:\s*"(?:[^"\\]|\\.)*",\s*)',
                    r'\1patientResponse: "", ',
                    obj_text,
                    count=1
                )
            # Object pattern: von { bis passendes }
            new_opt_body = opt_body
            # Finde alle top-level { ... } im Array
            i = 0
            result = []
            while i < len(new_opt_body):
                if new_opt_body[i] == "{":
                    end = find_balanced_block(new_opt_body, i)
                    if end == -1:
                        result.append(new_opt_body[i])
                        i += 1
                        continue
                    obj_text = new_opt_body[i:end + 1]
                    if "patientResponse" not in obj_text:
                        obj_text = re.sub(
                            r'(text:\s*"(?:[^"\\]|\\.)*",\s*)',
                            r'\1patientResponse: "", ',
                            obj_text,
                            count=1
                        )
                    result.append(obj_text)
                    i = end + 1
                else:
                    result.append(new_opt_body[i])
                    i += 1
            new_opt_body = "".join(result)
            new_body = new_body[:opt_start + 1] + new_opt_body + new_body[opt_end:]

        content = content[:arr_start + 1] + new_body + content[arr_end:]
    return content


def remove_id_from_dialog_phases(content):
    """
    DialogPhase hat keinen 'id'. Entferne id: "..." aus allen Objekten in dialogPhases-Arrays.
    """
    pattern = re.compile(r'\bdialogPhases\s*:\s*\[')
    matches = list(pattern.finditer(content))
    for m in reversed(matches):
        arr_start = m.end() - 1
        arr_end = find_balanced_block(content, arr_start, "[", "]")
        if arr_end == -1:
            continue
        arr_body = content[arr_start + 1:arr_end]
        # Nur TOP-LEVEL Objekte im dialogPhases-Array. Inner options-Array wurde bereits bearbeitet.
        # Einfaches Pattern: { id: "pN", am Start
        new_body = re.sub(r'(\{\s*)id:\s*"p?\d*"\s*,\s*', r'\1', arr_body)
        content = content[:arr_start + 1] + new_body + content[arr_end:]
    return content


def add_id_to_crowdpoll_options(content):
    """
    CrowdPollOption braucht id. Wenn im options-Array von crowdPoll nur text steht,
    fuegen wir id hinzu.
    """
    blocks = find_key_block(content, "crowdPoll")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        # Finde options: [ ... ]
        opts_match = re.search(r'\boptions\s*:\s*\[', block)
        if not opts_match:
            continue
        opts_start = opts_match.end() - 1
        opts_end = find_balanced_block(block, opts_start, "[", "]")
        if opts_end == -1:
            continue
        opts_body = block[opts_start + 1:opts_end]
        # Parse options
        counter = [0]
        def add_id(m):
            counter[0] += 1
            obj_content = m.group(1)
            if "id:" in obj_content:
                return m.group(0)
            return f'{{ id: "opt{counter[0]}", {obj_content} }}'
        new_opts_body = re.sub(
            r'\{([^{}]*)\}',
            add_id,
            opts_body
        )
        block = block[:opts_start + 1] + new_opts_body + block[opts_end:]
        content = content[:open_b] + block + content[close_b + 1:]
    return content


def fix_cloze_sentence_field(content):
    """
    ClozeData hat 'textWithBlanks' statt 'sentence'.
    """
    blocks = find_key_block(content, "cloze")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        new_block = re.sub(r'\bsentence:\s*', 'textWithBlanks: ', block, count=1)
        content = content[:open_b] + new_block + content[close_b + 1:]
    return content


def fix_cloze_id_in_blanks(content):
    """
    In cloze-Bloecken: id fuer blanks muss number sein, nicht string.
    """
    blocks = find_key_block(content, "cloze")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        # Finde blanks: [ ... ]
        blanks_match = re.search(r'\bblanks\s*:\s*\[', block)
        if not blanks_match:
            continue
        blanks_start = blanks_match.end() - 1
        blanks_end = find_balanced_block(block, blanks_start, "[", "]")
        if blanks_end == -1:
            continue
        blanks_body = block[blanks_start + 1:blanks_end]
        # id: "N" -> id: N
        new_body = re.sub(
            r'id:\s*"(\d+)"',
            r'id: \1',
            blanks_body
        )
        block = block[:blanks_start + 1] + new_body + block[blanks_end:]
        content = content[:open_b] + block + content[close_b + 1:]
    return content


def fix_reveal_card_title_to_label(content):
    """
    RevealCard hat 'label', nicht 'title'.
    """
    blocks = find_key_block(content, "reveal")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        # Rename 'title:' -> 'label:' in cards-Array
        cards_match = re.search(r'\bcards\s*:\s*\[', block)
        if not cards_match:
            continue
        cards_start = cards_match.end() - 1
        cards_end = find_balanced_block(block, cards_start, "[", "]")
        if cards_end == -1:
            continue
        cards_body = block[cards_start + 1:cards_end]
        # Nur wenn cards kein label bereits hat, oder wenn title statt label
        # Rename title -> label wenn label fehlt
        new_body = re.sub(
            r'(\{[^{}]*?)\btitle:\s*("(?:[^"\\]|\\.)*")',
            lambda m: m.group(1) + 'label: ' + m.group(2) if 'label:' not in m.group(0) else m.group(0),
            cards_body
        )
        block = block[:cards_start + 1] + new_body + block[cards_end:]
        content = content[:open_b] + block + content[close_b + 1:]
    return content


def add_correct_quadrant_to_matrix_items(content):
    """
    MatrixItem braucht correctQuadrant. Fuege default 1 hinzu.
    """
    blocks = find_key_block(content, "matrix")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        items_match = re.search(r'\bitems\s*:\s*\[', block)
        if not items_match:
            continue
        items_start = items_match.end() - 1
        items_end = find_balanced_block(block, items_start, "[", "]")
        if items_end == -1:
            continue
        items_body = block[items_start + 1:items_end]

        # Fuer jedes Objekt, wenn correctQuadrant fehlt, fuege hinzu
        result_parts = []
        i = 0
        while i < len(items_body):
            if items_body[i] == "{":
                end = find_balanced_block(items_body, i)
                if end == -1:
                    result_parts.append(items_body[i])
                    i += 1
                    continue
                obj_text = items_body[i:end + 1]
                if "correctQuadrant" not in obj_text:
                    obj_text = obj_text.rstrip()
                    if obj_text.endswith("}"):
                        obj_text = obj_text[:-1].rstrip()
                        if not obj_text.endswith(","):
                            obj_text += ","
                        obj_text += " correctQuadrant: 1 }"
                result_parts.append(obj_text)
                i = end + 1
            else:
                result_parts.append(items_body[i])
                i += 1
        new_body = "".join(result_parts)
        block = block[:items_start + 1] + new_body + block[items_end:]
        content = content[:open_b] + block + content[close_b + 1:]
    return content


def remove_reflection_kernpunkte(content):
    """
    ReflectionData hat kein kernpunkte — entferne es.
    """
    blocks = find_key_block(content, "reflection")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        # Entferne kernpunkte: [...]
        kp_match = re.search(r'\bkernpunkte\s*:\s*\[', block)
        if kp_match:
            kp_start = kp_match.end() - 1
            kp_end = find_balanced_block(block, kp_start, "[", "]")
            if kp_end != -1:
                # Finde Zeilenanfang
                line_start = block.rfind("\n", 0, kp_match.start()) + 1
                # Finde Zeilenende nach ]
                end_pos = kp_end + 1
                if end_pos < len(block) and block[end_pos] == ",":
                    end_pos += 1
                while end_pos < len(block) and block[end_pos] in " \t":
                    end_pos += 1
                if end_pos < len(block) and block[end_pos] == "\n":
                    end_pos += 1
                block = block[:line_start] + block[end_pos:]
        # Stelle sicher, dass systemPrompt und placeholder da sind
        if "systemPrompt:" not in block:
            block = re.sub(
                r'(reflection:\s*\{\s*\n)',
                r'\1        systemPrompt: "",\n',
                block, count=1
            )
        if "placeholder:" not in block:
            block = re.sub(
                r'(reflection:\s*\{\s*\n)',
                r'\1        placeholder: "Deine Antwort...",\n',
                block, count=1
            )
        content = content[:open_b] + block + content[close_b + 1:]
    return content


def fix_comparison_row_label_remaining(content):
    """
    Manche ComparisonRow-Objekte haben noch `label:` statt `criterion:`.
    """
    blocks = find_key_block(content, "comparison")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        rows_match = re.search(r'\brows\s*:\s*\[', block)
        if not rows_match:
            continue
        rows_start = rows_match.end() - 1
        rows_end = find_balanced_block(block, rows_start, "[", "]")
        if rows_end == -1:
            continue
        rows_body = block[rows_start + 1:rows_end]
        # Replace label: -> criterion: in Objekten, wenn criterion nicht bereits da ist
        new_body = re.sub(
            r'(\{[^{}]*?)\blabel:\s*("(?:[^"\\]|\\.)*")',
            lambda m: m.group(0) if 'criterion:' in m.group(1) else m.group(1) + 'criterion: ' + m.group(2),
            rows_body
        )
        block = block[:rows_start + 1] + new_body + block[rows_end:]
        content = content[:open_b] + block + content[close_b + 1:]
    return content


def fix_comparison_instruction_missing(content):
    """
    ComparisonData braucht instruction. Stelle sicher, dass alle comparison-Bloecke eines haben.
    """
    blocks = find_key_block(content, "comparison")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        if "instruction:" not in block:
            # Fuege instruction am Anfang des Blocks ein
            block = re.sub(
                r'(comparison:\s*\{\s*\n)',
                r'\1        instruction: "Vergleiche die Optionen.",\n',
                block, count=1
            )
        content = content[:open_b] + block + content[close_b + 1:]
    return content


def fix_timeline_instruction_missing(content):
    """
    TimelineData braucht instruction. Adde wenn fehlt.
    """
    blocks = find_key_block(content, "timeline")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        if "instruction:" not in block:
            block = re.sub(
                r'(timeline:\s*\{\s*\n)',
                r'\1        instruction: "Lies die Zeitleiste.",\n',
                block, count=1
            )
        content = content[:open_b] + block + content[close_b + 1:]
    return content


def fix_category_def_id_in_categorize(content):
    """
    Einige categorize-Bloecke haben noch CategoryDef mit id.
    Entferne id und stelle name sicher.
    """
    blocks = find_key_block(content, "categorize")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        cat_match = re.search(r'\bcategories\s*:\s*\[', block)
        if not cat_match:
            continue
        cat_start = cat_match.end() - 1
        cat_end = find_balanced_block(block, cat_start, "[", "]")
        if cat_end == -1:
            continue
        cat_body = block[cat_start + 1:cat_end]
        # Entferne id: "..." aus jedem Objekt
        new_body = re.sub(r'(\{\s*)id:\s*"[^"]*",\s*', r'\1', cat_body)
        # Rename label -> name wenn name fehlt
        new_body = re.sub(
            r'\{\s*label:\s*"((?:[^"\\]|\\.)*)"\s*\}',
            lambda m: f'{{ name: "{m.group(1)}" }}',
            new_body
        )
        block = block[:cat_start + 1] + new_body + block[cat_end:]
        content = content[:open_b] + block + content[close_b + 1:]
    return content


def fix_diagram_type_network(content):
    """
    DiagramType "network" ist nicht gueltig - ersetzen mit "mindmap".
    """
    return re.sub(r'diagramType:\s*"network"', 'diagramType: "mindmap"', content)


def fix_matrix_rows_remaining(content):
    """
    MatrixData hat kein "rows" — entferne das Feld.
    """
    blocks = find_key_block(content, "matrix")
    for _, _, open_b, close_b, _ in reversed(blocks):
        block = content[open_b:close_b + 1]
        rows_match = re.search(r'\brows\s*:\s*\[', block)
        if rows_match:
            rows_start = rows_match.end() - 1
            rows_end = find_balanced_block(block, rows_start, "[", "]")
            if rows_end != -1:
                line_start = block.rfind("\n", 0, rows_match.start()) + 1
                end_pos = rows_end + 1
                if end_pos < len(block) and block[end_pos] == ",":
                    end_pos += 1
                while end_pos < len(block) and block[end_pos] in " \t":
                    end_pos += 1
                if end_pos < len(block) and block[end_pos] == "\n":
                    end_pos += 1
                block = block[:line_start] + block[end_pos:]
        content = content[:open_b] + block + content[close_b + 1:]
    return content


def fix_categorize_label_outside_block(content):
    """
    Manchmal steht `categories: [{label:...}]` ausserhalb eines "categorize:" Blocks.
    Fix: Rename label -> name.
    """
    # Finde categories: [ ... ]
    pattern = re.compile(r'\bcategories\s*:\s*\[')
    matches = list(pattern.finditer(content))
    for m in reversed(matches):
        arr_start = m.end() - 1
        arr_end = find_balanced_block(content, arr_start, "[", "]")
        if arr_end == -1:
            continue
        arr_body = content[arr_start + 1:arr_end]
        # Replace label -> name in Objekten (nur wenn name fehlt)
        new_body = re.sub(
            r'\{\s*label:\s*"((?:[^"\\]|\\.)*)"\s*\}',
            lambda m: f'{{ name: "{m.group(1)}" }}',
            arr_body
        )
        content = content[:arr_start + 1] + new_body + content[arr_end:]
    return content


def process_file(filepath):
    print(f"Processing {filepath.name}...")
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    original = content

    # Reihenfolge: Zuerst die Strukturen umbauen, dann id-entfernen
    content = fix_themenblockphase(content)
    content = fix_displayformat_tablefillin(content)
    content = fix_diagram_type(content)
    content = fix_timeline_date(content)

    content = fix_swipe_blocks(content)
    content = fix_estimation_blocks(content)
    content = fix_slider_blocks(content)
    content = fix_reveal_blocks(content)
    content = fix_hotspot_blocks(content)
    content = fix_labelimage_blocks(content)
    content = fix_comparison_blocks(content)
    content = fix_categorize_blocks(content)
    content = fix_matrix_blocks(content)
    content = fix_cloze_blanks(content)

    content = fix_reflection_promptb1(content)

    # Targeted id removals (nur in Arrays wo id NICHT im Schema ist)
    content = remove_id_from_dialog_and_memory(content)
    content = remove_rowid_in_matrix_items(content)
    content = fix_category_def_id_in_categorize(content)
    content = fix_categorize_label_outside_block(content)
    content = remove_id_from_dialog_phases(content)
    content = add_patient_response_to_dialog_options(content)

    # Neue Fixes fuer verbleibende Fehler
    content = add_id_to_crowdpoll_options(content)
    content = fix_cloze_sentence_field(content)
    content = fix_cloze_id_in_blanks(content)
    content = fix_reveal_card_title_to_label(content)
    content = add_correct_quadrant_to_matrix_items(content)
    content = remove_reflection_kernpunkte(content)
    content = fix_comparison_row_label_remaining(content)
    content = fix_comparison_instruction_missing(content)
    content = fix_timeline_instruction_missing(content)
    content = fix_diagram_type_network(content)
    content = fix_matrix_rows_remaining(content)

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
