# Backlog de trabajo

Proyecto: temario eficaz para Auxiliar Administrativo Comunidad de Madrid C2, convocatoria 2026.

Este backlog ordena el trabajo pendiente por utilidad práctica para preparar el examen. El objetivo es avanzar de forma incremental, dejando cada bloque en estado usable antes de pasar al siguiente.

## Estado global

| Área | Estado | Nota |
| --- | --- | --- |
| Convocatoria y programa | Hecho | Convocatoria 2026 y programa oficial disponibles. |
| Examenes oficiales | Hecho | Cargados 2017, 2021, 2023 y 2025. |
| Extracción de preguntas | Hecho con observaciones | 330 preguntas extraidas; 15 psicotecnicas visuales/tabulares requieren revisión manual. |
| Clasificación | Hecho | Preguntas clasificadas por tema, subtema, tipo y dificultad. |
| Estadísticas | Hecho básico | Frecuencias y tendencias generadas; faltan gráficos. |
| Temario | Hecho inicial completo | 21 temas redactados. Revisión de versión oficial y auditoria de cobertura histórica hechas. |
| Esquemas | Hecho inicial completo | 21 esquemas generados. |
| Tests por tema | Hecho inicial completo | 21 tests por tema generados. |
| Tests de bloque | Hecho | Bloque I y Bloque II generados. |
| Flashcards | Hecho inicial | Constitución y Ley 39/2015 generadas. |
| Simulacros | Hecho | Simulacros 01, 02 y 03 hechos; plantilla comun de corrección creada. |
| Psicotecnicos de academia | Hecho inicial | Inventario, primera extracción separada y tests por tipo realizados; queda ampliar banco si se quiere mas volumen. |
| README | Hecho | Portada útil del proyecto creada. |

## Próxima tarea recomendada

**Gráficos estadisticos.**

Motivo: ya existe una portada útil del proyecto y las estadísticas básicas estan generadas. El siguiente paso de mayor valor es crear gráficos para visualizar frecuencia por tema, subtema, evolución por anio y distribución por tipo.

Criterios de terminado:

- Crear archivos bajo `04_estadisticas/gráficos/`.
- Incluir frecuencia por tema.
- Incluir frecuencia por subtema.
- Incluir evolución por anio.
- Incluir distribución por tipo.

## Fase 1. Cerrar práctica esencial

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
- Composición:
  - Primer ejercicio: 30 psicotecnicas + 30 Bloque I + 5 reserva.
  - Segundo ejercicio: 30 Bloque II + 5 reserva.
  - Corrección con penalización de 1/3 por error.

### 3. Test Bloque I

- Estado: Hecho
- Archivo: `07_tests/test_bloque_I.md`
- Prioridad: Alta
- Resultado esperado: test de 30 preguntas de los temas 1 a 15.
- Enfoque:
  - Ley 39/2015.
  - Transparencia y protección de datos.
  - Función pública.
  - Igualdad.
  - Atención al ciudadano y administración electrónica.
  - Constitución, Estatuto y Gobierno de la Comunidad de Madrid.

### 4. Flashcards de Constitución

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

### 7. Extracción de psicotecnicos de academia

- Estado: Hecho inicial
- Prioridad: Alta
- Resultado esperado: banco separado de entrenamiento no oficial.
- Regla: no mezclar con preguntas oficiales sin marcar procedencia.
- Archivos:
  - `02_preguntas_extraidas/psicotecnicos_academia.json`
  - `02_preguntas_extraidas/psicotecnicos_academia.csv`
- Nota: primera tanda de 22 preguntas extraida desde `psicotecnico_59_reglas_de_tres_fracciones.docx`; las preguntas 17-19 se dejan fuera por presentar cinco opciones y una opción A vacia en la fuente.

### 8. Entrenamiento psicotecnico por tipo

- Estado: Hecho
- Prioridad: Alta
- Archivos:
  - `07_tests/test_psicotecnico_verbal.md`
  - `07_tests/test_psicotecnico_numerico.md`
  - `07_tests/test_psicotecnico_logico.md`
  - `07_tests/test_psicotecnico_atencion.md`
- Resultado: cuatro tests de 15 preguntas con solucionario y explicación breve.

## Fase 3. Simulacros completos

### 9. Simulacro 02

- Estado: Hecho
- Archivo: `09_simulacros/simulacro_02.md`
- Prioridad: Media
- Resultado esperado: segundo simulacro oficial completo, con distribución distinta al simulacro 01.

### 10. Simulacro 03

