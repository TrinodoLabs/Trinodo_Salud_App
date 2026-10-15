# Contrato de endpoints — API backend

Estado: **propuesta** (ver [README](README.md)). Fuente de negocio: la demo de
`client/src/app/page.tsx` (estados de turno, reglas de conflicto, montos).

Convenciones generales:

- Base: `/api/v1`. JSON en UTF-8. Fechas `YYYY-MM-DD`, horas `HH:mm`.
- Errores: `{ "error": { "code": "...", "message": "...", "details": ... } }`.
- Autenticación: pendiente de decisión (plan aparte si el equipo la pide).

## Turnos — `/api/v1/appointments`

| Método | Path | Descripción |
|---|---|---|
| GET | `/appointments` | Turnos con filtros `date`, `doctor_id`, `status`, `patient` (búsqueda) |
| POST | `/appointments` | Crear turno (envía email de confirmación en el flujo real) |
| GET | `/appointments/:id` | Detalle de un turno |
| PATCH | `/appointments/:id` | Editar datos o transición de `status` / `payment` |
| POST | `/appointments/:id/cancel` | Cancelar con motivo (trazabilidad obligatoria) |

Reglas de negocio (validaciones, mismas que la demo):

1. `POST`: rechaza conflicto de horario del profesional (409 `schedule_conflict`),
   fechas/horas pasadas (422 `past_slot`), paciente vacío (422 `validation`).
2. Transiciones de estado válidas: `Pendiente → Confirmada → Atendida`;
   `Pendiente|Confirmada → No asistió` (marca automática cuando el turno venció
   sin atención — debe ser **server-side**, la demo lo hace client-side cada 60 s
   solo como mock); cualquier estado activo → `Cancelada` con `cancel_reason`.
3. `payment`: solo `Pendiente → Pagado` (irreversible en esta versión).
4. GET del día responde ordenado por hora, incluyendo `duration`, `service`,
   `doctor`, `patient`, `payment`, `amount`.

## Pacientes — `/api/v1/patients`

| Método | Path | Descripción |
|---|---|---|
| GET | `/patients` | Listado con búsqueda por nombre, email o teléfono (`q`) |
| GET | `/patients/:id` | Ficha: contacto, fecha de nacimiento, balance |
| GET | `/patients/:id/history` | Historial de turnos (desc por fecha+hora, con motivo de cancelación) |
| POST | `/patients` | Crear ficha |
| PATCH | `/patients/:id` | Editar datos de contacto / datos generales / notas admin |

El `balance` (monto pendiente) se **calcula** a partir de los turnos, no se
guarda; el endpoint lo devuelte en la respuesta.

## Servicios — `/api/v1/services`

| Método | Path | Descripción |
|---|---|---|
| GET | `/services` | Catálogo: `name`, `doctor_id`, `duration`, `price`, `visible` |
| POST | `/services` | Crear servicio |
| PATCH | `/services/:id` | Editar precio, duración, visibilidad |

Comportamiento asociado en la demo: elegir un servicio precarga precio,
duración y profesional del turno; el toggle de visibilidad controla qué
servicios ven los pacientes.

## Abiertos a discusión

- Paginación (offset vs cursor) para listados grandes.
- Notificaciones de email: servicio async/fila pendiente de definir.
- Autenticación multi-usuario (recepción vs profesionales).
