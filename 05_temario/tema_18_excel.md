# Tema 18. Hojas de cálculo: Excel

Hojas de cálculo: Excel. Principales funciones y utilidades. Libros, hojas y celdas. Configuración. Introducción y edición de datos. Fórmulas y funciones. Tablas dinámicas. Gráficos. Gestión de datos. Personalización del entorno de trabajo.

## 1. Resumen ejecutivo

Excel es una hoja de cálculo. Sirve para organizar datos en tablas, hacer cálculos mediante fórmulas y funciones, analizar información, crear gráficos y resumir grandes volúmenes de datos.

En esta oposición no interesa estudiar Excel como usuario avanzado, sino dominar los conceptos que se convierten fácilmente en pregunta tipo test: qué es un libro, qué es una hoja, qué es una celda, cómo se inicia una fórmula, dónde se ve el contenido de la celda activa, para qué sirve una tabla dinámica y qué significan elementos visuales concretos.

La versión oficial para este tema es `Microsoft 365 versión escritorio`, conforme al Anexo I, apartado Primero.2.2 de la convocatoria 2026. Las preguntas históricas disponibles mencionan Excel 2016 y Excel 365; las de 2016 se usan como referencia de recurrencia cuando tratan funciones que siguen existiendo, pero el desarrollo del tema debe estudiarse sobre Excel de Microsoft 365 de escritorio.

La estadística histórica del proyecto muestra 12 preguntas de Excel:

| Subtema | Preguntas históricas |
| --- | ---: |
| Libros, hojas y celdas | 8 |
| Fórmulas y funciones Excel | 3 |
| Tablas dinámicas | 1 |

Los puntos de mayor rendimiento son:

- Libro, hoja y celda.
- Celda activa y barra de fórmulas.
- Símbolo inicial de una fórmula.
- Sintaxis básica de fórmulas.
- Funciones de texto, especialmente `DERECHA`.
- Número de hojas de un libro.
- Hipervínculos.
- Comentarios y notas.
- Organización de ventanas.
- Tablas dinámicas.

Además de esos puntos históricos, el enunciado oficial exige cubrir configuración, introducción y edición de datos, gestión de datos, gráficos y personalización del entorno. Esos apartados deben estudiarse aunque hayan aparecido menos en los exámenes disponibles.

Idea clave: Excel organiza la información en libros. Cada libro contiene hojas. Cada hoja se divide en filas y columnas. La intersección entre una fila y una columna es una celda. Las fórmulas empiezan por el signo igual `=`.

## 2. Desarrollo

### 2.1. Qué es Excel

Excel es una aplicación de hoja de cálculo. Permite introducir datos, realizar cálculos, ordenar y filtrar información, representar datos mediante gráficos y resumir información con tablas dinámicas.

Sus funciones principales son:

| Función | Utilidad |
| --- | --- |
| Introducir datos | Escribir texto, números, fechas, porcentajes y fórmulas. |
| Calcular | Usar fórmulas, funciones y referencias de celda. |
| Organizar | Ordenar, filtrar, validar y estructurar datos. |
| Analizar | Usar tablas, subtotales y tablas dinámicas. |
| Representar | Crear gráficos para visualizar información. |
| Gestionar libros | Crear, guardar, abrir, imprimir, proteger e importar/exportar datos. |
| Personalizar | Ajustar cinta, barra de acceso rápido, vistas y opciones. |

En el examen se debe distinguir entre:

| Concepto | Significado |
| --- | --- |
| Libro | Archivo de Excel que contiene una o varias hojas. |
| Hoja | Superficie de trabajo formada por filas y columnas. |
| Celda | Intersección entre una fila y una columna. |
| Celda activa | Celda seleccionada en ese momento. |
| Rango | Conjunto de celdas. |
| Fórmula | Expresión que calcula un resultado. Empieza por `=`. |
| Función | Fórmula predefinida de Excel, como `SUMA`, `SI` o `DERECHA`. |
| Tabla dinámica | Herramienta para resumir y analizar datos de forma interactiva. |

### 2.2. Libros, hojas y celdas

#### Libro

Un libro es el archivo de Excel. Puede contener una o varias hojas de cálculo. En los exámenes se ha preguntado tanto en convocatorias con Excel 2016 como con Excel 365 que el conjunto de hojas almacenadas en un archivo Excel se denomina `libro`.

Preguntas históricas: `2023-E2-026` y `2025-E2-012`.

#### Hoja

La hoja es el espacio de trabajo formado por filas y columnas. Un libro puede contener varias hojas. En Excel de Microsoft 365 escritorio no hay un número fijo universal de hojas por libro: depende principalmente de la memoria disponible del sistema.

Pregunta histórica: `2025-E2-014`.

#### Celda

La celda es la intersección entre una fila y una columna. Se identifica mediante la letra de la columna y el número de la fila:

| Referencia | Significado |
| --- | --- |
| `A1` | Columna A, fila 1. |
| `B5` | Columna B, fila 5. |
| `C10` | Columna C, fila 10. |

Pregunta histórica: `2025-E2-033`.

#### Celda activa

La celda activa es la celda seleccionada. El contenido de la celda activa puede verse en la propia celda y en la barra de fórmulas. La barra de fórmulas es especialmente importante porque muestra el contenido real, no sólo el resultado visible.

Pregunta histórica: `2025-E2-013`.

#### Filas, columnas y rangos

Las filas se identifican con números y las columnas con letras. Un rango es un conjunto de celdas y se expresa normalmente con dos referencias separadas por dos puntos.

| Elemento | Ejemplo | Significado |
| --- | --- | --- |
| Celda | `B3` | Columna B, fila 3. |
| Rango vertical | `A1:A10` | Celdas A1 a A10. |
| Rango horizontal | `A1:D1` | Celdas A1 a D1. |
| Rango rectangular | `A1:D10` | Bloque desde A1 hasta D10. |

