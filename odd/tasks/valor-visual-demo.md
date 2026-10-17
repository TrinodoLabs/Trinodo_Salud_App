# Feature: valor-visual-demo — Valor comercial visible en la demo landing

Demo interactiva (`client/src/app/page.tsx`) mejorada con los elementos de valor
comercial relevados en el análisis del 2026-02-02. Alcance visual/no técnico:
que un comprador (dueño/a de consultorio) perciba el valor al recorrer la demo.

## Specs

- S1: "si quieres hazlas y yo las miro aqui en local" — implementar las ideas
  propuestas en el análisis para revisión local (sin push ni PR hasta que el
  usuario las apruebe).
- S2: "Overlay de bienvenida de 3 pasos al entrar a la demo: qué es, qué podés
  tocar, y el diferencial en una frase."
- S3: (RETIRADA por L5) burbuja de WhatsApp — eliminada del demo; la confirmación del paciente se comunica por email y los estados de la agenda.
- S4: "Toast mágico de lista de espera: 'Se liberó un turno a las 15:30 → lo
  ofrecimos a Agustina Flores'" — flujo ofrecido → aceptado → agendado.
- S5: "CTA fijo ('Quiero este sistema para mi consultorio') visible en todo
  momento" — tarjeta en sidebar + modal de contacto demo.
- S6: "Personalización al entrar: preguntar '¿Cómo se llama tu clínica?' y que
  el demo la muestre."
- S7: "Reemplazar el +12% hardcodeado por algo derivado de los datos reales de
  la demo (o quitarlo)."
- S8: "Vista de reserva del paciente (1 pantalla): el link público donde el
  paciente elige profesional, día y horario."
- S9: (AJUSTADA por L5) recordatorios por email únicamente; el canal WhatsApp se retiró por su dificultad de integración real.
- S10: "Tour guiado con spotlight de 4–5 puntos."
- S11: "Card 'Tiempo ahorrado hoy' en los stats."
- S12: "Ocultar o agrupar los 'producto real' en un solo rótulo honesto."
- S13: "Timeline del día (recomendado)": vista calendario con columna por profesional, bloques por turno con color según estado y alternancia con la tabla (elegida por el usuario para reforzar la sección Agenda).
- S14: "en vez de resumen podría ser turnos o agendar? ya que veo que combinan cosas como el resumen del día, con el agendamiento de turnos, entonces resumen queda ambiguo." — renombrado a "Turnos de hoy" (la demo abre ahí).
- S15: "Tal vez se podría agregar el botón de importar, ese sirve como otro medio de agregar datos sin tener que escribir o llenar el formulario, se podría aplicar también en el de profesionales y agenda."
- S16: "podrían tener un sistema para ser calificados. He visto que generalmente tiene estrellas o puntajes dependiendo de como lo evalué el paciente. El paciente debería poder darle una calificación y comentarios al profesional." — más ficha editable del profesional (nombre, correo, teléfono, título, años de experiencia).
- S17: "solo falta lo de editar datos de un servicio y tal vez hacer mas intuitivo el botón de mostrar/ocultar el servicio" + "dejarlo con los datos mas básicos del servicio" (ya cumplido).
- S18: "Este si me choca la verdad. lo de media es muy opcional... centralizar media no me parece buena idea ya que en el diseño actual los botones de exportar/importar están individualmente por modulo... yo diria q este modulo es opcional." — decisión del usuario: Media fuera del menú (vuelve más adelante si hace falta, p. ej. adjuntos por ficha).
- S19: "bien, quita el modulo de turnoid e hoy y dejar solo el de agenda" — unificación: el menú queda Agenda, Pacientes, Profesionales, Servicios, Reserva online, Notas clínicas, Pagos; la demo abre en Agenda (los stats y la barra derecha viven en Agenda).
- S20: "me refiero al modulo de reserva online ya que sera con video que venderemos la app" — Reserva online fuera de la demo (nav, página, componente y CSS); el paso 3 de la bienvenida se reenfoca a lista de espera + recordatorios.
- S21: "lo que se relacion con vender la app con ver la aplicacion, ya que es un landing page hardoceado y no tiene funcionalidades reales. lo que si quiero que este es el recordatorio de email." — fuera la venta in-app: CTA sidebar "Quiero este sistema", modal de contacto ("Quiero que me contacten") y su paso del tour (5→4). Los recordatorios por email permanecen (tarjeta, toasts y mención en bienvenida).
- S22: "quiero hacer plantillas generales en donde se peudan agregar lso items actuales como motivo de consulta, etc. Ejemplo haya una plantilla default = \"Consulta general\", \"Emegergencia, y plantilals con sentido en la clinica y que en la sección del paciente el puede agregar esa plantilla en el boton de apartado personalizado dentro de la nota clinica, ademas de poder agregar mas items y ordenarlo al gusto." — plantillas grupales con items (defaults: Consulta general y Emergencia), se insertan completas en la nota clínica, se pueden agregar items sueltos y reordenar los apartados.
- Fuera de alcance: página de precios (se hace cuando el usuario decida cerrar
  la venta).

