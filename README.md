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