#### Hojas: gestión y estructura

En un libro pueden crearse, eliminarse, cambiarse de nombre, moverse, copiarse, ocultarse y protegerse hojas. Estos comandos son básicos para entender la gestión de libros aunque no siempre aparezcan en preguntas históricas.

| Acción | Resultado |
| --- | --- |
| Insertar hoja | Añade una nueva hoja al libro. |
| Cambiar nombre | Modifica la etiqueta visible de la hoja. |
| Mover o copiar | Reordena una hoja o crea una copia. |
| Ocultar hoja | La hoja deja de verse, pero no se elimina. |
| Color de etiqueta | Ayuda a identificar hojas visualmente. |
| Proteger hoja | Limita cambios sobre celdas o estructura, según configuración. |

Trampa: eliminar una hoja borra su contenido; ocultarla sólo la deja fuera de la vista.

### 2.3. Introducción y edición de datos

En una celda pueden introducirse:

- Texto.
- Números.
- Fechas.
- Fórmulas.
- Funciones.
- Hipervínculos.

Para editar una celda se puede escribir directamente sobre ella, usar la barra de fórmulas o entrar en modo edición. El examen suele preguntar definiciones y usos básicos, pero conviene dominar estas operaciones:

| Operación | Qué hace |
| --- | --- |
| Escribir en una celda | Introduce un valor, texto o fórmula. |
| Modificar desde la barra de fórmulas | Edita el contenido real de la celda activa. |
| Copiar y pegar | Reutiliza datos o fórmulas en otras celdas. |
| Relleno automático | Extiende series, valores o fórmulas. |
| Borrar contenido | Elimina el contenido sin necesariamente borrar formato. |
| Borrar formato | Mantiene el dato pero elimina formato aplicado. |
| Formato de número | Cambia cómo se muestra el dato: moneda, porcentaje, fecha, decimal. |
| Ajustar texto | Muestra varias líneas dentro de una celda. |
| Combinar celdas | Une varias celdas visualmente. |

Trampa importante: el formato puede cambiar cómo se ve un dato, pero no siempre cambia el valor real almacenado. Una fecha, un porcentaje o una moneda pueden mostrarse con formatos distintos.

#### Autorrelleno, pegado especial y series

Excel permite acelerar la edición mediante el controlador de relleno y las opciones de pegado.

| Herramienta | Función |
| --- | --- |
| Controlador de relleno | Copia valores, fórmulas o extiende series. |
| Rellenar serie | Crea secuencias como días, meses o números. |
| Pegado especial | Pega sólo valores, fórmulas, formatos, transposición u otras opciones. |
| Transponer | Cambia filas por columnas o columnas por filas. |
| Buscar y reemplazar | Localiza o sustituye texto, números o fórmulas. |
| Borrar todo | Elimina contenido, formato, comentarios y vínculos según opción elegida. |
| Borrar contenido | Elimina el dato o fórmula, pero puede conservar formato. |

Trampa: copiar una fórmula puede cambiar sus referencias si son relativas; pegar valores pega el resultado, no la fórmula.

#### Formato de celdas y formato condicional

El cuadro `Formato de celdas` permite ajustar cómo se muestran y presentan los datos. Puede abrirse desde el menú contextual o con `Ctrl + 1`.

| Pestaña | Qué controla |
| --- | --- |
| Número | General, número, moneda, contabilidad, fecha, hora, porcentaje, texto, etc. |
| Alineación | Horizontal, vertical, orientación, ajustar texto, combinar. |
| Fuente | Tipo, tamaño, estilo, color y efectos. |
| Bordes | Líneas alrededor de celdas. |
| Relleno | Color de fondo. |
| Proteger | Bloqueo u ocultación, eficaz cuando la hoja está protegida. |

El `Formato condicional` aplica formatos automáticamente cuando se cumple una regla: valores mayores que una cifra, duplicados, escalas de color, barras de datos, conjuntos de iconos o fórmulas personalizadas.

| Formato condicional | Validación de datos |
| --- | --- |
| Cambia el aspecto visual según el valor. | Limita qué valores se pueden introducir. |
| No impide escribir un dato. | Puede advertir o rechazar entradas no válidas. |
| Ejemplo: resaltar importes superiores a 1.000. | Ejemplo: lista desplegable de departamentos. |

Trampa: formato condicional no es lo mismo que validación. Uno avisa visualmente; el otro controla la entrada de datos.

### 2.4. Fórmulas y funciones

#### Fórmulas

Una fórmula es una expresión que calcula un resultado. En Excel, las fórmulas comienzan por el signo igual `=`.

Ejemplos:

| Fórmula | Resultado esperado |
| --- | --- |
| `=A1+B1` | Suma el contenido de A1 y B1. |
| `=A1*B1` | Multiplica A1 por B1. |
| `=SUMA(A1:A10)` | Suma las celdas de A1 a A10. |

Pregunta histórica: `2025-E2-011`.

#### Referencias relativas, absolutas y mixtas

Las referencias indican qué celdas usa una fórmula.

| Tipo | Ejemplo | Comportamiento |
| --- | --- | --- |
| Relativa | `A1` | Cambia al copiar la fórmula. |
| Absoluta | `$A$1` | Fija columna y fila. |
| Mixta | `$A1` | Fija columna. |
| Mixta | `A$1` | Fija fila. |

Es un punto clásico de hojas de cálculo aunque no haya aparecido aún en las preguntas históricas clasificadas.

#### Funciones

Una función es una fórmula predefinida. Tiene un nombre y unos argumentos entre paréntesis.

