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
│   ├── 2025/
│   └── psicotecnicos_academias/
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
* Versiones oficiales indicadas en el Anexo I, apartado Primero.2.2:
  * Windows: Windows 10.
  * Microsoft Office: Microsoft 365 versión escritorio.

---

# Programa oficial

## BLOQUE I

### Tema 1

La Constitución Española de 1978: Características. Los principios constitucionales y los valores superiores. Derechos y deberes fundamentales. Su garantía y suspensión.

### Tema 2

El Estatuto de Autonomía de la Comunidad de Madrid: Estructura y contenido. Las competencias de la Comunidad de Madrid: Potestad legislativa, potestad reglamentaria y función ejecutiva. La Asamblea de Madrid: Composición, elección y funciones.

### Tema 3

La Ley de Gobierno y Administración de la Comunidad de Madrid: Estructura y contenido. El Gobierno de la Comunidad de Madrid. Organización y estructura básica de las Consejerías. La Administración Institucional de la Comunidad de Madrid.

### Tema 4

Las fuentes del ordenamiento jurídico. La Constitución. Las Leyes: Concepto y clases. Las disposiciones del ejecutivo con fuerza de Ley: Decretos-leyes y Decretos legislativos. Los reglamentos: Concepto y clases. Otras fuentes.

### Tema 5

El acto administrativo: Características generales. Requisitos. Eficacia. Actos nulos y anulables. La revisión de los actos administrativos. Los recursos administrativos: Concepto y clases. Responsabilidad de las autoridades y personal al servicio de las Administraciones Públicas.

### Tema 6

La Ley del Procedimiento Administrativo Común de las Administraciones Públicas: Objeto y ámbito de aplicación. Fases del procedimiento: Iniciación, ordenación, instrucción y finalización.

### Tema 7

La Jurisdicción Contencioso-Administrativa: Su organización. Las partes. Actos impugnables. Las fases principales del procedimiento contencioso-administrativo.

### Tema 8

La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno: ámbito de actuación, publicidad activa y derecho de acceso a la información pública. Especial referencia a la Comunidad de Madrid. Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales: principios y derechos de las personas. Referencia al Delegado de Protección de Datos, y al responsable y encargado del tratamiento. Especialidades en el Sector Público.

### Tema 9

Los contratos en el Sector Público: Elementos comunes a todos los contratos. Tipos de contratos: Características principales. Procedimientos de contratación y formas de adjudicación: Aspectos principales.

### Tema 10

El Texto Refundido de la Ley del Estatuto Básico del Empleado Público. Personal al servicio de las Administraciones Públicas. Adquisición y pérdida de la condición de funcionario. Derechos, deberes e incompatibilidades. Situaciones administrativas. Sistema de retribuciones. Régimen disciplinario. Especial referencia a la Ley de la Función Pública de la Comunidad de Madrid.

### Tema 11

La Seguridad Social: Características generales y principales Entidades gestoras. Afiliación, cotización y recaudación. Acción protectora: Contingencias y prestaciones.

### Tema 12

Hacienda Pública: Normativa básica. La Ley de Hacienda de la Comunidad de Madrid: Estructura y principios generales. Los Presupuestos Generales de la Comunidad de Madrid. El ciclo presupuestario.

### Tema 13

El principio de igualdad entre mujeres y hombres. La tutela contra la discriminación. El marco normativo de la igualdad de género, la protección integral contra la violencia de género y no discriminación de las personas LGTBI. Especial referencia a la Comunidad de Madrid.

### Tema 14

Información administrativa y atención al ciudadano en la Comunidad de Madrid en los canales presencial, electrónico y telefónico. La Administración electrónica. La identificación y autenticación de las personas físicas y jurídicas para las diferentes actuaciones en la gestión electrónica. Especial referencia a la Administración electrónica en la Comunidad de Madrid.

### Tema 15

Los documentos administrativos: Concepto, funciones, clasificación y características. Especial referencia al documento electrónico. El registro de documentos: Concepto y funciones. Presentación, recepción, entrada y salida de documentos. El archivo de documentos: Concepto y funciones. Clases de archivo y criterios de ordenación. El acceso a los documentos administrativos: Sus limitaciones y formas de acceso.

---

## BLOQUE II

Nota de versión para todo el Bloque II: según el Anexo I, apartado Primero.2.2 de la convocatoria 2026, las preguntas sobre Windows y Microsoft Office estarán referidas a `Windows 10` y `Microsoft 365 versión escritorio`. Por tanto, los temas de Word, Excel, Access, Outlook y herramientas Microsoft 365 deben desarrollarse con Microsoft 365 de escritorio como versión base. Las preguntas históricas de Excel/Word 2016 sirven como referencia de recurrencia, pero no como versión oficial de la convocatoria 2026.

### Tema 16

El explorador de Windows. Gestión de carpetas y archivos. Operaciones de búsqueda. Herramientas «Este equipo» y «Acceso rápido». Accesorios. Herramientas del sistema.

### Tema 17

Procesadores de texto: Word. Principales funciones y utilidades. Creación y estructuración del documento. Gestión, grabación, recuperación e impresión de ficheros. Personalización del entorno de trabajo.

### Tema 18

Hojas de cálculo: Excel. Principales funciones y utilidades. Libros, hojas y celdas. Configuración. Introducción y edición de datos. Fórmulas y funciones. Tablas dinámicas. Gráficos. Gestión de datos. Personalización del entorno de trabajo.

### Tema 19

Bases de datos: Access. Principales funciones y utilidades. Tablas. Consultas. Formularios. Informes. Relaciones. Importación, vinculación y exportación de datos. Power BI.

### Tema 20

Correo electrónico: Outlook. Conceptos elementales y funcionamiento. Enviar, recibir, responder y reenviar mensajes. Creación de mensajes. Reglas de mensaje. Libreta de direcciones. Agenda. Convocatorias y citas.

### Tema 21

Trabajo colaborativo: herramientas y funcionalidades. Microsoft 365: Teams, Sharepoint, OneDrive y Outlook. Videoconferencias.

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

## Fuentes psicotécnicas de academia

Los psicotécnicos de academia se guardan como fuentes de entrenamiento no oficiales en `01_examenes_originales/psicotecnicos_academias/`.

* No mezclar sus preguntas con exámenes oficiales sin marcar la procedencia.
* Usarlas como ejemplos para generar entrenamiento, simulacros y clasificación de patrones.
* Si se extraen preguntas, conservar la fuente original en el campo `fuente`.
* Clasificarlas con los tipos `psicotecnico_verbal`, `psicotecnico_numerico`, `psicotecnico_logico` o `psicotecnico_atencion`.

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
