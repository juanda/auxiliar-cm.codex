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
| Temario | Hecho inicial completo | 21 temas redactados. Revision de version oficial y auditoria de cobertura historica hechas. |
| Esquemas | Hecho inicial completo | 21 esquemas generados. |
| Tests por tema | Hecho inicial completo | 21 tests por tema generados. |
| Tests de bloque | Hecho | Bloque I y Bloque II generados. |
| Flashcards | Hecho inicial | Constitucion y Ley 39/2015 generadas. |
| Simulacros | Hecho | Simulacros 01, 02 y 03 hechos; plantilla comun de correccion creada. |
| Psicotecnicos de academia | Hecho inicial | Inventario, primera extraccion separada y tests por tipo realizados; queda ampliar banco si se quiere mas volumen. |
| README | Hecho | Portada util del proyecto creada. |

## Proxima tarea recomendada

**Graficos estadisticos.**

Motivo: ya existe una portada util del proyecto y las estadisticas basicas estan generadas. El siguiente paso de mayor valor es crear graficos para visualizar frecuencia por tema, subtema, evolucion por anio y distribucion por tipo.

Criterios de terminado:

- Crear archivos bajo `04_estadisticas/graficos/`.
- Incluir frecuencia por tema.
- Incluir frecuencia por subtema.
- Incluir evolucion por anio.
- Incluir distribucion por tipo.

## Fase 1. Cerrar practica esencial

### 1. Test Bloque II

- Estado: Hecho
- Archivo: `07_tests/test_bloque_II.md`
- Prioridad: Alta
- Resultado esperado: test de 30 preguntas de ofimatica, estilo segundo ejercicio.

### 2. Simulacro 01

- Estado: Hecho
- Archivo: `09_simulacros/simulacro_01.md`
- Prioridad: Alta
- Resultado esperado: simulacro tipo oficial con primer ejercicio y segundo ejercicio.
- Composicion:
  - Primer ejercicio: 30 psicotecnicas + 30 Bloque I + 5 reserva.
  - Segundo ejercicio: 30 Bloque II + 5 reserva.
  - Correccion con penalizacion de 1/3 por error.

### 3. Test Bloque I

- Estado: Hecho
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

- Estado: Hecho
- Archivo: `08_flashcards/anki_constitucion.csv`
- Prioridad: Media
- Resultado esperado: tarjetas Anki en formato `tema,pregunta,respuesta,dificultad`.

### 5. Flashcards de Ley 39/2015

- Estado: Hecho
- Archivo: `08_flashcards/anki_ley39.csv`
- Prioridad: Media
- Resultado esperado: tarjetas Anki sobre procedimiento administrativo, recursos, silencio, fases y actos.

## Fase 2. Psicotecnicos

### 6. Inventario de psicotecnicos de academia

- Estado: Hecho
- Carpeta: `01_examenes_originales/psicotecnicos_academias/originales_docx/`
- Prioridad: Alta
- Resultado esperado: indice enriquecido con fuente, fecha/clase, tipo dominante y observaciones.

### 7. Extraccion de psicotecnicos de academia

- Estado: Hecho inicial
- Prioridad: Alta
- Resultado esperado: banco separado de entrenamiento no oficial.
- Regla: no mezclar con preguntas oficiales sin marcar procedencia.
- Archivos:
  - `02_preguntas_extraidas/psicotecnicos_academia.json`
  - `02_preguntas_extraidas/psicotecnicos_academia.csv`
- Nota: primera tanda de 22 preguntas extraida desde `psicotecnico_59_reglas_de_tres_fracciones.docx`; las preguntas 17-19 se dejan fuera por presentar cinco opciones y una opcion A vacia en la fuente.

### 8. Entrenamiento psicotecnico por tipo

- Estado: Hecho
- Prioridad: Alta
- Archivos:
  - `07_tests/test_psicotecnico_verbal.md`
  - `07_tests/test_psicotecnico_numerico.md`
  - `07_tests/test_psicotecnico_logico.md`
  - `07_tests/test_psicotecnico_atencion.md`
- Resultado: cuatro tests de 15 preguntas con solucionario y explicacion breve.

## Fase 3. Simulacros completos

### 9. Simulacro 02

- Estado: Hecho
- Archivo: `09_simulacros/simulacro_02.md`
- Prioridad: Media
- Resultado esperado: segundo simulacro oficial completo, con distribucion distinta al simulacro 01.

