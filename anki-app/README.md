# Repaso de flashcards

Aplicación web sencilla, sin dependencias (HTML/CSS/JS vanilla), para importar los mazos CSV de `08_flashcards/` y repasarlos con repetición espaciada (algoritmo SM-2, el mismo principio que usa Anki).

## Cómo usarla

**Opción 1 — abrir directamente:**

Haz doble clic en `index.html` (o ábrelo con el navegador). Usa el botón **"Elegir archivos"** para seleccionar uno o varios `anki_*.csv` de `08_flashcards/`, o arrástralos sobre la zona de carga.

**Opción 2 — servidor local (permite el botón "Cargar automáticamente"):**

```bash
cd auxiliar-cm.chatgpt
python3 -m http.server 8000
```

Abre `http://localhost:8000/anki-app/` y pulsa **"Cargar automáticamente desde 08_flashcards"**: carga los 8 mazos sin tener que seleccionarlos a mano. (Esto no funciona abriendo el archivo directamente con doble clic, por restricciones de seguridad del navegador al leer archivos locales con `fetch`.)

## Cómo funciona el repaso

- Cada tarjeta usa el algoritmo **SM-2** (repetición espaciada): al valorarla como "Otra vez", "Difícil", "Bien" o "Fácil", se calcula cuándo te la volverá a mostrar.
- "Otra vez" además la vuelve a meter unas tarjetas más adelante en la misma sesión, para reforzarla ya.
- El progreso se guarda en el navegador (`localStorage`), no se envía a ningún servidor. Si cambias de navegador o de equipo, el progreso no te acompaña.
- Puedes filtrar por mazo y por dificultad, y usar "Repasar todo ahora" para repasar sin esperar a que toque.
- Volver a importar un CSV no borra el progreso de las tarjetas que ya existían (se actualiza el contenido pero se conserva su calendario de repaso); solo añade como nuevas las que no existían.

## Archivos

- `index.html` — estructura de las tres pantallas (inicio, repaso, resumen).
- `style.css` — estilos, con variante oscura automática según el sistema.
- `app.js` — parser CSV, algoritmo SM-2, almacenamiento y lógica de la interfaz.

Sin build, sin `npm`, sin dependencias externas.