- Estado: Hecho
- Archivo: `09_simulacros/simulacro_03.md`
- Prioridad: Media
- Resultado esperado: tercer simulacro oficial completo, mas exigente y con preguntas predictivas.

### 11. Plantilla de corrección de simulacros

- Estado: Hecho
- Prioridad: Media
- Archivo: `09_simulacros/plantilla_correccion_simulacros.md`
- Resultado esperado: sistema comun de puntuación:
  - Acierto: +1.
  - Error: -1/3.
  - Blanco: 0.
  - Calculo por ejercicio.

## Fase 4. Revisión fina del temario

### 12. Auditoria de cobertura por tema

- Estado: Hecho
- Prioridad: Media
- Archivo: `04_estadisticas/auditoria_cobertura_temas.md`
- Resultado esperado: comprobar que cada tema permite contestar sus preguntas históricas.
- Metodo:
  - Revisar preguntas históricas del tema.
  - Buscar si la respuesta esta cubierta en el desarrollo.
  - Ampliar lagunas detectadas.
- Resultado: 225/225 preguntas históricas con tema 1-21 citadas en su tema; 21/21 temas con 8 secciones obligatorias.

### 13. Revisión de versión oficial en ofimatica

- Estado: Hecho
- Prioridad: Alta
- Temas: 16, 17, 18, 19, 20 y 21.
- Resultado esperado: eliminar o matizar referencias obsoletas de Office 2016 cuando puedan inducir error.
- Versión base:
  - Windows 10.
  - Microsoft 365 versión escritorio.
- Resultado: matizadas referencias de Excel 2016 y Outlook 2016, y reforzada la versión base en Windows/Office.

### 14. Normalización de secciones

- Estado: Pendiente
- Prioridad: Baja
- Resultado esperado: unificar nombres de secciones:
  - `Artículos importantes`
  - `Errores tipicos`
  - `Preguntas históricas`
- Nota: en ofimatica, sustituir "artículos" por referencias funcionales si procede.

## Fase 5. Estadísticas y seguimiento

### 15. Gráficos estadisticos

- Estado: Pendiente
- Carpeta: `04_estadisticas/gráficos/`
- Prioridad: Baja
- Resultado esperado:
  - Frecuencia por tema.
  - Frecuencia por subtema.
  - Evolución por anio.
  - Distribución por tipo.

### 16. README del proyecto

- Estado: Hecho
- Archivo: `README.md`
- Prioridad: Media
- Resultado esperado: portada útil del proyecto con:
  - Objetivo.
  - Estado actual.
  - Como estudiar con los materiales.
  - Orden recomendado.
  - Avisos sobre fuentes oficiales y psicotecnicos de academia.

## Fase 6. Revisión de extracción

### 17. Revisión manual de preguntas visuales/tabulares

- Estado: Hecho parcialmente (10/15)
- Prioridad: Media
- Fuente: `02_preguntas_extraidas/observaciones_extraccion.md`
- Resultado esperado: corregir o completar las preguntas marcadas como `[ver PDF original]`.
- Resultado: revisadas manualmente contra el PDF original. 10 de 15 eran texto/tablas numéricas mal extraidas por maquetado; reconstruidas y verificadas contra la clave oficial (coinciden en las 10). Las 5 restantes (`2025-E1-016` a `2025-E1-020`) son series de figuras geometricas puramente gráficas sin texto seleccionable en el PDF: se dejan como `[ver PDF original]` a proposito para no arriesgar una descripción inexacta de las formas; su `respuesta_correcta` ya registrada sigue siendo válida.

Ids resueltos:

- `2017-E1-016`
- `2017-E1-037`
- `2025-E1-006`
- `2025-E1-009`
- `2025-E1-011`
- `2025-E1-012`
- `2025-E1-013`
- `2025-E1-022`
- `2025-E1-023`
- `2025-E1-025`

Ids pendientes (contenido gráfico, ver `02_preguntas_extraidas/observaciones_extraccion.md`):

- `2025-E1-016`
- `2025-E1-017`
- `2025-E1-018`
- `2025-E1-019`
- `2025-E1-020`

## Orden de ejecución recomendado

1. `07_tests/test_bloque_II.md`
2. `09_simulacros/simulacro_01.md`
3. `07_tests/test_bloque_I.md`
4. `08_flashcards/anki_ley39.csv`
5. `08_flashcards/anki_constitucion.csv`
6. Tests psicotecnicos por tipo.
7. Gráficos estadisticos.

## Registro de avance

