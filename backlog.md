# Backlog de trabajo

Proyecto: temario eficaz para Auxiliar Administrativo Comunidad de Madrid C2, convocatoria 2026.

Este backlog ordena el trabajo pendiente por utilidad práctica para preparar el examen. El objetivo es avanzar de forma incremental, dejando cada bloque en estado usable antes de pasar al siguiente.

## Estado global

| Area | Estado | Nota |
| --- | --- | --- |
| Convocatoria y programa | Hecho | Convocatoria 2026 y programa oficial disponibles. |
| Examenes oficiales | Hecho | Cargados 2017, 2021, 2023 y 2025. |
| Extraccion de preguntas | Hecho con observaciones | 330 preguntas extraidas; 15 psicotecnicas visuales/tabulares requieren revision manual. |
| Clasificacion | Hecho | Preguntas clasificadas por tema, subtema, tipo y dificultad. |
| Estadisticas | Hecho basico | Frecuencias y tendencias generadas; faltan graficos. |
| Temario | Hecho inicial completo | 21 temas redactados. Pendiente revision fina por cobertura y version oficial. |
| Esquemas | Hecho inicial completo | 21 esquemas generados. |
| Tests por tema | Hecho inicial completo | 21 tests por tema generados. |
| Tests de bloque | En curso | Bloque II hecho; Bloque I pendiente. |
| Flashcards | Pendiente | Archivos creados pero vacios. |
| Simulacros | Pendiente | Archivos creados pero vacios. |
| Psicotecnicos de academia | Pendiente | 31 DOCX disponibles como fuente de entrenamiento no oficial. |
| README | Pendiente | Archivo vacio. |

## Proxima tarea recomendada

**Crear `09_simulacros/simulacro_01.md`.**

Motivo: ya existe un test completo del Bloque II. El siguiente paso de mayor valor es crear un simulacro oficial completo para practicar tiempos, mezcla de materias y penalizacion.

Criterios de terminado:

- Incluir primer ejercicio: 30 psicotecnicas + 30 Bloque I + 5 reserva.
- Incluir segundo ejercicio: 30 Bloque II + 5 reserva.
- Incluir instrucciones de tiempo.
- Incluir correccion con penalizacion de 1/3 por error.
- Separar claramente preguntas ordinarias y de reserva.

## Fase 1. Cerrar practica esencial

### 1. Test Bloque II

- Estado: Hecho
- Archivo: `07_tests/test_bloque_II.md`
- Prioridad: Alta
- Resultado esperado: test de 30 preguntas de ofimatica, estilo segundo ejercicio.

### 2. Simulacro 01

- Estado: Pendiente
- Archivo: `09_simulacros/simulacro_01.md`
- Prioridad: Alta
- Resultado esperado: simulacro tipo oficial con primer ejercicio y segundo ejercicio.
- Composicion:
  - Primer ejercicio: 30 psicotecnicas + 30 Bloque I + 5 reserva.
  - Segundo ejercicio: 30 Bloque II + 5 reserva.
  - Correccion con penalizacion de 1/3 por error.

### 3. Test Bloque I

- Estado: Pendiente
- Archivo: `07_tests/test_bloque_I.md`
- Prioridad: Alta
- Resultado esperado: test de 30 preguntas de los temas 1 a 15.
- Enfoque:
  - Ley 39/2015.
  - Transparencia y proteccion de datos.
  - Funcion publica.
  - Igualdad.
  - Atencion al ciudadano y administracion electronica.
  - Constitucion, Estatuto y Gobierno de la Comunidad de Madrid.

### 4. Flashcards de Constitucion

- Estado: Pendiente
- Archivo: `08_flashcards/anki_constitucion.csv`
- Prioridad: Media
- Resultado esperado: tarjetas Anki en formato `tema,pregunta,respuesta,dificultad`.

### 5. Flashcards de Ley 39/2015

- Estado: Pendiente
- Archivo: `08_flashcards/anki_ley39.csv`
- Prioridad: Media
- Resultado esperado: tarjetas Anki sobre procedimiento administrativo, recursos, silencio, fases y actos.

## Fase 2. Psicotecnicos

### 6. Inventario de psicotecnicos de academia

- Estado: Pendiente
- Carpeta: `01_examenes_originales/psicotecnicos_academias/originales_docx/`
- Prioridad: Alta
- Resultado esperado: indice enriquecido con fuente, fecha/clase, tipo dominante y observaciones.

### 7. Extraccion de psicotecnicos de academia

- Estado: Pendiente
- Prioridad: Alta
- Resultado esperado: banco separado de entrenamiento no oficial.
- Regla: no mezclar con preguntas oficiales sin marcar procedencia.