| Función | Uso |
| --- | --- |
| `SUMA` | Suma valores. |
| `PROMEDIO` | Calcula la media. |
| `MAX` | Devuelve el valor máximo. |
| `MIN` | Devuelve el valor mínimo. |
| `SI` | Devuelve un resultado si se cumple una condición y otro si no. |
| `Y` | Comprueba si varias condiciones son verdaderas. |
| `DERECHA` | Devuelve caracteres desde el final de una cadena de texto. |
| `CONTAR` | Cuenta celdas con números. |
| `CONTARA` | Cuenta celdas no vacías. |
| `BUSCARX` | Busca valores en un rango o matriz. |
| `SI.ERROR` | Devuelve un valor alternativo si una fórmula da error. |

#### Función DERECHA

`DERECHA` devuelve, de una cadena de texto, un número determinado de caracteres empezando por la derecha.

Ejemplo:

| Fórmula | Resultado |
| --- | --- |
| `=DERECHA("MADRID";3)` | `RID` |

Pregunta histórica: `2023-E2-012`.

#### Sintaxis de funciones

La sintaxis debe respetar:

- Signo inicial `=`.
- Nombre correcto de la función.
- Paréntesis de apertura y cierre.
- Separadores correctos entre argumentos.
- Anidación correcta cuando se combinan funciones.

Ejemplo históricamente preguntado:

```text
=SI(Y(A1=A2;A4=A3);C1+D1;C4-B4)
```

En Excel en español es habitual usar punto y coma `;` como separador de argumentos. En algunos entornos configurados con otras opciones regionales puede aparecer la coma `,`, pero para esta oposición conviene reconocer la sintaxis española tradicional.

Pregunta histórica: `2023-E2-018`.

#### Errores de fórmula

| Error | Significado orientativo |
| --- | --- |
| `#DIV/0!` | División entre cero o celda vacía usada como divisor. |
| `#N/A` | Valor no disponible, frecuente en búsquedas. |
| `#¿NOMBRE?` | Nombre de función o rango no reconocido. |
| `#¡VALOR!` | Tipo de dato incorrecto en la fórmula. |
| `#¡REF!` | Referencia de celda no válida. |

#### Operadores y prioridad de cálculo

Excel calcula las fórmulas siguiendo una prioridad de operadores. No hace falta estudiarlo como matemáticas avanzadas, pero sí reconocer las trampas básicas.

| Elemento | Ejemplo | Idea clave |
| --- | --- | --- |
| Paréntesis | `=(A1+B1)*C1` | Fuerzan el orden de cálculo. |
| Potencia | `=A1^2` | Se calcula antes que multiplicación/suma. |
| Multiplicación/división | `=A1*B1` | Tienen prioridad sobre suma/resta. |
| Suma/resta | `=A1+B1` | Se aplican después si no hay paréntesis. |
| Concatenación | `=A1&B1` | Une textos. |
| Comparación | `=A1>B1` | Devuelve VERDADERO o FALSO. |

#### Funciones de alta rentabilidad

No todas han aparecido históricamente, pero son funciones básicas de Microsoft 365 escritorio y muy probables como distractores.

| Familia | Funciones | Qué conviene saber |
| --- | --- | --- |
| Matemáticas | `SUMA`, `REDONDEAR`, `ABS` | Cálculo numérico. |
| Estadísticas | `PROMEDIO`, `MAX`, `MIN`, `CONTAR`, `CONTARA` | Resumen de valores. |
| Lógicas | `SI`, `Y`, `O`, `SI.ERROR` | Condiciones y tratamiento de errores. |
| Texto | `DERECHA`, `IZQUIERDA`, `EXTRAE`, `LARGO`, `CONCAT` | Manipular cadenas. |
| Fecha | `HOY`, `AHORA`, `DIA`, `MES`, `AÑO` | Trabajar con fechas. |
| Búsqueda | `BUSCARX`, `BUSCARV` | Localizar datos por clave. |

Idea de examen: una función siempre tiene nombre y argumentos; una fórmula puede combinar operadores, referencias y funciones.

#### Auditoría de fórmulas y nombres definidos

Excel incluye herramientas para revisar fórmulas y hacer más legibles los rangos.

| Herramienta | Uso |
| --- | --- |
| Rastrear precedentes | Muestra celdas que alimentan una fórmula. |
| Rastrear dependientes | Muestra celdas que dependen de la celda seleccionada. |
| Mostrar fórmulas | Muestra fórmulas en vez de resultados. |
| Comprobación de errores | Ayuda a localizar errores de fórmula. |
| Administrador de nombres | Crea, modifica o elimina nombres de rangos. |
| Nombre definido | Permite usar un nombre como `Ventas2026` en lugar de `A1:A100`. |

Trampa: un nombre definido no es una función; es una etiqueta asignada a una celda, rango, fórmula o constante.

### 2.5. Configuración y personalización

La configuración de Excel permite adaptar el entorno de trabajo. Son zonas preguntables:

| Elemento | Función |
| --- | --- |
| Cinta de opciones | Agrupa comandos por pestañas. |
| Barra de herramientas de acceso rápido | Acceso a comandos frecuentes. |
| Barra de fórmulas | Muestra y permite editar el contenido de la celda activa. |
| Opciones de Excel | Configuración general del programa. |
| Vistas | Cambian la forma de visualizar el libro. |

La configuración del libro y de la hoja incluye:

| Configuración | Utilidad |
| --- | --- |
| Ancho de columna y alto de fila | Ajustar el espacio visible. |
| Formato de número | Fecha, moneda, porcentaje, decimales. |
| Alineación | Posición del contenido en la celda. |
| Bordes y relleno | Presentación visual de tablas. |
| Inmovilizar paneles | Mantener filas o columnas visibles al desplazarse. |
| Diseño de página | Márgenes, orientación, tamaño y área de impresión. |
| Protección de hoja/libro | Limitar cambios accidentales o no autorizados. |

#### Configuración de página e impresión

El programa oficial menciona configuración, por lo que hay que dominar las opciones de salida aunque no sean las más históricas.

