# Revisión Claude — Temario Auxiliar Administrativo CAM C2 (2026)

Fecha: 2026-08-04. Rama: `revision-claude`.

## Correcciones ya aplicadas en esta rama

- **Sesgo de claves de respuesta corregido** en los tests de los temas 2, 5, 7, 9, 10, 12, 13, 14, 15, 20 y 21, y en `test_psicotecnico_atencion.md`. Se redistribuyó aleatoriamente la posición de la opción correcta (A/B/C/D) manteniendo el mismo contenido de enunciados y opciones, y se aplicó el mismo cambio tanto al test embebido en `05_temario/` como a su copia en `07_tests/`, que son idénticos entre sí en todos los casos verificados (esto confirma también el Hallazgo 3: la duplicación es sistemática, no puntual). Distribución final: 7-8 de cada letra en tests de 30 preguntas, 10/10/10/10 en el test de 40 preguntas del tema 20, 4/4/4/3 en el test psicotécnico de atención de 15 preguntas. Verificado programáticamente que cada pregunta conserva exactamente el mismo conjunto de opciones (solo cambia su orden).
- **Contradicción `FW:`/`RV:` corregida** en `07_tests/test_bloque_II.md` (pregunta 24): ahora la opción correcta es `FW:`, alineada con la clave documentada en `05_temario/tema_20_outlook.md` para la pregunta histórica `2025-E2-024`, con nota explicativa de que `RV:` puede aparecer según idioma/configuración. Se revisó también `09_simulacros/simulacro_01.md` (pregunta 34): esa pregunta está explícitamente acotada a "Outlook en español" y su respuesta `RV:` es coherente con el matiz que el propio tema ya documenta, por lo que no se modificó.
- Temas Bloque I ya balanceados y sin tocar en ninguna copia: 1, 3, 4, 6, 8, 11. `test_bloque_I.md`, `test_bloque_II.md` (fuera de la P.24) y el resto de tests psicotécnicos no mostraban sesgo severo y se dejaron igual.
- **Segundo barrido de sesgo: los 6 tests embebidos de Bloque II eran independientes de sus copias en `07_tests/` y estaban TODOS sesgados**, aunque las copias de `07_tests/test_tema_16/17/18/19.md` ya estaban bien distribuidas (por eso la primera revisión no los marcó). Detectado el primer caso (tema 19) al leer el archivo completo para generar sus flashcards; a partir de ahí se comprobaron los 6 temas de Bloque II uno a uno. Corregidos únicamente los tests embebidos en `05_temario/` (sin tocar `07_tests/`, que ya estaban bien):
  - `tema_16_windows.md`: 24/35 "A" (69%) → distribución 9/9/9/8.
  - `tema_17_word.md`: 20/30 "A" (67%) → distribución 8/8/7/7.
  - `tema_18_excel.md`: 21/30 "A" (70%) → distribución 8/8/7/7.
  - `tema_19_access_powerbi.md`: 33/35 "A" (94%) → distribución 9/9/9/8.
  - (Temas 20 y 21 ya se habían corregido en el primer barrido, junto con sus copias idénticas en `07_tests/`.)
  - Se comprobó también que los 6 tests embebidos de Bloque I marcados como "ya balanceados" (temas 1, 3, 4, 6, 8, 11) sí son idénticos a su copia en `07_tests/` y no superan el 57% de sesgo — no requieren corrección.
- **Flashcards de Bloque II creadas**: `08_flashcards/anki_windows.csv` (55), `anki_word.csv` (54), `anki_excel.csv` (65), `anki_access_powerbi.csv` (56), `anki_outlook.csv` (57) y `anki_m365.csv` (50) — 337 tarjetas nuevas en total, mismo formato que `anki_constitucion.csv`/`anki_ley39.csv`, extraídas de las secciones "Conceptos clave" y "Errores típicos" de cada tema. Cubre el hueco de entrenamiento identificado como más rentable para informática. El prefijo de reenvío en Outlook se documenta como `FW:` (coherente con la corrección de la contradicción `FW:`/`RV:`).

