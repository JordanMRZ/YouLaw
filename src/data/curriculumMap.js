/** Plan de derecho virtual (CO) ↔ lecciones YouLaw. Códigos internos, no oficiales del programa. */

export const SUBJECTS = {
  INTRO: { label: 'Ética e introducción al derecho', shortLabel: 'Intro / ética', semesters: [1] },
  CONS: { label: 'Consultorio y práctica jurídica', shortLabel: 'Consultorio', semesters: [7, 8, 9] },
  TGP: { label: 'Teoría general del proceso / procesal general', shortLabel: 'Procesal general', semesters: [2, 3] },
  PPEN: { label: 'Derecho procesal penal', shortLabel: 'Procesal penal', semesters: [2, 6] },
  TPDEL: { label: 'Teoría del delito', shortLabel: 'Teoría del delito', semesters: [3] },
  PROB: { label: 'Derecho probatorio', shortLabel: 'Probatorio', semesters: [2, 7] },
  OBL: { label: 'Obligaciones', shortLabel: 'Obligaciones', semesters: [3] },
  CONT: { label: 'Contratación privada', shortLabel: 'Contratos', semesters: [6, 7] },
  HERM: { label: 'Hermenéutica jurídica', shortLabel: 'Hermenéutica', semesters: [3] },
  ARG: { label: 'Teoría de la argumentación jurídica', shortLabel: 'Argumentación', semesters: [4] },
  RC: { label: 'Responsabilidad civil / extracontractual', shortLabel: 'Resp. civil', semesters: [5, 6] },
  ADR: { label: 'Resolución de conflictos', shortLabel: 'ADR', semesters: [5] },
  CONST: { label: 'Teoría constitucional / constitución política', shortLabel: 'Constitucional', semesters: [1] },
  CIVP: { label: 'Derecho civil — personas', shortLabel: 'Civil personas', semesters: [1] },
  COM: { label: 'Derecho comercial general', shortLabel: 'Comercial', semesters: [5] },
}

