# Auditoria de cobertura por tema

Fecha: 2026-06-22.

Objetivo: comprobar que los temas 1 a 21 del temario citan y cubren las preguntas históricas clasificadas en `02_preguntas_extraidas/preguntas_normalizadas.json`.

## Metodo

- Se han revisado 225 preguntas históricas clasificadas con `tema` 1-21.
- Se ha comprobado que cada ID histórico aparece citado en su archivo de `05_temario/`.
- Se ha verificado que todos los temas mantienen las 8 secciones obligatorias del formato del proyecto.
- Se han listado los subtemas históricos principales para orientar repasos y futuras ampliaciones.
- Las 105 preguntas psicotecnicas no se incluyen aquí porque no pertenecen a un tema del Bloque I/II; se trabajan en tests psicotecnicos y simulacros.

## Resumen ejecutivo

| Indicador | Resultado |
| --- | ---: |
| Preguntas históricas con tema 1-21 | 225 |
| IDs históricos citados en su tema | 225 |
| IDs históricos no localizados | 0 |
| Temas con 8 secciones obligatorias | 21 / 21 |

Conclusión: la cobertura histórica básica esta completa. No se han detectado IDs históricos sin trazar en el temario. La siguiente mejora no es reconstruir temas, sino hacer revisión cualitativa de profundidad en los temas de mayor recurrencia.

## Tabla de cobertura

| Tema | Materia | Preguntas históricas | IDs citados | IDs pendientes | Secciones | Estado |
| ---: | --- | ---: | ---: | ---: | ---: | --- |
| 1 | Constitución | 10 | 10 | 0 | 8/8 | OK |
| 2 | Estatuto de Autonomía | 12 | 12 | 0 | 8/8 | OK |
| 3 | Gobierno y Administración CAM | 11 | 11 | 0 | 8/8 | OK |
| 4 | Fuentes del ordenamiento | 7 | 7 | 0 | 8/8 | OK |
| 5 | Acto administrativo | 2 | 2 | 0 | 8/8 | OK |
| 6 | Ley 39/2015 | 19 | 19 | 0 | 8/8 | OK |
| 7 | Jurisdicción contencioso-administrativa | 7 | 7 | 0 | 8/8 | OK |
| 8 | Transparencia y protección de datos | 18 | 18 | 0 | 8/8 | OK |
| 9 | Contratos del sector público | 7 | 7 | 0 | 8/8 | OK |
| 10 | Función pública | 13 | 13 | 0 | 8/8 | OK |
| 11 | Seguridad Social | 9 | 9 | 0 | 8/8 | OK |
| 12 | Hacienda y presupuestos | 7 | 7 | 0 | 8/8 | OK |
| 13 | Igualdad, violencia y LGTBI | 13 | 13 | 0 | 8/8 | OK |
| 14 | Atención ciudadana y administración electrónica | 13 | 13 | 0 | 8/8 | OK |
| 15 | Documentos, registro y archivo | 7 | 7 | 0 | 8/8 | OK |
| 16 | Windows 10 | 12 | 12 | 0 | 8/8 | OK |
| 17 | Word | 11 | 11 | 0 | 8/8 | OK |
| 18 | Excel | 12 | 12 | 0 | 8/8 | OK |
| 19 | Access y Power BI | 12 | 12 | 0 | 8/8 | OK |
| 20 | Outlook | 11 | 11 | 0 | 8/8 | OK |
| 21 | Microsoft 365 colaborativo | 12 | 12 | 0 | 8/8 | OK |

## Prioridad de revisión cualitativa

| Prioridad | Tema | Motivo | Acción recomendada |
| ---: | --- | --- | --- |
| 1 | 6. Ley 39/2015 | 19 preguntas históricas; alto peso y muchos plazos/trámites. | Releer fases, subsanación, alegaciones, notificaciones, silencio y recursos. |
| 2 | 8. Transparencia y protección de datos | 18 preguntas históricas; mezcla de Ley 19/2013, CAM y protección de datos. | Separar publicidad activa, acceso, límites, DPD, responsable y encargado. |
| 3 | 10. Función pública | 13 preguntas históricas; conceptos muy confundibles. | Repasar clases de personal, acceso, perdida, derechos, incompatibilidades y régimen disciplinario. |
| 4 | 14. Atención ciudadana y administración electrónica | 13 preguntas históricas; conecta con identificación electrónica y RD 203/2021. | Revisar información general/particular, canales, copias, notificaciones y obligados electrónicos. |
| 5 | 18. Excel | 12 preguntas históricas y alta probabilidad futura en Bloque II. | Repasar referencias, funciones, tablas dinamicas, comentarios/notas y gestion de datos. |
| 6 | 20. Outlook | 12 preguntas históricas; detalles de interfaz y conceptos básicos. | Repasar Para/CC/CCO, responder/reenviar, FW/RV, reglas, conversaciones y calendario. |

