---
name: cam-c2-generate-practice
description: "Create CAM C2 Auxiliar Administrativo practice materials: topic tests, block tests, Anki CSV flashcards, and official-style mock exams with answer keys and 1/3 penalty scoring. Use when Codex is asked to generate files under `07_tests/`, `08_flashcards/`, or `09_simulacros/`."
---

# CAM C2 Generate Practice

## Workflow

1. Select the output type: topic test, block test, flashcards, first-exercise mock, second-exercise mock, or complete mock.
2. Load `references/practice-formats.md`.
3. Use `05_temario/`, `06_esquemas/`, `04_estadisticas/`, and historical questions when available.
4. Generate new questions unless the user explicitly asks for historical questions.
5. Include answer key and brief correction notes.
6. Save to the appropriate project folder requested by the user.

## Exam Format

- First exercise: 30 psychotechnical questions plus 30 Block I questions, 5 reserve questions, 65 minutes.
- Second exercise: 30 Block II office-software questions, 5 reserve questions, 35 minutes.
- Penalty: each wrong answer subtracts one third of a correct answer.

## Quality Rules

- Distractors must be plausible and unambiguous.
- Avoid questions that depend on obsolete software behavior unless the topic explicitly requires it.
- For flashcards, use CSV fields exactly: `tema,pregunta,respuesta,dificultad`.
- For psychotechnical questions, provide the reasoning pattern, not just the letter.
- Keep difficulty balanced unless the user asks for a specific level.
