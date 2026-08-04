"use strict";

/* ---------- Utilidades compartidas ---------- */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function todayMs() {
  return Date.now();
}

function formatInterval(days) {
  if (days < 1) return "<1 día";
  if (days === 1) return "1 día";
  if (days < 30) return Math.round(days) + " días";
  if (days < 365) return Math.round(days / 30) + " meses";
  return Math.round(days / 365) + " años";
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------- Navegación entre vistas ----------
   Cada pantalla es un <main class="view" data-view="nombre">.
   showView(nombre) muestra esa y oculta el resto. */

function showView(name) {
  $$(".view").forEach((el) => el.classList.toggle("hidden", el.dataset.view !== name));
}

/* ---------- Algoritmo de repetición espaciada (SM-2) ----------
   Compartido entre flashcards y test: quality 1 = fallo/otra vez,
   3 = difícil, 4 = bien/acierto, 5 = fácil. */

function computeNext(item, quality) {
  let { repetition, interval, efactor } = item;
  efactor = Math.max(
    1.3,
    efactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );
  if (quality < 3) {
    repetition = 0;
    interval = 1;
  } else {
    if (repetition === 0) interval = 1;
    else if (repetition === 1) interval = 6;
    else interval = Math.round(interval * efactor);
    repetition += 1;
  }
  return { repetition, interval, efactor };
}

function previewLabel(item, quality) {
  if (quality < 3) return "hoy";
  const next = computeNext(item, quality);
  return formatInterval(next.interval);
}

/* ---------- Menú principal ---------- */

$$("[data-goto-menu]").forEach((el) =>
  el.addEventListener("click", () => showView("menu"))
);
$$("[data-goto-flashcards]").forEach((el) =>
  el.addEventListener("click", () => showView("fc-home"))
);
$$("[data-goto-test]").forEach((el) =>
  el.addEventListener("click", () => showView("test-home"))
);

showView("menu");