## Detalle por tema

### Tema 1. Constitución

- Archivo: `05_temario/tema_01_constitucion.md`
- Preguntas históricas revisadas: 10.
- IDs citados en el tema: 10/10.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2017-E1-046, 2017-E1-047, 2017-E1-048, 2021-E1-001, 2021-E1-002, 2023-E1-031, 2023-E1-032, 2025-E1-031, 2025-E1-032, 2025-E1-061`

| Subtema histórico | Preguntas |
| --- | ---: |
| Valores superiores | 4 |
| Derechos y deberes fundamentales | 3 |
| Constitución | 2 |
| Reforma constitucional | 1 |

### Tema 2. Estatuto de Autonomía

- Archivo: `05_temario/tema_02_estatuto.md`
- Preguntas históricas revisadas: 12.
- IDs citados en el tema: 12/12.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2017-E1-049, 2017-E1-050, 2017-E1-051, 2017-E1-052, 2021-E1-003, 2021-E1-004, 2021-E1-005, 2023-E1-033, 2023-E1-034, 2023-E1-061, 2025-E1-033, 2025-E1-034`

| Subtema histórico | Preguntas |
| --- | ---: |
| Asamblea de Madrid | 8 |
| Competencias | 2 |
| Estatuto de Autonomía | 2 |

### Tema 3. Gobierno y Administración CAM

- Archivo: `05_temario/tema_03_gobierno_administracion.md`
- Preguntas históricas revisadas: 11.
- IDs citados en el tema: 11/11.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2017-E1-053, 2017-E1-054, 2021-E1-006, 2021-E1-007, 2021-E1-008, 2021-E1-009, 2021-E1-010, 2023-E1-035, 2023-E1-036, 2025-E1-035, 2025-E1-036`

| Subtema histórico | Preguntas |
| --- | ---: |
| Consejo de Gobierno | 6 |
| Consejerías | 2 |
| Administración institucional | 1 |
| Gobierno y Administración | 1 |
| Presidente de la Comunidad | 1 |

### Tema 4. Fuentes del ordenamiento

- Archivo: `05_temario/tema_04_fuentes_ordenamiento.md`
- Preguntas históricas revisadas: 7.
- IDs citados en el tema: 7/7.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2017-E1-055, 2017-E1-056, 2017-E1-057, 2023-E1-037, 2023-E1-038, 2025-E1-037, 2025-E1-038`

| Subtema histórico | Preguntas |
| --- | ---: |
| Leyes orgánicas | 3 |
| Ordenamiento jurídico | 2 |
| Fuentes del derecho | 1 |
| Normas con rango de ley | 1 |

### Tema 5. Acto administrativo

- Archivo: `05_temario/tema_05_acto_administrativo.md`
- Preguntas históricas revisadas: 2.
- IDs citados en el tema: 2/2.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2023-E1-039, 2023-E1-040`

| Subtema histórico | Preguntas |
| --- | ---: |
| Actos nulos y anulables | 1 |
| Responsabilidad administrativa | 1 |

### Tema 6. Ley 39/2015

- Archivo: `05_temario/tema_06_ley_39_procedimiento.md`
- Preguntas históricas revisadas: 19.
- IDs citados en el tema: 19/19.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2017-E1-058, 2017-E1-059, 2017-E1-060, 2017-E1-061, 2017-E1-062, 2017-E1-063, 2021-E1-011, 2021-E1-012, 2021-E1-013, 2021-E1-014, 2021-E1-015, 2023-E1-041, 2023-E1-042, 2023-E1-062, 2025-E1-039, 2025-E1-040, 2025-E1-041, 2025-E1-042, 2025-E1-062`

| Subtema histórico | Preguntas |
| --- | ---: |
| Procedimiento administrativo | 13 |
| Notificaciones | 3 |
| Ley 39/2015 | 2 |
| Alegaciones | 1 |

### Tema 7. Jurisdicción contencioso-administrativa

- Archivo: `05_temario/tema_07_jurisdiccion_contencioso_administrativa.md`
- Preguntas históricas revisadas: 7.
- IDs citados en el tema: 7/7.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2017-E1-064, 2017-E1-065, 2017-E1-066, 2023-E1-043, 2023-E1-044, 2025-E1-043, 2025-E1-044`

| Subtema histórico | Preguntas |
| --- | ---: |
| Jurisdicción contencioso-administrativa | 7 |

### Tema 8. Transparencia y protección de datos

- Archivo: `05_temario/tema_08_transparencia_proteccion_datos.md`
- Preguntas históricas revisadas: 18.
- IDs citados en el tema: 18/18.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2017-E1-067, 2017-E1-068, 2017-E1-069, 2021-E1-016, 2021-E1-017, 2021-E1-018, 2021-E1-019, 2021-E1-020, 2021-E1-036, 2021-E1-037, 2021-E1-038, 2021-E1-039, 2023-E1-045, 2023-E1-046, 2023-E1-065, 2025-E1-045, 2025-E1-046, 2025-E1-065`