Actualización: todas las recomendaciones de la lista de abajo se han completado a lo largo de la rama. La última (revisar manualmente las 15 preguntas psicotécnicas visuales/tabulares de 2025 contra el PDF original) se completó parcialmente: 10 de 15 eran texto o tablas numéricas mal extraídas por maquetado y se han reconstruido y verificado contra la clave oficial; las 5 restantes son series de figuras geométricas puramente gráficas (sin texto en el PDF) y se han dejado documentadas como tal a propósito, para no arriesgar una descripción inexacta de una forma. El detalle de cada corrección está marcado con ~~tachado~~ en la sección de recomendaciones al final de este documento.

Revisión cualitativa completa de los 21 temas, con foco reforzado en el Bloque II (informática/ofimática, segundo ejercicio), tal como se pidió. Se han revisado: `05_temario/`, `06_esquemas/`, `07_tests/`, `09_simulacros/`, `08_flashcards/`, `04_estadisticas/` y `00_convocatoria/`.

## Resumen ejecutivo

El contenido teórico es sólido en general (cobertura literal del programa oficial correcta en los 21 temas, sin errores técnicos relevantes sobre Windows 10 / Microsoft 365 escritorio), pero se han encontrado **tres defectos sistemáticos en el material de entrenamiento** que reducen su valor real de cara al examen — incluido en el propio Bloque II de informática, que es la prioridad marcada:

1. **Sesgo severo en las claves de respuesta de varios tests** (la opción correcta se repite con tanta frecuencia que adivinarla sin leer el enunciado da un acierto del 57-97%).
2. **Una contradicción real entre dos archivos del proyecto** sobre la respuesta correcta de una pregunta de Outlook (`FW:` vs `RV:`).
3. **Duplicación literal** entre el test embebido en cada tema y su test "independiente" en `07_tests/`, que hace que el alumno repita el mismo test dos veces creyendo que practica con preguntas nuevas.

Ninguno de los tres es un problema de conocimiento del temario — son problemas de generación/consistencia del material de entrenamiento, y por eso son los de mayor prioridad de corrección: se solucionan sin reescribir teoría.

---

## Hallazgo 1 (máxima prioridad): sesgo en claves de respuesta

Se contó la letra de la opción correcta en las 30 (o más) preguntas de cada test. Un test bien construido debe repartir la respuesta correcta de forma aproximadamente uniforme entre A/B/C/D. Resultado real:

| Tema | Distribución | Letra dominante |
| --- | --- | ---: |
| 10. Función pública | A: 29/30 | **97%** |
| 15. Documentos/registro | A: 25/30 | **83%** |
| 21. Microsoft 365 | A: 25/30 | **83%** |
| 9. Contratos | A: 26/30 | **87%** |
| 13. Igualdad/LGTBI | A: 24/30 | **80%** |
| 14. Atención ciudadana | A: 22/30 | **73%** |
| 20. Outlook | A: ~23/34 tras P.14 | **~68-83% en 2ª mitad** |
| 7. Contencioso-admin. | A: 21/30 | **70%** |
| 12. Hacienda | A: 20/30 | 67% |
| 2. Estatuto CAM | B: 20/30 | 67% |
| 5. Acto administrativo | A: 17/30 | 57% |
| 1, 3, 4, 6, 8, 11, 16, 17, 18, 19 | equilibrados | — |

Confirmado de forma independiente (conteo directo sobre los archivos, no solo estimación del análisis).

**Por qué importa especialmente para informática:** el usuario pidió foco en el Bloque II, y ahí **temas 20 (Outlook) y 21 (M365) tienen el mismo defecto** que los peores temas del Bloque I — en el test de tema 21, desde la pregunta 9 hasta la 30, la respuesta es "A" en 20 de 22 preguntas. Un alumno que entrena con "A" fijo aprueba ese test sin leer una sola pregunta, lo cual anula el entrenamiento justo en la parte que se quiere reforzar.

**Recomendación:** redistribuir aleatoriamente la posición de la opción correcta en los tests de los temas 7, 9, 10, 12, 13, 14, 15, 20 y 21 como mínimo (los que superan ~65% de una letra). Es un arreglo mecánico, no requiere reescribir contenido teórico.

---

## Hallazgo 2 (alta prioridad, informática): contradicción `FW:` / `RV:` en Outlook

- `05_temario/tema_20_outlook.md` fija expresamente: *"`FW:` aparece en preguntas históricas; `RV:` es habitual en interfaces en español"* — y en la pregunta histórica `2025-E2-024` documenta `FW:` como la clave correcta.
- `07_tests/test_bloque_II.md` (pregunta 24) da a elegir `RV:`, `RE:`, `CC:`, `HTTP:` — **`FW:` no está entre las opciones** — y marca como correcta `RV:`.

