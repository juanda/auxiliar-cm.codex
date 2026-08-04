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

#### Formatos de archivo y vista Backstage

Aunque la extensión histórica clave es `.accdb`, conviene reconocer otros formatos para no caer en distractores.

| Extensión | Significado |
| --- | --- |
| `.accdb` | Formato moderno predeterminado de base de datos Access. |
| `.accde` | Base distribuible/ejecutable, sin modificación directa del código VBA. |
| `.accdt` | Plantilla de base de datos. |
| `.mdb` | Formato antiguo de Access 97-2003. |

En `Archivo` se concentran acciones de administración de la base de datos.

| Opción | Utilidad |
| --- | --- |
| Información | Propiedades, compactar y reparar, cifrar con contraseña si procede. |
| Nuevo | Crear base en blanco o desde plantilla. |
| Abrir | Abrir bases recientes o existentes. |
| Guardar como | Guardar objeto o base en otro formato. |
| Imprimir | Imprimir el objeto activo. |
| Cerrar base de datos | Cierra la base sin cerrar necesariamente Access. |

`Compactar y reparar` reduce espacio no utilizado y corrige ciertos problemas internos. `Cifrar con contraseña` protege la apertura de la base si se configura.

#### Objetos principales de Access

Access no es sólo un archivo con tablas. Una base de datos de Access agrupa objetos que trabajan juntos.

| Objeto | Función | Clave de examen |
| --- | --- | --- |
| Tabla | Almacena los datos. | Es el origen principal de registros. |
| Consulta | Recupera, filtra, combina, calcula o modifica datos. | No es la tabla. |
| Formulario | Facilita introducir o consultar datos. | Interfaz de usuario. |
| Informe | Presenta datos para imprimir o distribuir. | Salida ordenada. |
| Macro | Automatiza acciones sin programar código complejo. | No es una tabla. |
| Módulo | Contiene código VBA. | Nivel avanzado, menos probable. |

#### Panel de navegación

El panel de navegación aparece normalmente a la izquierda y lista los objetos de la base de datos: tablas, consultas, formularios, informes, macros y módulos. Permite abrirlos, renombrarlos, eliminarlos, copiarlos o acceder a opciones mediante el menú contextual.

Trampa: el panel de navegación no almacena datos por sí mismo; muestra y organiza los objetos de la base de datos.

#### Lógica relacional

Access trabaja con tablas relacionadas para evitar duplicar datos. En una base de datos administrativa, por ejemplo, puede haber una tabla de personas y otra de expedientes; cada expediente se vincula con una persona mediante un identificador.

| Mala práctica | Diseño más correcto |
| --- | --- |
| Repetir todos los datos de una persona en cada expediente. | Guardar la persona una vez y relacionar expedientes por clave. |
| Usar nombres como identificador único. | Usar una clave principal estable. |
| Guardar varios valores en un solo campo. | Separar datos en campos o tablas relacionadas. |

Idea de examen: Excel organiza datos en hojas; Access organiza datos en tablas relacionadas con claves, consultas, formularios e informes.

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
| Calculado | Resultado derivado de otros campos, con uso limitado. |
| Búsqueda | Permite elegir valores de una lista o tabla relacionada. |

Trampa: un teléfono, un DNI o un código postal no siempre deben ser de tipo Número. Si no se van a calcular aritméticamente y pueden contener ceros iniciales, letras o formatos, suele tratarse como texto.

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

#### Validación e índices

La calidad de una base de datos depende mucho de sus reglas.

| Recurso | Utilidad |
| --- | --- |
| Regla de validación | Impide valores que no cumplen una condición. |
| Texto de validación | Mensaje que aparece si el dato no cumple la regla. |
| Valor predeterminado | Propone un valor inicial para nuevos registros. |
| Requerido | Evita dejar el campo vacío. |
| Índice con duplicados | Acelera búsquedas en campos repetibles. |
| Índice sin duplicados | Evita repetir valores en ese campo. |

Trampa: que un campo esté indexado no significa necesariamente que sea clave principal; la clave principal identifica de forma única el registro.

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

#### Consultas de acción

Las consultas de acción son más delicadas porque modifican datos. Aunque el examen C2 suele quedarse en el concepto, conviene reconocerlas.

| Consulta de acción | Qué hace |
| --- | --- |
| Actualización | Cambia valores existentes. |
| Anexar | Añade registros a una tabla. |
| Eliminación | Borra registros que cumplen criterios. |
| Creación de tabla | Crea una tabla nueva a partir de resultados. |

