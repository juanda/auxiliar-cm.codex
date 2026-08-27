# Temario CAM C2 Auxiliar Administrativo 2026

Material de estudio para la oposición de Auxiliar Administrativo de la Comunidad de Madrid, Grupo C, Subgrupo C2, convocatoria 2026.

El objetivo del proyecto es preparar con eficacia, no construir un temario enciclopedico. Los materiales estan orientados a:

- Cubrir literalmente el programa oficial.
- Priorizar preguntas y patrones históricos.
- Entrenar con tests, simulacros y flashcards.
- Separar fuentes oficiales de material de academia no oficial.
- Mantener trazabilidad entre convocatoria, preguntas históricas y temario.

## Versión oficial de referencia

Según la convocatoria 2026:

- Primer ejercicio: 60 preguntas ordinarias, 5 de reserva, 65 minutos.
  - 30 psicotecnicas.
  - 30 del Bloque I.
- Segundo ejercicio: 30 preguntas ordinarias, 5 de reserva, 35 minutos.
  - Bloque II de ofimatica.
- Penalización: `aciertos - errores / 3`.
- Ofimatica:
  - Windows 10.
  - Microsoft 365 versión escritorio.

Las preguntas históricas de Office 2016 se conservan como referencia de recurrencia cuando tratan funciones que siguen existiendo, pero la versión base de estudio es Microsoft 365 de escritorio.

## Estado actual

| Área | Estado |
| --- | --- |
| Convocatoria y programa | Hecho |
| Examenes oficiales 2017, 2021, 2023 y 2025 | Hecho |
| Extracción de preguntas oficiales | Hecho con observaciones |
| Clasificación por tema, subtema, tipo y dificultad | Hecho |
| Estadísticas de frecuencia y tendencias | Hecho básico |
| Temario 1-21 | Hecho inicial completo |
| Esquemas 1-21 | Hecho inicial completo |
| Tests por tema 1-21 | Hecho inicial completo |
| Tests de bloque | Hecho |
| Tests psicotecnicos por tipo | Hecho |
| Simulacros 01, 02 y 03 | Hecho |
| Flashcards | Constitución y Ley 39/2015 |
| Auditoria de cobertura histórica | Hecho |
| Gráficos estadisticos | Pendiente |

## Estructura

| Carpeta | Contenido |
| --- | --- |
| `00_convocatoria/` | Convocatoria 2026 y programa oficial. |
| `01_examenes_originales/` | Examenes oficiales y psicotecnicos de academia. |
| `02_preguntas_extraidas/` | Preguntas extraidas, normalizadas y banco psicotecnico de academia. |
| `03_clasificacion/` | Clasificación por temas, subtemas y psicotecnicos. |
| `04_estadisticas/` | Frecuencias, tendencias y auditoria de cobertura. |
| `05_temario/` | Desarrollo completo de los 21 temas. |
| `06_esquemas/` | Esquemas de repaso rápido por tema. |
| `07_tests/` | Tests por tema, por bloque y psicotecnicos. |
| `08_flashcards/` | CSV para Anki. |
| `09_simulacros/` | Simulacros completos y plantilla comun de corrección. |

## Materiales principales

### Temario

- `05_temario/tema_01_constitucion.md` a `05_temario/tema_21_m365.md`.
- Cada tema sigue la estructura:
  - Resumen ejecutivo.
  - Desarrollo.
  - Conceptos clave.
  - Referencias o artículos importantes.
  - Errores tipicos.
  - Preguntas históricas.
  - Test de entrenamiento.
  - Esquema final.

### Esquemas

- `06_esquemas/tema_01_mapa_mental.md`
- `06_esquemas/tema_02_esquema.md` a `06_esquemas/tema_21_esquema.md`

Usalos para repaso rápido después de estudiar el desarrollo del tema.

### Tests

- Tests por tema: `07_tests/test_tema_01.md` a `07_tests/test_tema_21.md`.
- Tests de bloque:
  - `07_tests/test_bloque_I.md`
  - `07_tests/test_bloque_II.md`
- Tests psicotecnicos:
  - `07_tests/test_psicotecnico_verbal.md`
  - `07_tests/test_psicotecnico_numerico.md`
  - `07_tests/test_psicotecnico_logico.md`
  - `07_tests/test_psicotecnico_atencion.md`

### Simulacros

- `09_simulacros/simulacro_01.md`
- `09_simulacros/simulacro_02.md`
- `09_simulacros/simulacro_03.md`
- `09_simulacros/plantilla_correccion_simulacros.md`

Cada simulacro tiene:

- Primer ejercicio completo.
- Segundo ejercicio completo.
- Preguntas de reserva.
- Plantilla de corrección.

### Flashcards

