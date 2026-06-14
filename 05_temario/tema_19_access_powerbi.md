# Tema 19. Bases de datos: Access y Power BI

Bases de datos: Access. Principales funciones y utilidades. Tablas. Consultas. Formularios. Informes. Relaciones. Importación, vinculación y exportación de datos. Power BI.

## 1. Resumen ejecutivo

La versión oficial para este tema es `Microsoft 365 versión escritorio`, conforme al Anexo I, apartado Primero.2.2 de la convocatoria 2026. Por tanto, Access debe estudiarse como aplicación de escritorio de Microsoft 365. Las preguntas históricas de Access 2016 se usan como referencia porque muchas nociones básicas se mantienen, pero no son la versión oficial de la convocatoria.

Access es un sistema gestor de bases de datos de escritorio. Sirve para almacenar datos de forma estructurada, relacionarlos, consultarlos, introducirlos mediante formularios, presentarlos mediante informes e intercambiarlos con otros formatos o aplicaciones.

Power BI es una herramienta de análisis y visualización de datos. En este tema debe estudiarse a nivel funcional: para qué sirve, cómo se diferencia de Access y qué papel tiene en la creación de informes visuales y paneles.

La estadística histórica disponible muestra 11 preguntas del Tema 19:

| Subtema | Preguntas históricas |
| --- | ---: |
| Tablas Access | 7 |
| Access y Power BI | 3 |
| Importación y exportación | 1 |

Los puntos de mayor rendimiento son:

- Qué es una tabla.
- Registros, campos y clave principal.
- Campo `Autonumeración`.
- Propiedades de campos.
- Vista Diseño.
- Consultas.
- Relaciones.
- Importar datos.
- Extensión `.accdb`.
- Número de bases de datos abiertas en una instancia de Access.
- Diferencia entre Access y otras aplicaciones de Microsoft 365.

El enunciado oficial exige cubrir todos estos puntos:

- Principales funciones y utilidades.
- Tablas.
- Consultas.
- Formularios.
- Informes.
- Relaciones.
- Importación, vinculación y exportación de datos.
- Power BI.

Idea clave: en Access, una tabla almacena datos; una consulta obtiene o calcula datos; un formulario facilita introducir o editar datos; un informe presenta datos para imprimir o distribuir; una relación vincula tablas por campos comunes.

## 2. Desarrollo

### 2.1. Bases de datos y Access

Una base de datos es un conjunto organizado de información. Access permite crear bases de datos relacionales de escritorio.

| Concepto | Significado |
| --- | --- |
| Base de datos | Conjunto organizado de datos y objetos. |
| Tabla | Objeto que almacena datos en filas y columnas. |
| Registro | Fila de una tabla; representa una entidad concreta. |
| Campo | Columna de una tabla; representa un dato de cada registro. |
| Clave principal | Campo o conjunto de campos que identifica de forma única un registro. |
| Consulta | Objeto para obtener, filtrar, combinar o calcular datos. |
| Formulario | Interfaz visual para introducir o consultar datos. |
| Informe | Presentación de datos para imprimir, exportar o distribuir. |
| Relación | Asociación lógica entre campos comunes de tablas. |

Access guarda normalmente sus bases de datos modernas en archivos con extensión `.accdb`.

Pregunta histórica: `2023-E2-023`.

#### Access frente a otras aplicaciones de Microsoft 365

| Aplicación | Uso principal |
| --- | --- |
| Word | Crear, editar y dar formato a documentos de texto. |
| Excel | Hojas de cálculo, fórmulas, análisis tabular. |
| Access | Bases de datos relacionales de escritorio. |
| PowerPoint | Presentaciones. |
| Power BI | Análisis, visualización y paneles de datos. |

Pregunta histórica relacionada: `2025-E2-009`.

#### Bases de datos abiertas

En una única instancia de Access se trabaja con una base de datos abierta. Para trabajar con otra base de datos se abre otra base de datos o instancia.

Pregunta histórica: `2023-E2-010`.

### 2.2. Tablas

Las tablas son el núcleo de Access. Almacenan datos de forma estructurada en filas y columnas.

Pregunta histórica: `2025-E2-020`.

