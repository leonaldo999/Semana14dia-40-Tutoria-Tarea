# Semana 14 dia 40 Tutoria Tarea

## Página Web del Equipo del Real Madrid

Este proyecto es una aplicación web dedicada a mostrar información sobre el equipo de fútbol Real Madrid. Incluye componentes interactivos, estilizados con tecnologías modernas y estructurados de manera modular para escalabilidad y mantenimiento.

## Tabla de Contenidos

- [Semana 14 dia 40 Tutoria Tarea](#semana-14-dia-40-tutoria-tarea)
  - [Página Web del Equipo del Real Madrid](#página-web-del-equipo-del-real-madrid)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Características](#características)
  - [Tecnologías Usadas](#tecnologías-usadas)
  - [Instalación y Configuración](#instalación-y-configuración)
  - [Comandos Disponibles](#comandos-disponibles)

## Estructura del Proyecto

El proyecto sigue una estructura limpia y modular:

```scr
madrid-proyecto
├── node_modules         # Dependencias
├── public               # Archivos estáticos
├── src                  # Código fuente
│   ├── assets           # Imágenes, fuentes, etc.
│   ├── components       # Componentes reutilizables
│   │   ├── card         # Componente Card
│   │   │   └── Card.jsx
│   │   ├── card2        # Componente Card2
│   │       └── Card2.jsx
│   ├── pages            # Páginas de la aplicación
│   │   ├── home         # Página de inicio
│   │   │   └── Home.jsx
│   │   ├── equipo       # Página del equipo
│   │       └── Equipo.jsx
│   ├── App.css          # Estilos globales
│   ├── App.jsx          # Componente principal de la aplicación
│   ├── index.css        # Estilos base
│   └── main.jsx         # Punto de entrada
├── .gitignore           # Archivos ignorados por Git
├── eslint.config.js     # Configuración de ESLint
├── index.html           # Plantilla HTML
├── package-lock.json    # Archivo de bloqueo de dependencias
├── package.json         # Metadatos del proyecto
├── plantilla.json       # Datos de plantilla JSON
├── postcss.config.js    # Configuración de PostCSS
├── README.md            # Documentación del proyecto
├── tailwind.config.js   # Configuración de Tailwind CSS
└── vite.config.js       # Configuración de Vite
```

## Características

- **Página de Inicio**: Muestra una descripción general del sitio web.
- **Página del Equipo**: Proporciona información detallada sobre los jugadores y estadísticas del Real Madrid.
- **Componentes Reutilizables**: Componentes modulares para tarjetas y otros elementos de la interfaz.
- **Diseño Responsivo**: Totalmente adaptable y optimizado para diferentes tamaños de pantalla.

## Tecnologías Usadas

- **Frontend**: React, JSX
- **Estilos**: Tailwind CSS, módulos de CSS
- **Empaquetador**: Vite
- **Linter**: ESLint
- **Gestor de Paquetes**: npm

## Instalación y Configuración

1. Clona el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd <directorio-del-proyecto>
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador y navega a:

   ```bash
   http://localhost:3000
   ```

## Comandos Disponibles

- **`npm run dev`**: Inicia el servidor de desarrollo.
- **`npm run build`**: Construye la aplicación para producción.
- **`npm run preview`**: Previsualiza la construcción de producción.
- **`npm run lint`**: Ejecuta ESLint para verificar la calidad del código.
>[!NOTE]
>¡Siéntete libre de contribuir o reportar problemas para mejorar la aplicación!
