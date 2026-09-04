"use strict";

/* ---------- Config ---------- */

const TEST_STORAGE_KEY = "repasoApp.testQuestions.v1";

// Nombres de fichero conocidos en 07_tests/, para la carga automática
// (solo funciona si esta página se sirve por http, no con doble clic / file://).
const KNOWN_TEST_FILES = [
  "test_bloque_I",
  "test_bloque_II",
  "test_psicotecnico_atencion",
  "test_psicotecnico_logico",
  "test_psicotecnico_numerico",
  "test_psicotecnico_verbal",
  "test_tema_01",
  "test_tema_01_2",
  "test_tema_02",
  "test_tema_02_2",
  "test_tema_03",
  "test_tema_03_2",
  "test_tema_04",
  "test_tema_04_2",
  "test_tema_05",
  "test_tema_05_2",
  "test_tema_06",
  "test_tema_06_2",
  "test_tema_07",
  "test_tema_07_2",
  "test_tema_08",
  "test_tema_08_2",
  "test_tema_09",
  "test_tema_09_2",
  "test_tema_10",
  "test_tema_10_2",
  "test_tema_11",
  "test_tema_11_2",
  "test_tema_12",
  "test_tema_12_2",
  "test_tema_13",
  "test_tema_13_2",
  "test_tema_14",
  "test_tema_14_2",
  "test_tema_15",
  "test_tema_15_2",
  "test_tema_16",
  "test_tema_17",
  "test_tema_18",
  "test_tema_19",
  "test_tema_20",
  "test_tema_21",
];

/* ---------- Utilidades ---------- */

