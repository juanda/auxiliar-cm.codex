---
name: cam-c2-classify-questions
description: Normalize and classify CAM C2 Auxiliar Administrativo Comunidad de Madrid exam questions by official 2026 topic, subtopic, required type taxonomy, and difficulty. Use when Codex is asked in Spanish or English to clasificar preguntas, normalizar preguntas, fill `tema`, `subtema`, `tipo`, `dificultad`, create `02_preguntas_extraidas/preguntas_normalizadas.json`, or update `03_clasificacion/*.json`.
---

# CAM C2 Classify Questions

## Workflow

1. Read `02_preguntas_extraidas/preguntas.json` or the specific question set requested.
2. Load `references/programa-taxonomia.md` before assigning official topics or allowed types. If `AGENTS.md` has a newer `# Programa oficial`, treat it as authoritative.
3. Classify each question by `tema`, `subtema`, `tipo`, and `dificultad`.
4. Write normalized records to `02_preguntas_extraidas/preguntas_normalizadas.json`.
5. Update `03_clasificacion/temas.json`, `subtemas.json`, and `psicotecnicos.json` when the user requests classification artifacts.

## Classification Rules

- Use the official topic number from the 2026 program as the primary anchor.
- Prefer narrow, exam-useful subtopics: `Silencio administrativo`, `Recursos administrativos`, `Funciones de Excel`, `Cinta de opciones Word`.
- Use only the allowed `tipo` values in `references/programa-taxonomia.md`.
- Use difficulty for exam discrimination, not personal preference:
  - `baja`: direct definition, literal article, basic UI command, one-step psychotechnical.
  - `media`: requires applying a rule, distinguishing similar options, or remembering a common exception.
  - `alta`: combines rules, asks rare detail, needs calculation, or has plausible distractors.
- Preserve original question text and answer key. Classification must not rewrite extracted content.

## Ambiguity Handling

If a question plausibly belongs to two topics, choose the topic most directly examined by the correct answer. Add a concise note in the final response listing ambiguous ids and the reason for the chosen classification.