Trampa: una consulta de selección muestra datos; una consulta de acción puede cambiarlos. Si el enunciado habla de borrar, anexar o actualizar registros, no es una simple consulta de selección.

#### Consultas con varias tablas

Las consultas pueden combinar tablas relacionadas. Para que el resultado sea correcto hay que unir campos compatibles, normalmente una clave principal con una clave externa.

| Concepto | Significado |
| --- | --- |
| Clave principal | Identifica el registro en la tabla principal. |
| Clave externa | Campo en otra tabla que referencia la clave principal. |
| Combinación interna | Muestra registros relacionados en ambas tablas. |
| Combinación externa | Puede incluir registros sin correspondencia en una de las tablas. |

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
- Validar y controlar mejor la introducción de datos.
- Incorporar botones o acciones frecuentes.

Trampa: el formulario no es lo mismo que la tabla. La tabla almacena datos; el formulario es una interfaz para trabajar con ellos.

#### Vistas y origen de datos de formularios

| Elemento | Idea clave |
| --- | --- |
| Origen del registro | Tabla o consulta de donde salen los datos. |
| Vista Formulario | Uso normal para introducir o consultar registros. |
| Vista Diseño | Modifica estructura, controles y propiedades. |
| Vista Presentación | Ajusta diseño viendo datos. |
| Subformulario | Muestra registros relacionados, por ejemplo pedidos de un cliente. |

Trampa: cambiar el diseño del formulario no equivale a cambiar necesariamente la estructura de la tabla.

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
- Agrupar datos por categorías.
- Calcular totales por grupo o generales.

Trampa: el informe presenta datos; no es la herramienta principal para introducirlos.

#### Secciones y controles de informes

| Elemento | Función |
| --- | --- |
| Encabezado de informe | Aparece al inicio del informe completo. |
| Encabezado de página | Se repite en cada página. |
| Encabezado de grupo | Se muestra al cambiar de grupo. |
| Detalle | Contiene los registros. |
| Pie de grupo | Totales o resúmenes del grupo. |
| Pie de página | Numeración, fecha u otros datos repetidos. |
| Pie de informe | Totales finales o cierre. |

Trampa: un informe puede basarse en una consulta. Eso no lo convierte en consulta; sigue siendo un objeto de presentación.

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

#### Tipos de relación con ejemplo

| Relación | Ejemplo administrativo | Pista de examen |
| --- | --- | --- |
| Uno a uno | Una persona y una ficha complementaria única. | Menos frecuente. |
| Uno a varios | Una unidad administrativa con muchos expedientes. | La más común. |
| Varios a varios | Cursos y alumnos. | Requiere tabla intermedia. |

En una relación uno a varios, la clave principal está en la tabla del lado "uno" y la clave externa en la tabla del lado "varios".

#### Ventana Relaciones

La ventana `Relaciones` muestra tablas como cuadros con sus campos y líneas entre campos relacionados. Desde ella se crean, modifican o eliminan relaciones.

| Elemento | Significado |
| --- | --- |
| Línea de relación | Une campos relacionados. |
| `1` | Lado "uno" de la relación. |
| `∞` | Lado "varios" de la relación. |
| Exigir integridad referencial | Evita incoherencias entre tablas relacionadas. |

Trampa: la ventana Relaciones no es una consulta. Sirve para definir vínculos estructurales entre tablas.

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
| Power BI Service | Servicio web para publicar, compartir y actualizar informes. |
| Power BI Mobile | Aplicación móvil para consultar informes y paneles. |

#### Flujo básico de trabajo en Power BI

| Fase | Qué se hace |
| --- | --- |
| Conectar | Elegir origen de datos: Excel, base de datos, web, etc. |
| Transformar | Limpiar, cambiar tipos, quitar columnas o combinar datos. |
| Modelar | Crear relaciones, medidas y estructura analítica. |
| Visualizar | Crear gráficos, tablas, tarjetas y segmentadores. |
| Publicar/compartir | Distribuir informes o paneles según permisos. |

Power BI Desktop crea normalmente archivos `.pbix`. En el nivel de esta oposición basta con reconocerlo como herramienta de informes visuales y análisis, no como sustituto directo de una base de datos relacional.

| Componente | Uso principal |
| --- | --- |
| Power BI Desktop | Diseñar modelos e informes en escritorio. |
| Power BI Service | Publicar, compartir, programar actualizaciones y consultar paneles en la nube. |
| Power BI Mobile | Consultar informes y paneles desde móvil o tableta. |

