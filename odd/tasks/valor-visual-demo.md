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

## Log

- L1: "Actualiza la rama develop y ayudame a identificar en el lading page que cosas serian utiles o muestran valor a un cliente que quiera comprar esta web. el alcance aun no es tecnico, si no de ideas visuales y valor al cliente."
- L2: "si quieres hazlas y yo las miro aqui en local" — autoriza implementar las ideas para revisión local en rama feature.
- L3: Implementación completa en `feat/valor-visual-demo` (T1–T9: 596bd31, 1be7772, c71b922, f4b50eb, 672d4df, dfaf196, 1b8a592, b33a961, 5951138). Verificación: `pnpm build` OK (Next 14.2.35, tipos y lint OK); verificación end-to-end en Chrome: bienvenida 3 pasos con personalización en vivo (sidebar + crumb = "Consultorio La Esperanza"), tour auto-inicia tras la bienvenida y se cierra con flag visto, reserva online end-to-end (Ana Prueba · 15:30 → aparece en Agenda como Pendiente $18.500), simulación de lista de espera automática (Agustina) y manual (Nicolás · 14:00, waitlist → 0), burbuja WhatsApp reactiva al confirmar turno de Ana, CTA con clínica precargada y toast "¡Gracias! Te contactamos...", canales WhatsApp/Email activos (default WhatsApp), rótulos DEMO presentes en Pagos y Media.
- L4: Pendiente (fuera de alcance, decisión del usuario): página de precios. El push y el PR contra develop quedan como decisión del usuario (requieren issue aprobado por AGENTS.md).
- L5: "no me gusto lo que agregase de whastapp, es muy dificil integrar whatsapp. ahora ves que en agenda no hay nada hecho, q recomiendas hacer ahi." — se retiran las features de WhatsApp (burbuja reactiva/pasiva, canal de recordatorios, textos de bienvenida/tour/reserva/lista de espera) y se vuelven a email; queda pendiente definir qué sumar en Agenda (pregunta abierta al usuario).