- `08_flashcards/anki_constitucion.csv`
- `08_flashcards/anki_ley39.csv`

Formato:

```csv
tema,pregunta,respuesta,dificultad
```

### Estadísticas y auditorias

- `04_estadisticas/frecuencia_temas.md`
- `04_estadisticas/frecuencia_subtemas.md`
- `04_estadisticas/tendencias.md`
- `04_estadisticas/auditoria_cobertura_temas.md`

La auditoria de cobertura confirma:

- 225 preguntas históricas de temas 1-21 revisadas.
- 225/225 IDs históricos citados en su tema correspondiente.
- 21/21 temas con las 8 secciones obligatorias.

## Orden recomendado de estudio

1. Leer la convocatoria y el programa oficial en `00_convocatoria/`.
2. Empezar por Bloque II, porque es el segundo ejercicio y tiene versión oficial cerrada:
   - Tema 17 Word.
   - Tema 18 Excel.
   - Tema 16 Windows.
   - Tema 20 Outlook.
   - Tema 21 Microsoft 365.
   - Tema 19 Access y Power BI.
3. Hacer `07_tests/test_bloque_II.md`.
4. Estudiar Bloque I por prioridad:
   - Tema 6 Ley 39/2015.
   - Tema 8 Transparencia y protección de datos.
   - Tema 10 Función pública.
   - Tema 14 Atención ciudadana y administración electrónica.
   - Tema 1 Constitución.
   - Tema 2 Estatuto.
   - Resto de temas.
5. Hacer `07_tests/test_bloque_I.md`.
6. Entrenar psicotecnicos por tipo.
7. Hacer los simulacros 01, 02 y 03 en condiciones de tiempo.
8. Corregir con `09_simulacros/plantilla_correccion_simulacros.md`.
9. Revisar errores por tema y repetir esquemas/tests.

## Como corregir

Usa siempre la formula:

```text
puntuación = aciertos - errores / 3
```

Las preguntas en blanco no suman ni restan.

En simulacros:

- Primer ejercicio: 60 preguntas ordinarias.
- Segundo ejercicio: 30 preguntas ordinarias.
- Las reservas solo sustituyen preguntas anuladas del mismo ejercicio.

## Avisos sobre fuentes

### Fuentes oficiales

El banco oficial esta en:

- `02_preguntas_extraidas/preguntas.json`
- `02_preguntas_extraidas/preguntas.csv`
- `02_preguntas_extraidas/preguntas_normalizadas.json`

Estas preguntas proceden de examenes oficiales cargados en `01_examenes_originales/`.

### Psicotecnicos de academia

El material psicotecnico de academia no debe mezclarse con preguntas oficiales sin marcar procedencia.

Banco separado:

- `02_preguntas_extraidas/psicotecnicos_academia.json`
- `02_preguntas_extraidas/psicotecnicos_academia.csv`

Procedencia marcada como:

```text
academia_no_oficial
```

Uso recomendado:

- Entrenar patrones.
- Crear práctica adicional.
- No usarlo como estadística oficial de recurrencia.

### Preguntas inspiradas en el test aleatorio de opofimaticaestado.com

Algunas preguntas de `07_tests/test_tema_16.md` a `test_tema_21.md` son de elaboración propia,
inspiradas en los contenidos del test aleatorio público de la academia opofimaticaestado.com
(Windows 10, Word, Excel, Access, Outlook e Internet). No son enunciados copiados literalmente:
se localizó qué contenidos y trampas no estaban ya cubiertos y se redactaron preguntas nuevas,
verificando cada dato contra el comportamiento real de la aplicación. Cada test indica en su
cabecera el rango exacto de preguntas afectado.

En el Tema 16 se retiraron después 11 de esas preguntas (y otras 6 de una ronda anterior) tras
comprobar que se alejaban del epígrafe oficial ("El explorador de Windows...") hacia Windows en
general (Configuración, Personalización, redes básicas, Windows Hello, Cortana, OneDrive); el
rango que queda ya refleja esa depuración.

