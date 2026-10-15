# Trinodo Salud App — instrucciones para agentes de código

Estas reglas son **obligatorias**. Se heredan del flujo del equipo del ciclo
anterior y se aplican igual para agentes o para personas. Si algo no está acá,
sigue las convenciones del repo y abre un issue para documentarlo.

## Estructura del repo

- Monorepo pnpm: `client/` (Next.js, workspace `@trinodo/client`),
  `server/` (esqueleto; stack propuesto Spring Boot), `infra/` (entornos/deploy).
- Contratos y diseños **propuestos** viven en `plans/` (ver su README). No los
  inventes ni los cambies sin que exista como propuesta.
- Nunca commitees secretos; solo `.env.example` con placeholders en `infra/`.

## Ramas

1. **Nunca push directo a `develop` ni a `main`** — el remoto lo rechaza; todos
   los cambios llegan por PR contra `develop`.
2. Nombre de rama obligatorio (regex):

```
^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert)\/[a-z0-9._-]+$
```

Formato `tipo/descripcion`, minúsculas, sin espacios: `feat/user-login`,
`fix/zsh-glob-error`, `chore/update-ci-actions`.

## Commits (Conventional Commits)

Regex obligatorio:

```
^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\([a-z0-9\._-]+\))?!?: .+
```

Ejemplos: `feat(scripts): add x`, `fix: correct y`. `!` indica un cambio que rompe compatibilidad.

- **Work-unit commits**: cada commit es una unidad de cambio completa y
  revisable; los tests y docs pertinentes viajan junto al código en el mismo
  commit. No mezcles formateo ruidoso con lógica.
- Sin trailers `Co-Authored-By`.

## PRs

1. **Todo PR vincula un issue aprobado** (`Closes #N`, `Fixes #N` o `Resolves #N`,
   case-insensitive) y ese issue tiene el label `status:approved`. Sin esto, no
   abras PR: primero proponé el issue.
2. Antes de abrir PR: los checks locales pasan (`pnpm build` como mínimo) y los
   archivos shell modificados pasan `shellcheck`.
3. PR contra `develop`, usando el template `.github/pull_request_template.md`.
4. El PR lleva **exactamente un** label `type:*`:

| Tipo | Label |
|------|-------|
| `feat` | `type:feature` |
| `fix` | `type:bug` |
| `docs` | `type:docs` |
| `refactor` | `type:refactor` |
| `chore`, `style`, `test`, `build`, `ci` | `type:chore` |
| `perf` | `type:feature` |
| `revert` | `type:bug` |
| `feat!` / `fix!` | `type:breaking-change` |

Título del PR con el mismo formato conventional commit que sus commits
(`.github/workflows/pr-validation.yml` lo valida junto con el nombre de rama).

## Verificación

- Cambios en `client/`: `pnpm install` + `pnpm build` deben pasar antes del
  push (y `pnpm dev` para verificar a mano lo que tocó la UI).
- Cambios en shell scripts: `shellcheck scripts/*.sh` cuando existan scripts.
- La regla de negocio fuente es `client/src/app/page.tsx` (demo); los contratos
  reales se documentan y aceptan en `plans/`.