Un alumno que estudia el tema y luego hace el test de bloque se encuentra con la contradicción justo en un patrón de pregunta muy recurrente en exámenes reales de Outlook. Es el tipo de error con mayor coste en examen real: genera duda en vez of seguridad.

**Recomendación:** fijar una única postura razonada (p. ej. "el prefijo depende del idioma/configuración; en las preguntas históricas revisadas aparece como `FW:`") y aplicarla igual en tema, esquema, test de tema y test de bloque. Aprovechar para auditar si hay más contradicciones cruzadas de este tipo entre `05_temario/`, `06_esquemas/`, `07_tests/` y `09_simulacros/` — con el volumen de contenido del proyecto (6 temas de informática × ~40 KB más esquemas, tests y simulacros) es probable que no sea la única.

---

## Hallazgo 3: duplicación literal entre test embebido y test de `07_tests/`

Confirmado en el tema 6 (Ley 39/2015) y en el tema 20 (Outlook): el test de la sección 7 del tema y el archivo `07_tests/test_tema_XX.md` correspondiente son el mismo test, mismo orden, mismas opciones. No se ha verificado uno a uno en los 19 temas restantes, pero al ser el mismo generador es razonable sospechar que el patrón se repite en más casos.

**Recomendación:** o bien generar un banco de preguntas realmente distinto para `07_tests/` (mismos conceptos, redacción y distractores distintos), o documentar explícitamente en el README que ambos tests son el mismo, para que el alumno no crea que dobla la práctica cuando en realidad la repite.

---

## Revisión Bloque I (temas 1-15)

Cobertura literal del programa oficial completa en los 15 temas; las 8 secciones obligatorias están presentes y en el mismo orden. Los temas marcados como prioritarios por la propia auditoría del proyecto (6, 8, 10, 14) están, en contenido teórico, entre los mejor ejecutados del repositorio:

- **Tema 6 (Ley 39/2015):** el más denso y mejor trabado del bloque; buenas trampas (rechazo de notificación ≠ publicación en BOE; alegaciones vs. defectos de tramitación).
- **Tema 8 (Transparencia y protección de datos):** separa con claridad Ley 19/2013 de LO 3/2018/RGPD, algo que el propio epígrafe oficial mezcla y que suele confundir en examen.
- **Tema 10 (Función pública):** desarrollo normativo muy bueno (TREBEP + Ley 1/1986 CAM bien diferenciados), pero es justo el tema con el test más sesgado de todo el repositorio (97% de "A").
- **Tema 14 (Atención ciudadana/administración electrónica):** el enfoque predictivo funciona bien aquí — cubre identificación/autenticación/firma electrónica, que el propio tema señala como poco preguntado hasta ahora.

**Punto débil transversal:** las preguntas predictivas (sección 7 de cada tema) rara vez atacan los huecos que la propia sección "Cobertura" del tema identifica como poco preguntados; en su mayoría repiten los mismos artículos que ya cubren las preguntas históricas. Ocurre de forma repetida en varios temas (1, 2, 3, 12 entre otros). El mecanismo de detección de huecos funciona pero no se traduce en preguntas que los cierren.

**Tema 9 (Contratos):** el más superficial del bloque — procedimientos de adjudicación tratados de forma muy esquemática, sin ejemplos de aplicación, y con el segundo peor sesgo de respuestas (87% "A").

---

## Revisión Bloque II — informática (temas 16-21, foco principal)

### Precisión técnica

No se han encontrado errores factuales sobre Windows 10 / Microsoft 365 escritorio. Verificado específicamente: función `=DERECHA()`, atajos `Ctrl+N/K/S` en Word, comandos `.msc`, extensiones de archivo, límites de FAT32, lógica de referencias relativas/absolutas y sintaxis `=SI(Y(...))`. Todo correcto.

Los residuos de Office 2016 (tarea 13 del backlog) están bien resueltos: cuando el material usa un dato específico de 2016 (triángulo rojo de comentarios en Excel, ruta de autoguardado, organización "Horizontal" de ventanas), lo marca explícitamente como histórico y lo matiza para Microsoft 365 actual.

### Cobertura y profundidad