| Opción | Función |
| --- | --- |
| Márgenes | Espacio de impresión respecto al borde del papel. |
| Orientación | Vertical u horizontal. |
| Tamaño | Papel A4 u otro tamaño. |
| Área de impresión | Rango concreto que se imprimirá. |
| Saltos de página | Controlan dónde empieza una nueva página impresa. |
| Escala | Ajusta la hoja a una o varias páginas. |
| Imprimir títulos | Repite filas o columnas como encabezados en páginas impresas. |
| Encabezado y pie | Texto repetido en parte superior o inferior. |
| Líneas de cuadrícula | Pueden mostrarse en pantalla y, si se configura, imprimirse. |

No confundir ajustar el zoom de pantalla con escalar para impresión: el zoom sólo cambia la visualización; la escala afecta a la salida impresa.

### 2.6. Gestión de datos

Excel permite gestionar datos mediante operaciones como:

- Ordenar.
- Filtrar.
- Buscar.
- Validar datos.
- Quitar duplicados.
- Convertir rangos en tablas.
- Importar o exportar información.

Para el nivel C2, lo más importante es entender qué hace cada herramienta. Un filtro muestra sólo los registros que cumplen una condición, pero no borra los datos. Ordenar cambia el orden visible de los registros.

| Herramienta | Función | Trampa |
| --- | --- | --- |
| Ordenar | Reorganiza registros por uno o varios criterios. | No oculta datos. |
| Filtrar | Muestra sólo registros que cumplen condiciones. | No borra los no visibles. |
| Quitar duplicados | Elimina registros repetidos según columnas elegidas. | Sí modifica los datos si se confirma. |
| Validación de datos | Limita qué valores se pueden introducir. | No resume datos. |
| Texto en columnas | Divide contenido de una columna en varias. | No es una fórmula. |
| Formato como tabla | Convierte un rango en tabla con filtros y formato. | No es tabla dinámica. |
| Importar datos | Trae datos externos al libro. | No equivale a exportar. |
| Exportar | Genera salida hacia otro formato o destino. | No siempre modifica el origen. |

#### Ordenación, filtros y validación con criterio de examen

| Herramienta | Punto fino preguntable |
| --- | --- |
| Ordenar de A a Z / Z a A | Cambia el orden visible por una columna. |
| Ordenación personalizada | Permite varios niveles, por ejemplo fecha y después apellido. |
| Filtro automático | Muestra flechas de filtro en encabezados. |
| Filtros de texto | Contiene, empieza por, termina en, igual a. |
| Filtros de número | Mayor que, menor que, entre, diez superiores. |
| Filtros de fecha | Hoy, mañana, este mes, intervalo. |
| Validación de datos | Evita o advierte entradas no válidas según reglas. |
| Lista desplegable | Caso típico de validación para elegir valores permitidos. |
| Quitar duplicados | Elimina filas duplicadas según columnas seleccionadas. |
| Filtro avanzado | Permite criterios complejos y copiar resultados a otra ubicación. |
| Consolidar | Resume datos de varios rangos u hojas con funciones como suma o promedio. |
| Subtotal | Inserta subtotales automáticos cuando los datos están agrupados u ordenados. |
| Agrupar / desagrupar | Crea un esquema plegable de filas o columnas. |

Trampa: filtrar no borra registros; quitar duplicados sí puede eliminarlos si se confirma.

#### Tablas de Excel

Una tabla de Excel no es una tabla dinámica. Es un rango estructurado con encabezados, formato, filtros y comportamiento especial.

| Tabla de Excel | Tabla dinámica |
| --- | --- |
| Organiza y facilita trabajar con un rango de datos. | Resume y analiza datos. |
| Mantiene filas y columnas de origen. | Crea un resumen interactivo. |
| Puede usar filtros y fila de totales. | Usa campos en filas, columnas, valores y filtros. |
| Sirve como origen cómodo para gráficos o tablas dinámicas. | Debe actualizarse si cambia el origen. |

Las tablas de Excel pueden tener nombre propio (`Tabla1`, `Expedientes`, etc.) y usar referencias estructuradas.

| Elemento | Ejemplo | Significado |
| --- | --- | --- |
| Nombre de tabla | `Tabla1` | Identificador de la tabla. |
| Referencia estructurada | `Tabla1[Importe]` | Columna `Importe` de la tabla. |
| Fila de totales | Suma, promedio, recuento, etc. | Resumen al final de la tabla. |

Trampa: una referencia estructurada pertenece a una tabla de Excel; no es una referencia ordinaria tipo `A1:A10`.

#### Análisis Y SI

Excel incluye herramientas para estudiar escenarios, aunque en C2 basta con reconocer su finalidad.

| Herramienta | Para qué sirve |
| --- | --- |
| Buscar objetivo | Ajusta una celda de entrada para alcanzar un resultado concreto. |
| Tabla de datos | Muestra cómo cambia un resultado al variar uno o dos valores. |
| Administrador de escenarios | Guarda y compara conjuntos de valores de entrada. |

### 2.7. Tablas dinámicas

Una tabla dinámica permite resumir, analizar y reorganizar grandes conjuntos de datos de manera interactiva. Es útil para obtener totales, recuentos, promedios y agrupaciones sin modificar los datos originales.

Elementos básicos:

| Elemento | Función |
| --- | --- |
| Filas | Agrupan datos verticalmente. |
| Columnas | Agrupan datos horizontalmente. |
| Valores | Contienen cálculos como suma, recuento o promedio. |
| Filtros | Permiten limitar la información mostrada. |
| Segmentaciones | Botones visuales para filtrar. |

Pasos generales:

1. Tener datos con encabezados.
2. Seleccionar el rango o tabla.
3. Insertar tabla dinámica.
4. Colocar campos en filas, columnas, valores y filtros.
5. Actualizar si cambian los datos de origen.

No debe confundirse con:

