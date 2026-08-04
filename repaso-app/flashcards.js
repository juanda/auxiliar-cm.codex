"use strict";

/* ---------- Config ---------- */

const STORAGE_KEY = "repasoApp.cards.v1";

// Nombres de fichero conocidos en 08_flashcards/, para la carga automática
// (solo funciona si esta página se sirve por http, no con doble clic / file://).
const KNOWN_DECK_FILES = [
  "anki_constitucion",
  "anki_estatuto",
  "anki_gobierno_cam",
  "anki_fuentes",
  "anki_acto_administrativo",
  "anki_ley39",
  "anki_contencioso",
  "anki_transparencia",
  "anki_contratos",
  "anki_funcion_publica",
  "anki_seguridad_social",
  "anki_hacienda",
  "anki_igualdad",
  "anki_atencion_ciudadano",
  "anki_documentos",
  "anki_windows",
  "anki_word",
  "anki_excel",
  "anki_access_powerbi",
  "anki_outlook",
  "anki_m365",
];

/* ---------- Utilidades ---------- */

function prettifyDeckId(deckId) {
  return deckId
    .replace(/^anki_/, "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ---------- Parser CSV (RFC 4180: comillas, comas y saltos de línea dentro de campos) ---------- */

function parseCSV(text) {
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1); // BOM
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (c === "\r") {
      // se ignora, el \n siguiente cierra la fila
    } else {
      field += c;
    }
  }
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

function rowsToCards(rows, deckId) {
  if (rows.length === 0) return [];
  const header = rows[0].map((h) => h.trim().toLowerCase());
  const idx = {
    tema: header.indexOf("tema"),
    pregunta: header.indexOf("pregunta"),
    respuesta: header.indexOf("respuesta"),
    dificultad: header.indexOf("dificultad"),
  };
  if (idx.pregunta === -1 || idx.respuesta === -1) {
    throw new Error(
      "El CSV no tiene columnas 'pregunta' y 'respuesta' reconocibles."
    );
  }

  const cards = [];
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    const pregunta = (r[idx.pregunta] || "").trim();
    const respuesta = (r[idx.respuesta] || "").trim();
    if (!pregunta || !respuesta) continue;
    const tema = idx.tema !== -1 ? (r[idx.tema] || "").trim() : "";
    const dificultad =
      idx.dificultad !== -1
        ? (r[idx.dificultad] || "").trim().toLowerCase()
        : "media";

    const id = deckId + "::" + pregunta;
    cards.push({ id, deck: deckId, tema, pregunta, respuesta, dificultad });
  }
  return cards;
}

/* ---------- Almacenamiento ---------- */

function loadCards() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error("No se pudo leer localStorage", e);
    return {};
  }
}

function saveCards() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cardsStore));
}

function upsertCards(newCards) {
  let added = 0;
  let updated = 0;
  const now = todayMs();
  for (const nc of newCards) {
    const existing = cardsStore[nc.id];
    if (existing) {
      existing.tema = nc.tema;
      existing.pregunta = nc.pregunta;
      existing.respuesta = nc.respuesta;
      existing.dificultad = nc.dificultad;
      updated++;
    } else {
      cardsStore[nc.id] = {
        ...nc,
        repetition: 0,
        interval: 0,
        efactor: 2.5,
        due: now,
        lastReview: null,
      };
      added++;
    }
  }
  saveCards();
  return { added, updated };
}

function removeDeck(deckId) {
  for (const id of Object.keys(cardsStore)) {
    if (cardsStore[id].deck === deckId) delete cardsStore[id];
  }
  saveCards();
}

function rateCard(card, quality) {
  const next = computeNext(card, quality);
  card.repetition = next.repetition;
  card.interval = next.interval;
  card.efactor = next.efactor;
  card.lastReview = todayMs();
  card.due = todayMs() + next.interval * 86400000;
  saveCards();
}

/* ---------- Estado de la aplicación ---------- */

let cardsStore = loadCards();
let session = null; // { queue, index, reviewed, again, revealed }

/* ---------- Vistas ---------- */

function getDeckIds() {
  const set = new Set();
  for (const id in cardsStore) set.add(cardsStore[id].deck);
  return Array.from(set).sort();
}

function deckLabel(deckId) {
  const cards = Object.values(cardsStore).filter((c) => c.deck === deckId);
  const tema = cards.find((c) => c.tema)?.tema;
  return tema || prettifyDeckId(deckId);
}

function getSelectedDecks() {
  return new Set(
    $$("#fc-deck-list input[type=checkbox]:checked").map((el) => el.value)
  );
}

function getSelectedDifficulties() {
  return new Set($$(".diff-filter:checked").map((el) => el.value));
}

function getFilteredCards({ ignoreDue }) {
  const decks = getSelectedDecks();
  const diffs = getSelectedDifficulties();
  const now = todayMs();
  return Object.values(cardsStore).filter(
    (c) =>
      decks.has(c.deck) &&
      diffs.has(c.dificultad) &&
      (ignoreDue || c.due <= now)
  );
}

