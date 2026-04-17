#!/usr/bin/env python3
"""
Dritte Runde: Letzte 16 Fehler.

1. DialogPhase: 'question' und 'questionB1' nicht erlaubt -> in context mergen (15 Fehler)
2. DiagramData: 'connections' -> 'edges' (1 Fehler)
3. DiagramData: instruction fehlt bei einem Block
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


def merge_dialogphase_question_into_context(content):
    """
    In DialogPhase: entferne 'question' und 'questionB1' Felder.
    Mergt sie optional in context.
    """
    pattern = re.compile(r'\bdialogPhases\s*:\s*\[')
    matches = list(pattern.finditer(content))
    for m in reversed(matches):
        arr_start = m.end() - 1
        arr_end = find_balanced_block(content, arr_start, "[", "]")
        if arr_end == -1:
            continue
        arr_body = content[arr_start + 1:arr_end]

        # Each top-level phase object: { context, contextB1?, question?, questionB1?, options: [...] }
        # We parse each phase and rebuild.
        new_parts = []
        i = 0
        while i < len(arr_body):
            if arr_body[i] == "{":
                end = find_balanced_block(arr_body, i)
                if end == -1:
                    new_parts.append(arr_body[i])
                    i += 1
                    continue
                phase_text = arr_body[i:end + 1]

                # Extract question and questionB1 using regex
                # Capture just inside top-level of phase (not nested options objects)
                # Safer: find question:"..." at top level (not in options)
                # Remove question: "..." and questionB1: "..."
                # Strategy: remove these fields directly; they're short and on their own lines

                # Find question: "..." at top-level - but "question" doesn't appear in options normally
                q_match = re.search(r'\bquestion\s*:\s*"((?:[^"\\]|\\.)*)"', phase_text)
                q_b1_match = re.search(r'\bquestionB1\s*:\s*"((?:[^"\\]|\\.)*)"', phase_text)

                question_text = q_match.group(1) if q_match else None
                question_b1 = q_b1_match.group(1) if q_b1_match else None

                # Remove question and questionB1 lines
                new_phase = phase_text
                new_phase = re.sub(r'[ \t]*\bquestion\s*:\s*"(?:[^"\\]|\\.)*"\s*,?\s*\n?', '', new_phase)
                new_phase = re.sub(r'[ \t]*\bquestionB1\s*:\s*"(?:[^"\\]|\\.)*"\s*,?\s*\n?', '', new_phase)

                # Merge question into context: append " — <question>" to existing context value
                if question_text:
                    def merge_ctx(match):
                        existing = match.group(1)
                        # Avoid double-merging
                        if existing.endswith(question_text):
                            return match.group(0)
                        merged = existing.rstrip() + " " + question_text
                        return f'context: "{merged}"'
                    new_phase = re.sub(
                        r'\bcontext\s*:\s*"((?:[^"\\]|\\.)*)"',
                        merge_ctx,
                        new_phase, count=1
                    )

                if question_b1:
                    def merge_ctx_b1(match):
                        existing = match.group(1)
                        if existing.endswith(question_b1):
                            return match.group(0)
                        merged = existing.rstrip() + " " + question_b1
                        return f'contextB1: "{merged}"'
                    new_phase = re.sub(
                        r'\bcontextB1\s*:\s*"((?:[^"\\]|\\.)*)"',
                        merge_ctx_b1,
                        new_phase, count=1
                    )

                new_parts.append(new_phase)
                i = end + 1
            else:
                new_parts.append(arr_body[i])
                i += 1
        new_arr_body = "".join(new_parts)
        content = content[:arr_start + 1] + new_arr_body + content[arr_end:]
    return content


def fix_diagram_connections_to_edges(content):
    """
    DiagramData: connections -> edges
    """
    pattern = re.compile(r'\bdiagram\s*:\s*\{')
    matches = list(pattern.finditer(content))
    for m in reversed(matches):
        ob = content.find("{", m.end() - 1)
        cb = find_balanced_block(content, ob)
        if cb == -1:
            continue
        block = content[ob:cb + 1]
        new_block = re.sub(r'\bconnections\s*:', 'edges:', block)
        # Add instruction if missing
        if "instruction:" not in new_block:
            rest = new_block[1:]
            nl = rest.find("\n")
            if nl == -1:
                indent = "        "
            else:
                ls = nl + 1
                ind_match = re.match(r'[ \t]*', rest[ls:])
                indent = ind_match.group(0) if ind_match else "        "
            new_block = "{" + f'\n{indent}instruction: "Erforsche das Diagramm.",' + rest
        content = content[:ob] + new_block + content[cb + 1:]
    return content


def process_file(filepath):
    print(f"Processing {filepath.name}...")
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    original = content

    content = merge_dialogphase_question_into_context(content)
    content = fix_diagram_connections_to_edges(content)

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