| No confundir | Motivo |
| --- | --- |
| Gráfico | El gráfico representa visualmente datos; la tabla dinámica resume y reorganiza. |
| Tabla normal | Una tabla ordinaria organiza datos, pero no ofrece el mismo análisis interactivo. |
| Ordenación | Ordenar sólo cambia el orden de los datos. |
| Filtro | Filtrar oculta registros que no cumplen criterios. |

Pregunta histórica: `2025-E2-015`.

#### Gráficos dinámicos

Un gráfico dinámico representa visualmente una tabla dinámica. Se actualiza al cambiar los campos, filtros o segmentaciones de la tabla dinámica.

| Gráfico normal | Gráfico dinámico |
| --- | --- |
| Representa un rango o tabla de datos. | Se vincula a una tabla dinámica. |
| Cambia si cambia el origen del gráfico. | Cambia al reorganizar campos de la tabla dinámica. |
| No necesita áreas de tabla dinámica. | Depende de campos de tabla dinámica. |

Trampa: gráfico dinámico no es sinónimo de animación. Es un gráfico asociado al análisis dinámico de datos.

### 2.8. Gráficos

Los gráficos representan datos visualmente. Son útiles para comparar valores, ver tendencias y mostrar proporciones.

| Tipo de gráfico | Uso típico |
| --- | --- |
| Columnas | Comparar categorías. |
| Líneas | Mostrar evolución temporal. |
| Circular | Mostrar proporciones de un total. |
| Barras | Comparar categorías en horizontal. |
| Dispersión | Relacionar dos series numéricas. |
| Área | Mostrar evolución acumulada. |

Aunque en las preguntas históricas actuales del proyecto no aparece un gráfico concreto de Excel, el programa oficial lo menciona expresamente, así que debe estudiarse a nivel funcional.

Elementos de gráfico preguntables:

| Elemento | Qué representa |
| --- | --- |
| Título | Nombre descriptivo del gráfico. |
| Eje horizontal | Categorías o valores del eje X. |
| Eje vertical | Valores del eje Y. |
| Leyenda | Identifica series de datos. |
| Serie de datos | Conjunto de valores representados. |
| Etiquetas de datos | Valores mostrados junto a puntos, columnas o sectores. |

Trampa: cambiar el tipo de gráfico no cambia necesariamente los datos de origen; cambia la forma de representarlos.

#### Gráficos recomendables según dato

| Necesidad | Gráfico apropiado |
| --- | --- |
| Comparar categorías | Columnas o barras. |
| Ver evolución temporal | Líneas. |
| Mostrar parte de un total | Circular, con pocas categorías. |
| Relacionar dos variables numéricas | Dispersión. |
| Mostrar composición acumulada | Área o columnas apiladas. |

Trampa: un gráfico circular con demasiadas categorías pierde claridad y no sirve para comparar evoluciones temporales.

### 2.9. Hipervínculos

Un hipervínculo es un acceso que permite saltar a otra ubicación. Puede apuntar, por ejemplo, a:

- Otra zona del libro actual.
- Otro documento.
- Una ubicación en red.
- Una intranet.
- Una página de Internet.

Pregunta histórica: `2023-E2-029`.

### 2.10. Comentarios, notas e indicadores visuales

En una pregunta histórica de Excel 2016 se preguntó por el pequeño triángulo rojo en la esquina superior derecha de una celda. Ese indicador se asociaba a la existencia de un comentario en la celda.

Pregunta histórica: `2023-E2-035`.

En Excel de Microsoft 365 escritorio conviene distinguir comentarios y notas. Para examen, la idea principal es que un indicador en la esquina de la celda avisa de información asociada a esa celda.

### 2.11. Ventanas y vistas

Excel de Microsoft 365 escritorio permite organizar ventanas abiertas desde la pestaña `Vista`, grupo `Ventana`. En una pregunta histórica de Excel 2016 se preguntó por la organización `Horizontal`, que organiza en horizontal las ventanas de Excel abiertas.

Pregunta histórica: `2023-E2-004`.

No debe confundirse con dividir una hoja en paneles ni con ordenar hojas dentro de un libro.

### 2.12. Cobertura de la convocatoria

| Punto oficial | Cobertura en este tema |
| --- | --- |
| Hojas de cálculo: Excel | Concepto de libro, hoja, celda, rango, fórmulas, datos, gráficos y análisis. |
| Principales funciones y utilidades | Introducción, cálculo, organización, análisis, representación, gestión e impresión. |
| Libros, hojas y celdas | Libro, hoja, celda, celda activa, rangos, hojas, ocultar, mover, copiar y proteger. |
| Configuración | Cinta, opciones, formato, ancho/alto, diseño de página, impresión, protección y vistas. |
| Introducción y edición de datos | Texto, números, fechas, fórmulas, relleno, pegado especial, búsqueda, borrar y formato. |
| Fórmulas y funciones | `=`, referencias, operadores, errores, funciones matemáticas, lógicas, texto, fecha y búsqueda. |
| Tablas dinámicas | Finalidad, origen, campos, valores, filtros, segmentaciones, actualización y diferencias. |
| Gráficos | Tipos, ejes, leyenda, series, etiquetas y elección según dato. |
| Gestión de datos | Ordenar, filtrar, filtro avanzado, validar, quitar duplicados, texto en columnas, tablas, referencias estructuradas, consolidar, subtotales, esquemas e importar/exportar. |
| Personalización del entorno | Barra de acceso rápido, cinta, vistas, inmovilizar, organizar ventanas, zoom y opciones. |

## 3. Conceptos clave