| Elemento | Qué representa |
| --- | --- |
| Campo | Columna: nombre, DNI, fecha, importe. |
| Registro | Fila: datos completos de una persona, expediente o elemento. |
| Valor | Dato concreto dentro de un campo y registro. |
| Tipo de datos | Naturaleza del dato: texto, número, fecha, sí/no, etc. |

#### Vista Hoja de datos y Vista Diseño

Access permite trabajar con tablas en varias vistas.

| Vista | Uso |
| --- | --- |
| Vista Hoja de datos | Ver e introducir datos en filas y columnas. |
| Vista Diseño | Crear y definir campos, tipos de datos y propiedades. |

La vista que permite crear y definir los campos que conforman una tabla es la `Vista Diseño`.

Pregunta histórica: `2025-E2-018`.

#### Campos y tipos de datos

Los campos deben definirse con un tipo de datos adecuado.

| Tipo de datos | Uso típico |
| --- | --- |
| Texto corto | Nombres, códigos, teléfonos si no se calculan. |
| Texto largo | Observaciones extensas. |
| Número | Cantidades numéricas calculables. |
| Fecha/Hora | Fechas y horas. |
| Moneda | Importes. |
| Sí/No | Valores booleanos. |
| Autonumeración | Identificador automático único. |
| Hipervínculo | Direcciones o vínculos. |
| Datos adjuntos | Archivos vinculados a un registro. |

#### Campo Autonumeración

Un campo `Autonumeración` se usa para proporcionar un valor único que ayuda a asegurar que cada registro sea único. Es frecuente como clave principal.

Pregunta histórica: `2023-E2-013`.

No debe confundirse con:

| No confundir | Motivo |
| --- | --- |
| Número aleatorio sin control | Autonumeración genera identificadores automáticos. |
| Formato de fecha | No sirve para dar formato a fechas. |
| Campo calculado | No calcula resultados de negocio. |

#### Propiedades de campos

Los campos tienen propiedades que ajustan cómo se almacenan, muestran o validan los datos.

Propiedades como `Formato`, `Título`, `Máscara de entrada` y `Valor predeterminado` son propiedades que definen el campo de una tabla.

Pregunta histórica: `2023-E2-016`.

| Propiedad | Utilidad |
| --- | --- |
| Tamaño del campo | Limita longitud o tipo de número. |
| Formato | Controla cómo se muestra el dato. |
| Máscara de entrada | Guía la forma de introducir datos. |
| Título | Etiqueta visible alternativa al nombre del campo. |
| Valor predeterminado | Valor que aparece por defecto. |
| Regla de validación | Condición que debe cumplir el dato. |
| Texto de validación | Mensaje si no se cumple la regla. |
| Requerido | Obliga o no a introducir dato. |
| Indexado | Ayuda a búsquedas y evita duplicados si se configura así. |

### 2.3. Clave principal

La clave principal identifica de forma única e inequívoca cada registro. Puede ser un campo único o una combinación de campos.

Pregunta histórica: `2025-E2-019`.

Características:

- No debe repetirse.
- No debe estar vacía.
- Permite relacionar tablas.
- Facilita búsquedas y ordenación.
- Suele ser un campo `Autonumeración`, aunque no siempre.

Ejemplo:

| Tabla | Clave principal posible |
| --- | --- |
| Empleados | `IdEmpleado` |
| Expedientes | `IdExpediente` |
| Cursos | `IdCurso` |

### 2.4. Consultas

Una consulta es un objeto de Access que permite obtener, filtrar, combinar o calcular datos almacenados en una o varias tablas.

Pregunta histórica: `2025-E2-017`.

| Tipo de consulta | Uso |
| --- | --- |
| Selección | Muestra datos que cumplen criterios. |
| Parámetros | Pide un valor al ejecutarse. |
| Totales | Agrupa y calcula sumas, recuentos, promedios, etc. |
| Referencias cruzadas | Resume datos en formato parecido a tabla dinámica. |
| Acción | Modifica datos: actualizar, anexar, eliminar o crear tabla. |

Trampa: una consulta no almacena directamente los datos originales; normalmente muestra o transforma datos procedentes de tablas. Las tablas son las que almacenan registros.

#### Criterios y campos calculados

Las consultas pueden usar criterios para filtrar datos.

