# Metodología predictiva

## Unidad de análisis

El modelo separa:

1. Psicotécnicos.
2. Bloque I, temas 1 a 15.
3. Bloque II, temas 16 a 21.

No se comparan directamente las puntuaciones de bloques diferentes.

## Datos

- Exámenes: 2017, 2021, 2023 y 2025.
- Total: 330 preguntas.
- Temas 1-21: 225 preguntas.
- Psicotécnicos: 105 preguntas.
- Reservas: se conservan como evidencia, pero se aplica la misma ponderación anual.
- 2021 es promoción interna y se considera menos comparable.

## Fórmula

Para cada tema:

`puntuación = 0,35R + 0,25F + 0,20P + 0,15N + 0,05C`

Todos los componentes se expresan de 0 a 100:

- **R, recencia:** frecuencia ponderada con 2017=0,10; 2021=0,15; 2023=0,30; 2025=0,45, normalizada dentro del bloque.
- **F, frecuencia:** total histórico normalizado dentro del bloque.
- **P, persistencia:** porcentaje de convocatorias comparables en las que aparece.
- **N, novedad:** evaluación manual y documentada de cambios normativos o tecnológicos.
- **C, testabilidad:** facilidad para formular preguntas objetivas: plazos, órganos, competencias, definiciones, comandos o funciones.

La puntuación se redondea al entero más próximo.

## Niveles

- Alta: 75-100.
- Media-alta: 65-74.
- Media: 50-64.
- Baja: menos de 50.

## Confianza

- **Media:** cuatro años disponibles, aunque no completamente comparables.
- **Baja-media:** solo 2023 y 2025 son directamente comparables en Bloque II.
- **Baja:** subtemas con pocas observaciones o valoración manual elevada.

## Reglas contra el sobreajuste

- No convertir una subida entre dos exámenes en una tendencia segura.
- No excluir materias del programa porque no aparecieron en el último examen.
- No asignar más del 20 % de la decisión a señales manuales.
- Mantener un escenario sorpresa con temas infrarrepresentados.
- Revisar resultados mediante backtesting.

## Backtesting recomendado

Para evaluar el modelo:

1. Ocultar 2025.
2. Calcular las puntuaciones con 2017, 2021 y 2023.
3. Predecir la distribución de 2025.
4. Comparar mediante error absoluto medio entre preguntas previstas y observadas.
5. Ajustar pesos solo si la mejora se mantiene al ocultar también 2023.

Con tan pocos exámenes, no se recomienda aprendizaje automático complejo. Un modelo explicable y regularizado es más defendible.

## Actualización

Cuando se incorpore un nuevo examen:

1. Extraer y clasificar todas sus preguntas.
2. Actualizar frecuencias y persistencia.
3. Desplazar los pesos de recencia.
4. Revisar novedades normativas y tecnológicas con fecha y fuente.
5. Regenerar CSV, escenarios y horquillas.
6. Registrar los cambios para poder comparar versiones.