| Concepto | Qué hay que saber | Preguntable |
| --- | --- | --- |
| Libro | Archivo Excel con una o más hojas | Muy alto |
| Hoja | Área de trabajo con filas y columnas | Alto |
| Celda | Intersección fila-columna | Muy alto |
| Celda activa | Celda seleccionada | Alto |
| Rango | Conjunto de celdas | Alto |
| Hoja oculta | Hoja no visible pero existente | Medio |
| Barra de fórmulas | Muestra contenido de la celda activa | Muy alto |
| Fórmula | Expresión de cálculo iniciada por `=` | Muy alto |
| Función | Fórmula predefinida | Muy alto |
| Referencia relativa | Cambia al copiar fórmula | Medio |
| Referencia absoluta | Fija fila y columna con `$` | Medio |
| `DERECHA` | Extrae caracteres desde la derecha | Alto |
| `SI` | Función condicional | Alto |
| `Y` | Comprueba varias condiciones | Medio |
| `BUSCARX` | Busca valores en rangos o matrices | Medio |
| Pegado especial | Pega valores, formatos, fórmulas u opciones concretas | Medio |
| Formato condicional | Cambia aspecto según reglas | Medio |
| `Ctrl + 1` | Abre Formato de celdas | Medio |
| Nombre definido | Nombre asignado a rango o fórmula | Medio |
| Auditoría de fórmulas | Rastrear precedentes/dependientes y errores | Medio |
| Error de fórmula | Aviso como `#DIV/0!`, `#N/A` o `#¡REF!` | Medio |
| Tabla de Excel | Rango estructurado con encabezados y filtros | Medio |
| Referencia estructurada | Referencia a columnas de una tabla | Medio |
| Tabla dinámica | Resume y analiza datos interactivamente | Muy alto |
| Gráfico dinámico | Gráfico vinculado a tabla dinámica | Medio |
| Campos de tabla dinámica | Filas, columnas, valores y filtros | Alto |
| Hipervínculo | Salto a otra ubicación o recurso | Alto |
| Comentario | Información asociada a una celda | Medio |
| Gráfico | Representación visual de datos | Medio |
| Serie de datos | Conjunto representado en un gráfico | Medio |
| Filtro | Muestra datos según criterios | Medio |
| Ordenación | Reorganiza el orden de los datos | Medio |
| Validación de datos | Limita valores permitidos | Medio |
| Filtro avanzado | Criterios complejos y copia de resultados | Medio |
| Consolidar | Combina rangos u hojas con funciones resumen | Medio |
| Subtotales | Inserta resúmenes por grupos | Medio |
| Formato de número | Controla cómo se muestra un dato | Medio |
| Área de impresión | Rango que se imprimirá | Medio |
| Escala de impresión | Ajusta salida a páginas | Medio |

## 4. Articulos importantes

No hay artículos legales aplicables a este tema. Es materia práctica de ofimática. Para examen deben memorizarse términos, funciones y rutas estables de Excel.

| Referencia funcional | Relevancia de examen |
| --- | --- |
| `Archivo` | Guardar, abrir, imprimir, opciones y administración del libro. |
| `Inicio` | Formato, alineación, número, estilos y edición básica. |
| `Insertar` | Tablas, gráficos, vínculos y objetos. |
| `Fórmulas` | Biblioteca de funciones y auditoría de fórmulas. |
| `Datos` | Ordenar, filtrar, obtener y transformar datos. |
| `Vista` | Vistas del libro, mostrar elementos y organizar ventanas. |
| Barra de fórmulas | Ver y editar el contenido real de la celda activa. |
| Diseño de página | Márgenes, orientación, tamaño y área de impresión. |
| Tabla dinámica | Insertar, colocar campos, actualizar y filtrar. |
| Gráfico dinámico | Representación visual vinculada a tabla dinámica. |
| Gráficos | Tipo de gráfico, ejes, leyenda, series y etiquetas. |

## 5. Errores tipicos

| Error típico | Corrección |
| --- | --- |
| Confundir libro y hoja | El libro es el archivo; la hoja está dentro del libro. |
| Confundir celda con hoja | La celda es la intersección entre fila y columna. |
| Confundir rango con celda | El rango agrupa varias celdas. |
| Pensar que una fórmula puede empezar sin `=` | En Excel las fórmulas empiezan por `=`. |
| No distinguir referencia relativa y absoluta | `$A$1` fija columna y fila al copiar. |
| Confundir barra de fórmulas con barra de estado | La barra de fórmulas muestra el contenido de la celda activa. |
| Pensar que el formato cambia siempre el valor real | Muchas veces sólo cambia la visualización. |
| Confundir borrar contenido con borrar formato | Puede eliminarse el dato conservando formato o al revés. |
| Pensar que pegar valores conserva la fórmula | Pegar valores conserva el resultado, no la fórmula. |
| Confundir hoja oculta con hoja eliminada | Ocultar no borra el contenido. |
| Pensar que una tabla dinámica modifica los datos originales | Resume y analiza datos; no necesita reescribir el origen. |
| Confundir tabla normal con tabla dinámica | La tabla normal organiza; la dinámica resume y reorganiza. |
| Confundir ordenar con filtrar | Ordenar cambia el orden; filtrar muestra sólo datos que cumplen criterios. |
| Pensar que quitar duplicados es sólo un filtro | Quitar duplicados puede eliminar registros. |
| Confundir formato condicional con validación | Condicional cambia aspecto; validación limita entrada. |
| Confundir referencia estructurada con celda normal | `Tabla1[Importe]` referencia una columna de tabla. |
| Pensar que gráfico dinámico es un gráfico animado | Es un gráfico vinculado a tabla dinámica. |
| Confundir subtotales con tabla dinámica | Subtotales inserta resúmenes en datos; tabla dinámica crea análisis aparte. |
| Confundir gráfico con tabla dinámica | El gráfico representa; la tabla dinámica resume y reorganiza. |
| Pensar que cambiar el gráfico cambia los datos | Cambia la representación, no necesariamente el origen. |
| Confundir zoom con escala de impresión | Zoom afecta a pantalla; escala afecta a papel/PDF. |
| Confundir comentario con hipervínculo | El comentario añade información; el hipervínculo salta a otra ubicación. |
| Interpretar un indicador de esquina como error de fórmula | En Excel puede avisar de información asociada a la celda, como comentario o nota según versión. |
| Confundir organizar ventanas con dividir hoja | Organizar ventanas afecta a ventanas abiertas; dividir afecta a la vista de la hoja. |
| Pensar que el número de hojas es siempre 255 | En Excel de Microsoft 365 escritorio depende de la memoria disponible. |
| Usar coma en fórmulas españolas de examen cuando la opción correcta usa punto y coma | En Excel español suele usarse `;` como separador. |

