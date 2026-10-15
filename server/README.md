# Trinodo Salud — server

API backend de la plataforma de gestión clínica.

> Estado: esqueleto preparado. **Stack propuesto: Spring Boot** (Java 21 + Maven
> + Spring Web + Spring Data JPA + PostgreSQL), a confirmar por el equipo — el
> backend es un servicio separado del client, y el equipo ya conoce el stack del
> ciclo anterior. Alternativa evaluada y descartada por ahora: expander la API
> con rutas de Next.js (comprometería el backend a `client/`).

## Estructura prevista (Spring Boot)

```
server/
├── src/main/java/trinodo/
│   ├── config/          Configuración Spring (CORS, OpenAPI, beans)
│   ├── appointments/    Turnos: controller, service, repository, dto
│   ├── patients/        Pacientes: ficha, historial, balance
│   ├── services/        Catálogo de servicios: precio, duración, visibilidad
│   └── TrinodoApplication.java
├── src/main/resources/
│   ├── application.yml
│   └── db/migration/    Migraciones (Flyway) cuando exista esquema
├── src/test/java/trinodo/ ...
└── pom.xml
```

Convención interna por módulo (ej. `appointments/`): `controller`, `service`,
`repository`, `dto/`, `entity/`. Cada módulo con sus tests.

## Contrato funcional (propuesto, sincronizado con la demo de `client/`)

El contrato de endpoints y su estado de discusión viven en:

- `plans/api-endpoints.md` — turnos, pacientes, servicios, con reglas de negocio.
- `plans/db-design.md` — esquema PostgreSQL propuesto (tablas, enums, índices).

Resumen de prioridad de implementación: 1) turnos (`/appointments`, con la
validación de conflicto y la marca automática de “No asistió” *server-side*)
2) pacientes (ficha + historial + balance calculado) 3) servicios (catálogo con
visibilidad) 4) emails de confirmación/recordatorio (diferido, plan aparte).

## Datos demo conocidos

`client/src/app/page.tsx` es la referencia de negocio actualizada (estados de
turno, reglas de conflicto, montos). Al implementar, partir de ahí y borrar el
mock en el mismo PR.

## Condiciones locales

Java 21 y Maven (o el wrapper `mvnw`). CI en `.github/workflows/ci.yml` ya está
preparado: al crear `server/pom.xml`, habilitar el job `server-tests`
(`mvn -B verify`) descomentándolo.