| Tema | Preguntas añadidas | Cantidad | Contenidos cubiertos |
| --- | :---: | ---: | --- |
| 16 Windows | 75-86 | 12 | Administrador de tareas, especificaciones del equipo, atajos de Lupa y de captura de pantalla, Aero Peek, comprobador de errores en disco, ficha Compartir del Explorador, Propiedades de carpeta |
| 17 Word | 81-98 | 18 | Atajo de hipervínculo, efectos de fuente en la cinta, espaciado real entre párrafos, tipos de tabulación, Autoguardado, Backstage, sangría de primera línea, función `RAND`, Proteger documento |
| 18 Excel | 91-105 | 15 | R cuadrado, botón Seleccionar datos, celda bloqueada vs hoja protegida, referencias mixtas, `DIA.LAB`, argumentos de `BUSCARV`, protección de Estructura, funciones de matriz dinámica (`FILTRAR`, `ORDENARPOR`) |
| 19 Access y Power BI | 44-66 | 23 | Tipos reales de consulta, tamaños de campo numérico, funciones de dominio, Regla de validación vs Criterio, Documentador de base de datos, propiedad Indexado, máscaras de entrada, Texto largo |
| 20 Outlook | 41-65 | 25 | IMAP vs POP3, ubicación de `Ejecutar reglas ahora`/`Autoarchivar`, Backstage sin Exchange, grupo Refinar, Archivar vs Carpeta de búsqueda, acciones de reglas, extensiones `.pst`/`.msg`/`.vcf` |
| 21 M365 e Internet | 31-55 | 25 | SSL, Extranet, direcciones IP, DNS, arquitectura cliente-servidor, topologías de red, ARP/IMAP, atajos de Microsoft Edge, origen histórico de Internet |

**Total: 118 preguntas nuevas** repartidas entre los 6 tests del Bloque II.

### Preguntas inspiradas en simulacros y en un examen oficial de la AGE (opofimaticaestado.com)

Además del test aleatorio, opofimaticaestado.com publica gratis 3 simulacros completos de examen
(Abril 2026, Diciembre 2024 y Diciembre 2025, con preguntas de informática, Internet, Windows,
Word, Excel, Access y Outlook mezcladas) y un examen oficial reciente de la AGE (Administración
General del Estado, no de la Comunidad de Madrid) con su plantilla de corrección del INAP. El resto
de secciones de la plataforma ("Histórico de tests", "Otros exámenes" y casi todos los "Tests
mensuales") todavía no están activas en la web.

Se recorrieron esas 4 fuentes y, de nuevo, se redactaron preguntas de elaboración propia inspiradas
en su contenido (sin copiar enunciados literales), descartando explícitamente:

- Todo el contenido de informática general sin encaje en ningún tema (hardware, historia de la
  computación, unidades de medida) — no tiene sección propia en este temario.
- Todo el contenido específico de Windows 11 y de Configuración/Personalización general de
  Windows, por el mismo motivo que llevó a depurar el Tema 16 (ver tabla anterior): la versión
  oficial de la convocatoria es Windows 10 y el epígrafe del Tema 16 es "El explorador de Windows".

| Tema | Preguntas añadidas | Cantidad | Contenidos cubiertos |
| --- | :---: | ---: | --- |
| 16 Windows | 87-89 | 3 | Atajo `Windows + R`, pestañas del Administrador de tareas, deshacer una acción en el Explorador |
| 17 Word | 99-108 | 10 | Letra capital, límite del Portapapeles, pestañas de Buscar y reemplazar, atajo de salto de sección, valores de Columnas, ubicación de Tabla de contenido, forma flotante por defecto, campo condicional de combinación de correspondencia, `Ctrl + B` en español, texto alternativo |
| 18 Excel | 106-116 | 11 | Power Query, función `ENCOL`, Administrador de nombres, `MEDIANA` e `IZQUIERDA`, categoría de `CONTARA`, formato de número personalizado, relleno de series alfanuméricas, `SUMAR.SI.CONJUNTO` con fechas, función `REGEXPRUEBA`, recuperación automática de libros |
| 19 Access y Power BI | 67-74 | 8 | Sintaxis de un campo calculado, tipo de dato Sí/No, función `DCONT`, tipos de dato reales de un campo, lenguaje SQL de las consultas, función `CADENA`, combinación Y de criterios, Regla de validación vs Texto de validación |
| 20 Outlook | 66-75 | 10 | Delegar acceso, atajo para marcar como no leído, categorías de color, ubicación de Panel de carpetas y de Leído/No leído, atajo del módulo Contactos, Retrasar entrega, deshacer un envío, restringir acciones al cifrar, Asistente de programación |
| 21 M365 e Internet | 56-60 | 5 | Keylogger, tipos reales de red, VPN, función de un servidor DHCP, Microsoft To Do |

**Total: 47 preguntas nuevas** repartidas entre los 6 tests del Bloque II.

### Preguntas visuales o tabulares pendientes

Hay preguntas psicotecnicas visuales/tabulares que requieren revisión manual desde PDF original. Estan documentadas en:

- `02_preguntas_extraidas/observaciones_extraccion.md`

## Seguimiento del trabajo

El estado incremental esta en:

- `backlog.md`

Tareas pendientes principales:

- Gráficos estadisticos.
- Normalización fina de secciones.
- Revisión manual de preguntas visuales/tabulares.
- Ampliar flashcards y banco psicotecnico si se quiere mas volumen.