export const lessonMetaById = {
  'A1-1': { subjects: ['INTRO', 'CONS'], semesterHints: [1], colombiaBridge: 'Presentaciones y roles iniciales aplican en cualquier rama; el vocabulario es transversal al consultorio.' },
  'A1-2': { subjects: ['INTRO', 'TGP'], semesterHints: [1, 2], colombiaBridge: 'Judge, lawyer y witness existen en Colombia, pero la estructura del proceso sigue el CPC y la Ley 906, no el modelo anglosajón del glosario.' },
  'A1-3': { subjects: ['OBL', 'CONT'], semesterHints: [3, 6], colombiaBridge: 'Contract en inglés common law incluye consideration; en derecho colombiano rige el Código Civil y la autonomía de la voluntad sin ese requisito formal.' },
  'A1-4': { subjects: ['TGP', 'PPEN'], semesterHints: [2], colombiaBridge: 'Defendant traduce bien a imputado/procesado en penal; en civil suele usarse demandado.' },
  'A1-5': { subjects: ['CONS', 'TGP'], semesterHints: [1, 7], colombiaBridge: 'Preguntas en audiencia: en Colombia la audiencia oral tiene reglas propias del juez y del fiscal.' },
  'A1-6': { subjects: ['INTRO', 'CONS'], semesterHints: [1], colombiaBridge: 'Forms y documents: equivalente a formatos de la Rama Judicial o del consultorio universitario.' },
  'A1-7': { subjects: ['TGP', 'CONS'], semesterHints: [2], colombiaBridge: 'Plazos y citas: revisa siempre términos procesales del CPC o del CPP según la materia.' },
  'A1-8': { subjects: ['CONS', 'TGP'], semesterHints: [7], colombiaBridge: 'Explicar hechos al cliente en inglés es habilidad de consultorio; no confundir con alegatos formales.' },
  'A1-9': { subjects: ['INTRO', 'TGP'], semesterHints: [1], colombiaBridge: 'Innocent until proven guilty tiene paralelo constitucional en Colombia (presunción de inocencia).' },
  'A1-10': { subjects: ['INTRO', 'TGP'], semesterHints: [1], colombiaBridge: 'Repaso transversal antes de subir a vocabulario procesal más denso.' },

  'A2-1': { subjects: ['PPEN', 'TPDEL'], semesterHints: [2, 3], colombiaBridge: 'Acquittal y bail son conceptos del sistema acusatorio anglosajón; en Colombia usa terminología del CPP y la Ley 906.' },
  'A2-2': { subjects: ['TGP', 'PPEN'], semesterHints: [2], colombiaBridge: 'Bench trial vs jury trial: en Colombia el jury no es generalizado como en EE.UU.' },
  'A2-3': { subjects: ['PROB'], semesterHints: [2, 7], colombiaBridge: 'Evidence y hearsay: en Colombia rige el sistema de sana crítica y reglas del CGP/CPP, no la hearsay rule federal.' },
  'A2-4': { subjects: ['TGP'], semesterHints: [2, 3], colombiaBridge: 'Injunction y subpoena: compara con medidas cautelares y citaciones del proceso colombiano.' },
  'A2-5': { subjects: ['TGP', 'CIVP'], semesterHints: [2, 3], colombiaBridge: 'Plaintiff en civil common law ≈ demandante; litigation ≈ proceso judicial contencioso.' },
  'A2-6': { subjects: ['TGP', 'CONS'], semesterHints: [2], colombiaBridge: 'Public defender no tiene réplica exacta única; en Colombia hay defensoría pública y abogados de oficio.' },
  'A2-7': { subjects: ['TGP', 'PPEN'], semesterHints: [2, 6], colombiaBridge: 'Arraignment y preliminary hearing: equipáralos con audiencias de legalización/imputación y etapas del CPP.' },
  'A2-8': { subjects: ['TGP', 'CONS'], semesterHints: [3], colombiaBridge: 'Testify y plea: lenguaje útil en simulaciones, pero las figuras procesales son las del Código de Procedimiento Penal.' },
  'A2-9': { subjects: ['PPEN', 'TPDEL'], semesterHints: [3], colombiaBridge: 'Beyond reasonable doubt es estándar anglosajón; en Colombia el CP define tipicidad, antijuridicidad y culpabilidad.' },
  'A2-10': { subjects: ['TGP', 'PROB'], semesterHints: [3], colombiaBridge: 'Jurisdiction y habeas corpus: contraste con competencia y acción de tutela/habeas corpus según el contexto.' },

  'B1-1': { subjects: ['RC', 'OBL'], semesterHints: [5], colombiaBridge: 'Liability y negligence en inglés apoyan responsabilidad extracontractual; en Colombia revisa el art. 2341 C.C. y régimen del Estado aparte.' },
  'B1-2': { subjects: ['ADR'], semesterHints: [5], colombiaBridge: 'Mediation y arbitration existen en Colombia (Ley 446, 1563, 1581); settlement ≈ conciliación/transacción.' },
  'B1-3': { subjects: ['TGP', 'ARG'], semesterHints: [3, 4], colombiaBridge: 'Appeal: en Colombia apelación, casación y revisión según la materia; no uses solo “appeal” sin matizar.' },
  'B1-4': { subjects: ['CONS', 'INTRO'], semesterHints: [4, 7], colombiaBridge: 'Attorney-client privilege ≈ secreto profesional; deontología del abogado en Colombia (Ley 1123 de 2007).' },
  'B1-5': { subjects: ['RC'], semesterHints: [5], colombiaBridge: 'Strict liability y duty of care son categorías anglosajonas; mapéalas con responsabilidad objetiva y deber de diligencia.' },
  'B1-6': { subjects: ['ADR', 'CONT'], semesterHints: [5], colombiaBridge: 'Settlement agreement: en contratos colombianos revisa cláusulas de conciliación previa y transacción.' },
  'B1-7': { subjects: ['TGP', 'ARG', 'HERM'], semesterHints: [3, 4], colombiaBridge: 'Stare decisis es central en common law; en Colombia la jurisprudencia de unificación importa, pero el sistema es civil law.' },
  'B1-8': { subjects: ['CONS', 'INTRO'], semesterHints: [7], colombiaBridge: 'Pro bono y conflict of interest: lenguaje útil para consultorio y ética profesional.' },
  'B1-9': { subjects: ['TGP', 'PROB'], semesterHints: [7], colombiaBridge: 'Discovery e interrogatories son típicos del proceso estadounidense; en Colombia rige el decreto/de prueba según CGP.' },
  'B1-10': { subjects: ['TGP', 'ARG'], semesterHints: [4], colombiaBridge: 'Writ of certiorari es del sistema federal EE.UU.; en Colombia piensa en casación y revisión.' },

  'B2-1': { subjects: ['OBL', 'CONT'], semesterHints: [3, 6], colombiaBridge: 'Consideration y breach: al traducir contratos CO, prioriza obligaciones del Código Civil sobre categorías common law.' },
  'B2-2': { subjects: ['PROB'], semesterHints: [7], colombiaBridge: 'Hearsay y exclusionary rule: contraste con prueba legalmente obtenida y valoración libre/motivada en Colombia.' },
  'B2-3': { subjects: ['OBL', 'CONT'], semesterHints: [3], colombiaBridge: 'Void vs voidable: equipara con nulidad absoluta/relativa en contratos colombianos.' },
  'B2-4': { subjects: ['PROB', 'TGP'], semesterHints: [7], colombiaBridge: 'Burden of proof: carga dinámica en Colombia; en penal es in dubio pro reo.' },
  'B2-5': { subjects: ['HERM', 'CONT'], semesterHints: [3], colombiaBridge: 'Contra proferentem y plain meaning: útiles en contratos internacionales redactados en inglés.' },
  'B2-6': { subjects: ['PROB'], semesterHints: [7], colombiaBridge: 'Documentary y real evidence: tipos de prueba del CGP (documental, testimonial, pericial, etc.).' },
  'B2-7': { subjects: ['CONT', 'HERM'], semesterHints: [6], colombiaBridge: 'Whereas e hereinafter: conectores frecuentes en contratos comerciales internacionales en inglés.' },
  'B2-8': { subjects: ['RC', 'OBL'], semesterHints: [5, 6], colombiaBridge: 'Indemnification clauses: cláusulas de indemnidad en contratos; no sustituyen responsabilidad extracontractual del Estado.' },
  'B2-9': { subjects: ['CONT', 'OBL'], semesterHints: [6], colombiaBridge: 'Novation y assignment: novación y cesión de derechos en el Código Civil.' },
  'B2-10': { subjects: ['RC', 'OBL'], semesterHints: [5], colombiaBridge: 'Promissory estoppel y quantum meruit: figuras anglosajonas; busca analogías en enriquecimiento sin causa.' },

  'C1-1': { subjects: ['HERM', 'CONT'], semesterHints: [3], colombiaBridge: 'Latinismos procesales en inglés; en Colombia muchos vienen del derecho romano vía español.' },
  'C1-2': { subjects: ['CONT', 'OBL'], semesterHints: [6], colombiaBridge: 'NDA y non-compete: cláusulas habituales en contratos internacionales; valida límites en derecho laboral CO.' },
  'C1-3': { subjects: ['ARG', 'TGP', 'HERM'], semesterHints: [4], colombiaBridge: 'Ratio decidendi y obiter dicta: lectura de sentencias extranjeras; en Colombia estudia motivación de providencias.' },
  'C1-4': { subjects: ['COM', 'CONT'], semesterHints: [5], colombiaBridge: 'Drag-along/tag-along: típico en M&A internacional; no es núcleo del Código de Comercio colombiano básico.' },
  'C1-5': { subjects: ['HERM', 'CONT'], semesterHints: [3], colombiaBridge: 'Notwithstanding y subject to: conectores para redacción contractual en inglés.' },
  'C1-6': { subjects: ['CONT', 'OBL'], semesterHints: [6], colombiaBridge: 'Shall vs may: distinción clave en contratos anglosajones; en español “deberá” vs “podrá”.' },
  'C1-7': { subjects: ['ARG', 'HERM'], semesterHints: [4], colombiaBridge: 'Equity y public policy: argumentos de equidad; en Colombia principios constitucionales y buena fe.' },
  'C1-8': { subjects: ['HERM', 'CONT'], semesterHints: [3], colombiaBridge: 'Severability ≈ cláusula de independencia de las estipulaciones en contratos CO.' },
  'C1-9': { subjects: ['TPDEL', 'PPEN', 'CONST'], semesterHints: [3], colombiaBridge: 'Mens rea y actus reus: útiles en comparación dogmática; el CP colombiano usa tipicidad y culpabilidad.' },
  'C1-10': { subjects: ['HERM', 'ARG'], semesterHints: [3, 4], colombiaBridge: 'Canons of construction (ejusdem generis, etc.): hermenéutica de contratos y normas en inglés jurídico.' },
}