| Criterio | Significado orientativo |
| --- | --- |
| `"Madrid"` | Coincide con Madrid. |
| `>100` | Valores mayores que 100. |
| `Entre #01/01/2026# Y #31/12/2026#` | Fechas dentro de un intervalo. |
| `Como "A*"` | Valores que empiezan por A. |
| `Es Nulo` | Registros sin valor en ese campo. |

También pueden calcular campos, por ejemplo un importe total a partir de precio y cantidad.

### 2.5. Formularios

Los formularios son objetos que ofrecen una interfaz visual para introducir, modificar o consultar datos. Suelen basarse en tablas o consultas.

| Elemento | Función |
| --- | --- |
| Cuadro de texto | Mostrar o introducir datos. |
| Etiqueta | Texto descriptivo. |
| Cuadro combinado | Elegir valores de una lista. |
| Botón | Ejecutar una acción. |
| Casilla de verificación | Valores Sí/No. |
| Subformulario | Mostrar datos relacionados. |

Utilidades:

- Facilitar entrada de datos.
- Evitar trabajar directamente sobre tablas.
- Mostrar sólo campos necesarios.
- Guiar al usuario.
- Crear formularios con datos relacionados.

Trampa: el formulario no es lo mismo que la tabla. La tabla almacena datos; el formulario es una interfaz para trabajar con ellos.

### 2.6. Informes

Los informes presentan datos de forma organizada para imprimir, exportar o distribuir. Se basan en tablas o consultas.

| Elemento | Función |
| --- | --- |
| Encabezado de informe | Información al inicio del informe. |
| Encabezado de página | Información repetida en cada página. |
| Detalle | Datos principales. |
| Pie de página | Numeración u otra información repetida. |
| Agrupación | Organiza datos por categorías. |
| Totales | Sumas, recuentos o promedios. |

Utilidades:

- Listados.
- Resúmenes.
- Etiquetas.
- Documentos impresos.
- Exportación a PDF u otros formatos.

Trampa: el informe presenta datos; no es la herramienta principal para introducirlos.

### 2.7. Relaciones

Una relación es una asociación lógica entre campos comunes de dos tablas para vincular sus datos.

Pregunta histórica: `2025-E2-034`.

Ejemplo:

| Tabla 1 | Campo | Tabla 2 | Campo |
| --- | --- | --- | --- |
| Clientes | `IdCliente` | Pedidos | `IdCliente` |

Tipos habituales:

| Tipo | Significado |
| --- | --- |
| Uno a uno | Un registro se relaciona con uno. |
| Uno a varios | Un registro se relaciona con varios. Es la más común. |
| Varios a varios | Requiere tabla intermedia. |

#### Integridad referencial

La integridad referencial ayuda a mantener coherencia entre tablas relacionadas. Evita, por ejemplo, pedidos con un cliente inexistente.

Opciones asociadas:

| Opción | Idea |
| --- | --- |
| Exigir integridad referencial | Mantener coherencia entre tablas. |
| Actualizar en cascada | Propagar cambios de clave relacionada. |
| Eliminar en cascada | Borrar registros relacionados si se borra el principal, con riesgo. |

Trampa: una relación no es un informe ni un formulario; vincula datos entre tablas.

### 2.8. Importación, vinculación y exportación de datos

Access permite intercambiar datos con otras fuentes.

| Operación | Significado |
| --- | --- |
| Importar | Traer datos externos e incorporarlos a Access. |
| Vincular | Conectar con datos externos sin copiarlos completamente como tabla propia. |
| Exportar | Enviar datos de Access a otro formato o destino. |

Importar datos significa traer datos externos e incorporarlos a Access.

Pregunta histórica: `2025-E2-016`.

#### Importar

Fuentes habituales:

- Excel.
- Texto/CSV.
- Otra base de datos Access.
- ODBC.
- SharePoint u otras fuentes compatibles.

Al importar, Access crea una copia de los datos dentro de la base de datos o permite crear una tabla a partir de ellos.

#### Vincular

Vincular permite trabajar con datos externos manteniendo conexión con el origen.

| Importar | Vincular |
| --- | --- |
| Copia datos dentro de Access. | Mantiene enlace con origen externo. |
| Los cambios posteriores del origen no siempre se reflejan. | Puede reflejar cambios del origen. |
| Útil si se quiere trabajar de forma independiente. | Útil si el origen se actualiza fuera de Access. |

#### Exportar