## Tasks

- T1 ✅ (S2,S6): nombre de clínica persistido + overlay de bienvenida 3 pasos. Commit: 596bd31
- T2 ✅ (S5): tarjeta CTA en sidebar + modal de contacto demo. Commit: 1be7772
- T3 ✅ (S3): burbuja de WhatsApp al confirmar turno. Commit: c71b922
- T4 ✅ (S4): llenado automático de hueco desde lista de espera. Commit: f4b50eb
- T5 ✅ (S7,S11): % confirmado calculado + card tiempo ahorrado. Commit: 672d4df
- T6 ✅ (S9): canal de recordatorios WhatsApp/Email. Commit: dfaf196
- T7 ✅ (S8): vista Reserva online del paciente. Commit: 1b8a592
- T8 ✅ (S12): rótulos DEMO consistentes. Commit: b33a961
- T9 ✅ (S10): recorrido guiado con spotlight. Commit: 5951138
- T10 ✅: build + verificación visual en navegador (evidencia en Log).
- T11 ✅ (S13): timeline del día en Agenda. Commit: 318512c (smoke: 2 columnas, bloques = chip, dim por filtro de profesional, tabla oculta en vista timeline).
- T12 ✅ (S14,S15): rename Resumen → Turnos de hoy + importar (demo real en Pacientes, botones en Profesionales/Agenda). Commit: 7f2da24
- T13 ✅ (S16): ficha de profesional editable + calificaciones con estrellas y comentarios. Commit: 9a0c938
- T14 ✅ (S17): edición de servicio + switch visible/oculto por servicio. Commit: 64a7746
- T15 ✅ (S18): módulo Media fuera del menú y de la demo. Commit: a77fe21 (tsc OK, 0 referencias, build verde)
- T16 ✅ (S19): módulo Turnos de hoy eliminado, solo Agenda. Commit: 59b4a65 (doc: e4c29cb)
- T17 ✅ (S20): Reserva online fuera de la demo. Commit: 7b383fa
- T18 ✅ (S21): venta in-app fuera (CTA + modal + paso de tour); recordatorios email permanecen. Commit: 1a73c85
- T19 ✅ (S22): plantillas clínicas grupales (modelo con items, página de admin con cards, insertar plantilla completa en la nota, reordenar apartados, migración del storage viejo). Commit: d5e1a0f

## Log

