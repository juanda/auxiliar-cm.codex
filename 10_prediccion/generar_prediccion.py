#!/usr/bin/env python3
"""Calcula señales predictivas explicables a partir del banco histórico.

Uso:
    python 10_prediccion/generar_prediccion.py

Genera:
    10_prediccion/prediccion_calculada.csv
"""
from __future__ import annotations

import csv
import json
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "02_preguntas_extraidas" / "preguntas_normalizadas.json"
FACTORS = ROOT / "10_prediccion" / "factores_manuales.csv"
OUTPUT = ROOT / "10_prediccion" / "prediccion_calculada.csv"

YEAR_WEIGHTS = {2017: 0.10, 2021: 0.15, 2023: 0.30, 2025: 0.45}
BLOCKS = {**{n: "I" for n in range(1, 16)}, **{n: "II" for n in range(16, 22)}}


def normalize(values: dict[int, float], keys: list[int]) -> dict[int, float]:
    maximum = max((values.get(k, 0.0) for k in keys), default=0.0)
    if maximum == 0:
        return {k: 0.0 for k in keys}
    return {k: 100.0 * values.get(k, 0.0) / maximum for k in keys}


def priority(score: float) -> str:
    if score >= 75:
        return "alta"
    if score >= 65:
        return "media-alta"
    if score >= 50:
        return "media"
    return "baja"


def main() -> None:
    questions = json.loads(DATA.read_text(encoding="utf-8"))
    with FACTORS.open(encoding="utf-8", newline="") as fh:
        manual = {
            int(row["tema"]): (float(row["novedad"]), float(row["testabilidad"]))
            for row in csv.DictReader(fh)
        }

    counts: Counter[tuple[int, int]] = Counter()
    totals: Counter[int] = Counter()
    years: defaultdict[int, set[int]] = defaultdict(set)

    for q in questions:
        topic = q.get("tema")
        year = q.get("anyo")
        if isinstance(topic, int) and topic in BLOCKS and year in YEAR_WEIGHTS:
            counts[(topic, year)] += 1
            totals[topic] += 1
            years[topic].add(year)

    recency_raw = {
        topic: sum(counts[(topic, year)] * weight for year, weight in YEAR_WEIGHTS.items())
        for topic in BLOCKS
    }

    rows = []
    for block in ("I", "II"):
        keys = [topic for topic, value in BLOCKS.items() if value == block]
        frequency = normalize(dict(totals), keys)
        recency = normalize(recency_raw, keys)
        # En Bloque II solo 2023 y 2025 contienen ejercicios comparables.
        comparable = {2023, 2025} if block == "II" else set(YEAR_WEIGHTS)
        for topic in keys:
            persistence = 100.0 * len(years[topic] & comparable) / len(comparable)
            novelty, testability = manual[topic]
            score = (
                0.35 * recency[topic]
                + 0.25 * frequency[topic]
                + 0.20 * persistence
                + 0.15 * novelty
                + 0.05 * testability
            )
            rows.append({
                "bloque": block,
                "tema": topic,
                "total": totals[topic],
                "recencia": round(recency[topic], 2),
                "frecuencia": round(frequency[topic], 2),
                "persistencia": round(persistence, 2),
                "novedad": novelty,
                "testabilidad": testability,
                "puntuacion": round(score),
                "prioridad": priority(score),
            })

    with OUTPUT.open("w", encoding="utf-8", newline="") as fh:
        writer = csv.DictWriter(fh, fieldnames=rows[0].keys())
        writer.writeheader()
        writer.writerows(rows)

    print(f"Generado {OUTPUT.relative_to(ROOT)} con {len(rows)} temas.")


if __name__ == "__main__":
    main()