Trampa: Desktop diseña; Service publica y comparte; Mobile consulta.

#### Access frente a Power BI

| Access | Power BI |
| --- | --- |
| Base de datos de escritorio. | Análisis y visualización de datos. |
| Almacena y gestiona datos. | Conecta, transforma y visualiza datos. |
| Tablas, consultas, formularios, informes. | Modelos, medidas, informes visuales y paneles. |
| Útil para pequeñas aplicaciones de datos. | Útil para análisis y cuadros de mando. |

Trampa: Power BI no sustituye exactamente a Access. Access gestiona bases de datos; Power BI analiza y presenta datos.

#### Diferencia con Excel

| Excel | Access | Power BI |
| --- | --- | --- |
| Hoja de cálculo y análisis tabular. | Base de datos relacional de escritorio. | Inteligencia de negocio y visualización. |
| Fórmulas en celdas. | Tablas, claves, relaciones y consultas. | Modelos, medidas y visuales. |
| Muy flexible para cálculos rápidos. | Mejor para datos estructurados relacionados. | Mejor para cuadros de mando e informes interactivos. |

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
| `.accde` | Base distribuible sin edición directa de código | Confundir con plantilla |
| `.accdt` | Plantilla de Access | Confundir con base normal |
| `.mdb` | Formato antiguo de Access | Pensar que es Excel |
| Panel de navegación | Lista objetos de la base | Pensar que almacena registros |
| Tabla | Almacena datos en filas y columnas | Confundir con consulta |
| Registro | Fila de una tabla | Confundir con campo |
| Campo | Columna de una tabla | Confundir con registro |
| Clave principal | Identifica de forma única un registro | Pensar que cualquier campo sirve |
| Clave externa | Campo que referencia una clave principal de otra tabla | Confundir con clave principal |
| Autonumeración | Valor único automático | Pensar que da formato a fechas |
| Vista Diseño | Define campos de una tabla | Confundir con Vista Hoja de datos |
| Propiedades de campo | Formato, título, máscara, valor predeterminado | Confundir con propiedades personales del archivo |
| Regla de validación | Condición que debe cumplir un dato | Confundir con formato visual |
| Índice | Ayuda a buscar u ordenar y puede impedir duplicados | Pensar que siempre es clave principal |
| Consulta | Obtiene, filtra, combina o calcula datos | Pensar que siempre almacena datos |
| Consulta de acción | Actualiza, anexa, elimina o crea tabla | Confundir con consulta de selección |
| Formulario | Interfaz para introducir o consultar datos | Confundir con informe |
| Subformulario | Muestra datos relacionados dentro de un formulario | Confundir con informe |
| Informe | Presenta datos para imprimir/exportar | Confundir con formulario |
| Relación | Asociación entre campos comunes | Confundir con registro |
| Integridad referencial | Mantiene coherencia entre tablas relacionadas | Confundir con validación de campo |
| Ventana Relaciones | Muestra tablas y líneas de relación | Confundir con consulta |
| Importar | Traer datos externos a Access | Confundir con exportar |
| Vincular | Conectar con origen externo | Confundir con copiar datos |
| Exportar | Sacar datos hacia otro formato | Confundir con importar |
| Power BI | Análisis y visualización de datos | Confundir con base de datos Access |
| `.pbix` | Archivo de Power BI Desktop | Confundir con `.accdb` |
| Power BI Service | Publicación y compartición en la nube | Confundir con Desktop |
| Power BI Mobile | Consulta desde móvil/tableta | Confundir con diseño de informes |

## 4. Artículos importantes

No hay artículos legales aplicables. Es materia práctica de ofimática. Las referencias relevantes son funcionales:

| Área | Referencia práctica |
| --- | --- |
| Archivo Access | `.accdb`. |
| Otros formatos | `.accde`, `.accdt`, `.mdb`. |
| Backstage | Compactar y reparar, cifrar con contraseña, guardar como, cerrar base. |
| Panel de navegación | Objetos: tablas, consultas, formularios, informes, macros y módulos. |
| Tablas | Campos, registros, tipos de datos, Vista Diseño. |
| Campos | Propiedades: formato, título, máscara, valor predeterminado. |
| Claves | Clave principal y Autonumeración. |
| Consultas | Filtrar, combinar, calcular y obtener datos. |
| Formularios | Entrada y consulta visual de datos. |
| Informes | Presentación, impresión, exportación. |
| Relaciones | Campos comunes e integridad referencial. |
| Ventana Relaciones | Símbolos `1` y `∞`, líneas entre campos. |
| Datos externos | Importar, vincular y exportar. |
| Power BI | Desktop, Service, Mobile; conectar, transformar, modelar, visualizar y compartir. |

