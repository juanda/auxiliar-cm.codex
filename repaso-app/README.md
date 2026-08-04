# Repaso

Aplicación web sencilla, sin dependencias (HTML/CSS/JS vanilla), para repasar con repetición espaciada (algoritmo SM-2, el mismo principio que usa Anki) de dos formas:

- **Flashcards**: pregunta/respuesta, importando los CSV de `08_flashcards/`.
- **Test**: preguntas tipo test con 4 opciones, importando los Markdown de `07_tests/`.

Un menú principal deja elegir entre las dos al abrir la app.

## Cómo usarla

**Opción 1 — abrir directamente:**

Haz doble clic en `index.html` (o ábrelo con el navegador). En cada modo, usa **"Elegir archivos"** para seleccionar los archivos (`anki_*.csv` para flashcards, `test_*.md` para test), o arrástralos sobre la zona de carga.

**Opción 2 — servidor local (permite el botón "Cargar automáticamente"):**

```bash
cd auxiliar-cm.codex
python3 -m http.server 8000
```

Abre `http://localhost:8000/repaso-app/`. En **Flashcards**, pulsa **"Cargar automáticamente desde 08_flashcards"** para cargar los 21 mazos (uno por tema) sin seleccionarlos a mano. En **Test**, pulsa **"Cargar automáticamente desde 07_tests"** para cargar los bancos de test (temas, bloques y psicotécnicos). (Esto no funciona abriendo el archivo directamente con doble clic, por restricciones de seguridad del navegador al leer archivos locales con `fetch`.)

**Opción 3 — versión publicada en GitHub Pages:**

Cada push a `main` publica automáticamente esta app (workflow `.github/workflows/deploy-repaso-app-pages.yml`), junto con una copia de los CSV de `08_flashcards/` y los Markdown de `07_tests/` para que "Cargar automáticamente" funcione también ahí. La URL es la de GitHub Pages del repositorio, ruta `/repaso-app/` (visible en la pestaña **Settings → Pages** del repo, o en el resumen de la ejecución del workflow en la pestaña **Actions**). La primera vez hay que activar Pages en **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Cómo funciona el repaso

Tanto las tarjetas como las preguntas de test usan el algoritmo **SM-2** (repetición espaciada): cada respuesta calcula cuándo se te volverá a mostrar ese elemento.

- **Flashcards**: al mostrar la respuesta la valoras como "Otra vez", "Difícil", "Bien" o "Fácil".
- **Test**: al elegir una opción se corrige al instante; acertar equivale a "Bien" y fallar a "Otra vez".
- En ambos modos, lo marcado como "Otra vez" (o fallado) se vuelve a insertar unas preguntas/tarjetas más adelante en la misma sesión, para reforzarlo ya.
- El progreso se guarda en el navegador (`localStorage`), no se envía a ningún servidor. Si cambias de navegador o de equipo, el progreso no te acompaña.
- Puedes elegir qué mazos/tests repasar y usar "Repasar todo ahora" para repasar sin esperar a que toque.
- Volver a importar un archivo no borra el progreso de lo que ya existía (se actualiza el contenido pero se conserva su calendario de repaso); solo añade como nuevo lo que no existía.
- En el modo test, al terminar la sesión se muestra la nota con el criterio de corrección habitual de estos exámenes (`aciertos - fallos / 3`) y un repaso de las preguntas falladas con su referencia.

## Archivos

- `index.html` — estructura de todas las pantallas: menú, flashcards (inicio, repaso, resumen) y test (inicio, pregunta, resumen).
- `style.css` — estilos, con variante oscura automática según el sistema.
- `common.js` — utilidades compartidas: navegación entre vistas, algoritmo SM-2 y el menú principal.
- `flashcards.js` — parser CSV, almacenamiento y lógica del modo flashcards.
- `quiz.js` — parser de los Markdown de `07_tests/`, almacenamiento y lógica del modo test.

Sin build, sin `npm`, sin dependencias externas.