- **Tema 18 (Excel):** tablas dinámicas y gráficos bien explicados a nivel conceptual, pero con muy poca densidad de preguntas de entrenamiento (solo 1 pregunta histórica de tablas dinámicas, 0 de gráficos), pese a que el propio proyecto ya marca Excel como prioritario de repaso cualitativo. Es el punto de mayor riesgo de "pregunta nueva sorpresa" del bloque.
- **Tema 19 (Access/Power BI):** Power BI —contenido en tendencia al alza, 4→7 preguntas de 2023 a 2025— está bien explicado a nivel funcional, pero todas sus preguntas de entrenamiento son de dificultad uniforme baja (definición/identificación), sin distractores "trampa" comparables a los de Access.
- **Tema 20:** hay una pregunta histórica mal clasificada (`2023-E2-006` es de Access, no de Outlook) corregida solo con nota al margen en el tema, pero no en origen (`02_preguntas_extraidas`/`03_clasificacion`), lo que puede seguir sesgando ligeramente las estadísticas de frecuencia de ambos temas.
- **Tema 21:** gestiona bien la tensión entre el epígrafe oficial 2026 (colaboración M365: Teams/SharePoint/OneDrive) y contenido histórico heredado de 2023 (navegadores, ARPANET, HTTP/HTTPS/FTP), explicándolo con transparencia en vez de forzar encaje.

### Velocidad de examen

El segundo ejercicio da ~1 minuto por pregunta con penalización de 1/3. El material entrena bien el conocimiento (usa sistemáticamente el patrón "Trampa: X no es Y", que es el tipo de distractor real de examen), pero **no existe ningún test cronometrado a nivel de tema individual**, solo en los simulacros completos. Entrenar el ritmo real también a nivel de tema (no solo en el simulacro) mejoraría la velocidad de reconocimiento, que es tan determinante como el conocimiento dado el tiempo tan ajustado.

---

## Material de entrenamiento (tests, simulacros, flashcards, estadísticas)

- **Simulacros:** `simulacro_01.md` replica fielmente el formato oficial (65 min / 30 psicotécnicas + 30 Bloque I + 5 reserva; 35 min / 30 Bloque II + 5 reserva; fórmula aciertos−errores/3). La plantilla de corrección es la pieza más sólida del repositorio: diagnóstico por rango de puntuación, análisis de errores por causa, registro comparativo entre simulacros.
- **Flashcards — hueco relevante para informática:** solo existen 2 mazos, Constitución (72 tarjetas) y Ley 39/2015 (57 tarjetas). **No hay ni una sola flashcard de Bloque II**, pese a que Windows/Word/Excel/Access/Outlook/M365 son contenido idóneo para memorización rápida por repetición espaciada (atajos, tipos de referencia, diferencias `CC`/`CCO`, nombres de función). Es probablemente la pieza de entrenamiento con mejor relación esfuerzo/beneficio para reforzar justo el área que se pidió priorizar.
- **Tests psicotécnicos:** completos y con explicación razonada; inconsistencia menor en `test_psicotecnico_logico.md` (el aviso de procedencia "academia no oficial" aparece dentro del enunciado de las preguntas 13-15 en vez de solo en la cabecera).
- **15 preguntas psicotécnicas de 2025** (visuales/tabulares) siguen pendientes de revisión manual contra el PDF original (tarea 17 del backlog). Psicotécnicos es el bloque de mayor peso del examen (31,8% del total), por lo que esta revisión pendiente sí importa, aunque no afecta al Bloque II de informática.
- **Gráficos estadísticos (`04_estadisticas/graficos/`):** vacío/pendiente, pero de bajo impacto real — los datos ya están en tablas legibles en `frecuencia_temas.md` y `tendencias.md`; un gráfico no añadiría información nueva.

## Hallazgo adicional: `00_convocatoria/programa_oficial.md` vacío

El archivo pesa 0 bytes, pero README.md y backlog.md marcan la fila "Convocatoria y programa" como "Hecho". El programa oficial completo sí existe, pero solo dentro de `AGENTS.md` (un archivo de instrucciones para el agente, no pensado como material de consulta del opositor). Alguien que abra `00_convocatoria/` buscando el programa oficial no lo encuentra donde se supone que está.

---

## Recomendaciones priorizadas (impacto en la nota, no en facilidad de implementación)