### 10. Simulacro 03

- Estado: Hecho
- Archivo: `09_simulacros/simulacro_03.md`
- Prioridad: Media
- Resultado esperado: tercer simulacro oficial completo, mas exigente y con preguntas predictivas.

### 11. Plantilla de correccion de simulacros

- Estado: Hecho
- Prioridad: Media
- Archivo: `09_simulacros/plantilla_correccion_simulacros.md`
- Resultado esperado: sistema comun de puntuacion:
  - Acierto: +1.
  - Error: -1/3.
  - Blanco: 0.
  - Calculo por ejercicio.

## Fase 4. Revision fina del temario

### 12. Auditoria de cobertura por tema

- Estado: Hecho
- Prioridad: Media
- Archivo: `04_estadisticas/auditoria_cobertura_temas.md`
- Resultado esperado: comprobar que cada tema permite contestar sus preguntas historicas.
- Metodo:
  - Revisar preguntas historicas del tema.
  - Buscar si la respuesta esta cubierta en el desarrollo.
  - Ampliar lagunas detectadas.
- Resultado: 225/225 preguntas historicas con tema 1-21 citadas en su tema; 21/21 temas con 8 secciones obligatorias.

### 13. Revision de version oficial en ofimatica

- Estado: Hecho
- Prioridad: Alta
- Temas: 16, 17, 18, 19, 20 y 21.
- Resultado esperado: eliminar o matizar referencias obsoletas de Office 2016 cuando puedan inducir error.
- Version base:
  - Windows 10.
  - Microsoft 365 version escritorio.
- Resultado: matizadas referencias de Excel 2016 y Outlook 2016, y reforzada la version base en Windows/Office.

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

- Estado: Hecho
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
6. Tests psicotecnicos por tipo.
7. Graficos estadisticos.

## Registro de avance

| Fecha | Cambio | Estado |
| --- | --- | --- |
| 2026-06-22 | Creacion del backlog inicial del proyecto. | Hecho |
| 2026-06-22 | Creacion de `07_tests/test_bloque_II.md` con 30 preguntas y plantilla de correccion. | Hecho |
| 2026-06-22 | Creacion de `09_simulacros/simulacro_01.md` con dos ejercicios completos, reservas y plantilla de correccion. | Hecho |
| 2026-06-22 | Creacion de `07_tests/test_bloque_I.md` con 30 preguntas y plantilla de correccion. | Hecho |
| 2026-06-22 | Creacion de `08_flashcards/anki_ley39.csv` con 57 tarjetas de repaso. | Hecho |
| 2026-06-22 | Creacion de `08_flashcards/anki_constitucion.csv` con 72 tarjetas de repaso. | Hecho |
| 2026-06-22 | Enriquecimiento de `01_examenes_originales/psicotecnicos_academias/indice.md` con fuente, clase, tipo dominante y observaciones. | Hecho |
| 2026-06-22 | Creacion de banco separado `02_preguntas_extraidas/psicotecnicos_academia.*` con 22 preguntas de academia no oficial. | Hecho inicial |
| 2026-06-22 | Creacion de tests psicotecnicos por tipo en `07_tests/test_psicotecnico_*.md`, con 15 preguntas por tipo y solucionario razonado. | Hecho |
| 2026-06-22 | Creacion de `09_simulacros/simulacro_02.md` con dos ejercicios completos, reservas y plantilla de correccion. | Hecho |
| 2026-06-22 | Creacion de `09_simulacros/simulacro_03.md` con mayor dificultad, dos ejercicios completos, reservas y plantilla de correccion. | Hecho |
| 2026-06-22 | Creacion de `09_simulacros/plantilla_correccion_simulacros.md` para puntuar y comparar simulacros. | Hecho |
| 2026-06-22 | Revision de version oficial en ofimatica: Windows 10 y Microsoft 365 escritorio como base, con matices para referencias historicas 2016. | Hecho |
| 2026-06-22 | Creacion de `04_estadisticas/auditoria_cobertura_temas.md`: 225/225 preguntas historicas trazadas en temas 1-21. | Hecho |
| 2026-06-22 | Redaccion de `README.md` con objetivo, estado, estructura, orden de estudio y avisos de fuentes. | Hecho |
