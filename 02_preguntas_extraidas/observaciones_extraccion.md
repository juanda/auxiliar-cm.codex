# Observaciones de extraccion

Extraccion generada desde los PDF oficiales disponibles en `01_examenes_originales/`.

## Cobertura

| Examen | Ejercicio | Preguntas | Respuestas |
| ---: | ---: | ---: | ---: |
| 2017 | 1 | 90 | 90 |
| 2021 | 1 | 40 | 40 |
| 2023 | 1 | 65 | 65 |
| 2023 | 2 | 35 | 35 |
| 2025 | 1 | 65 | 65 |
| 2025 | 2 | 35 | 35 |

Total: 330 preguntas extraidas.

## Limitaciones detectadas

Algunas preguntas psicotecnicas visuales o tabulares no se pueden representar fielmente con la salida de texto de `pdftotext`. En esos casos se conserva el enunciado recuperable, la respuesta correcta y la fuente exacta, y las opciones se marcan como `[ver PDF original]`.

Ids afectados:

- `2017-E1-016`
- `2017-E1-037`
- `2025-E1-006`
- `2025-E1-009`
- `2025-E1-011`
- `2025-E1-012`
- `2025-E1-013`
- `2025-E1-016`
- `2025-E1-017`
- `2025-E1-018`
- `2025-E1-019`
- `2025-E1-020`
- `2025-E1-022`
- `2025-E1-023`
- `2025-E1-025`

Antes de usar esos items para tests o estadisticas finas, revisar el PDF original indicado en `fuente`.