## 5. Errores tipicos

| Error | Corrección |
| --- | --- |
| Confundir tabla y consulta | La tabla almacena; la consulta obtiene o transforma. |
| Confundir campo y registro | Campo = columna; registro = fila. |
| Confundir formulario e informe | Formulario introduce/consulta; informe presenta/imprime. |
| Pensar que la consulta almacena directamente registros propios | Normalmente trabaja sobre tablas. |
| Confundir consulta de selección con consulta de acción | La de acción puede modificar datos. |
| Confundir importar y exportar | Importar trae; exportar saca. |
| Confundir importar y vincular | Importar copia; vincular conecta con origen externo. |
| Pensar que Power BI es una base de datos Access | Power BI analiza y visualiza datos. |
| Pensar que Power BI almacena y gestiona datos como Access | Su función principal es modelar, analizar y visualizar. |
| Confundir `.accdb` con `.xlsx` | `.accdb` es Access; `.xlsx` es Excel. |
| Confundir `.pbix` con `.accdb` | `.pbix` es Power BI Desktop; `.accdb` es Access. |
| Confundir `.accdt` con `.accdb` | `.accdt` es plantilla; `.accdb` base normal. |
| Confundir `.mdb` con formato actual | `.mdb` es formato antiguo. |
| Pensar que Compactar y reparar exporta datos | Es mantenimiento interno de la base. |
| Pensar que cifrar con contraseña es una propiedad visual | Protege la apertura si se configura. |
| Pensar que Autonumeración genera números aleatorios de negocio | Sirve como identificador automático. |
| Confundir clave principal con campo numérico cualquiera | La clave identifica inequívocamente. |
| Confundir clave principal con clave externa | La externa referencia a la principal en otra tabla. |
| Confundir Vista Diseño con Vista Hoja de datos | Diseño define estructura; hoja muestra datos. |
| Confundir relación con informe | La relación vincula tablas; el informe presenta datos. |
| Confundir Power BI Desktop, Service y Mobile | Desktop diseña; Service publica/compartir; Mobile consulta. |

## 6. Preguntas históricas

| Id | Subtema | Qué preguntó | Respuesta |
| --- | --- | --- | :---: |
| `2023-E2-006` | Tablas Access | Qué es un Campo en una tabla de Access | C |
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
   A. Una fila de una tabla
   B. Una columna
   C. Una relación
   D. Un informe

4. ¿Qué es un campo?
   A. Una base de datos completa
   B. Un formulario impreso
   C. Un panel de Power BI
   D. Una columna de una tabla

5. ¿Qué identifica de forma única un registro?
   A. Un campo de texto cualquiera
   B. Un informe
   C. Una máscara de entrada
   D. Un campo de clave principal

6. ¿Para qué se usa normalmente un campo Autonumeración?
   A. Para dar formato a fechas
   B. Para proporcionar un valor único automático
   C. Para crear gráficos
   D. Para exportar a PDF

7. ¿Qué vista permite definir campos y tipos de datos de una tabla?
   A. Vista Diseño
   B. Vista Preimpresión
   C. Vista Presentación
   D. Vista Calendario

8. `Formato`, `Título`, `Máscara de entrada` y `Valor predeterminado` son:
   A. Tipos de informe
   B. Relaciones
   C. Propiedades de campo
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
    A. Introducir datos en todas las tablas
    B. Crear campos Autonumeración
    C. Definir la extensión del archivo
    D. Presentar datos para imprimir, exportar o distribuir

12. Una relación en Access es:
    A. Un documento de texto
    B. Un gráfico de PowerPoint
    C. Asociación lógica entre campos comunes de tablas
    D. Un accesorio de Windows

13. Importar datos significa:
    A. Sacar datos de Access a Excel
    B. Traer datos externos e incorporarlos a Access
    C. Borrar una tabla
    D. Cambiar una consulta a formulario

14. Exportar datos significa:
    A. Enviar datos de Access a otro formato o destino
    B. Traer datos externos a Access
    C. Crear una clave principal
    D. Abrir Word

15. Vincular datos significa:
    A. Copiar siempre todos los datos dentro de Access
    B. Crear un informe impreso
    C. Conectar con un origen externo manteniendo enlace
    D. Eliminar duplicados

16. ¿Qué aplicación se utiliza principalmente para documentos de texto?
    A. Access
    B. Power BI
    C. Word
    D. Excel

