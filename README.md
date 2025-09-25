🍻 ControlCerv - Sistema de Gestión para Cervecerías Artesanales

Sistema fullstack para la gestión de inventario de cervecerías artesanales.

## 🚀 Características
- **Tienda Online**: Catálogo de productos con gestión de pedidos
- **Panel Administrativo**: Dashboard con métricas en tiempo real
- **API RESTful**: Backend robusto con Node.js y Express
- **Frontend Moderno**: Interfaz React responsive y intuitiva

## 🛠️ Tecnologías Utilizadas
### Backend
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **MongoDB Atlas** - Base de datos en la nube

### Frontend
- **React** - Biblioteca de interfaz de usuario
- **Axios** - Cliente HTTP para APIs
- **CSS3** - Estilos y diseño

## ⚡ Instalación y Configuración

### Prerrequisitos
- Node.js 16+ 
- MongoDB Atlas (cuenta gratuita)
- GitHub (cuenta gratuita)

### 1. Clonar el Repositorio
git clone https://github.com/tuusuario/controlcerv-project.git
cd controlcerv-project

### 2. Configurar Backend
cd backend
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales MongoDB


### 3. Configurar Frontend
cd ../frontend
npm install

### 4. Variables de Entorno
**Backend (.env)**
MONGODB_URI=mongodb+srv
PORT=5000
NODE_ENV=development

**Frontend (.env)**
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_NAME=ContrólCerv

### Desarrollo
# Terminal 1 - Backend
cd backend
npm run dev
# Terminal 2 - Frontend  
cd frontend
npm start

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

## 👥 Autor
**Manuel Alejandro** - [Tu GitHub](https://github.com/3MM4NV3L/)

## 🙌 Agradecimientos
- LA FABRICA BootCamp 1ª Edición



**¡Si te gusta este proyecto, dale una ⭐ en GitHub!**