## 6. Preguntas historicas

| Id | Subtema | Qué preguntó | Respuesta |
| --- | --- | --- | :---: |
| `2023-E2-004` | Libros, hojas y celdas | Organización horizontal de ventanas en Excel 2016 | A |
| `2023-E2-012` | Fórmulas y funciones Excel | Función que devuelve caracteres por la derecha | D |
| `2023-E2-018` | Fórmulas y funciones Excel | Sintaxis correcta de una fórmula con `SI` y `Y` | C |
| `2023-E2-026` | Libros, hojas y celdas | Nombre del archivo que contiene una o más hojas | C |
| `2023-E2-029` | Libros, hojas y celdas | Definición de hipervínculo | B |
| `2023-E2-035` | Libros, hojas y celdas | Triángulo rojo en esquina superior derecha de celda | B |
| `2025-E2-011` | Fórmulas y funciones Excel | Símbolo para iniciar una fórmula en Excel 365 | A |
| `2025-E2-012` | Libros, hojas y celdas | Conjunto de hojas almacenadas en un archivo Excel | B |
| `2025-E2-013` | Libros, hojas y celdas | Dónde se visualiza el contenido de la celda activa | D |
| `2025-E2-014` | Libros, hojas y celdas | Cuántas hojas puede contener un libro | C |
| `2025-E2-015` | Tablas dinámicas | Misión de una tabla dinámica | B |
| `2025-E2-033` | Libros, hojas y celdas | Definición de celda | C |

## 7. Test de entrenamiento

1. En Excel, el archivo que contiene una o varias hojas se denomina:
   A. Celda
   B. Libro
   C. Rango
   D. Fórmula

2. Una celda es:
   A. Un archivo de Excel
   B. Una hoja completa
   C. La intersección entre una fila y una columna
   D. Un gráfico

3. ¿Qué símbolo se utiliza normalmente para iniciar una fórmula en Excel?
   A. `=`
   B. `#`
   C. `@`
   D. `$`

4. La barra de fórmulas sirve para:
   A. Mostrar el contenido de la celda activa
   B. Cambiar el nombre del libro
   C. Abrir Outlook
   D. Ordenar ventanas

5. El conjunto de celdas `A1:A10` es:
   A. Un libro
   B. Un rango
   C. Una hoja
   D. Una tabla dinámica obligatoria

6. La función `DERECHA` permite:
   A. Alinear texto a la derecha
   B. Extraer caracteres desde el final de una cadena
   C. Mover una hoja a la derecha
   D. Ordenar columnas de derecha a izquierda

7. Una tabla dinámica sirve principalmente para:
   A. Resumir y analizar datos interactivamente
   B. Crear únicamente gráficos circulares
   C. Borrar duplicados de forma irreversible
   D. Cambiar el idioma de Excel

8. Un hipervínculo en Excel permite:
   A. Saltar a otra ubicación o recurso
   B. Crear una fórmula automáticamente
   C. Ocultar todas las hojas
   D. Cambiar el tipo de letra

9. En Excel de Microsoft 365 escritorio, el número de hojas que puede contener un libro:
   A. Es siempre 1
   B. Es siempre 16
   C. Es siempre 255
   D. Depende de la memoria disponible del sistema

10. Ordenar datos significa:
    A. Cambiar su orden según un criterio
    B. Ocultar los que no cumplen una condición
    C. Convertirlos en gráfico automáticamente
    D. Borrar los duplicados

11. Filtrar datos significa:
    A. Cambiar el nombre del libro
    B. Mostrar sólo los registros que cumplen criterios
    C. Convertir fórmulas en texto
    D. Crear una hoja nueva

12. En Excel de Microsoft 365 escritorio, la organización horizontal de ventanas:
    A. Organiza en horizontal las ventanas de Excel abiertas
    B. Ordena las hojas del libro alfabéticamente
    C. Divide una hoja en dos partes
    D. Elimina ventanas ocultas

13. Una función en Excel es:
    A. Una fórmula predefinida
    B. Un archivo con varias hojas
    C. Una celda bloqueada
    D. Un gráfico de barras

14. La función `SI` se usa para:
    A. Cambiar el color de una celda
    B. Evaluar una condición y devolver resultados alternativos
    C. Insertar una imagen
    D. Guardar el libro

15. En Excel en español, el separador habitual de argumentos en funciones es:
    A. El punto y coma `;`
    B. La almohadilla `#`
    C. El símbolo del dólar `$`
    D. La barra `/`

16. Un gráfico de líneas se usa especialmente para:
    A. Mostrar evolución temporal
    B. Escribir fórmulas
    C. Crear libros
    D. Proteger comentarios

17. Un comentario o nota en una celda sirve para:
    A. Añadir información asociada a esa celda
    B. Convertir la celda en libro
    C. Iniciar una fórmula
    D. Eliminar una hoja

18. La celda activa es:
    A. La celda seleccionada en ese momento
    B. La primera celda de todas las hojas
    C. La última celda con datos
    D. Una celda protegida obligatoriamente

19. La pestaña `Datos` se asocia especialmente con:
    A. Ordenar y filtrar
    B. Cambiar el fondo de pantalla de Windows
    C. Enviar correos
    D. Crear notas al pie de página

20. ¿Cuál de las siguientes fórmulas tiene estructura válida en Excel?
    A. `SUMA A1:A10`
    B. `=SUMA(A1:A10)`
    C. `SUMA=A1:A10`
    D. `#SUMA(A1:A10)`