17. Power BI se usa principalmente para:
    A. Crear tablas de Access
    B. Editar texto sin formato
    C. Administrar discos
    D. Análisis y visualización de datos

18. Power BI Desktop permite:
    A. Cambiar la clave principal de Access automáticamente
    B. Abrir una sola tabla de Access
    C. Crear informes y modelos de datos
    D. Sustituir a Word

19. ¿Qué elemento de Power BI permite limpiar y transformar datos?
    A. Clave principal
    B. Máscara de entrada
    C. Vista Diseño de Access
    D. Power Query

20. ¿Qué objeto de Access se usa más directamente para imprimir listados con agrupaciones y totales?
    A. Formulario
    B. Tabla
    C. Campo
    D. Informe

21. ¿Qué tipo de consulta muestra datos que cumplen criterios?
    A. Formulario
    B. Consulta de selección
    C. Informe
    D. Relación

22. ¿Qué tipo de relación es la más habitual entre una tabla de clientes y una tabla de pedidos?
    A. Uno a uno siempre
    B. Varios a varios sin tabla intermedia
    C. Ninguna, Access no relaciona tablas
    D. Uno a varios

23. La integridad referencial sirve para:
    A. Cambiar el color del formulario
    B. Mantener coherencia entre tablas relacionadas
    C. Crear archivos `.xlsx`
    D. Convertir informes en consultas

24. ¿Qué diferencia básica hay entre formulario e informe?
    A. El informe siempre almacena datos y el formulario nunca muestra nada
    B. Son el mismo objeto con distinto nombre
    C. Formulario trabaja la entrada/consulta visual; informe presenta datos
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
    A. Crear informes visuales
    B. Guiar la forma de introducir datos
    C. Exportar a Power BI
    D. Abrir Word

28. El valor predeterminado de un campo:
    A. Es siempre la clave principal
    B. Es el valor que aparece por defecto al crear un registro
    C. Es una relación entre tablas
    D. Es una consulta de acción

29. ¿Qué opción evita que un campo quede vacío si se configura así?
    A. Formulario
    B. Informe
    C. Exportar
    D. Requerido

30. ¿Qué significa `Indexado` en un campo?
    A. Convierte el campo en informe
    B. Puede ayudar a búsquedas y evitar duplicados si se configura
    C. Elimina relaciones
    D. Cambia Access por Excel

31. Una consulta de acción:
    A. Puede modificar datos, por ejemplo actualizar o eliminar
    B. Sólo muestra datos sin posibilidad de cambios
    C. Es igual a un informe
    D. Sólo existe en Word

32. ¿Qué formato puede ser destino de exportación desde Access?
    A. Papelera
    B. Administrador de tareas
    C. Excel
    D. Panel de navegación

33. ¿Qué archivo se asocia a Power BI Desktop?
    A. `.accdb`
    B. `.pbix`
    C. `.docx`
    D. `.txt`

34. ¿Qué visual de Power BI sirve para filtrar interactivamente un informe?
    A. Campo Autonumeración
    B. Vista Diseño
    C. Segmentador
    D. Máscara de entrada

35. En Access, en una única instancia se trabaja normalmente con:
    A. Diez bases obligatorias
    B. Todas las bases disponibles
    C. Una base de datos abierta
    D. Ninguna base de datos

36. ¿Cuál es el orden habitual del flujo de trabajo en Power BI?
    A. Visualizar, modelar, transformar, conectar
    B. Modelar, conectar, visualizar, transformar
    C. Conectar, transformar, modelar, visualizar
    D. Publicar, conectar, transformar, modelar

37. ¿Qué diferencia hay entre Power Query y el modelo de datos en Power BI?
    A. Power Query transforma y limpia datos; el modelo de datos define relaciones y medidas entre tablas
    B. Son el mismo componente con distinto nombre
    C. Power Query crea visualizaciones; el modelo de datos importa archivos
    D. El modelo de datos solo funciona en Power BI Service

38. Un usuario necesita programar la actualización automática de un informe y compartirlo con su equipo desde la nube. ¿Qué componente de Power BI debe usar principalmente?
    A. Power BI Desktop
    B. Power Query
    C. Power BI Mobile
    D. Power BI Service

39. Un opositor necesita crear una base de datos relacional para gestionar el alquiler de material de oficina, con tablas de artículos y préstamos vinculadas. ¿Qué herramienta es la más adecuada?
    A. Power BI Desktop
    B. Access
    C. Power BI Service
    D. Power BI Mobile