Exportar permite guardar o enviar datos a otros formatos:

- Excel.
- Texto/CSV.
- PDF.
- Otra base de datos.
- XML u otros formatos disponibles.

Trampa histórica: exportar no es importar. Exportar saca datos de Access; importar trae datos hacia Access.

### 2.9. Power BI

Power BI es una herramienta de inteligencia de negocio para conectar datos, transformarlos, modelarlos y crear visualizaciones e informes interactivos.

| Elemento | Función |
| --- | --- |
| Power BI Desktop | Aplicación de escritorio para crear informes y modelos. |
| Conectores | Permiten traer datos de Excel, bases de datos, web, etc. |
| Power Query | Transformación y limpieza de datos. |
| Modelo de datos | Relaciones y medidas entre tablas. |
| Visualizaciones | Gráficos, tablas, tarjetas, mapas, segmentadores. |
| Informe | Conjunto de páginas visuales interactivas. |
| Panel/dashboard | Vista resumida de indicadores, especialmente en servicio Power BI. |

#### Access frente a Power BI

| Access | Power BI |
| --- | --- |
| Base de datos de escritorio. | Análisis y visualización de datos. |
| Almacena y gestiona datos. | Conecta, transforma y visualiza datos. |
| Tablas, consultas, formularios, informes. | Modelos, medidas, informes visuales y paneles. |
| Útil para pequeñas aplicaciones de datos. | Útil para análisis y cuadros de mando. |

Trampa: Power BI no sustituye exactamente a Access. Access gestiona bases de datos; Power BI analiza y presenta datos.

### 2.10. Cobertura de la convocatoria

| Punto oficial | Dónde se trabaja |
| --- | --- |
| Principales funciones y utilidades | Access, objetos, base de datos, extensión, apps M365. |
| Tablas | Campos, registros, tipos, propiedades, Autonumeración, clave principal. |
| Consultas | Selección, criterios, cálculos, consultas de acción. |
| Formularios | Entrada y edición visual de datos. |
| Informes | Presentación, agrupación, totales, impresión/exportación. |
| Relaciones | Campos comunes, claves, integridad referencial. |
| Importación, vinculación y exportación | Diferencias, usos y formatos. |
| Power BI | Uso funcional, componentes y diferencia con Access. |

## 3. Conceptos clave

| Concepto | Definición preguntable | Trampa habitual |
| --- | --- | --- |
| `.accdb` | Extensión predeterminada moderna de Access | Confundir con `.xlsx` |
| Tabla | Almacena datos en filas y columnas | Confundir con consulta |
| Registro | Fila de una tabla | Confundir con campo |
| Campo | Columna de una tabla | Confundir con registro |
| Clave principal | Identifica de forma única un registro | Pensar que cualquier campo sirve |
| Autonumeración | Valor único automático | Pensar que da formato a fechas |
| Vista Diseño | Define campos de una tabla | Confundir con Vista Hoja de datos |
| Propiedades de campo | Formato, título, máscara, valor predeterminado | Confundir con propiedades personales del archivo |
| Consulta | Obtiene, filtra, combina o calcula datos | Pensar que siempre almacena datos |
| Formulario | Interfaz para introducir o consultar datos | Confundir con informe |
| Informe | Presenta datos para imprimir/exportar | Confundir con formulario |
| Relación | Asociación entre campos comunes | Confundir con registro |
| Importar | Traer datos externos a Access | Confundir con exportar |
| Vincular | Conectar con origen externo | Confundir con copiar datos |
| Exportar | Sacar datos hacia otro formato | Confundir con importar |
| Power BI | Análisis y visualización de datos | Confundir con base de datos Access |

## 4. Articulos importantes

No hay artículos legales aplicables. Es materia práctica de ofimática. Las referencias relevantes son funcionales:

| Área | Referencia práctica |
| --- | --- |
| Archivo Access | `.accdb`. |
| Tablas | Campos, registros, tipos de datos, Vista Diseño. |
| Campos | Propiedades: formato, título, máscara, valor predeterminado. |
| Claves | Clave principal y Autonumeración. |
| Consultas | Filtrar, combinar, calcular y obtener datos. |
| Formularios | Entrada y consulta visual de datos. |
| Informes | Presentación, impresión, exportación. |
| Relaciones | Campos comunes e integridad referencial. |
| Datos externos | Importar, vincular y exportar. |
| Power BI | Conectar, transformar, modelar y visualizar datos. |