function renderDeckList() {
  const deckIds = getDeckIds();
  const container = $("#fc-deck-list");
  if (deckIds.length === 0) {
    container.innerHTML = '<p class="hint">Todavía no has cargado ningún mazo.</p>';
    return;
  }
  const previouslySelected = new Set(
    $$("#fc-deck-list input[type=checkbox]:checked").map((el) => el.value)
  );
  const firstRender = container.dataset.rendered !== "1";

  container.innerHTML = deckIds
    .map((deckId) => {
      const count = Object.values(cardsStore).filter((c) => c.deck === deckId).length;
      const checked = firstRender || previouslySelected.has(deckId) ? "checked" : "";
      return `
        <div class="deck-row">
          <input type="checkbox" value="${deckId}" ${checked}>
          <span class="deck-name">${deckLabel(deckId)}</span>
          <span class="deck-count">${count} tarjetas</span>
          <button class="deck-remove" data-deck="${deckId}">Eliminar</button>
        </div>`;
    })
    .join("");
  container.dataset.rendered = "1";

  $$("#fc-deck-list input[type=checkbox]").forEach((el) =>
    el.addEventListener("change", renderStats)
  );
  $$("#fc-deck-list .deck-remove").forEach((btn) =>
    btn.addEventListener("click", () => {
      const deckId = btn.dataset.deck;
      if (confirm(`¿Eliminar el mazo "${deckLabel(deckId)}" y todo su progreso?`)) {
        removeDeck(deckId);
        renderDeckList();
        renderStats();
      }
    })
  );
}

function renderStats() {
  const total = getFilteredCards({ ignoreDue: true }).length;
  const due = getFilteredCards({ ignoreDue: false }).length;
  const learned = getFilteredCards({ ignoreDue: true }).filter(
    (c) => c.repetition > 0
  ).length;

  $("#fc-stat-total").textContent = total;
  $("#fc-stat-due").textContent = due;
  $("#fc-stat-learned").textContent = learned;

  const cram = $("#fc-cram-toggle").checked;
  $("#fc-start-btn").disabled = cram ? total === 0 : due === 0;
}

/* ---------- Repaso ---------- */

function startReview() {
  const cram = $("#fc-cram-toggle").checked;
  const queue = shuffle(getFilteredCards({ ignoreDue: cram }));
  if (queue.length === 0) return;

  session = { queue, index: 0, reviewed: 0, again: 0, revealed: false };
  showView("fc-review");
  renderCard();
}

function currentCard() {
  return session.queue[session.index];
}

function renderCard() {
  const card = currentCard();
  session.revealed = false;

  $("#card-deck").textContent = deckLabel(card.deck);
  $("#card-front").textContent = card.pregunta;
  $("#card-back").textContent = card.respuesta;
  $("#card-back").classList.add("hidden");

  $("#flip-controls").classList.remove("hidden");
  $("#rate-controls").classList.add("hidden");

  $("#review-counter").textContent = `${session.index + 1} / ${session.queue.length}`;
  $("#progress-fill").style.width = `${(session.index / session.queue.length) * 100}%`;

  for (const q of [1, 3, 4, 5]) {
    const id = { 1: "again", 3: "hard", 4: "good", 5: "easy" }[q];
    $("#int-" + id).textContent = " · " + previewLabel(card, q);
  }
}

function flipCard() {
  if (session.revealed) return;
  session.revealed = true;
  $("#card-back").classList.remove("hidden");
  $("#flip-controls").classList.add("hidden");
  $("#rate-controls").classList.remove("hidden");
}

function rateCurrentCard(quality) {
  if (!session.revealed) return;
  const card = currentCard();
  rateCard(card, quality);
  session.reviewed++;

  if (quality < 3) {
    session.again++;
    // Se reinserta un poco más adelante en la cola para repasarla de nuevo en esta sesión.
    session.queue.splice(
      Math.min(session.queue.length, session.index + 1 + 3),
      0,
      card
    );
  }

  session.index++;
  if (session.index >= session.queue.length) {
    endSession();
  } else {
    renderCard();
  }
}

function endSession() {
  $("#summary-reviewed").textContent = session.reviewed;
  $("#summary-again").textContent = session.again;
  showView("fc-summary");
  renderDeckList();
  renderStats();
}

/* ---------- Carga de archivos ---------- */

function importFiles(fileList) {
  const files = Array.from(fileList).filter((f) => f.name.endsWith(".csv"));
  if (files.length === 0) return;

  let pending = files.length;
  let totalAdded = 0;
  let totalUpdated = 0;
  const errors = [];

  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const deckId = file.name.replace(/\.csv$/i, "");
        const rows = parseCSV(reader.result);
        const cards = rowsToCards(rows, deckId);
        const { added, updated } = upsertCards(cards);
        totalAdded += added;
        totalUpdated += updated;
      } catch (e) {
        errors.push(`${file.name}: ${e.message}`);
      } finally {
        pending--;
        if (pending === 0) finishImport(totalAdded, totalUpdated, errors);
      }
    };
    reader.onerror = () => {
      errors.push(`${file.name}: no se pudo leer el archivo`);
      pending--;
      if (pending === 0) finishImport(totalAdded, totalUpdated, errors);
    };
    reader.readAsText(file, "utf-8");
  });
}