export function getLessonCurriculumMeta(lessonId) {
  const meta = lessonMetaById[lessonId]
  if (!meta) {
    return { subjects: ['INTRO'], semesterHints: [], colombiaBridge: null }
  }
  return {
    subjects: meta.subjects,
    semesterHints: meta.semesterHints ?? [],
    colombiaBridge: meta.colombiaBridge ?? null,
  }
}

export function getSubjectMeta(code) {
  return SUBJECTS[code] ?? { label: code, shortLabel: code, semesters: [] }
}

export function getSubjectLabel(code) {
  return getSubjectMeta(code).label
}

export function getSubjectShortLabel(code) {
  return getSubjectMeta(code).shortLabel
}

/** Materias del plan que aún no tienen pack dedicado en YouLaw */
export const SUBJECTS_PLANNED = {
  DDHH: 'Derechos humanos y DIH',
  FAM: 'Derecho de familia y menores',
  LABI: 'Laboral individual',
  LABC: 'Laboral colectivo',
  LABP: 'Procesal laboral',
  ADM: 'Derecho administrativo general',
  CONTADM: 'Contencioso administrativo',
  CIVB: 'Derecho civil — bienes',
  SUC: 'Sucesiones',
  SOC: 'Sociedades mercantiles',
  TVAL: 'Títulos valores',
  TRIB: 'Derecho tributario',
  CONC: 'Procesos concursales',
  INT: 'Derecho internacional',
  DIG: 'Derecho digital',
  EST: 'Responsabilidad extracontractual del Estado',
}

export function subjectsUsedInLessons(lessons) {
  const codes = new Set()
  for (const lesson of lessons) {
    for (const code of lesson.subjects ?? []) codes.add(code)
  }
  return [...codes].sort((a, b) => getSubjectLabel(a).localeCompare(getSubjectLabel(b), 'es'))
}

export function filterLessonsBySubject(lessons, subjectCode) {
  if (!subjectCode || subjectCode === 'ALL') return lessons
  return lessons.filter((lesson) => (lesson.subjects ?? []).includes(subjectCode))
}