21. ¿Qué referencia queda fija en columna y fila al copiar una fórmula?
    A. `A1`
    B. `$A$1`
    C. `A$1:B2`
    D. `A1$`

22. ¿Qué herramienta limita los valores que se pueden introducir en una celda?
    A. Validación de datos
    B. Gráfico circular
    C. Zoom
    D. Comentario

23. En una tabla dinámica, el área `Valores` contiene normalmente:
    A. Cálculos como suma, recuento o promedio
    B. Sólo nombres de hojas
    C. Comentarios del libro
    D. Hipervínculos externos

24. Un gráfico de columnas se usa principalmente para:
    A. Comparar categorías
    B. Editar fórmulas
    C. Proteger una hoja
    D. Cambiar el nombre del libro

25. El error `#DIV/0!` aparece normalmente cuando:
    A. Se divide entre cero
    B. Falta una hoja
    C. Hay demasiados gráficos
    D. Se usa un hipervínculo

26. `Quitar duplicados`:
    A. Elimina registros repetidos según columnas elegidas
    B. Sólo cambia el color de las celdas
    C. Crea una tabla dinámica
    D. Inserta una hoja nueva

27. Inmovilizar paneles sirve para:
    A. Mantener filas o columnas visibles al desplazarse
    B. Bloquear todas las fórmulas para siempre
    C. Cerrar el libro
    D. Cambiar el separador decimal

28. El formato de número permite:
    A. Cambiar cómo se muestra un valor, por ejemplo como fecha o porcentaje
    B. Cambiar siempre el valor real almacenado
    C. Crear un hipervínculo
    D. Eliminar una hoja

29. Una leyenda en un gráfico sirve para:
    A. Identificar series de datos
    B. Validar entradas
    C. Dividir texto en columnas
    D. Contar celdas vacías

30. `Texto en columnas` permite:
    A. Dividir contenido de una columna en varias
    B. Crear encabezados de página
    C. Cambiar la orientación de impresión
    D. Borrar todos los gráficos

### Plantilla

| Nº | Respuesta | Explicación |
| ---: | :---: | --- |
| 1 | B | El archivo de Excel se denomina libro. |
| 2 | C | La celda es la intersección entre fila y columna. |
| 3 | A | Las fórmulas empiezan por `=`. |
| 4 | A | La barra de fórmulas muestra y permite editar el contenido de la celda activa. |
| 5 | B | `A1:A10` es un rango de celdas. |
| 6 | B | `DERECHA` extrae caracteres desde el final del texto. |
| 7 | A | La tabla dinámica resume y analiza datos. |
| 8 | A | Un hipervínculo permite saltar a otro destino. |
| 9 | D | En Excel de Microsoft 365 escritorio depende de la memoria disponible. |
| 10 | A | Ordenar cambia el orden de los datos. |
| 11 | B | Filtrar muestra sólo registros que cumplen criterios. |
| 12 | A | La organización horizontal afecta a ventanas abiertas. |
| 13 | A | Una función es una fórmula predefinida. |
| 14 | B | `SI` evalúa una condición. |
| 15 | A | En Excel español se usa habitualmente `;`. |
| 16 | A | Las líneas son útiles para evolución temporal. |
| 17 | A | Los comentarios o notas añaden información. |
| 18 | A | La celda activa es la seleccionada. |
| 19 | A | `Datos` agrupa herramientas como ordenar y filtrar. |
| 20 | B | Una fórmula empieza por `=` y usa función con paréntesis. |
| 21 | B | `$A$1` fija columna y fila. |
| 22 | A | La validación limita entradas permitidas. |
| 23 | A | `Valores` contiene cálculos resumidos. |
| 24 | A | Columnas compara categorías. |
| 25 | A | `#DIV/0!` indica división entre cero. |
| 26 | A | Quitar duplicados elimina repetidos si se confirma. |
| 27 | A | Inmovilizar mantiene filas o columnas visibles. |
| 28 | A | El formato cambia la visualización del valor. |
| 29 | A | La leyenda identifica series. |
| 30 | A | Texto en columnas separa contenido en varias columnas. |

## 8. Esquema final

```text
EXCEL
├── Libro
│   └── Archivo de Excel con una o varias hojas
├── Hoja
│   └── Filas + columnas
├── Celda
│   └── Intersección fila-columna
├── Celda activa
│   └── Celda seleccionada
├── Barra de fórmulas
│   └── Muestra contenido real de la celda activa
├── Fórmulas
│   ├── Empiezan por =
│   ├── Usan referencias de celda
│   └── Pueden incluir funciones
├── Funciones
│   ├── SUMA
│   ├── PROMEDIO
│   ├── SI
│   ├── Y
│   └── DERECHA
├── Gestión de datos
│   ├── Ordenar
│   ├── Filtrar
│   ├── Buscar
│   └── Validar datos
├── Tabla dinámica
│   └── Resume, analiza y reorganiza datos
├── Gráficos
│   └── Representan datos visualmente
└── Personalización
    ├── Cinta de opciones
    ├── Acceso rápido
    └── Opciones de Excel
```

Repaso de máxima prioridad:

| Pregunta probable | Respuesta corta |
| --- | --- |
| ¿Qué es un libro? | Archivo de Excel con hojas. |
| ¿Qué es una celda? | Intersección entre fila y columna. |
| ¿Cómo empieza una fórmula? | Con `=`. |
| ¿Dónde se ve el contenido de la celda activa? | En la barra de fórmulas. |
| ¿Para qué sirve una tabla dinámica? | Para resumir y analizar datos. |
| ¿Qué hace `DERECHA`? | Extrae caracteres desde el final de un texto. |
| ¿Qué es un hipervínculo? | Un salto a otra ubicación o recurso. |
| ¿Qué significa ordenar? | Cambiar el orden de los datos. |
| ¿Qué significa filtrar? | Mostrar sólo datos que cumplen criterios. |
