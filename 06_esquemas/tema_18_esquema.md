# Tema 18. Excel - Esquema de repaso

## Versión oficial

La convocatoria 2026 fija `Microsoft 365 versión escritorio` para Microsoft Office. Excel debe estudiarse sobre Excel de Microsoft 365 escritorio. Las preguntas históricas de Excel 2016 se conservan como referencia de recurrencia, no como versión oficial.

## Núcleo del tema

| Concepto | Definición breve |
| --- | --- |
| Libro | Archivo de Excel. Contiene una o varias hojas. |
| Hoja | Espacio formado por filas y columnas. |
| Celda | Intersección entre fila y columna. |
| Celda activa | Celda seleccionada. |
| Rango | Conjunto de celdas. |
| Hoja oculta | Existe en el libro, pero no se muestra. |
| Fórmula | Expresión de cálculo que empieza por `=`. |
| Función | Fórmula predefinida. |
| Pegado especial | Pega valores, formulas, formatos u opciones concretas. |
| Tabla de Excel | Rango estructurado con encabezados y filtros. |
| Tabla dinámica | Resume y analiza datos interactivamente. |
| Gráfico | Representa datos visualmente. |
| Filtro | Muestra datos que cumplen criterios. |
| Ordenación | Cambia el orden de los registros. |
| Validación | Limita valores permitidos en una celda. |

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
| `CONTAR` | Contar celdas con números. |
| `CONTARA` | Contar celdas no vacías. |
| `SI.ERROR` | Controlar errores de fórmula. |
| `BUSCARX` | Buscar valores en rangos o matrices. |
| `IZQUIERDA` / `EXTRAE` | Extraer texto desde inicio o posicion intermedia. |

## Referencias y errores

| Elemento | Idea clave |
| --- | --- |
| `A1` | Referencia relativa. |
| `$A$1` | Referencia absoluta: fija columna y fila. |
| `A$1` | Referencia mixta: fija fila. |
| `$A1` | Referencia mixta: fija columna. |
| `#DIV/0!` | División entre cero. |
| `#¡REF!` | Referencia no válida. |
| `#¿NOMBRE?` | Nombre de función o rango no reconocido. |

## Datos y gráficos

| Herramienta | Uso |
| --- | --- |
| Ordenar | Reorganizar registros. |
| Filtrar | Mostrar sólo registros que cumplen criterios. |
| Quitar duplicados | Eliminar repetidos. |
| Validación de datos | Limitar entradas permitidas. |
| Pegado especial valores | Conservar resultado, no formula. |
| Texto en columnas | Dividir una columna en varias. |
| Area de impresion | Rango que se imprimira. |
| Escala de impresion | Ajustar salida a paginas. |
| Tabla dinámica | Resumir por filas, columnas, valores y filtros. |
| Gráfico de columnas | Comparar categorías. |
| Gráfico de líneas | Mostrar evolución temporal. |
| Gráfico circular | Mostrar proporciones. |

## Trampas habituales

| Trampa | Respuesta correcta |
| --- | --- |
| Libro vs hoja | Libro = archivo; hoja = parte del libro. |
| Celda vs rango | Celda = una intersección; rango = varias celdas. |
| Referencia relativa vs absoluta | `A1` cambia al copiar; `$A$1` queda fija. |
| Ordenar vs filtrar | Ordenar cambia orden; filtrar muestra por criterios. |
| Tabla normal vs tabla dinámica | Normal organiza; dinámica resume. |
| Gráfico vs tabla dinámica | Gráfico representa; tabla dinámica resume. |
| Formato vs valor | El formato puede cambiar sólo la visualización. |
| Pegar valores vs formulas | Valores pega el resultado, no la formula. |
| Hoja oculta vs eliminada | Ocultar no borra el contenido. |
| Quitar duplicados vs filtrar | Quitar duplicados puede eliminar registros. |
| Zoom vs escala | Zoom pantalla; escala impresion. |
| Barra de fórmulas vs barra de estado | Fórmulas muestra contenido de celda activa. |
| Hojas máximas | Dependen de la memoria disponible. |

## Repaso de una pagina

Excel = libro -> hojas -> filas y columnas -> celdas.

Prioridad alta:

- Fórmulas empiezan por `=`.
- En español suele usarse `;` como separador de argumentos.
- `DERECHA(texto;num_caracteres)` extrae caracteres desde el final.
- Referencia absoluta: `$A$1`; mixta: `$A1` o `A$1`.
- Parentesis fuerzan prioridad de calculo.
- La celda activa es la seleccionada.
- La barra de fórmulas muestra el contenido real de la celda activa.
- Una tabla dinámica resume y analiza datos sin modificar el origen.
- Sus campos básicos son filas, columnas, valores y filtros.
- Los gráficos representan datos; no son tablas dinámicas.
- Ordenar no filtra; filtrar no borra.
- Quitar duplicados si puede modificar datos.
- La validación limita entradas permitidas.
- Tabla de Excel no es tabla dinamica.
- Area de impresion y escala afectan a papel/PDF; zoom no.
- Un hipervínculo permite saltar a otra ubicación.
- Indicador en esquina de celda: información asociada, como comentario o nota según versión.
- En `Vista`, `Organizar ventanas` -> `Horizontal`: organiza en horizontal ventanas abiertas.