function prettifyTestId(deckId) {
  return deckId
    .replace(/^test_/, "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ---------- Parser de Markdown de tests ----------
   Formato esperado (con pequeñas variaciones toleradas):

   # Título del test
   ...texto libre...
   ## Preguntas          (opcional, algunos archivos no la incluyen)
   1. Enunciado de la pregunta
      A. Opción A
      B. Opción B
      C. Opción C
      D. Opción D
   2. ...
   ## Respuestas | ## Plantilla | ## Plantilla de respuestas
   | Nº | Respuesta | Referencia |
   | ---: | :---: | --- |
   | 1 | B | Art. 2 CE |
*/

function parseTestMarkdown(text, deckId) {
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1); // BOM
  const lines = text.split(/\r\n|\r|\n/);

  const titleLine = lines.find((l) => /^#\s+/.test(l));
  const tema = titleLine ? titleLine.replace(/^#\s+/, "").trim() : prettifyTestId(deckId);

  const answerHeadingIdx = lines.findIndex((l) =>
    /^##\s*(Respuestas|Plantilla)/i.test(l)
  );
  const bodyLines = answerHeadingIdx === -1 ? lines : lines.slice(0, answerHeadingIdx);
  const answerLines = answerHeadingIdx === -1 ? [] : lines.slice(answerHeadingIdx);

  // --- Preguntas y opciones ---
  const preguntas = [];
  let current = null;
  for (const raw of bodyLines) {
    const qMatch = raw.match(/^(\d+)\.\s+(.*)$/);
    const oMatch = raw.match(/^\s*([A-D])\.\s+(.*?)\s*$/);
    if (qMatch) {
      if (current) preguntas.push(current);
      current = { numero: Number(qMatch[1]), enunciadoLines: [qMatch[2].trim()], opciones: [] };
    } else if (current && current.opciones.length < 4 && oMatch) {
      current.opciones.push({ letra: oMatch[1], texto: oMatch[2].trim() });
    } else if (current && current.opciones.length === 0) {
      const t = raw.trim();
      if (t) current.enunciadoLines.push(t);
    }
  }
  if (current) preguntas.push(current);
  for (const p of preguntas) {
    p.enunciado = p.enunciadoLines.join("\n");
    delete p.enunciadoLines;
  }

  // --- Tabla de respuestas ---
  const respuestas = {};
  for (const raw of answerLines) {
    const t = raw.trim();
    if (!t.startsWith("|")) continue;
    if (/^\|\s*-+/.test(t)) continue; // fila separadora
    const parts = t.split("|").slice(1, -1).map((c) => c.trim());
    if (parts.length < 2) continue;
    const numero = parseInt(parts[0], 10);
    if (!Number.isFinite(numero)) continue; // fila de cabecera
    const letra = (parts[1] || "").toUpperCase().replace(/[^A-D]/g, "");
    if (!letra) continue;
    const referencia = parts.slice(2).join(" — ").trim();
    respuestas[numero] = { letra, referencia };
  }

  // --- Combinar en preguntas usables ---
  const out = [];
  for (const p of preguntas) {
    const r = respuestas[p.numero];
    if (!r || p.opciones.length < 2) continue;
    if (!p.opciones.some((o) => o.letra === r.letra)) continue;
    out.push({
      id: deckId + "::" + p.numero,
      deck: deckId,
      tema,
      numero: p.numero,
      enunciado: p.enunciado,
      opciones: p.opciones,
      correcta: r.letra,
      referencia: r.referencia,
    });
  }
  return { tema, preguntas: out };
}

/* ---------- Almacenamiento ---------- */

function loadTests() {
  try {
    const raw = localStorage.getItem(TEST_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error("No se pudo leer localStorage", e);
    return {};
  }
}

function saveTests() {
  localStorage.setItem(TEST_STORAGE_KEY, JSON.stringify(testStore));
}

function upsertQuestions(newQuestions) {
  let added = 0;
  let updated = 0;
  const now = todayMs();
  for (const nq of newQuestions) {
    const existing = testStore[nq.id];
    if (existing) {
      existing.tema = nq.tema;
      existing.numero = nq.numero;
      existing.enunciado = nq.enunciado;
      existing.opciones = nq.opciones;
      existing.correcta = nq.correcta;
      existing.referencia = nq.referencia;
      updated++;
    } else {
      testStore[nq.id] = {
        ...nq,
        repetition: 0,
        interval: 0,
        efactor: 2.5,
        due: now,
        lastReview: null,
      };
      added++;
    }
  }
  saveTests();
  return { added, updated };
}

function removeTestDeck(deckId) {
  for (const id of Object.keys(testStore)) {
    if (testStore[id].deck === deckId) delete testStore[id];
  }
  saveTests();
}

function rateQuestion(question, quality) {
  const next = computeNext(question, quality);
  question.repetition = next.repetition;
  question.interval = next.interval;
  question.efactor = next.efactor;
  question.lastReview = todayMs();
  question.due = todayMs() + next.interval * 86400000;
  saveTests();
}

/* ---------- Estado de la aplicación ---------- */

let testStore = loadTests();
let quiz = null; // { queue, index, reviewed, correct, incorrect, options, answered, selectedIndex, fails }

/* ---------- Listado de mazos ---------- */

function getTestDeckIds() {
  const set = new Set();
  for (const id in testStore) set.add(testStore[id].deck);
  return Array.from(set).sort();
}

function testDeckLabel(deckId) {
  const qs = Object.values(testStore).filter((q) => q.deck === deckId);
  const tema = qs.find((q) => q.tema)?.tema;
  return tema || prettifyTestId(deckId);
}

function getSelectedTestDecks() {
  return new Set(
    $$("#test-deck-list input[type=checkbox]:checked").map((el) => el.value)
  );
}

function getFilteredQuestions({ ignoreDue }) {
  const decks = getSelectedTestDecks();
  const now = todayMs();
  return Object.values(testStore).filter(
    (q) => decks.has(q.deck) && (ignoreDue || q.due <= now)
  );
}

function renderTestDeckList() {
  const deckIds = getTestDeckIds();
  const container = $("#test-deck-list");
  if (deckIds.length === 0) {
    container.innerHTML = '<p class="hint">Todavía no has cargado ningún test.</p>';
    return;
  }
  const previouslySelected = new Set(
    $$("#test-deck-list input[type=checkbox]:checked").map((el) => el.value)
  );
  const firstRender = container.dataset.rendered !== "1";

  container.innerHTML = deckIds
    .map((deckId) => {
      const count = Object.values(testStore).filter((q) => q.deck === deckId).length;
      const checked = firstRender || previouslySelected.has(deckId) ? "checked" : "";
      return `
        <div class="deck-row">
          <input type="checkbox" value="${deckId}" ${checked}>
          <span class="deck-name">${testDeckLabel(deckId)}</span>
          <span class="deck-count">${count} preguntas</span>
          <button class="deck-remove" data-deck="${deckId}">Eliminar</button>
        </div>`;
    })
    .join("");
  container.dataset.rendered = "1";

  $$("#test-deck-list input[type=checkbox]").forEach((el) =>
    el.addEventListener("change", renderTestStats)
  );
  $$("#test-deck-list .deck-remove").forEach((btn) =>
    btn.addEventListener("click", () => {
      const deckId = btn.dataset.deck;
      if (confirm(`¿Eliminar el test "${testDeckLabel(deckId)}" y todo su progreso?`)) {
        removeTestDeck(deckId);
        renderTestDeckList();
        renderTestStats();
      }
    })
  );
}

function renderTestStats() {
  const total = getFilteredQuestions({ ignoreDue: true }).length;
  const due = getFilteredQuestions({ ignoreDue: false }).length;
  const learned = getFilteredQuestions({ ignoreDue: true }).filter(
    (q) => q.repetition > 0
  ).length;

  $("#test-stat-total").textContent = total;
  $("#test-stat-due").textContent = due;
  $("#test-stat-learned").textContent = learned;

  const cram = $("#test-cram-toggle").checked;
  $("#test-start-btn").disabled = cram ? total === 0 : due === 0;
}

/* ---------- Sesión de test ---------- */

function startQuiz() {
  const cram = $("#test-cram-toggle").checked;
  let queue = shuffle(getFilteredQuestions({ ignoreDue: cram }));
  if (queue.length === 0) return;

  const lengthSel = $("#quiz-length").value;
  if (lengthSel !== "all") {
    queue = queue.slice(0, Number(lengthSel));
  }

  quiz = { queue, index: 0, reviewed: 0, correct: 0, incorrect: 0, answered: false, options: [], fails: [] };
  showView("test-question");
  renderQuestion();
}

function currentQuestion() {
  return quiz.queue[quiz.index];
}

function renderQuestion() {
  const q = currentQuestion();
  quiz.answered = false;
  quiz.selectedIndex = null;

  // Baraja el orden de las opciones y reasigna letras A-D para mostrarlas.
  const letters = ["A", "B", "C", "D"];
  quiz.options = shuffle(q.opciones).map((o, i) => ({
    letra: letters[i],
    texto: o.texto,
    esCorrecta: o.letra === q.correcta,
  }));

  $("#test-question-deck").textContent = testDeckLabel(q.deck);
  $("#test-question-text").textContent = q.enunciado;

  $("#test-options").innerHTML = quiz.options
    .map(
      (o, i) => `
        <button class="button option-btn" data-index="${i}">
          <span class="option-letter">${o.letra}</span>
          <span class="option-text">${o.texto}</span>
        </button>`
    )
    .join("");
  $$("#test-options .option-btn").forEach((btn) =>
    btn.addEventListener("click", () => answerQuiz(Number(btn.dataset.index)))
  );

  $("#test-feedback").classList.add("hidden");
  $("#test-next-btn").classList.add("hidden");

  $("#test-review-counter").textContent = `${quiz.index + 1} / ${quiz.queue.length}`;
  $("#test-progress-fill").style.width = `${(quiz.index / quiz.queue.length) * 100}%`;
}

function answerQuiz(index) {
  if (quiz.answered) return;
  quiz.answered = true;
  quiz.selectedIndex = index;

  const q = currentQuestion();
  const chosen = quiz.options[index];
  const quality = chosen.esCorrecta ? 4 : 1;
  rateQuestion(q, quality);
  quiz.reviewed++;

  if (chosen.esCorrecta) {
    quiz.correct++;
  } else {
    quiz.incorrect++;
    quiz.fails.push(q);
    // Se reinserta un poco más adelante en la cola para repasarla de nuevo en esta sesión.
    quiz.queue.splice(Math.min(quiz.queue.length, quiz.index + 1 + 3), 0, q);
  }

  $$("#test-options .option-btn").forEach((btn, i) => {
    btn.classList.toggle("correct", quiz.options[i].esCorrecta);
    if (i === index && !chosen.esCorrecta) btn.classList.add("incorrect");
    btn.disabled = true;
  });

  const feedback = $("#test-feedback");
  feedback.classList.remove("hidden");
  feedback.classList.toggle("is-correct", chosen.esCorrecta);
  feedback.classList.toggle("is-incorrect", !chosen.esCorrecta);
  $("#test-feedback-result").textContent = chosen.esCorrecta ? "¡Correcto!" : "Incorrecto";
  $("#test-feedback-reference").textContent = q.referencia || "";

  $("#test-next-btn").classList.remove("hidden");
}

function nextQuestion() {
  if (!quiz.answered) return;
  quiz.index++;
  if (quiz.index >= quiz.queue.length) {
    endQuiz();
  } else {
    renderQuestion();
  }
}

function endQuiz() {
  const nota = quiz.correct - quiz.incorrect / 3;
  $("#test-summary-reviewed").textContent = quiz.reviewed;
  $("#test-summary-correct").textContent = quiz.correct;
  $("#test-summary-incorrect").textContent = quiz.incorrect;
  $("#test-summary-score").textContent = nota.toFixed(2);

  const failsList = $("#test-summary-fails");
  if (quiz.fails.length === 0) {
    failsList.innerHTML = '<p class="hint">Ninguna pregunta fallada. ¡Bien hecho!</p>';
  } else {
    // Preguntas únicas (una pregunta puede haberse fallado en su reintento también).
    const uniqueFails = Array.from(new Map(quiz.fails.map((q) => [q.id, q])).values());
    failsList.innerHTML =
      '<p class="hint">Preguntas falladas:</p>' +
      uniqueFails
        .map(
          (q) => `
            <div class="fail-item">
              <p class="fail-question">${q.enunciado}</p>
              <p class="fail-answer">Respuesta correcta: <strong>${q.correcta}</strong>${q.referencia ? " — " + q.referencia : ""}</p>
            </div>`
        )
        .join("");
  }

  showView("test-summary");
  renderTestDeckList();
  renderTestStats();
}

/* ---------- Carga de archivos ---------- */

function importTestFiles(fileList) {
  const files = Array.from(fileList).filter((f) => f.name.endsWith(".md"));
  if (files.length === 0) return;

  let pending = files.length;
  let totalAdded = 0;
  let totalUpdated = 0;
  const errors = [];

  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const deckId = file.name.replace(/\.md$/i, "");
        const { preguntas } = parseTestMarkdown(reader.result, deckId);
        if (preguntas.length === 0) {
          throw new Error("no se reconocieron preguntas con respuesta en el archivo");
        }
        const { added, updated } = upsertQuestions(preguntas);
        totalAdded += added;
        totalUpdated += updated;
      } catch (e) {
        errors.push(`${file.name}: ${e.message}`);
      } finally {
        pending--;
        if (pending === 0) finishTestImport(totalAdded, totalUpdated, errors);
      }
    };
    reader.onerror = () => {
      errors.push(`${file.name}: no se pudo leer el archivo`);
      pending--;
      if (pending === 0) finishTestImport(totalAdded, totalUpdated, errors);
    };
    reader.readAsText(file, "utf-8");
  });
}

