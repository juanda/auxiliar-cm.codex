# AGENT.md - Proyecto Temario Oposición Auxiliar Administrativo Comunidad de Madrid (C2)

## Objetivo

Construir un temario optimizado para la oposición de Auxiliares de Administración General, Grupo C, Subgrupo C2, de la Comunidad de Madrid, convocatoria 2026, utilizando:

* Convocatoria oficial 2026.
* Exámenes oficiales de convocatorias anteriores.
* Plantillas de respuestas.
* Legislación vigente.
* Estadísticas de recurrencia de preguntas.

El objetivo NO es generar un temario enciclopédico, sino un material altamente eficaz para aprobar.

---

# Estructura del proyecto

```text
/
│
├── 00_convocatoria/
│   ├── convocatoria_2026.pdf
│   └── programa_oficial.md
│
├── 01_examenes_originales/
│   ├── 2017/
│   ├── 2021/
│   ├── 2023/
│   └── 2025/
│
├── 02_preguntas_extraidas/
│   ├── preguntas.json
│   ├── preguntas.csv
│   └── preguntas_normalizadas.json
│
├── 03_clasificacion/
│   ├── temas.json
│   ├── subtemas.json
│   └── psicotecnicos.json
│
├── 04_estadisticas/
│   ├── frecuencia_temas.md
│   ├── frecuencia_subtemas.md
│   ├── tendencias.md
│   └── graficos/
│
├── 05_temario/
│   ├── tema_01_constitucion.md
│   ├── tema_02_estatuto.md
│   ├── ...
│   └── tema_21_m365.md
│
├── 06_esquemas/
│   ├── tema_01_mapa_mental.md
│   ├── tema_02_esquema.md
│   └── ...
│
├── 07_tests/
│   ├── test_tema_01.md
│   ├── test_tema_02.md
│   ├── test_bloque_I.md
│   └── test_bloque_II.md
│
├── 08_flashcards/
│   ├── anki_constitucion.csv
│   ├── anki_ley39.csv
│   └── ...
│
├── 09_simulacros/
│   ├── simulacro_01.md
│   ├── simulacro_02.md
│   └── simulacro_03.md
│
└── README.md
```

---

# Convocatoria base

La referencia principal será la convocatoria 2026.

## Primer ejercicio

* 60 preguntas.
* 5 preguntas de reserva.
* 30 preguntas psicotécnicas.
* 30 preguntas del Bloque I.
* Tiempo: 65 minutos.
* Penalización: 1/3 por error.

## Segundo ejercicio

* 30 preguntas.
* 5 preguntas de reserva.
* Bloque II (Ofimática).
* Tiempo: 35 minutos.
* Penalización: 1/3 por error.

---

# Programa oficial

## BLOQUE I

### Tema 1

La Constitución Española de 1978.

### Tema 2

Estatuto de Autonomía de la Comunidad de Madrid.

### Tema 3

Ley de Gobierno y Administración de la Comunidad de Madrid.

### Tema 4

Fuentes del ordenamiento jurídico.

### Tema 5

Acto administrativo.

### Tema 6

Ley 39/2015.

### Tema 7

Jurisdicción contencioso-administrativa.

### Tema 8

Transparencia y protección de datos.

### Tema 9

Contratos del sector público.

### Tema 10

EBEP y función pública.

### Tema 11

Seguridad Social.

### Tema 12

Hacienda Pública y Presupuestos.

### Tema 13

Igualdad y violencia de género.

### Tema 14

Atención al ciudadano y administración electrónica.

### Tema 15

Documentos, registros y archivos.

---

## BLOQUE II

### Tema 16

Windows 10.

### Tema 17

Word.

### Tema 18

Excel.

### Tema 19

Access y Power BI.

### Tema 20

Outlook.

### Tema 21

Microsoft 365:

* Teams
* SharePoint
* OneDrive
* Outlook
* Videoconferencia

---

# Extracción de preguntas

Cada pregunta debe almacenarse así:

```json
{
  "id": "2025-L1-034",
  "anyo": 2025,
  "ejercicio": 1,
  "numero": 34,
  "tema": 6,
  "subtema": "Silencio administrativo",
  "tipo": "legislacion",
  "dificultad": "media",
  "pregunta": "....",
  "opciones": {
    "A": "...",
    "B": "...",
    "C": "...",
    "D": "..."
  },
  "respuesta_correcta": "C",
  "fuente": "2025_Cuestionario1_CAM.pdf"
}
```

---

# Clasificación obligatoria

Todas las preguntas deberán clasificarse por:

## Tipo

* legislacion
* constitucion
* comunidad_madrid
* procedimiento_administrativo
* funcion_publica
* contratos
* transparencia
* igualdad
* seguridad_social
* hacienda_publica
* ofimatica
* psicotecnico_verbal
* psicotecnico_numerico
* psicotecnico_logico
* psicotecnico_atencion

## Dificultad

* baja
* media
* alta

---

# Estadísticas a generar

## Frecuencia por tema

Ejemplo:

| Tema         | Preguntas |
| ------------ | --------: |
| Constitución |        42 |
| Ley 39/2015  |        85 |
| Word         |        37 |
| Excel        |        51 |

---

## Frecuencia por subtema

Ejemplo:

| Subtema                  | Preguntas |
| ------------------------ | --------: |
| Recursos administrativos |        23 |
| Silencio administrativo  |        17 |
| Actos nulos              |        11 |

---

## Tendencias

Identificar:

* Materias que aparecen todos los años.
* Materias desaparecidas.
* Materias nuevas.
* Incremento de psicotécnicos.
* Incremento de ofimática.

---

# Generación del temario

Para cada tema generar:

## 1. Resumen ejecutivo

Máximo 2 páginas.

## 2. Desarrollo

Explicación completa.

## 3. Conceptos clave

Tabla de conceptos preguntables.

## 4. Artículos importantes

Sólo los relevantes para examen.

## 5. Errores típicos

Confusiones habituales.

## 6. Preguntas históricas

Preguntas reales clasificadas.

## 7. Test de entrenamiento

20-50 preguntas nuevas.

## 8. Esquema final

Repaso rápido de una página.

---

# Flashcards

Formato:

```csv
tema,pregunta,respuesta,dificultad
```

Ejemplo:

```csv
Constitucion,¿Quién sanciona las leyes?,El Rey,baja
```

---

# Simulacros

## Simulacro tipo oficial

Primer ejercicio:

* 30 psicotécnicos
* 30 bloque I

Segundo ejercicio:

* 30 ofimática

Con corrección automática.

---

# Prioridades de desarrollo

Orden de redacción:

1. Word
2. Excel
3. Windows
4. Outlook
5. Microsoft 365
6. Psicotécnicos
7. Constitución
8. Estatuto de Autonomía
9. Ley 39/2015
10. Transparencia
11. Función Pública
12. Resto de materias

---

# Criterios de calidad

* No copiar legislación literalmente salvo artículos imprescindibles.
* Explicar con lenguaje sencillo.
* Priorizar lo preguntado históricamente.
* Mantener trazabilidad con la convocatoria.
* Incluir siempre preguntas tipo test.
* Indicar referencias normativas.
* Favorecer esquemas y tablas frente a texto extenso.
