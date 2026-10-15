# plans/

Propuestas de diseño que **preceden a la implementación**. Cada documento
describe un contrato o decisión técnica por discutir antes de tocar código.

## Qué va acá

- `api-endpoints.md` — contrato de endpoints de la API backend.
- `db-design.md` — diseño propuesto de la base de datos (PostgreSQL).

Un tema nuevo que necesite diseño (ej. notificaciones/email, integración de
pagos, autenticación) entra como archivo nuevo: `plans/<tema>.md`.

## Cómo se proponen

1. Se abre issue [Task] o [Feature] describiendo la necesidad (link al doc).
2. Escribís o editás el doc de `plans/` con la propuesta completa.
3. El equipo comenta en el issue; cuando se cierra el debate, se marca el estado.

## Estados (en el doc y su índice acá)

| Doc | Estado |
|---|---|
| [api-endpoints.md](api-endpoints.md) | propuesta — pendiente de decisión del equipo |
| [db-design.md](db-design.md) | propuesta — pendiente de decisión del equipo |

Un plan pasa a `aceptada` cuando el equipo lo aprueba en el issue, y a
`implementada` cuando existe el código que lo cumple. Los docs aceptados son la
referencia para revisar los PRs correspondientes.