## 5. Errores tipicos

| Error | Corrección |
| --- | --- |
| Confundir tabla y consulta | La tabla almacena; la consulta obtiene o transforma. |
| Confundir campo y registro | Campo = columna; registro = fila. |
| Confundir formulario e informe | Formulario introduce/consulta; informe presenta/imprime. |
| Pensar que la consulta almacena directamente registros propios | Normalmente trabaja sobre tablas. |
| Confundir importar y exportar | Importar trae; exportar saca. |
| Confundir importar y vincular | Importar copia; vincular conecta con origen externo. |
| Pensar que Power BI es una base de datos Access | Power BI analiza y visualiza datos. |
| Confundir `.accdb` con `.xlsx` | `.accdb` es Access; `.xlsx` es Excel. |
| Pensar que Autonumeración genera números aleatorios de negocio | Sirve como identificador automático. |
| Confundir clave principal con campo numérico cualquiera | La clave identifica inequívocamente. |
| Confundir Vista Diseño con Vista Hoja de datos | Diseño define estructura; hoja muestra datos. |
| Confundir relación con informe | La relación vincula tablas; el informe presenta datos. |

## 6. Preguntas historicas

| Id | Subtema | Qué preguntó | Respuesta |
| --- | --- | --- | :---: |
| `2023-E2-010` | Access y Power BI | Bases abiertas en una instancia de Access | B |
| `2023-E2-013` | Tablas Access | Uso de campo Autonumeración | B |
| `2023-E2-016` | Tablas Access | Propiedades de campo | A |
| `2023-E2-023` | Access y Power BI | Extensión predeterminada de Access | B |
| `2025-E2-009` | Access y Power BI | Aplicación para documentos de texto | B |
| `2025-E2-016` | Importación y exportación | Qué es importar datos | D |
| `2025-E2-017` | Tablas Access | Qué permite una consulta | B |
| `2025-E2-018` | Tablas Access | Vista para definir campos de tabla | C |
| `2025-E2-019` | Tablas Access | Qué identifica de forma única un registro | C |
| `2025-E2-020` | Tablas Access | Qué es una tabla | C |
| `2025-E2-034` | Tablas Access | Asociación entre campos comunes de tablas | A |

## 7. Test de entrenamiento

1. ¿Cuál es la extensión predeterminada moderna de una base de datos de Access?
   A. `.xlsx`
   B. `.accdb`
   C. `.docx`
   D. `.pbix`

2. En Access, una tabla sirve para:
   A. Almacenar datos en filas y columnas
   B. Diseñar diapositivas
   C. Crear documentos de texto
   D. Enviar correos

3. ¿Qué es un registro?
   A. Una columna
   B. Una fila de una tabla
   C. Una relación
   D. Un informe

4. ¿Qué es un campo?
   A. Una columna de una tabla
   B. Una base de datos completa
   C. Un formulario impreso
   D. Un panel de Power BI

5. ¿Qué identifica de forma única un registro?
   A. Un campo de clave principal
   B. Un campo de texto cualquiera
   C. Un informe
   D. Una máscara de entrada

6. ¿Para qué se usa normalmente un campo Autonumeración?
   A. Para proporcionar un valor único automático
   B. Para dar formato a fechas
   C. Para crear gráficos
   D. Para exportar a PDF

7. ¿Qué vista permite definir campos y tipos de datos de una tabla?
   A. Vista Diseño
   B. Vista Preimpresión
   C. Vista Presentación
   D. Vista Calendario

8. `Formato`, `Título`, `Máscara de entrada` y `Valor predeterminado` son:
   A. Propiedades de campo
   B. Tipos de informe
   C. Relaciones
   D. Aplicaciones de Microsoft 365

9. Una consulta permite:
   A. Obtener, filtrar, combinar o calcular datos
   B. Almacenar siempre registros propios independientes
   C. Diseñar únicamente formularios
   D. Cambiar la extensión de Access

10. Un formulario sirve principalmente para:
    A. Introducir o consultar datos mediante una interfaz visual
    B. Sustituir la clave principal
    C. Crear una relación física entre discos
    D. Comprimir la base de datos