function finishImport(added, updated, errors) {
  renderDeckList();
  renderStats();
  let msg = `${added} tarjetas nuevas, ${updated} actualizadas.`;
  if (errors.length) msg += " Errores: " + errors.join("; ");
  $("#fc-autoload-msg").textContent = msg;
}

async function autoloadFromFolder() {
  const msg = $("#fc-autoload-msg");
  msg.textContent = "Buscando archivos en ../08_flashcards/ ...";

  let found = 0;
  let totalAdded = 0;
  let totalUpdated = 0;
  const missing = [];

  for (const deckId of KNOWN_DECK_FILES) {
    try {
      const res = await fetch(`../08_flashcards/${deckId}.csv`);
      if (!res.ok) {
        missing.push(deckId);
        continue;
      }
      const text = await res.text();
      const rows = parseCSV(text);
      const cards = rowsToCards(rows, deckId);
      const { added, updated } = upsertCards(cards);
      totalAdded += added;
      totalUpdated += updated;
      found++;
    } catch (e) {
      missing.push(deckId);
    }
  }

  renderDeckList();
  renderStats();

  if (found === 0) {
    msg.textContent =
      "No se pudo cargar automáticamente (esto solo funciona si sirves esta carpeta con un servidor local, no abriendo el archivo directamente). Usa 'Elegir archivos' en su lugar.";
  } else {
    msg.textContent = `Cargados ${found} mazos (${totalAdded} tarjetas nuevas, ${totalUpdated} actualizadas).` +
      (missing.length ? ` No encontrados: ${missing.join(", ")}.` : "");
  }
}

/* ---------- Eventos ---------- */

$("#fc-file-input").addEventListener("change", (e) => importFiles(e.target.files));

const fcDropzone = $("#fc-dropzone");
["dragenter", "dragover"].forEach((evt) =>
  fcDropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    fcDropzone.classList.add("dragover");
  })
);
["dragleave", "drop"].forEach((evt) =>
  fcDropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    fcDropzone.classList.remove("dragover");
  })
);
fcDropzone.addEventListener("drop", (e) => importFiles(e.dataTransfer.files));

$("#fc-autoload-btn").addEventListener("click", autoloadFromFolder);

$$(".diff-filter").forEach((el) => el.addEventListener("change", renderStats));
$("#fc-cram-toggle").addEventListener("change", renderStats);

$("#fc-start-btn").addEventListener("click", startReview);
$("#fc-exit-review-btn").addEventListener("click", () => {
  session = null;
  showView("fc-home");
  renderDeckList();
  renderStats();
});

$("#flip-btn").addEventListener("click", flipCard);
$("#card").addEventListener("click", flipCard);
$$(".rate").forEach((btn) =>
  btn.addEventListener("click", () => rateCurrentCard(Number(btn.dataset.quality)))
);

$("#review-more-btn").addEventListener("click", startReview);
$("#fc-back-home-btn").addEventListener("click", () => {
  session = null;
  showView("fc-home");
});

$("#fc-reset-progress-btn").addEventListener("click", () => {
  if (!confirm("Esto reinicia el progreso de repaso de todas las tarjetas (no borra los mazos). ¿Continuar?"))
    return;
  const now = todayMs();
  for (const id in cardsStore) {
    const c = cardsStore[id];
    c.repetition = 0;
    c.interval = 0;
    c.efactor = 2.5;
    c.due = now;
    c.lastReview = null;
  }
  saveCards();
  renderStats();
});

$("#fc-wipe-all-btn").addEventListener("click", () => {
  if (!confirm("Esto borra TODOS los mazos y todo el progreso guardado en este navegador. ¿Continuar?"))
    return;
  cardsStore = {};
  saveCards();
  renderDeckList();
  renderStats();
  $("#fc-autoload-msg").textContent = "";
});

document.addEventListener("keydown", (e) => {
  if ($("#view-fc-review").classList.contains("hidden")) return;
  if (e.code === "Escape") {
    session = null;
    showView("fc-home");
    renderDeckList();
    renderStats();
    return;
  }
  if (!session) return;
  if (e.code === "Space") {
    e.preventDefault();
    if (!session.revealed) flipCard();
    return;
  }
  if (session.revealed && ["Digit1", "Digit2", "Digit3", "Digit4"].includes(e.code)) {
    const quality = { Digit1: 1, Digit2: 3, Digit3: 4, Digit4: 5 }[e.code];
    rateCurrentCard(quality);
  }
});

/* ---------- Arranque ---------- */

renderDeckList();
renderStats();
