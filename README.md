🍻 ContrólCerv - Sistema de Gestión para Cervecerías Artesanales

Sistema fullstack para la gestión de inventario y ventas online de cervecerías artesanales, con control FIFO automatizado y tienda online integrada.

## 🚀 Características

-
- **Alertas Inteligentes**: Notificaciones con 7 días de anticipación
- **Tienda Online**: Catálogo de productos con gestión de pedidos
- **Panel Administrativo**: Dashboard con métricas en tiempo real
- **API RESTful**: Backend robusto con Node.js y Express
- **Frontend Moderno**: Interfaz React responsive y intuitiva

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **MongoDB Atlas** - Base de datos en la nube
- **JWT** - Autenticación por tokens

### Frontend
- **React** - Biblioteca de interfaz de usuario
- **Axios** - Cliente HTTP para APIs
- **CSS3** - Estilos y diseño responsive


## ⚡ Instalación y Configuración

### Prerrequisitos
- Node.js 16+ 
- MongoDB Atlas (cuenta gratuita)
- npm o yarn

### 1. Clonar el Repositorio
\`\`\`bash
git clone https://github.com/tuusuario/controlcerv-project.git
cd controlcerv-project
\`\`\`

### 2. Configurar Backend
\`\`\`bash
cd backend
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales MongoDB
\`\`\`

### 3. Configurar Frontend
\`\`\`bash
cd ../frontend
npm install
\`\`\`

### 4. Variables de Entorno

**Backend (.env)**
\`\`\`env
MONGODB_URI=mongodb+srv://usuario:password@cluster0.xxxxx.mongodb.net/controlcerv
PORT=5000
JWT_SECRET=tu_clave_secreta_jwt
NODE_ENV=development
\`\`\`

**Frontend (.env)**
\`\`\`env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_NAME=ContrólCerv
\`\`\`

## 🚀 Ejecución

### Desarrollo
\`\`\`bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm start
\`\`\`

### Producción
\`\`\`bash
# Backend
cd backend
npm start

# Frontend
cd frontend
npm run build
serve -s build
\`\`\`

## 📡 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | \`/api/beers\` | Obtener todas las cervezas |
| GET | \`/api/beers/:id\` | Obtener cerveza por ID |
| POST | \`/api/beers\` | Crear nueva cerveza |
| PUT | \`/api/beers/:id\` | Actualizar cerveza |
| DELETE | \`/api/beers/:id\` | Eliminar cerveza |

## 🎯 Funcionalidades CRUD

- ✅ **Create**: Añadir nuevas cervezas al inventario
- ✅ **Read**: Listar y visualizar cervezas
- ✅ **Update**: Modificar información existente  
- ✅ **Delete**: Eliminar cervezas del sistema
- ✅ **Búsqueda**: Filtrar por tipo, nombre, características

## 🎨 Demo

Puedes probar la aplicación en:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000
- **API Test**: http://localhost:5000/api/test



## 👥 Autor

**Manuel Alejandro** - [Tu GitHub](https://github.com/3MM4NV3L/)

## 🙌 Agradecimientos

- Equipo de MongoDB Atlas
- Comunidad de React y Node.js
- Cervecerías artesanales de Quito-Ecuador

---

**¡Si te gusta este proyecto, dale una ⭐ en GitHub!**