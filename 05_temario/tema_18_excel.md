# Tema 18. Hojas de cálculo: Excel

Hojas de cálculo: Excel. Principales funciones y utilidades. Libros, hojas y celdas. Configuración. Introducción y edición de datos. Fórmulas y funciones. Tablas dinámicas. Gráficos. Gestión de datos. Personalización del entorno de trabajo.

## 1. Resumen ejecutivo

Excel es una hoja de cálculo. Sirve para organizar datos en tablas, hacer cálculos mediante fórmulas y funciones, analizar información, crear gráficos y resumir grandes volúmenes de datos.

En esta oposición no interesa estudiar Excel como usuario avanzado, sino dominar los conceptos que se convierten fácilmente en pregunta tipo test: qué es un libro, qué es una hoja, qué es una celda, cómo se inicia una fórmula, dónde se ve el contenido de la celda activa, para qué sirve una tabla dinámica y qué significan elementos visuales concretos.

La convocatoria 2026 no concreta una versión exacta de Excel. El programa oficial habla de `Excel` y de sus funciones principales. Sin embargo, las preguntas históricas disponibles mencionan expresamente Excel 2016 y la versión de escritorio de Excel 365. Por tanto, el enfoque más rentable es estudiar funciones comunes de la interfaz moderna de Excel, prestando atención a las rutas y términos que ya han sido preguntados.

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

Idea clave: Excel organiza la información en libros. Cada libro contiene hojas. Cada hoja se divide en filas y columnas. La intersección entre una fila y una columna es una celda. Las fórmulas empiezan por el signo igual `=`.

## 2. Desarrollo

### 2.1. Qué es Excel

Excel es una aplicación de hoja de cálculo. Permite introducir datos, realizar cálculos, ordenar y filtrar información, representar datos mediante gráficos y resumir información con tablas dinámicas.

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

Un libro es el archivo de Excel. Puede contener una o varias hojas de cálculo. En los exámenes se ha preguntado tanto en Excel 2016 como en Excel 365 que el conjunto de hojas almacenadas en un archivo Excel se denomina `libro`.

Preguntas históricas: `2023-E2-026` y `2025-E2-012`.

#### Hoja

La hoja es el espacio de trabajo formado por filas y columnas. Un libro puede contener varias hojas. En Excel moderno no hay un número fijo universal de hojas por libro: depende principalmente de la memoria disponible del sistema.

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

### 2.3. Introducción y edición de datos

En una celda pueden introducirse:

- Texto.
- Números.
- Fechas.
- Fórmulas.
- Funciones.
- Hipervínculos.

Para editar una celda se puede escribir directamente sobre ella, usar la barra de fórmulas o entrar en modo edición. El examen suele preguntar definiciones y usos básicos, no procedimientos avanzados.

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

### 2.5. Configuración y personalización

La configuración de Excel permite adaptar el entorno de trabajo. Son zonas preguntables:

| Elemento | Función |
| --- | --- |
| Cinta de opciones | Agrupa comandos por pestañas. |
| Barra de herramientas de acceso rápido | Acceso a comandos frecuentes. |
| Barra de fórmulas | Muestra y permite editar el contenido de la celda activa. |
| Opciones de Excel | Configuración general del programa. |
| Vistas | Cambian la forma de visualizar el libro. |

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

### 2.7. Tablas dinámicas

Una tabla dinámica permite resumir, analizar y reorganizar grandes conjuntos de datos de manera interactiva. Es útil para obtener totales, recuentos, promedios y agrupaciones sin modificar los datos originales.

No debe confundirse con:

| No confundir | Motivo |
| --- | --- |
| Gráfico | El gráfico representa visualmente datos; la tabla dinámica resume y reorganiza. |
| Tabla normal | Una tabla ordinaria organiza datos, pero no ofrece el mismo análisis interactivo. |
| Ordenación | Ordenar sólo cambia el orden de los datos. |
| Filtro | Filtrar oculta registros que no cumplen criterios. |

Pregunta histórica: `2025-E2-015`.

### 2.8. Gráficos

Los gráficos representan datos visualmente. Son útiles para comparar valores, ver tendencias y mostrar proporciones.

