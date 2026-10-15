# Trinodo Salud App

Plataforma de gestión clínica (demo interactiva en `client/`).

## Estructura

```
.
├── client/          App web Next.js (React + Tailwind). Código actual.
├── server/          API backend. Esqueleto preparado; stack propuesto: Spring Boot.
├── infra/           Entornos, Docker, configuración de deploy.
└── .github/
    ├── workflows/            CI/CD (GitHub Actions).
    ├── ISSUE_TEMPLATE/       bug_report.md · feature_request.md · task.md
    └── pull_request_template.md
```

## Workspaces (pnpm)

```bash
pnpm install          # instala todos los workspaces
pnpm dev              # corre la app web (client)
pnpm build            # build de producción del client
```

## Ramas

- `main`: base estable.
- `develop`: rama de trabajo para el desarrollo activo.
- Features desde `develop` (`feat/<tema>`, `fix/<tema>`), PR contra `develop`.

## Convenciones del equipo

- Issues [Bug] / [Feature] / [Task]; los PRs van contra `develop` (link al issue).
- CI en `.github/workflows/ci.yml`: build del client (y tests del server cuando exista `pom.xml`).
- Sin secretos en el repo; variables por `.env.example` en `infra/`.
