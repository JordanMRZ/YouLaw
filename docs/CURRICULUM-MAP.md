# Mapa curricular — YouLaw ↔ plan de derecho virtual

Este documento enlaza las **50 lecciones actuales** (A1–C1) con materias del plan de derecho en modalidad virtual. Los códigos son internos de YouLaw (`src/data/curriculumMap.js`).

**Nota:** el glosario y los ejercicios usan sobre todo **inglés jurídico common law (EE.UU./Virginia)**. El campo *Puente Colombia ↔ inglés* en la preparación de cada lección ayuda a no confundir institutos.

## Materias con lecciones etiquetadas hoy

| Código | Materia del plan | Lecciones (IDs) |
|--------|------------------|-----------------|
| INTRO | Ética e introducción al derecho | A1-1, A1-2, A1-6, A1-9, A1-10, B1-4, B1-8 |
| CONS | Consultorio y práctica jurídica | A1-1, A1-5, A1-6, A1-8, A2-6, A2-8, B1-4, B1-8 |
| TGP | Teoría general del proceso / procesal general | A1-2, A1-4, A1-5, A1-7, A1-8, A1-9, A1-10, A2-2, A2-4, A2-5, A2-6, A2-7, A2-8, A2-10, B1-3, B1-7, B1-9, B1-10, B2-4, C1-3 |
| PPEN | Derecho procesal penal | A1-4, A2-1, A2-2, A2-7, A2-9, C1-9 |
| TPDEL | Teoría del delito | A2-1, A2-9, C1-9 |
| PROB | Derecho probatorio | A2-3, A2-10, B1-9, B2-2, B2-4, B2-6 |
| OBL | Obligaciones | A1-3, B1-1, B2-1, B2-3, B2-8, B2-9, B2-10, C1-2, C1-6 |
| CONT | Contratación privada | A1-3, B1-6, B2-1, B2-3, B2-5, B2-7, B2-9, C1-1, C1-2, C1-4, C1-5, C1-6, C1-8 |
| HERM | Hermenéutica jurídica | B1-7, B2-5, B2-7, C1-1, C1-3, C1-5, C1-7, C1-8, C1-10 |
| ARG | Teoría de la argumentación jurídica | B1-3, B1-7, B1-10, C1-3, C1-7, C1-10 |
| RC | Responsabilidad civil / extracontractual | B1-1, B1-5, B2-8, B2-10 |
| ADR | Resolución de conflictos | B1-2, B1-6 |
| CONST | Teoría constitucional / constitución política | C1-9 (parcial) |
| CIVP | Derecho civil — personas | A2-5 (parcial) |
| COM | Derecho comercial general | C1-4 (parcial) |

## Materias del plan sin pack dedicado (Fase 2–3)

Pendientes de glosario ampliado y/o lecciones nuevas (`SUBJECTS_PLANNED` en código):

- Derechos humanos y DIH  
- Derecho de familia y menores  
- Seguridad social integral  
- Laboral individual, colectivo y procesal laboral  
- Derecho administrativo general y contencioso administrativo  
- Responsabilidad extracontractual **del Estado**  
- Derecho civil — bienes, sucesiones  
- Sociedades mercantiles, títulos valores  
- Derecho tributario, digital, internacional  
- Procesos concursales (solo términos US en glosario hoy)  
- Historia del derecho, criminología, filosofía del derecho, epistemología  

## Tabla lección → materias

| ID | Título | Materias | Semestre orientativo |
|----|--------|----------|----------------------|
| A1-1 | Legal introductions | INTRO, CONS | 1 |
| A1-2 | People at court | INTRO, TGP | 1–2 |
| A1-3 | Simple legal actions | OBL, CONT | 3, 6 |
| A1-4 | Basic case details | TGP, PPEN | 2 |
| A1-5 | Simple questions | CONS, TGP | 1, 7 |
| A1-6 | Documents and forms | INTRO, CONS | 1 |
| A1-7 | Dates and appointments | TGP, CONS | 2 |
| A1-8 | Giving simple information | CONS, TGP | 7 |
| A1-9 | Review: legal basics | INTRO, TGP | 1 |
| A1-10 | A1 checkpoint | INTRO, TGP | 1 |
| A2-1 | Legal vocabulary | PPEN, TPDEL | 2–3 |
| A2-2 | Court situations | TGP, PPEN | 2 |
| A2-3 | Evidence and facts | PROB | 2, 7 |
| A2-4 | Following orders | TGP | 2–3 |
| A2-5 | Describing a lawsuit | TGP, CIVP | 2–3 |
| A2-6 | People and responsibilities | TGP, CONS | 2 |
| A2-7 | Understanding a hearing | TGP, PPEN | 2, 6 |
| A2-8 | Legal instructions | TGP, CONS | 3 |
| A2-9 | Review: legal situations | PPEN, TPDEL | 3 |
| A2-10 | A2 checkpoint | TGP, PROB | 3 |
| B1-1 | Responsibility and liability | RC, OBL | 5 |
| B1-2 | Resolving disputes | ADR | 5 |
| B1-3 | Appeals and decisions | TGP, ARG | 3–4 |
| B1-4 | Professional advice | CONS, INTRO | 4, 7 |
| B1-5 | Explaining liability | RC | 5 |
| B1-6 | Settlement discussions | ADR, CONT | 5 |
| B1-7 | Reviewing a decision | TGP, ARG, HERM | 3–4 |
| B1-8 | Advising a client | CONS, INTRO | 7 |
| B1-9 | Review: dispute resolution | TGP, PROB | 7 |
| B1-10 | B1 checkpoint | TGP, ARG | 4 |
| B2-1 | Contract obligations | OBL, CONT | 3, 6 |
| B2-2 | Admissible evidence | PROB | 7 |
| B2-3 | Enforceable agreements | OBL, CONT | 3 |
| B2-4 | Claims and proof | PROB, TGP | 7 |
| B2-5 | Contract interpretation | HERM, CONT | 3 |
| B2-6 | Evaluating evidence | PROB | 7 |
| B2-7 | Drafting legal statements | CONT, HERM | 6 |
| B2-8 | Analyzing a claim | RC, OBL | 5–6 |
| B2-9 | Review: legal precision | CONT, OBL | 6 |
| B2-10 | B2 checkpoint | RC, OBL | 5 |
| C1-1 | Formal legal language | HERM, CONT | 3 |
| C1-2 | Binding agreements | CONT, OBL | 6 |
| C1-3 | Court reasoning | ARG, TGP, HERM | 4 |
| C1-4 | Complex legal texts | COM, CONT | 5 |
| C1-5 | Formal legal connectors | HERM, CONT | 3 |
| C1-6 | Binding legal language | CONT, OBL | 6 |
| C1-7 | Nuanced court arguments | ARG, HERM | 4 |
| C1-8 | Advanced text analysis | HERM, CONT | 3 |
| C1-9 | Review: legal nuance | TPDEL, PPEN, CONST | 3 |
| C1-10 | C1 checkpoint | HERM, ARG | 3–4 |

## Cómo proceder (roadmap)

1. **Fase 1 (hecho):** metadatos en lecciones, filtros en Biblioteca, puente CO en preparación.  
2. **Fase 2:** packs de glosario por ramo (`references/glossary-*.json`) + términos bilingües.  
3. **Fase 3:** nuevas lecciones por materias pendientes (laboral, administrativo, familia, etc.).  
4. **Fase 4:** recomendación por cohorte/semestre desde ATAV y métricas por materia.

## Mantenimiento

Al crear una lección nueva, actualizar `lessonMetaById` en `src/data/curriculumMap.js` y esta tabla.
