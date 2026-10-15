# infra

Configuración de entornos y despliegue.

Estado: preparado, vacío a propósito hasta definir dónde se despliega cada pieza.

Cuando se defina, agregá un subdirectorio por entorno o herramienta, ej:

```
infra/
├── docker/       Dockerfiles / docker-compose (client + server)
├── environments  .env.example por entorno (dev, staging, prod)
└── deploy/       Scripts o configs de despliegue
```

Reglas del equipo:

- Nunca commitear secretos reales. Solo `.env.example` con placeholders.
- Toda nueva pieza de infraestructura (dominio, DB, plataforma de deploy) entra
  primero como issue para discutir el costo antes de la implementación.

## Workflows del ciclo previo a replicar

Patrones relevados de `No-Country-simulation/S08-26-equipo-5/.github/`
(última revisión: oct 2026). Se arman **cuando exista la pieza real**, no
antes: un workflow sobre archivos que no existen falla en el CI.

| Cuándo se crea la pieza | Workflow | Patrón a copiar |
|---|---|---|
| Primeros tests del server (Spring Boot) | `api-suite.yml` | Service container de Postgres para tests + guard de secrets faltantes con `::error`<br>explicativo. Env de test con `DATABASE_URL` local. |
| Dockerfiles / compose de client + server | `docker.yml` | `docker compose config --quiet` para validar el YAML + builds con `docker/build-push-action`<br>y caché `type=gha,mode=max`. Paths filter sobre `server/**` + el propio yml. |
| Base de datos + hosting definidos | `deploy.yml` | **Migraciones antes del deploy** (nunca code nuevo contra schema viejo) + guard de secrets<br>del hosting + `concurrency` sin cancelación para deploys en serie. |

Notas específicas del nuevo stack:

- El espejo de `prisma migrate deploy` es **Flyway**: `mvn flyway:migrate` (o parte
  del boot) corriendo antes de desplegar el jar.
- Vercel por CLI no aplica si el server va en plataforma Java (Render/Railway/etc:
  decisión pendiente del equipo): el pattern a conservar es el **guard de secrets**
  y el deploy como workflow separado disparado por `push` a `develop`.