| Tipo de gráfico | Uso típico |
| --- | --- |
| Columnas | Comparar categorías. |
| Líneas | Mostrar evolución temporal. |
| Circular | Mostrar proporciones de un total. |
| Barras | Comparar categorías en horizontal. |

Aunque en las preguntas históricas actuales del proyecto no aparece un gráfico concreto de Excel, el programa oficial lo menciona expresamente, así que debe estudiarse a nivel funcional.

### 2.9. Hipervínculos

Un hipervínculo es un acceso que permite saltar a otra ubicación. Puede apuntar, por ejemplo, a:

- Otra zona del libro actual.
- Otro documento.
- Una ubicación en red.
- Una intranet.
- Una página de Internet.

Pregunta histórica: `2023-E2-029`.

### 2.10. Comentarios, notas e indicadores visuales

En Excel 2016 se ha preguntado por el pequeño triángulo rojo en la esquina superior derecha de una celda. Ese indicador se asocia a la existencia de un comentario en la celda.

Pregunta histórica: `2023-E2-035`.

En versiones modernas pueden distinguirse comentarios y notas, pero para examen hay que reconocer la idea principal: un indicador en la esquina de la celda avisa de información asociada a esa celda.

### 2.11. Ventanas y vistas

Excel permite organizar ventanas abiertas desde la pestaña `Vista`, grupo `Ventana`. En Excel 2016 se preguntó por la organización `Horizontal`, que organiza en horizontal las ventanas de Excel abiertas.

Pregunta histórica: `2023-E2-004`.

No debe confundirse con dividir una hoja en paneles ni con ordenar hojas dentro de un libro.

## 3. Conceptos clave

| Concepto | Qué hay que saber | Preguntable |
| --- | --- | --- |
| Libro | Archivo Excel con una o más hojas | Muy alto |
| Hoja | Área de trabajo con filas y columnas | Alto |
| Celda | Intersección fila-columna | Muy alto |
| Celda activa | Celda seleccionada | Alto |
| Barra de fórmulas | Muestra contenido de la celda activa | Muy alto |
| Fórmula | Expresión de cálculo iniciada por `=` | Muy alto |
| Función | Fórmula predefinida | Muy alto |
| `DERECHA` | Extrae caracteres desde la derecha | Alto |
| `SI` | Función condicional | Alto |
| `Y` | Comprueba varias condiciones | Medio |
| Tabla dinámica | Resume y analiza datos interactivamente | Muy alto |
| Hipervínculo | Salto a otra ubicación o recurso | Alto |
| Comentario | Información asociada a una celda | Medio |
| Gráfico | Representación visual de datos | Medio |
| Filtro | Muestra datos según criterios | Medio |
| Ordenación | Reorganiza el orden de los datos | Medio |

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

## 5. Errores tipicos

| Error típico | Corrección |
| --- | --- |
| Confundir libro y hoja | El libro es el archivo; la hoja está dentro del libro. |
| Confundir celda con hoja | La celda es la intersección entre fila y columna. |
| Pensar que una fórmula puede empezar sin `=` | En Excel las fórmulas empiezan por `=`. |
| Confundir barra de fórmulas con barra de estado | La barra de fórmulas muestra el contenido de la celda activa. |
| Pensar que una tabla dinámica modifica los datos originales | Resume y analiza datos; no necesita reescribir el origen. |
| Confundir ordenar con filtrar | Ordenar cambia el orden; filtrar muestra sólo datos que cumplen criterios. |
| Confundir gráfico con tabla dinámica | El gráfico representa; la tabla dinámica resume y reorganiza. |
| Confundir comentario con hipervínculo | El comentario añade información; el hipervínculo salta a otra ubicación. |
| Interpretar el triángulo rojo como error de fórmula | En Excel 2016 se asocia a comentario. |
| Confundir organizar ventanas con dividir hoja | Organizar ventanas afecta a ventanas abiertas; dividir afecta a la vista de la hoja. |
| Pensar que el número de hojas es siempre 255 | En Excel moderno depende de la memoria disponible. |
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

9. En Excel moderno, el número de hojas que puede contener un libro:
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

12. En Excel 2016, la organización horizontal de ventanas:
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
| 9 | D | En Excel moderno depende de la memoria disponible. |
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