- L1: "Actualiza la rama develop y ayudame a identificar en el lading page que cosas serian utiles o muestran valor a un cliente que quiera comprar esta web. el alcance aun no es tecnico, si no de ideas visuales y valor al cliente."
- L2: "si quieres hazlas y yo las miro aqui en local" — autoriza implementar las ideas para revisión local en rama feature.
- L3: Implementación completa en `feat/valor-visual-demo` (T1–T9: 596bd31, 1be7772, c71b922, f4b50eb, 672d4df, dfaf196, 1b8a592, b33a961, 5951138). Verificación: `pnpm build` OK (Next 14.2.35, tipos y lint OK); verificación end-to-end en Chrome: bienvenida 3 pasos con personalización en vivo (sidebar + crumb = "Consultorio La Esperanza"), tour auto-inicia tras la bienvenida y se cierra con flag visto, reserva online end-to-end (Ana Prueba · 15:30 → aparece en Agenda como Pendiente $18.500), simulación de lista de espera automática (Agustina) y manual (Nicolás · 14:00, waitlist → 0), burbuja WhatsApp reactiva al confirmar turno de Ana, CTA con clínica precargada y toast "¡Gracias! Te contactamos...", canales WhatsApp/Email activos (default WhatsApp), rótulos DEMO presentes en Pagos y Media.
- L4: Pendiente (fuera de alcance, decisión del usuario): página de precios. El push y el PR contra develop quedan como decisión del usuario (requieren issue aprobado por AGENTS.md).
- L5: "no me gusto lo que agregase de whastapp, es muy dificil integrar whatsapp. ahora ves que en agenda no hay nada hecho, q recomiendas hacer ahi." — se retiran las features de WhatsApp (burbuja reactiva/pasiva, canal de recordatorios, textos de bienvenida/tour/reserva/lista de espera) y se vuelven a email; queda pendiente definir qué sumar en Agenda (pregunta abierta al usuario). Commit: 0d5a593.
- L6: Elección del usuario en la pregunta de Agenda: "Timeline del día (recomendado)" — se implementa la vista de agenda visual alternable con la tabla.
- L7: Revisión completa del usuario por pantalla (verbatim): "Pantalla de resumen / La verdad no veo nada que de mas valor comercial, casi todo gira alrededor de los turnos. Tal vez seria mejor que la sección de lista de espera estuviese encima de la de la sección de profesionales. Pero creo que es algo más de gusto. Así también la veo bien. Diría que mientras todo gire alrededor de los turnos, no veo nada que agregar. Una cosa que si podría cambiar seria el nombre, en vez de resumen podría ser turnos o agendar? ya que veo que combinan cosas como el resumen del día, con el agendamiento de turnos, entonces resumen queda ambiguo. / Pantalla de agenda: Este modulo yo lo veo similar al primero, tal vez la idea es separar responsabilidades. Intentare hacer una pantalla con ia haber si encuentro sentido a este modulo y muestro si sale algo. / Pantalla de pacientes: Tal vez se podría agregar el botón de importar... / Pantalla de profesionales: falta la ficha... y un sistema para ser calificados (estrellas o puntajes + comentarios del paciente). / Pantalla de servicios: falta editar datos de un servicio y hacer mas intuitivo el mostrar/ocultar; dejarlo con los datos mas básicos. / Pantalla de notas clínicas: centralizar plantillas es buena idea si hay muchos módulos con plantillas default. / Pantalla de media: muy opcional; centralizar media no es buena idea ya que exportar/importar ya están por módulo; modulo opcional. / Pantalla de pagos: perfecto, nada que hacer. / Seria bueno crear un video demo más adelante cuando se solifique el diseño." — Accionado: S14-S17 (T12-T14). Pendiente de decisión: destino del módulo Media (F6). El usuario prototipa Agenda por su cuenta.
- L8: Smoke de la ronda: rename verificado (nav + h1 "Turnos de hoy", abre ahí), import agrega 2 pacientes (10 filas, toast), ficha Dra. Ríos 4.7→4.8 con calificación en vivo, editar servicio guarda ($20.000) y switch muestra "Oculto para pacientes". Builds en verde; puerto liberado.
- L9: Decisión de Media (pregunta con opciones, elección del usuario): "Sacarlo del menú" — se eliminó el ítem de navegación y la rama de la página completa (exportar/importar ya viven por módulo). Commit: a77fe21. Pendiente a futuro: video demo cuando se solidifique el diseño; el usuario prototipa una pantalla de Agenda por su cuenta.
- L10: "bien, quita el modulo de turnoid e hoy y dejar solo el de agenda" — eliminado el módulo Turnos de hoy (nav, rama de página y default); la demo abre en Agenda. tsc OK, build verde, resta 1 referencia intencional (rótulo "Turnos de hoy" en tarjeta de profesional). Commit: 59b4a65. Servidor reiniciado y sirviendo solo Agenda (HTML sin "Turnos de hoy").
- L11: Entrega vía PR: issue #105 ("[Task] Valor comercial visible en la demo landing") creado y aprobado por el dueño del proyecto con label `status:approved` (etiqueta creada en el proceso, no existía). PR #106 `feat(demo): valor comercial visible en la demo landing` contra `develop`, label `type:feature`, body según template del repo. Checks en verde: Conventions, Vercel preview y client build (un re-corrido del job Conventions tras un carrera de labeling). Push de la rama feat/valor-visual-demo.
- L12: Ronda de ajustes post-feedback (rama feat/quitar-reserva-y-cta): Reserva online eliminada (nav, rama de página, componente y CSS; bienvenida paso 3 reescrito) y venta in-app eliminada (CTA sidebar, modal de contacto, paso del tour; recordatorios por email permanecen). Verificación: tsc OK, pnpm build OK, smoke en Chrome (nav: Agenda, Pacientes, Profesionales, Servicios, Notas clínicas, Pagos; sin .cta-card; "Recordatorios por email" presente; tour 1 de 4; bienvenida paso 3 con nuevo copy y solo Atrás/Saltar/Explorar). Commits: 7b383fa, 1a73c85. Servidor :3000 sirviendo el build nuevo.
- L13: Hallazgo importante: el PR #106 sigue ABIERTO (no fusionado; verificado con gh pr view: state OPEN, mergeCommit null), aunque el usuario reportó "ya lo fusione". Los commits nuevos viven en feat/quitar-reserva-y-cta (basada en feat/valor-visual-demo). Decisión pendiente: empujar estos commits a feat/valor-visual-demo (se integran al PR #106) o abrir PR nuevo (requiere issue aprobado nuevo según AGENTS.md).
- L14: Plantillas grupales implementadas y verificadas: tsc OK, build OK, smoke en Chrome (2 cards default con 5 apartados c/u, alta/baja inline de apartados por card, migración del storage viejo: 3 títulos sueltos → 1 plantilla "Consulta general", insertar "Consulta general · 5" en la nota agrega los 5 apartados en orden, botón Bajar intercambia 1↔2, guardado con toast y modal cerrado). El selector "Usar plantilla…" individual fue reemplazado por "Insertar plantilla…" grupal; "Apartado personalizado" se conserva. Servidor :3000 sirviendo el build nuevo.
- L15: Refinamiento pedido por el usuario ("quiero un botón para mostrar las generales como consulta general, emergencia, y otro para items pequeños como diagnostico, y todas las que habían antes"): la toolbar de la nota clínica queda con tres vías — "Apartado personalizado" (prompt, título libre), "Insertar plantilla…" (grupales: Consulta general, Emergencia) y "Insertar apartado…" (items sueltos: unión de los items de todas las plantillas, sin duplicados, 8 opciones con los defaults). Verificado en Chrome: insert individual (Diagnóstico en posición 1), insert completo (+5, total 6), guardado OK. Commit: 075c42c.
- L16: Serie de ajustes posteriores: (a) "insertar apartado quitalo" — fuera el selector de items sueltos (y su código: individualItems, parámetro de addClinicalItem); "Insertar plantilla…" con negrita inline a prueba de cache. Commit: a25292b. (b) Hallazgo de infra: el server de producción propio ocupaba el :3000 y el pnpm dev del usuario caía al :3001 — por eso no veía cambios; resuelto matando el server y dejando el puerto libre; luego se sirvió el build último en :3000. (c) "en profesionales quita las calificaciones" — fuera estrellas, promedios, reviews y widget de evaluación (tipo Review, avgStars, badge en tarjetas, sección 02 de la ficha, plumbing y 19 reglas CSS); la ficha editable del profesional (email, teléfono, título, años, horarios) permanece. Verificado en Chrome: 0 ratings, ficha sin calificaciones con datos intactos. Commit: 22062a0.