11. Un informe sirve principalmente para:
    A. Presentar datos para imprimir, exportar o distribuir
    B. Introducir datos en todas las tablas
    C. Crear campos Autonumeración
    D. Definir la extensión del archivo

12. Una relación en Access es:
    A. Asociación lógica entre campos comunes de tablas
    B. Un documento de texto
    C. Un gráfico de PowerPoint
    D. Un accesorio de Windows

13. Importar datos significa:
    A. Traer datos externos e incorporarlos a Access
    B. Sacar datos de Access a Excel
    C. Borrar una tabla
    D. Cambiar una consulta a formulario

14. Exportar datos significa:
    A. Enviar datos de Access a otro formato o destino
    B. Traer datos externos a Access
    C. Crear una clave principal
    D. Abrir Word

15. Vincular datos significa:
    A. Conectar con un origen externo manteniendo enlace
    B. Copiar siempre todos los datos dentro de Access
    C. Crear un informe impreso
    D. Eliminar duplicados

16. ¿Qué aplicación se utiliza principalmente para documentos de texto?
    A. Word
    B. Access
    C. Power BI
    D. Excel

17. Power BI se usa principalmente para:
    A. Análisis y visualización de datos
    B. Crear tablas de Access
    C. Editar texto sin formato
    D. Administrar discos

18. Power BI Desktop permite:
    A. Crear informes y modelos de datos
    B. Cambiar la clave principal de Access automáticamente
    C. Abrir una sola tabla de Access
    D. Sustituir a Word

19. ¿Qué elemento de Power BI permite limpiar y transformar datos?
    A. Power Query
    B. Clave principal
    C. Máscara de entrada
    D. Vista Diseño de Access

20. ¿Qué objeto de Access se usa más directamente para imprimir listados con agrupaciones y totales?
    A. Informe
    B. Formulario
    C. Tabla
    D. Campo

21. ¿Qué tipo de consulta muestra datos que cumplen criterios?
    A. Consulta de selección
    B. Formulario
    C. Informe
    D. Relación

22. ¿Qué tipo de relación es la más habitual entre una tabla de clientes y una tabla de pedidos?
    A. Uno a varios
    B. Uno a uno siempre
    C. Varios a varios sin tabla intermedia
    D. Ninguna, Access no relaciona tablas

23. La integridad referencial sirve para:
    A. Mantener coherencia entre tablas relacionadas
    B. Cambiar el color del formulario
    C. Crear archivos `.xlsx`
    D. Convertir informes en consultas

24. ¿Qué diferencia básica hay entre formulario e informe?
    A. Formulario trabaja la entrada/consulta visual; informe presenta datos
    B. El informe siempre almacena datos y el formulario nunca muestra nada
    C. Son el mismo objeto con distinto nombre
    D. El formulario sólo existe en Power BI

25. ¿Qué diferencia básica hay entre tabla y consulta?
    A. La tabla almacena datos; la consulta obtiene o transforma datos
    B. La consulta almacena siempre datos originales
    C. La tabla sólo imprime
    D. No hay diferencia

26. ¿Qué campo puede ser adecuado como clave principal artificial?
    A. `IdEmpleado` Autonumeración
    B. `Nombre`
    C. `Observaciones`
    D. `Ciudad`

27. La máscara de entrada sirve para:
    A. Guiar la forma de introducir datos
    B. Crear informes visuales
    C. Exportar a Power BI
    D. Abrir Word

28. El valor predeterminado de un campo:
    A. Es el valor que aparece por defecto al crear un registro
    B. Es siempre la clave principal
    C. Es una relación entre tablas
    D. Es una consulta de acción

29. ¿Qué opción evita que un campo quede vacío si se configura así?
    A. Requerido
    B. Formulario
    C. Informe
    D. Exportar

30. ¿Qué significa `Indexado` en un campo?
    A. Puede ayudar a búsquedas y evitar duplicados si se configura
    B. Convierte el campo en informe
    C. Elimina relaciones
    D. Cambia Access por Excel

31. Una consulta de acción:
    A. Puede modificar datos, por ejemplo actualizar o eliminar
    B. Sólo muestra datos sin posibilidad de cambios
    C. Es igual a un informe
    D. Sólo existe en Word

32. ¿Qué formato puede ser destino de exportación desde Access?
    A. Excel
    B. Papelera
    C. Administrador de tareas
    D. Panel de navegación