function finishTestImport(added, updated, errors) {
  renderTestDeckList();
  renderTestStats();
  let msg = `${added} preguntas nuevas, ${updated} actualizadas.`;
  if (errors.length) msg += " Errores: " + errors.join("; ");
  $("#test-autoload-msg").textContent = msg;
}

async function autoloadTestsFromFolder() {
  const msg = $("#test-autoload-msg");
  msg.textContent = "Buscando archivos en ../07_tests/ ...";

  let found = 0;
  let totalAdded = 0;
  let totalUpdated = 0;
  const missing = [];

  for (const deckId of KNOWN_TEST_FILES) {
    try {
      const res = await fetch(`../07_tests/${deckId}.md`);
      if (!res.ok) {
        missing.push(deckId);
        continue;
      }
      const text = await res.text();
      const { preguntas } = parseTestMarkdown(text, deckId);
      if (preguntas.length === 0) {
        missing.push(deckId);
        continue;
      }
      const { added, updated } = upsertQuestions(preguntas);
      totalAdded += added;
      totalUpdated += updated;
      found++;
    } catch (e) {
      missing.push(deckId);
    }
  }

  renderTestDeckList();
  renderTestStats();

  if (found === 0) {
    msg.textContent =
      "No se pudo cargar automáticamente (esto solo funciona si sirves esta carpeta con un servidor local, no abriendo el archivo directamente). Usa 'Elegir archivos' en su lugar.";
  } else {
    msg.textContent = `Cargados ${found} tests (${totalAdded} preguntas nuevas, ${totalUpdated} actualizadas).` +
      (missing.length ? ` No encontrados: ${missing.join(", ")}.` : "");
  }
}