40. ¿Qué permiten los conectores de Power BI?
    A. Traer datos desde orígenes como Excel, bases de datos o la web
    B. Cambiar la clave principal de una tabla de Access
    C. Sustituir las relaciones del modelo de datos
    D. Convertir un informe de Access en un formulario

41. ¿Qué diferencia hay entre un informe y un panel (dashboard) en Power BI?
    A. No hay diferencia, son sinónimos exactos
    B. El informe es exclusivo de Power BI Mobile y el panel de Power BI Desktop
    C. El informe es un conjunto de páginas visuales interactivas; el panel es una vista resumida de indicadores, especialmente en el servicio
    D. El panel almacena los datos originales y el informe no

42. ¿Qué afirmación es correcta sobre los tres componentes de Power BI?
    A. Desktop publica y comparte; Service diseña modelos; Mobile edita datos
    B. Los tres cumplen exactamente la misma función y son intercambiables
    C. Mobile diseña modelos; Desktop consulta paneles; Service transforma datos
    D. Desktop diseña modelos e informes; Service publica, comparte y programa actualizaciones; Mobile consulta desde el móvil

43. ¿Es correcto afirmar que Power BI sustituye completamente a Access como base de datos?
    A. Sí, Power BI almacena y gestiona datos igual que una base de datos relacional
    B. No, Access gestiona bases de datos relacionales; Power BI analiza y visualiza datos, no las sustituye como gestor
    C. Sí, pero solo en su versión Mobile
    D. No, porque Power BI solo funciona con archivos de Word

### Plantilla

| Nº | Respuesta | Explicación |
| ---: | :---: | --- |
| 1 | B | `.accdb` es la extensión moderna de Access. |
| 2 | A | La tabla almacena datos en filas y columnas. |
| 3 | A | Un registro es una fila. |
| 4 | D | Un campo es una columna. |
| 5 | D | La clave principal identifica inequívocamente. |
| 6 | B | Autonumeración proporciona valor único automático. |
| 7 | A | Vista Diseño define campos. |
| 8 | C | Son propiedades de campo. |
| 9 | A | La consulta obtiene, filtra, combina o calcula. |
| 10 | A | El formulario facilita trabajo visual con datos. |
| 11 | D | El informe presenta datos para salida. |
| 12 | C | La relación vincula campos comunes. |
| 13 | B | Importar trae datos externos. |
| 14 | A | Exportar saca datos a otro formato/destino. |
| 15 | C | Vincular mantiene conexión con origen externo. |
| 16 | C | Word trabaja documentos de texto. |
| 17 | D | Power BI analiza y visualiza datos. |
| 18 | C | Power BI Desktop crea informes y modelos. |
| 19 | D | Power Query transforma y limpia datos. |
| 20 | D | Informes sirven para listados y salida. |
| 21 | B | Selección muestra datos con criterios. |
| 22 | D | Un cliente puede tener varios pedidos. |
| 23 | B | Integridad referencial mantiene coherencia. |
| 24 | C | Formulario introduce/consulta; informe presenta. |
| 25 | A | Tabla almacena; consulta obtiene/transforma. |
| 26 | A | Un identificador Autonumeración es clave artificial típica. |
| 27 | B | La máscara guía la entrada de datos. |
| 28 | B | Valor predeterminado aparece por defecto. |
| 29 | D | Requerido impide dejar vacío. |
| 30 | B | Indexado ayuda a búsquedas y duplicados. |
| 31 | A | Las consultas de acción modifican datos. |
| 32 | C | Excel puede ser destino de exportación. |
| 33 | B | `.pbix` es archivo de Power BI Desktop. |
| 34 | C | Segmentador filtra visualmente. |
| 35 | C | Históricamente se pregunta una base por instancia. |
| 36 | C | El flujo habitual es conectar, transformar, modelar y visualizar. |
| 37 | A | Power Query transforma datos; el modelo de datos define relaciones y medidas. |
| 38 | D | Power BI Service publica, comparte y programa actualizaciones en la nube. |
| 39 | B | Access es la herramienta para bases de datos relacionales con tablas vinculadas. |
| 40 | A | Los conectores traen datos de Excel, bases de datos, web, etc. |
| 41 | C | El informe agrupa páginas visuales; el panel resume indicadores, sobre todo en el servicio. |
| 42 | D | Desktop diseña; Service publica/comparte; Mobile consulta. |
| 43 | B | Power BI no sustituye a Access como gestor de bases de datos: analiza y visualiza. |

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