### 8. Entrenamiento psicotecnico por tipo

- Estado: Pendiente
- Prioridad: Alta
- Archivos sugeridos:
  - `07_tests/test_psicotecnico_verbal.md`
  - `07_tests/test_psicotecnico_numerico.md`
  - `07_tests/test_psicotecnico_logico.md`
  - `07_tests/test_psicotecnico_atencion.md`

## Fase 3. Simulacros completos

### 9. Simulacro 02

- Estado: Pendiente
- Archivo: `09_simulacros/simulacro_02.md`
- Prioridad: Media
- Resultado esperado: segundo simulacro oficial completo, con distribucion distinta al simulacro 01.

### 10. Simulacro 03

- Estado: Pendiente
- Archivo: `09_simulacros/simulacro_03.md`
- Prioridad: Media
- Resultado esperado: tercer simulacro oficial completo, mas exigente y con preguntas predictivas.

### 11. Plantilla de correccion de simulacros

- Estado: Pendiente
- Prioridad: Media
- Resultado esperado: sistema comun de puntuacion:
  - Acierto: +1.
  - Error: -1/3.
  - Blanco: 0.
  - Calculo por ejercicio.

## Fase 4. Revision fina del temario

### 12. Auditoria de cobertura por tema

- Estado: Pendiente
- Prioridad: Media
- Resultado esperado: comprobar que cada tema permite contestar sus preguntas historicas.
- Metodo:
  - Revisar preguntas historicas del tema.
  - Buscar si la respuesta esta cubierta en el desarrollo.
  - Ampliar lagunas detectadas.

### 13. Revision de version oficial en ofimatica

- Estado: Pendiente
- Prioridad: Alta
- Temas: 16, 17, 18, 19, 20 y 21.
- Resultado esperado: eliminar o matizar referencias obsoletas de Office 2016 cuando puedan inducir error.
- Version base:
  - Windows 10.
  - Microsoft 365 version escritorio.

### 14. Normalizacion de secciones

- Estado: Pendiente
- Prioridad: Baja
- Resultado esperado: unificar nombres de secciones:
  - `Articulos importantes`
  - `Errores tipicos`
  - `Preguntas historicas`
- Nota: en ofimatica, sustituir "articulos" por referencias funcionales si procede.

## Fase 5. Estadisticas y seguimiento

### 15. Graficos estadisticos

- Estado: Pendiente
- Carpeta: `04_estadisticas/graficos/`
- Prioridad: Baja
- Resultado esperado:
  - Frecuencia por tema.
  - Frecuencia por subtema.
  - Evolucion por anio.
  - Distribucion por tipo.

### 16. README del proyecto

- Estado: Pendiente
- Archivo: `README.md`
- Prioridad: Media
- Resultado esperado: portada util del proyecto con:
  - Objetivo.
  - Estado actual.
  - Como estudiar con los materiales.
  - Orden recomendado.
  - Avisos sobre fuentes oficiales y psicotecnicos de academia.

## Fase 6. Revision de extraccion

### 17. Revision manual de preguntas visuales/tabulares

- Estado: Pendiente
- Prioridad: Media
- Fuente: `02_preguntas_extraidas/observaciones_extraccion.md`
- Resultado esperado: corregir o completar las preguntas marcadas como `[ver PDF original]`.

Ids afectados:

- `2017-E1-016`
- `2017-E1-037`
- `2025-E1-006`
- `2025-E1-009`
- `2025-E1-011`
- `2025-E1-012`
- `2025-E1-013`
- `2025-E1-016`
- `2025-E1-017`
- `2025-E1-018`
- `2025-E1-019`
- `2025-E1-020`
- `2025-E1-022`
- `2025-E1-023`
- `2025-E1-025`

## Orden de ejecucion recomendado

1. `07_tests/test_bloque_II.md`
2. `09_simulacros/simulacro_01.md`
3. `07_tests/test_bloque_I.md`
4. `08_flashcards/anki_ley39.csv`
5. `08_flashcards/anki_constitucion.csv`
6. Inventario y extraccion de psicotecnicos de academia.
7. Tests psicotecnicos por tipo.
8. Simulacros 02 y 03.
9. Revision fina de ofimatica.
10. README y graficos estadisticos.

## Registro de avance

| Fecha | Cambio | Estado |
| --- | --- | --- |
| 2026-06-22 | Creacion del backlog inicial del proyecto. | Hecho |
| 2026-06-22 | Creacion de `07_tests/test_bloque_II.md` con 30 preguntas y plantilla de correccion. | Hecho |
