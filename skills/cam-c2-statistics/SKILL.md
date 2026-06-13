---
name: cam-c2-statistics
description: Generate recurrence statistics and trend analysis for CAM C2 Auxiliar Administrativo historical exams from normalized question data. Use when Codex is asked to create frequency tables, topic/subtopic counts, trends, yearly comparisons, or files under `04_estadisticas/`.
---

# CAM C2 Statistics

## Workflow

1. Read `02_preguntas_extraidas/preguntas_normalizadas.json`; if it is absent, fall back to `preguntas.json` only when classification fields already exist.
2. Count ordinary and reserve questions separately when the data marks reserves. If not marked, state that limitation.
3. Generate:
   - `04_estadisticas/frecuencia_temas.md`
   - `04_estadisticas/frecuencia_subtemas.md`
   - `04_estadisticas/tendencias.md`
4. Prefer Markdown tables sorted by descending frequency, then topic number or subtopic name.
5. Mention missing years, missing answer keys, or unclassified questions before interpreting trends.

## Required Analyses

- Materias that appear in every available year.
- Materias absent in recent years.
- New or recently introduced materias.
- Changes in psychotechnical volume.
- Changes in office-software volume, especially Word, Excel, Windows, Outlook, Access, Power BI, and Microsoft 365.

## Interpretation Rules

- Do not overstate trends from one exam. Label them as signals, not conclusions.
- Keep statistics tied to available data in the repository.
- Separate official exam evidence from inferred study priority.
- Prioritize usefulness for passing: highlight high-frequency and high-yield subtopics.
