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
