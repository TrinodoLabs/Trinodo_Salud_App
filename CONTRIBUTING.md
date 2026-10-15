# Guía de contribución del equipo

Este repo hereda el flujo de trabajo del equipo de los ciclos anteriores
(No Country). Las reglas de acá son **obligatorias** y se validan en CI
(`.github/workflows/pr-validation.yml`). Si trabajás con un agente de
código, también tenés `AGENTS.md` con las mismas convenciones.

## 1. Estructura del repo

Monorepo pnpm:

| Carpeta | Qué vive ahí |
|------|--------|
| `client/` | App web Next.js (workspace `@trinodo/client`) |
| `server/` | API backend (esqueleto; stack propuesto: Spring Boot) |
| `infra/` | Entornos, Docker y deploy (placeholder por ahora) |
| `plans/` | Propuestas de diseño con estado (contratos API, BD) |
| `.github/` | Convenciones y CI |

## 2. Issues primero

Todo trabajo arranca con un issue con los templates `.github/ISSUE_TEMPLATE/`:

- **[Bug]** — algo no funciona como se espera.
- **[Feature]** — funcionalidad nueva o mejora.
- **[Task]** — tarea técnica o de mantenimiento.

Un issue se marca `status:approved` cuando el equipo lo aprueba: recién ahí
se puede abrir un PR que lo resuelva.

## 3. Ramas

Los cambios llegan **solo por PR** — el remoto rechaza push directo a
`develop` y `main`. Desde `develop` actual:

```bash
git switch develop && git pull
git switch -c tipo/descripcion
```

Regex obligatorio:

```
^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert)\/[a-z0-9._-]+$
```

Minúsculas, sin espacios, solo `a-z0-9._-` en la descripción:
`feat/patient-records`, `fix/schedule-conflict`, `chore/update-ci-actions`.

El `tipo` describe el cambio principal del PR: `feat/` agrega
comportamiento, `fix/` corrige algo que ya existía, `chore/` es tooling y
docs por claridad.

## 4. Commits (conventional commits)

Cada commit es una unidad de trabajo completa y revisable:

- **Código + tests + docs del cambio en el mismo commit** — no mandes los
  tests "en otro PR" ni el README "después".
- Línea de asunto:

```
^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\([a-z0-9\._-]+\))?!?: .+
```

- Ejemplos:

  - `feat(agenda): add waitlist`
  - `fix(auth): prevent duplicate login sessions`
  - `docs(readme): document pnpm workspace`
- `!` al final del tipo/ámbito solo si rompe una interfaz pública que consume
  otro módulo (API, flags, exports) — en ese caso el PR es `type:breaking-change`.
- Antes de abrir un PR: no mandes trailers `Co-Authored-By` en los commits.

## 5. Antes de avisar que algo está listo

Marcar con [x] solo lo que **effectivamente** corriste y viste pasar:

```bash
pnpm install            # luego de cambiar lockfiles o mover paquetes
pnpm build              # build del client
pnpm dev                # verificación manual de UI en `client/`
```

Si cambiás shell scripts (cuando existan en el repo), corré `shellcheck` sobre
los archivos modificados antes del commit.

## 6. Pull Request

1. PR con base `develop`, usando el template `.github/pull_request_template.md`.
2. **Cierre el issue de origen** (`Closes #N`; el issue tiene `status:approved`).
3. **Un solo** label `type:*`:

| Tipo de commit | Label del PR |
|---------|----------|
| `feat` | `type:feature` |
| `fix` | `type:bug` |
| `docs` | `type:docs` |
| `refactor` | `type:refactor` |
| `chore` / `style` / `test` / `build` / `ci` | `type:chore` |
| `perf` | `type:feature` |
| `revert` | `type:bug` |
| `feat!` / `fix!` | `type:breaking-change` |

4. Los checks (CI + validación de PR) deben pasar: el build del client y
   `pr-validation` se corren en el push automático.

## 7. Secretos y entornos

- Nunca commitear secretos: solo `.env.example` con placeholders en `infra/`.
- Credenciales de despliegue van en Secrets del repo, nunca en archivos.

---

¿Dudas de qué tipo le toca a un cambio? Fijate en los últimos PRs del repo —
y ante la indecisión, `chore/` para tooling y docs, `refactor/` para lo que no
cambia comportamiento observable.