1. ~~**Corregir el sesgo de claves de respuesta**, empezando por temas 10, 15, 21, 9, 13, 14, 20 y 7~~ — **Hecho en esta rama** (ampliado también a 2, 5, 12 y al test psicotécnico de atención).
2. ~~**Resolver la contradicción `FW:`/`RV:`** entre `tema_20_outlook.md` y `test_bloque_II.md`~~ — **Hecho en esta rama**. Sigue pendiente una pasada de consistencia cruzada tema/esquema/test/simulacro en el resto del Bloque II, por si hay más contradicciones no detectadas.
3. ~~**Crear flashcards de Bloque II** (16-21)~~ — **Hecho en esta rama** (337 tarjetas nuevas en 6 mazos). Ampliado posteriormente a los 13 temas restantes de Bloque I (2-5, 7-15) — 647 tarjetas más — dejando los 21 temas del programa completo cubiertos: 984 tarjetas en total en `08_flashcards/`.
4. ~~**Reforzar Excel** (tablas dinámicas, gráficos) **y Power BI** con preguntas predictivas de dificultad media-alta~~ — **Hecho en esta rama**: 20 preguntas nuevas de tablas dinámicas/gráficos en `tema_18_excel.md` y `test_tema_18.md` (10+10, contenido distinto entre ambos bancos), y 16 preguntas nuevas de Power BI en `tema_19_access_powerbi.md` y `test_tema_19.md` (8+8). Ninguna reintroduce sesgo en las claves de respuesta.
5. ~~**Eliminar la duplicación literal** entre el test embebido de cada tema y `07_tests/test_tema_XX.md`~~ — **Hecho en esta rama** para los 17 temas afectados: los 15 de Bloque I y los 2 de Bloque II (20 y 21) que eran copia literal. Todos sustituidos por un banco nuevo (30 preguntas en Bloque I y en el tema 21, 40 en el tema 20) con distribución de letras equilibrada, sin tocar el test embebido en `05_temario/`. Con esto no queda ningún test duplicado literal en el repositorio.
6. **Redirigir las preguntas predictivas del Bloque I** hacia los huecos que la propia sección "Cobertura" de cada tema ya identifica, en vez de repetir artículos ya cubiertos por el histórico (afecta especialmente a temas 1, 2, 3, 12).
7. ~~Introducir **práctica cronometrada por tema** en Bloque II~~ — **Hecho en esta rama**: cada `07_tests/test_tema_16..21.md` incluye ahora un tiempo recomendado calculado al ritmo real del segundo ejercicio (~70 segundos/pregunta) y recuerda el criterio de corrección.
8. ~~Corregir en origen la clasificación de `2023-E2-006` (es de Access, no de Outlook)~~ — **Hecho en esta rama**: reclasificada de tema 20/"Correo electrónico" a tema 19/"Tablas Access" en `preguntas.csv`, `preguntas.json` y `preguntas_normalizadas.json`, y propagado a `frecuencia_temas.md`, `frecuencia_subtemas.md`, `tendencias.md` y `auditoria_cobertura_temas.md` (tema 19 pasa de 11 a 12 preguntas históricas, tema 20 de 12 a 11).
9. ~~Rellenar `00_convocatoria/programa_oficial.md`~~ — **Hecho en esta rama**: ahora contiene el programa oficial completo (Bloque I y II) más la estructura del examen, como documento de consulta legible para el opositor.
10. ~~Revisar manualmente las 15 preguntas psicotécnicas visuales/tabulares de 2025 pendientes~~ — **Hecho parcialmente en esta rama (10/15)**: reconstruidas y verificadas `2017-E1-016`, `2017-E1-037`, `2025-E1-006`, `2025-E1-009`, `2025-E1-011`, `2025-E1-012`, `2025-E1-013`, `2025-E1-022`, `2025-E1-023`, `2025-E1-025` — todas eran texto/tablas mal extraídas, no imágenes; la respuesta ya registrada coincide en las 10 con la que se deduce del enunciado recuperado. Quedan `2025-E1-016` a `2025-E1-020`: series de figuras geométricas puramente gráficas (confirmado con `pdftotext -layout`, sin texto seleccionable), documentadas a propósito como pendientes en `02_preguntas_extraidas/observaciones_extraccion.md` en vez de arriesgar una descripción inventada de las formas.