| Fecha | Cambio | Estado |
| --- | --- | --- |
| 2026-06-22 | Creación del backlog inicial del proyecto. | Hecho |
| 2026-06-22 | Creación de `07_tests/test_bloque_II.md` con 30 preguntas y plantilla de corrección. | Hecho |
| 2026-06-22 | Creación de `09_simulacros/simulacro_01.md` con dos ejercicios completos, reservas y plantilla de corrección. | Hecho |
| 2026-06-22 | Creación de `07_tests/test_bloque_I.md` con 30 preguntas y plantilla de corrección. | Hecho |
| 2026-06-22 | Creación de `08_flashcards/anki_ley39.csv` con 57 tarjetas de repaso. | Hecho |
| 2026-06-22 | Creación de `08_flashcards/anki_constitucion.csv` con 72 tarjetas de repaso. | Hecho |
| 2026-06-22 | Enriquecimiento de `01_examenes_originales/psicotecnicos_academias/indice.md` con fuente, clase, tipo dominante y observaciones. | Hecho |
| 2026-06-22 | Creación de banco separado `02_preguntas_extraidas/psicotecnicos_academia.*` con 22 preguntas de academia no oficial. | Hecho inicial |
| 2026-06-22 | Creación de tests psicotecnicos por tipo en `07_tests/test_psicotecnico_*.md`, con 15 preguntas por tipo y solucionario razonado. | Hecho |
| 2026-06-22 | Creación de `09_simulacros/simulacro_02.md` con dos ejercicios completos, reservas y plantilla de corrección. | Hecho |
| 2026-06-22 | Creación de `09_simulacros/simulacro_03.md` con mayor dificultad, dos ejercicios completos, reservas y plantilla de corrección. | Hecho |
| 2026-06-22 | Creación de `09_simulacros/plantilla_correccion_simulacros.md` para puntuar y comparar simulacros. | Hecho |
| 2026-06-22 | Revisión de versión oficial en ofimatica: Windows 10 y Microsoft 365 escritorio como base, con matices para referencias históricas 2016. | Hecho |
| 2026-06-22 | Creación de `04_estadisticas/auditoria_cobertura_temas.md`: 225/225 preguntas históricas trazadas en temas 1-21. | Hecho |
| 2026-06-22 | Redacción de `README.md` con objetivo, estado, estructura, orden de estudio y avisos de fuentes. | Hecho |
| 2026-08-23 | Ampliación de `05_temario/tema_16_windows.md`: nuevas subsecciones (accesos directos, cinta de opciones, opciones de carpeta, operadores de búsqueda avanzados, arrastrar con teclas modificadoras, ventanas/escritorios virtuales/Jump Lists, herramientas del sistema adicionales) más conceptos clave y errores típicos correspondientes, contrastadas con el estilo de preguntas reales de otras convocatorias de Auxiliar Administrativo (otras comunidades autónomas y AGE). Ampliación de `07_tests/test_tema_16.md` de 35 a 65 preguntas (30 nuevas, distribución de claves 17/17/16/15), con distractores plausibles dentro del propio tema para evitar acierto por descarte evidente. | Hecho |
| 2026-08-23 | Ampliación de `05_temario/tema_17_word.md`: nuevos contenidos (tipos de sangría, selección rápida de texto, salto de línea frente a párrafo nuevo, símbolos, captura de pantalla, sombreado, marca de agua, referencias cruzadas ampliadas, índice frente a tabla de contenido, destinatarios reales de combinación de correspondencia, `Marcar como final` frente a `Restringir edición`, `.dotm` frente a `.dotx`, panel de navegación, Editor/Traducir/Leer en voz alta/Contar palabras, KeyTips, pestaña Programador, tamaños de papel) contrastados con preguntas reales de convocatorias AGE 2015-2024 y otras administraciones. Ampliación de `07_tests/test_tema_17.md` de 35 a 65 preguntas (30 nuevas, distribución de claves 17/17/16/15). | Hecho |
| 2026-08-23 | Ampliación de `05_temario/tema_18_excel.md`: nuevos contenidos (error `#####` frente a error de fórmula, constante frente a fórmula, referencias entre hojas y libros con `!`, `SI.CONJUNTO` y `SI` anidados, `Y` frente a `O`, `MODA`/`DIA`/`DIASEM`, categorías de funciones, botón `fx`, trampa de `Combinar y centrar` con datos, mecánica del formato porcentaje, autodetección de fechas, ordenación de números como texto, opciones de escala e impresión de selección, atajos de teclado) contrastados con preguntas reales de convocatorias AGE 2015-2024. Ampliación de `07_tests/test_tema_18.md` de 45 a 75 preguntas (30 nuevas, distribución de claves 19/19/19/18). | Hecho |
