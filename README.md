# caytech-travel

Aplicación web para explorar y gestionar paquetes turísticos. Los visitantes pueden ver el catálogo y el detalle de cada paquete, y un panel de administración protegido con login permite crear, editar y eliminar paquetes.

> **Estado:** en desarrollo 🚧

## Tecnologías

- **Frontend:** React + Vite
- **Backend:** ASP.NET Core 8 (API REST)
- **Base de datos:** SQL Server
- **Autenticación:** JWT
- **Contenedores:** Docker

## Funcionalidades

- [x] Proyecto base con Vite y React
- [ ] Catálogo de paquetes
- [ ] Detalle de paquete
- [ ] Login y rutas protegidas
- [ ] Panel de administración (crear, editar y eliminar paquetes)
- [ ] API REST con ASP.NET Core y JWT
- [ ] Docker Compose para levantar todo el proyecto

## Estructura del proyecto

```
caytech-travel-react/
├── frontend/        # Aplicación React (Vite)
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── hooks/
├── backend/         # API ASP.NET Core (próximamente)
└── README.md
```

## Requisitos

- Node.js (versión LTS)
- npm

## Cómo ejecutar el frontend

```bash
git clone https://github.com/jose-analista/caytech-travel-react.git
cd caytech-travel-react/frontend
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Variables de entorno

Crea un archivo `.env` dentro de `frontend/`:

```
VITE_API_URL=http://localhost:5000/api
```

## Capturas

_Próximamente._

## Próximos pasos

- Conectar el frontend con la API real
- Agregar pruebas
- Publicar una demo en línea

## Autor

**José Calderón** · [GitHub](https://github.com/jose-analista) · [LinkedIn](https://www.linkedin.com/) · marca [caytech](https://github.com/jose-analista)