| Subtema histórico | Preguntas |
| --- | ---: |
| Derecho de acceso a la información pública | 8 |
| Transparencia | 5 |
| Protección de datos | 3 |
| Portal de transparencia | 2 |

### Tema 9. Contratos del sector público

- Archivo: `05_temario/tema_09_contratos_sector_publico.md`
- Preguntas históricas revisadas: 7.
- IDs citados en el tema: 7/7.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2017-E1-070, 2017-E1-071, 2017-E1-072, 2023-E1-047, 2023-E1-048, 2025-E1-047, 2025-E1-048`

| Subtema histórico | Preguntas |
| --- | ---: |
| Contratos del sector público | 7 |

### Tema 10. Función pública

- Archivo: `05_temario/tema_10_ebep_funcion_publica.md`
- Preguntas históricas revisadas: 13.
- IDs citados en el tema: 13/13.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2017-E1-073, 2017-E1-074, 2017-E1-075, 2021-E1-031, 2021-E1-032, 2021-E1-033, 2021-E1-034, 2021-E1-035, 2023-E1-049, 2023-E1-050, 2025-E1-049, 2025-E1-050, 2025-E1-063`

| Subtema histórico | Preguntas |
| --- | ---: |
| Personal al servicio de las Administraciones Públicas | 8 |
| Régimen disciplinario | 2 |
| Incompatibilidades | 1 |
| Retribuciones | 1 |
| Situaciones administrativas | 1 |

### Tema 11. Seguridad Social

- Archivo: `05_temario/tema_11_seguridad_social.md`
- Preguntas históricas revisadas: 9.
- IDs citados en el tema: 9/9.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2017-E1-076, 2017-E1-077, 2017-E1-078, 2023-E1-051, 2023-E1-052, 2023-E1-063, 2025-E1-051, 2025-E1-052, 2025-E1-064`

| Subtema histórico | Preguntas |
| --- | ---: |
| Seguridad Social | 4 |
| Acción protectora | 2 |
| Cotización | 2 |
| Afiliación | 1 |

### Tema 12. Hacienda y presupuestos

- Archivo: `05_temario/tema_12_hacienda_presupuestos.md`
- Preguntas históricas revisadas: 7.
- IDs citados en el tema: 7/7.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2017-E1-079, 2017-E1-080, 2017-E1-081, 2023-E1-053, 2023-E1-054, 2025-E1-053, 2025-E1-054`

| Subtema histórico | Preguntas |
| --- | ---: |
| Presupuestos | 4 |
| Hacienda Pública | 2 |
| Tesorería | 1 |

### Tema 13. Igualdad, violencia y LGTBI

- Archivo: `05_temario/tema_13_igualdad_violencia_lgtbi.md`
- Preguntas históricas revisadas: 13.
- IDs citados en el tema: 13/13.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2017-E1-082, 2017-E1-083, 2017-E1-084, 2021-E1-021, 2021-E1-022, 2021-E1-023, 2021-E1-024, 2021-E1-025, 2023-E1-055, 2023-E1-056, 2023-E1-064, 2025-E1-055, 2025-E1-056`

| Subtema histórico | Preguntas |
| --- | ---: |
| Igualdad entre mujeres y hombres | 7 |
| Personas LGTBI | 3 |
| Violencia de género | 3 |

### Tema 14. Atención ciudadana y administración electrónica

- Archivo: `05_temario/tema_14_atencion_ciudadano_administracion_electronica.md`
- Preguntas históricas revisadas: 13.
- IDs citados en el tema: 13/13.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2017-E1-085, 2017-E1-086, 2017-E1-087, 2017-E1-088, 2021-E1-026, 2021-E1-027, 2021-E1-028, 2021-E1-029, 2021-E1-030, 2023-E1-057, 2023-E1-058, 2025-E1-058, 2025-E1-059`

| Subtema histórico | Preguntas |
| --- | ---: |
| Atención al ciudadano | 6 |
| Administración electrónica | 5 |
| Información administrativa | 2 |

### Tema 15. Documentos, registro y archivo