33. ¿Qué archivo se asocia a Power BI Desktop?
    A. `.pbix`
    B. `.accdb`
    C. `.docx`
    D. `.txt`

34. ¿Qué visual de Power BI sirve para filtrar interactivamente un informe?
    A. Segmentador
    B. Campo Autonumeración
    C. Vista Diseño
    D. Máscara de entrada

35. En Access, en una única instancia se trabaja normalmente con:
    A. Una base de datos abierta
    B. Diez bases obligatorias
    C. Todas las bases disponibles
    D. Ninguna base de datos

### Plantilla

| Nº | Respuesta | Explicación |
| ---: | :---: | --- |
| 1 | B | `.accdb` es la extensión moderna de Access. |
| 2 | A | La tabla almacena datos en filas y columnas. |
| 3 | B | Un registro es una fila. |
| 4 | A | Un campo es una columna. |
| 5 | A | La clave principal identifica inequívocamente. |
| 6 | A | Autonumeración proporciona valor único automático. |
| 7 | A | Vista Diseño define campos. |
| 8 | A | Son propiedades de campo. |
| 9 | A | La consulta obtiene, filtra, combina o calcula. |
| 10 | A | El formulario facilita trabajo visual con datos. |
| 11 | A | El informe presenta datos para salida. |
| 12 | A | La relación vincula campos comunes. |
| 13 | A | Importar trae datos externos. |
| 14 | A | Exportar saca datos a otro formato/destino. |
| 15 | A | Vincular mantiene conexión con origen externo. |
| 16 | A | Word trabaja documentos de texto. |
| 17 | A | Power BI analiza y visualiza datos. |
| 18 | A | Power BI Desktop crea informes y modelos. |
| 19 | A | Power Query transforma y limpia datos. |
| 20 | A | Informes sirven para listados y salida. |
| 21 | A | Selección muestra datos con criterios. |
| 22 | A | Un cliente puede tener varios pedidos. |
| 23 | A | Integridad referencial mantiene coherencia. |
| 24 | A | Formulario introduce/consulta; informe presenta. |
| 25 | A | Tabla almacena; consulta obtiene/transforma. |
| 26 | A | Un identificador Autonumeración es clave artificial típica. |
| 27 | A | La máscara guía la entrada de datos. |
| 28 | A | Valor predeterminado aparece por defecto. |
| 29 | A | Requerido impide dejar vacío. |
| 30 | A | Indexado ayuda a búsquedas y duplicados. |
| 31 | A | Las consultas de acción modifican datos. |
| 32 | A | Excel puede ser destino de exportación. |
| 33 | A | `.pbix` es archivo de Power BI Desktop. |
| 34 | A | Segmentador filtra visualmente. |
| 35 | A | Históricamente se pregunta una base por instancia. |

## 8. Esquema final

| Bloque | Qué recordar |
| --- | --- |
| Versión | Microsoft 365 versión escritorio. |
| Access | Base de datos relacional de escritorio. |
| Extensión | `.accdb`. |
| Tabla | Almacena datos en filas y columnas. |
| Registro/campo | Registro = fila; campo = columna. |
| Clave principal | Identifica de forma única. |
| Autonumeración | Valor único automático. |
| Vista Diseño | Define campos y estructura. |
| Propiedades de campo | Formato, título, máscara, valor predeterminado. |
| Consulta | Obtiene, filtra, combina o calcula datos. |
| Formulario | Entrada/consulta visual de datos. |
| Informe | Presentación para imprimir/exportar. |
| Relación | Asociación entre campos comunes. |
| Importar | Traer datos a Access. |
| Vincular | Conectar con origen externo. |
| Exportar | Sacar datos a otro formato. |
| Power BI | Análisis, modelado y visualización de datos. |

Repaso de máxima prioridad:

- `.accdb` = Access.
- Tabla = datos; consulta = obtener/filtrar/calcular; formulario = interfaz; informe = presentación.
- Campo = columna; registro = fila.
- Clave principal = identificación única.
- Autonumeración suele servir como identificador único.
- Vista Diseño = definir campos.
- Relación = vincular campos comunes.
- Importar trae; exportar saca; vincular conecta.
- Power BI visualiza y analiza; Access almacena y gestiona datos.
