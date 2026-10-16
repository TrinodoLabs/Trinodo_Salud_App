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
- S3: "Burbuja de WhatsApp simulada en la agenda ... apareciendo sola" —
  confirmación de paciente simulada, reactiva cuando se confirma un turno.
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
- S9: "Canal WhatsApp en el toggle de recordatorios, junto a email."
- S10: "Tour guiado con spotlight de 4–5 puntos."
- S11: "Card 'Tiempo ahorrado hoy' en los stats."
- S12: "Ocultar o agrupar los 'producto real' en un solo rótulo honesto."
- Fuera de alcance: página de precios (se hace cuando el usuario decida cerrar
  la venta).

## Tasks

- T1 (S2,S6): nombre de clínica persistido + overlay de bienvenida 3 pasos. Commit: feat(demo): bienvenida de tres pasos y clinica con nombre propio
- T2 (S5): tarjeta CTA en sidebar + modal de contacto demo. Commit: feat(demo): llamado a la accion para pedir el sistema
- T3 (S3): burbuja de WhatsApp al confirmar turno. Commit: feat(demo): burbuja de whatsapp al confirmar turno
- T4 (S4): llenado automático de hueco desde lista de espera. Commit: feat(demo): llenado automatico de hueco desde lista de espera
- T5 (S7,S11): % confirmado calculado + card tiempo ahorrado. Commit: feat(demo): metricas derivadas de datos y tiempo ahorrado
- T6 (S9): canal de recordatorios WhatsApp/Email. Commit: feat(demo): canal de recordatorios whatsapp y email
- T7 (S8): vista Reserva online del paciente. Commit: feat(demo): vista de reserva online del paciente
- T8 (S12): rótulos DEMO consistentes. Commit: feat(demo): rotulos demo consistentes
- T9 (S10): recorrido guiado con spotlight. Commit: feat(demo): recorrido guiado con foco
- T10: build + verificación visual en navegador. Commit: (evidencia en Log)

## Log

- L1: "Actualiza la rama develop y ayudame a identificar en el lading page que cosas serian utiles o muestran valor a un cliente que quiera comprar esta web. el alcance aun no es tecnico, si no de ideas visuales y valor al cliente."
- L2: "si quieres hazlas y yo las miro aqui en local" — autoriza implementar las ideas para revisión local en rama feature.