/* ---------- Eventos ---------- */

$("#test-file-input").addEventListener("change", (e) => importTestFiles(e.target.files));

const testDropzone = $("#test-dropzone");
["dragenter", "dragover"].forEach((evt) =>
  testDropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    testDropzone.classList.add("dragover");
  })
);
["dragleave", "drop"].forEach((evt) =>
  testDropzone.addEventListener(evt, (e) => {
    e.preventDefault();
    testDropzone.classList.remove("dragover");
  })
);
testDropzone.addEventListener("drop", (e) => importTestFiles(e.dataTransfer.files));

$("#test-autoload-btn").addEventListener("click", autoloadTestsFromFolder);

$("#test-deselect-all-btn").addEventListener("click", () => {
  $$("#test-deck-list input[type=checkbox]").forEach((el) => (el.checked = false));
  renderTestStats();
});

$("#test-cram-toggle").addEventListener("change", renderTestStats);
$("#quiz-length").addEventListener("change", renderTestStats);

$("#test-start-btn").addEventListener("click", startQuiz);
$("#test-exit-btn").addEventListener("click", () => {
  quiz = null;
  showView("test-home");
  renderTestDeckList();
  renderTestStats();
});

$("#test-next-btn").addEventListener("click", nextQuestion);

$("#test-review-more-btn").addEventListener("click", startQuiz);
$("#test-back-home-btn").addEventListener("click", () => {
  quiz = null;
  showView("test-home");
});

