---
name: cam-c2-extract-questions
description: Extract official CAM C2 Auxiliar Administrativo Comunidad de Madrid exam questions from PDFs, OCR text, Word exports, or pasted questionnaires into the project's canonical JSON and CSV schema. Use when Codex is asked in Spanish or English to extraer preguntas, importar exámenes, parse answer keys, build `02_preguntas_extraidas/preguntas.json`, build `preguntas.csv`, or preserve traceability from historical exam sources.
---

# CAM C2 Extract Questions

## Workflow

1. Locate source files under `01_examenes_originales/<anyo>/` and identify questionnaire, answer template, exercise number, and source filename.
2. Extract question text, options A-D, reserve-question status when present, and answer key. If the answer key is unavailable, leave `respuesta_correcta` empty and record the gap in the response.
3. Normalize each record to the schema in `references/question-schema.md`.
4. Assign stable ids: `<anyo>-E<ejercicio>-<número padded 3>`, for example `2025-E1-034`. Use `R01` suffix only if the official numbering separates reserve questions from ordinary numbering.
5. Preserve original wording. Correct only OCR artifacts that are clearly not part of the question.
6. Write or update `02_preguntas_extraidas/preguntas.json` and `preguntas.csv`. Keep JSON as an array of objects and CSV headers aligned to the schema.
7. Use the official 2026 program in `AGENTS.md` only for traceability context; do not classify unless the user requests it.

## Extraction Rules

- Do not invent answer keys, options, year, exercise, or source names.
- Keep `tema`, `subtema`, `tipo`, and `dificultad` blank or null unless classification is explicitly requested; use `cam-c2-classify-questions` for that work.
- Store psychotechnical questions too, including verbal, numerical, logical, and attention items.
- If a PDF has poor extraction quality, inspect pages manually before writing final data.
- When OCR ambiguity affects correctness, mark the field with the most faithful transcription and report the affected ids.

## Outputs

Use `references/question-schema.md` before writing data files. After writing, verify:

- All ids are unique.
- Every non-reserve ordinary question has a number.
- Every question has four options unless the source genuinely differs.
- `fuente` points to the exact source file used.
