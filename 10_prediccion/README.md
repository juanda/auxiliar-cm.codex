# Predicción del próximo examen

Este módulo estima qué contenidos tienen mayor probabilidad relativa de aparecer en el próximo examen de Auxiliar Administrativo C2 de la Comunidad de Madrid.

No pretende adivinar preguntas. Convierte el histórico disponible en prioridades de estudio auditables y genera tres escenarios de examen.

## Resultados principales

- `prediccion_temas.csv`: puntuación de los 21 temas.
- `prediccion_bloque_I.md`: reparto probable y conceptos prioritarios del bloque jurídico.
- `prediccion_bloque_II.md`: reparto probable de ofimática.
- `prediccion_psicotecnicos.md`: estimación por tipos.
- `escenarios.md`: escenarios conservador, tendencial y sorpresa.
- `metodologia.md`: fórmula, límites y procedimiento de actualización.

## Lectura recomendada

1. Consultar la metodología.
2. Usar la columna `prioridad` del CSV para ordenar el repaso.
3. Estudiar primero los conceptos de probabilidad alta.
4. Practicar los tres escenarios, no solo el tendencial.
5. Actualizar el modelo cuando haya una nueva convocatoria, cambio normativo o examen.

## Interpretación

Las puntuaciones son relativas dentro de cada bloque. Un 85 no significa un 85 % de probabilidad de que aparezca el tema. Significa que, con las señales empleadas, debe recibir más atención que otro tema con puntuación 55.

La predicción no sustituye la cobertura completa del programa oficial.