$("#test-reset-progress-btn").addEventListener("click", () => {
  if (!confirm("Esto reinicia el progreso de repaso de todas las preguntas (no borra los tests). ¿Continuar?"))
    return;
  const now = todayMs();
  for (const id in testStore) {
    const q = testStore[id];
    q.repetition = 0;
    q.interval = 0;
    q.efactor = 2.5;
    q.due = now;
    q.lastReview = null;
  }
  saveTests();
  renderTestStats();
});

$("#test-wipe-all-btn").addEventListener("click", () => {
  if (!confirm("Esto borra TODOS los tests y todo el progreso guardado en este navegador. ¿Continuar?"))
    return;
  testStore = {};
  saveTests();
  renderTestDeckList();
  renderTestStats();
  $("#test-autoload-msg").textContent = "";
});

document.addEventListener("keydown", (e) => {
  if ($("#view-test-question").classList.contains("hidden")) return;
  if (e.code === "Escape") {
    quiz = null;
    showView("test-home");
    renderTestDeckList();
    renderTestStats();
    return;
  }
  if (!quiz) return;
  if (!quiz.answered && ["Digit1", "Digit2", "Digit3", "Digit4"].includes(e.code)) {
    const index = { Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3 }[e.code];
    if (index < quiz.options.length) answerQuiz(index);
    return;
  }
  if (quiz.answered && (e.code === "Space" || e.code === "Enter")) {
    e.preventDefault();
    nextQuestion();
  }
});

/* ---------- Arranque ---------- */

renderTestDeckList();
renderTestStats();
