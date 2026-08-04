# Observaciones de extracción

Extracción generada desde los PDF oficiales disponibles en `01_examenes_originales/`.

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

## Limitaciones detectadas (revisadas manualmente contra el PDF original)

Algunas preguntas psicotecnicas visuales o tabulares no se representaban fielmente con la salida de texto de `pdftotext`; las opciones quedaban marcadas como `[ver PDF original]`. Se ha hecho una revisión manual, página por página, contra `01_examenes_originales/2017/2017_Cuestionario1.CAM.pdf` y `01_examenes_originales/2025/2025_Cuestionario1.CAM.pdf`.

### Resueltas (10 de 15)

Estas preguntas eran texto o tablas numéricas legibles en el PDF; `pdftotext` fallaba solo por el maquetado (columnas, celdas), no porque el contenido fuera una imagen. Se ha reconstruido el enunciado y las 4 opciones en `preguntas.csv`, `preguntas.json` y `preguntas_normalizadas.json`, y se ha verificado que la `respuesta_correcta` ya registrada es consistente con el enunciado recuperado (resuelta de forma independiente para los items de razonamiento numérico y lógico, antes de mirar la clave):

- `2017-E1-016`, `2017-E1-037`: series de letras (psicotecnico lógico). Resueltas por calculo (dos series alfabeticas intercaladas con paso creciente) y contrastadas con la clave oficial: coinciden.
- `2025-E1-006`: razonamiento lógico-verbal sobre precios de proveedores. Resuelta por deducción sobre el enunciado y contrastada con la clave oficial: coincide.
- `2025-E1-009`, `2025-E1-011`, `2025-E1-012`, `2025-E1-013`: razonamiento numérico administrativo. Resueltas por calculo y contrastadas con la clave oficial: coinciden.
- `2025-E1-022`, `2025-E1-023`, `2025-E1-025`: preguntas de atención sobre una tabla de datos (importes con descuento por ciudadano). El enunciado y las opciones eran texto plano en el PDF; se han transcrito literalmente. No se ha reconstruido la tabla de datos origen (esta en una página anterior del cuestionario), solo enunciado y opciones de estas 3 preguntas puntuales.

### Pendientes: contenido genuinamente gráfico (5 de 15)

- `2025-E1-016`, `2025-E1-017`, `2025-E1-018`, `2025-E1-019`, `2025-E1-020`: página 5 de `2025_Cuestionario1.CAM.pdf`. Series de figuras geometricas (formas plegadas, arcos rotados, patrones de puntos tipo dado, sectores de circulo) con las 4 opciones también dibujadas como figuras, no como texto. Confirmado con `pdftotext -layout` que no hay texto seleccionable en esa zona: es contenido vectorial/gráfico puro.

  Se mantienen las opciones como `[ver PDF original]` a proposito: transcribir a texto una figura geometrica sin una herramienta de visión fiable implica un riesgo real de describir mal la forma e introducir un error en el material de estudio, algo mas grave que dejar la limitación documentada. La `respuesta_correcta` que ya tenian estos 5 items en el banco (A, D, D, B, C respectivamente) proviene de la plantilla de respuestas oficial y sigue siendo válida para estadísticas de frecuencia; lo único que no se puede dar por bueno sin mirar el PDF es el contenido exacto de las 4 opciones gráficas.

  Recomendación: si se quieren estas 5 preguntas en un test practicable, la única vía fiable es incluir capturas de imagen de la página 5 del PDF original (`01_examenes_originales/2025/2025_Cuestionario1.CAM.pdf`) en vez de intentar describirlas en Markdown.

Antes de usar los 5 items pendientes para tests o estadísticas finas de subtema, revisar directamente esa página del PDF original.
