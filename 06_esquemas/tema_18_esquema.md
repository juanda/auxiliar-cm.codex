# Tema 18. Excel - Esquema de repaso

## Núcleo del tema

| Concepto | Definición breve |
| --- | --- |
| Libro | Archivo de Excel. Contiene una o varias hojas. |
| Hoja | Espacio formado por filas y columnas. |
| Celda | Intersección entre fila y columna. |
| Celda activa | Celda seleccionada. |
| Rango | Conjunto de celdas. |
| Fórmula | Expresión de cálculo que empieza por `=`. |
| Función | Fórmula predefinida. |
| Tabla dinámica | Resume y analiza datos interactivamente. |

## Preguntas historicas clave

| Id | Idea |
| --- | --- |
| `2023-E2-012` | `DERECHA` devuelve caracteres por la derecha. |
| `2023-E2-018` | Sintaxis correcta de `SI` con `Y`. |
| `2023-E2-026` | Un archivo con hojas es un libro. |
| `2023-E2-029` | Hipervínculo: salto a otra ubicación o recurso. |
| `2025-E2-011` | Las fórmulas empiezan por `=`. |
| `2025-E2-013` | La barra de fórmulas muestra la celda activa. |
| `2025-E2-015` | Tabla dinámica: resumir y analizar datos. |
| `2025-E2-033` | Celda: intersección fila-columna. |

## Fórmulas y funciones

```text
=SUMA(A1:A10)
=DERECHA("MADRID";3)
=SI(Y(A1=A2;A4=A3);C1+D1;C4-B4)
```

| Función | Uso |
| --- | --- |
| `SUMA` | Sumar valores. |
| `PROMEDIO` | Media aritmética. |
| `MAX` | Valor máximo. |
| `MIN` | Valor mínimo. |
| `SI` | Condición. |
| `Y` | Varias condiciones verdaderas. |
| `DERECHA` | Extraer caracteres finales. |

## Trampas habituales

| Trampa | Respuesta correcta |
| --- | --- |
| Libro vs hoja | Libro = archivo; hoja = parte del libro. |
| Celda vs rango | Celda = una intersección; rango = varias celdas. |
| Ordenar vs filtrar | Ordenar cambia orden; filtrar muestra por criterios. |
| Gráfico vs tabla dinámica | Gráfico representa; tabla dinámica resume. |
| Barra de fórmulas vs barra de estado | Fórmulas muestra contenido de celda activa. |
| Hojas máximas | Dependen de la memoria disponible. |

## Repaso de una pagina

Excel = libro -> hojas -> filas y columnas -> celdas.

Prioridad alta:

- Fórmulas empiezan por `=`.
- En español suele usarse `;` como separador de argumentos.
- `DERECHA(texto;num_caracteres)` extrae caracteres desde el final.
- La celda activa es la seleccionada.
- La barra de fórmulas muestra el contenido real de la celda activa.
- Una tabla dinámica resume y analiza datos sin modificar el origen.
- Un hipervínculo permite saltar a otra ubicación.
- En Excel 2016, triángulo rojo en esquina superior derecha: comentario.
- En `Vista`, `Organizar ventanas` -> `Horizontal`: organiza en horizontal ventanas abiertas.