- Archivo: `05_temario/tema_15_documentos_registros_archivos.md`
- Preguntas históricas revisadas: 7.
- IDs citados en el tema: 7/7.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2017-E1-089, 2017-E1-090, 2021-E1-040, 2023-E1-059, 2023-E1-060, 2025-E1-057, 2025-E1-060`

| Subtema histórico | Preguntas |
| --- | ---: |
| Registro de documentos | 4 |
| Documentos administrativos | 2 |
| Archivo de documentos | 1 |

### Tema 16. Windows 10

- Archivo: `05_temario/tema_16_windows.md`
- Preguntas históricas revisadas: 12.
- IDs citados en el tema: 12/12.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2023-E2-003, 2023-E2-011, 2023-E2-017, 2023-E2-019, 2023-E2-025, 2023-E2-033, 2025-E2-001, 2025-E2-002, 2025-E2-003, 2025-E2-004, 2025-E2-005, 2025-E2-031`

| Subtema histórico | Preguntas |
| --- | ---: |
| Explorador de archivos | 10 |
| Herramientas del sistema | 2 |

### Tema 17. Word

- Archivo: `05_temario/tema_17_word.md`
- Preguntas históricas revisadas: 11.
- IDs citados en el tema: 11/11.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2023-E2-002, 2023-E2-007, 2023-E2-020, 2023-E2-021, 2023-E2-027, 2023-E2-031, 2025-E2-006, 2025-E2-007, 2025-E2-008, 2025-E2-010, 2025-E2-032`

| Subtema histórico | Preguntas |
| --- | ---: |
| Gestión de documentos Word | 8 |
| Búsqueda Word | 2 |
| Formato y estilos Word | 1 |

### Tema 18. Excel

- Archivo: `05_temario/tema_18_excel.md`
- Preguntas históricas revisadas: 12.
- IDs citados en el tema: 12/12.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2023-E2-004, 2023-E2-012, 2023-E2-018, 2023-E2-026, 2023-E2-029, 2023-E2-035, 2025-E2-011, 2025-E2-012, 2025-E2-013, 2025-E2-014, 2025-E2-015, 2025-E2-033`

| Subtema histórico | Preguntas |
| --- | ---: |
| Libros, hojas y celdas | 8 |
| Fórmulas y funciones Excel | 3 |
| Tablas dinámicas | 1 |

### Tema 19. Access y Power BI

- Archivo: `05_temario/tema_19_access_powerbi.md`
- Preguntas históricas revisadas: 12.
- IDs citados en el tema: 12/12.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2023-E2-006, 2023-E2-010, 2023-E2-013, 2023-E2-016, 2023-E2-023, 2025-E2-009, 2025-E2-016, 2025-E2-017, 2025-E2-018, 2025-E2-019, 2025-E2-020, 2025-E2-034`

| Subtema histórico | Preguntas |
| --- | ---: |
| Tablas Access | 8 |
| Access y Power BI | 3 |
| Importación y exportación | 1 |

Nota: `2023-E2-006` estaba clasificada originalmente en el Tema 20 (Outlook) con subtema "Correo electrónico"; se reclasificó aquí porque su enunciado pregunta por un Campo en una Tabla de Access. Corregido en origen en `02_preguntas_extraidas/` (ver `05_temario/tema_20_outlook.md`, tabla de incidencias de clasificación).

### Tema 20. Outlook

- Archivo: `05_temario/tema_20_outlook.md`
- Preguntas históricas revisadas: 11.
- IDs citados en el tema: 11/11.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2023-E2-001, 2023-E2-005, 2023-E2-015, 2023-E2-028, 2023-E2-034, 2025-E2-021, 2025-E2-022, 2025-E2-023, 2025-E2-024, 2025-E2-025, 2025-E2-035`

| Subtema histórico | Preguntas |
| --- | ---: |
| Correo electrónico | 8 |
| Agenda | 1 |
| Outlook | 1 |
| Reglas de mensaje | 1 |

Nota: `2023-E2-006` se excluye de este listado; reclasificada al Tema 19 (Access) por tratar sobre Campos de tablas de Access. Ver detalle en Tema 19.

### Tema 21. Microsoft 365 colaborativo

- Archivo: `05_temario/tema_21_m365.md`
- Preguntas históricas revisadas: 12.
- IDs citados en el tema: 12/12.
- Secciones obligatorias: 8/8.
- Estado: OK.
- IDs revisados: `2023-E2-008, 2023-E2-009, 2023-E2-014, 2023-E2-022, 2023-E2-024, 2023-E2-030, 2023-E2-032, 2025-E2-026, 2025-E2-027, 2025-E2-028, 2025-E2-029, 2025-E2-030`

| Subtema histórico | Preguntas |
| --- | ---: |
| Navegación web y protocolos | 7 |
| Teams y videoconferencias | 3 |
| SharePoint | 2 |

## Resultado

La auditoria no exige ampliaciones inmediatas por falta de trazabilidad histórica. Queda recomendada una revisión cualitativa posterior por profundidad, empezando por los temas 6, 8, 10, 14, 18 y 20.
