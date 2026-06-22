# Tema 19. Access y Power BI - Esquema de repaso

## Versión oficial

La convocatoria 2026 fija `Microsoft 365 versión escritorio` para Microsoft Office. Access debe estudiarse como Access de escritorio. Las preguntas históricas de Access 2016 se conservan como referencia de recurrencia, no como versión oficial.

## Núcleo del tema

| Concepto | Definición breve |
| --- | --- |
| Access | Base de datos relacional de escritorio. |
| `.accdb` | Extensión moderna de Access. |
| `.accde` | Base distribuible sin edición directa de código VBA. |
| `.accdt` | Plantilla de Access. |
| `.mdb` | Formato antiguo Access 97-2003. |
| Panel de navegación | Lista tablas, consultas, formularios, informes, macros y módulos. |
| Tabla | Almacena datos. |
| Registro | Fila. |
| Campo | Columna. |
| Clave principal | Identifica de forma única. |
| Clave externa | Referencia una clave principal de otra tabla. |
| Consulta | Obtiene, filtra, combina o calcula datos. |
| Consulta de accion | Actualiza, anexa, elimina o crea tabla. |
| Formulario | Interfaz para introducir o consultar datos. |
| Subformulario | Muestra datos relacionados dentro de un formulario. |
| Informe | Presentación para imprimir/exportar. |
| Relación | Asociación entre campos comunes de tablas. |
| Integridad referencial | Mantiene coherencia entre tablas relacionadas. |
| Ventana Relaciones | Muestra tablas, campos y líneas con `1` y `∞`. |
| Power BI | Análisis y visualización de datos. |

## Preguntas historicas clave

| Id | Idea |
| --- | --- |
| `2023-E2-010` | Una base de datos por instancia de Access. |
| `2023-E2-013` | Autonumeración proporciona valor único. |
| `2023-E2-016` | Formato, Título, Máscara y Valor predeterminado son propiedades de campo. |
| `2023-E2-023` | Extensión `.accdb`. |
| `2025-E2-016` | Importar = traer datos externos a Access. |
| `2025-E2-017` | Consulta = obtener, filtrar, combinar o calcular datos. |
| `2025-E2-018` | Vista Diseño define campos de tabla. |
| `2025-E2-019` | Clave principal identifica registro. |
| `2025-E2-020` | Tabla = filas y columnas. |
| `2025-E2-034` | Relación = campos comunes entre tablas. |

## Objetos de Access

| Objeto | Uso |
| --- | --- |
| Tabla | Guardar datos. |
| Consulta | Recuperar, filtrar, combinar, calcular. |
| Formulario | Introducir o consultar datos con interfaz visual. |
| Informe | Presentar, imprimir o exportar datos. |
| Relación | Vincular tablas. |
| Macro | Automatizar acciones. |
| Modulo | Código VBA para automatización avanzada. |

## Tablas y campos

| Elemento | Clave |
| --- | --- |
| Vista Diseño | Define campos, tipos y propiedades. |
| Tipo Texto corto | Codigos, telefonos o datos no calculables. |
| Tipo Numero | Valores con calculo aritmetico. |
| Autonumeracion | Identificador automatico unico. |
| Regla de validacion | Condicion que debe cumplir el dato. |
| Indice | Acelera busqueda o puede impedir duplicados. |

## Consultas

| Tipo | Uso |
| --- | --- |
| Seleccion | Muestra datos que cumplen criterios. |
| Parametros | Pide un valor al ejecutarse. |
| Totales | Agrupa y calcula sumas, recuentos o promedios. |
| Accion | Modifica datos: actualizar, anexar, eliminar o crear tabla. |

## Importar, vincular y exportar

| Operación | Idea |
| --- | --- |
| Importar | Trae datos externos a Access. |
| Vincular | Conecta con datos externos. |
| Exportar | Saca datos de Access a otro formato. |

## Power BI

| Elemento | Idea |
| --- | --- |
| Power BI Desktop | Crear informes y modelos. |
| Power Query | Limpiar y transformar datos. |
| Modelo de datos | Relaciones, tablas y medidas. |
| Visualizaciones | Gráficos, tablas, tarjetas, mapas. |
| Segmentador | Filtro visual. |
| `.pbix` | Archivo de Power BI Desktop. |
| Power BI Service | Publicar, compartir y actualizar informes en la nube. |
| Power BI Mobile | Consultar paneles desde móvil/tableta. |

## Trampas habituales

| Trampa | Respuesta correcta |
| --- | --- |
| Campo vs registro | Campo = columna; registro = fila. |
| Tabla vs consulta | Tabla almacena; consulta obtiene/transforma. |
| Formulario vs informe | Formulario introduce; informe presenta. |
| Consulta de seleccion vs accion | La de accion puede modificar datos. |
| Importar vs exportar | Importar trae; exportar saca. |
| Importar vs vincular | Importar copia; vincular conecta. |
| `.accdb` vs `.xlsx` | Access frente a Excel. |
| `.accdb` vs `.pbix` | Access frente a Power BI Desktop. |
| `.accdb` vs `.accdt` | Base normal frente a plantilla. |
| `.mdb` actual | Es formato antiguo, no el predeterminado moderno. |
| Clave principal vs externa | Principal identifica; externa referencia. |
| Access vs Power BI | Access gestiona datos; Power BI visualiza y analiza. |
| Desktop vs Service vs Mobile | Diseñar, publicar/compartir, consultar. |

## Repaso de una pagina

Prioridad alta:

- `.accdb` es Access.
- `.accde` distribuible, `.accdt` plantilla, `.mdb` antiguo.
- Panel de navegación = objetos de la base.
- Compactar y reparar = mantenimiento interno.
- Cifrar con contraseña = proteger apertura si se configura.
- Tabla = filas y columnas.
- Campo = columna; registro = fila.
- Clave principal = identifica de forma única.
- Clave externa = referencia a otra tabla.
- Integridad referencial = evita incoherencias entre tablas.
- Autonumeración = valor único automático.
- Vista Diseño = definir campos.
- Propiedades: Formato, Título, Máscara de entrada, Valor predeterminado.
- Consulta = obtener, filtrar, combinar o calcular.
- Consulta de accion = puede actualizar, anexar, eliminar o crear tabla.
- Formulario = entrada/consulta; informe = salida/impresion.
- Relación = asociación entre campos comunes.
- Ventana Relaciones: líneas entre tablas, símbolos `1` y `∞`.
- Importar trae datos; exportar saca datos; vincular conecta.
- Power BI = Desktop diseña, Service publica/compartir, Mobile consulta.
