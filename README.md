# 🎯 Portafolio Web 2.0.1

Portafolio web profesional y moderno con diseño futurista, soporte multiidioma y tema claro/oscuro.

## ✨ Características Principales

### 🎨 Diseño Moderno
- **Tema oscuro/claro** - Toggle automático entre temas
- **Diseño responsivo** - Se adapta a todos los dispositivos
- **Efectos visuales** - Animaciones suaves y glow effects
- **Colores futuristas** - Paleta profesional con acento cyan

### 🌍 Multiidioma
- **Soporte bilingüe** - Español e Inglés
- **Cambio dinámico** - Switch de idioma sin recargar
- **Traducciones completas** - Todos los textos de la página

### 📱 Secciones Principales

| Sección | Descripción |
|---------|-------------|
| **Hero** | Presentación principal con foto, disponibilidad y enlaces |
| **Sobre Mí** | Información personal con estadísticas |
| **Proyectos** | Galería de proyectos destacados |
| **Habilidades** | Grid de tecnologías y herramientas |
| **Educación** | Timeline de formación académica |
| **Contacto** | Formulario de contacto |

## 📁 Estructura del Proyecto

```
portafolio-web/
├── index.html                  # Página principal
├── project-detail.html         # Detalle de proyecto individual
├── css/
│   ├── styles.css             # Estilos globales
│   └── project-detail.css     # Estilos de detalle
├── js/
│   ├── app.js                 # Lógica principal
│   ├── i18n.js               # Gestor multiidioma
│   └── projects.js           # Gestión de proyectos
├── util/
│   ├── en.json               # Traducciones inglés
│   ├── es.json               # Traducciones español
│   ├── projects.json         # Catálogo de proyectos
│   ├── projects-index.json   # Índice de proyectos
│   └── *.json                # Detalles de proyectos específicos
└── assets/
    └── img/                  # Imágenes y galerías
```

## 🚀 Instalación y Uso

1. **Clonar o descargar** el repositorio
2. **Abrir** `index.html` en un navegador
3. No requiere instalación de dependencias ni servidor

## 🎨 Personalización

### Cambiar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --accent-color: #38bdf8;        /* Color principal (cyan) */
    --bg-color: #0f172a;            /* Fondo oscuro */
    --text-color: #f1f5f9;          /* Texto claro */
    /* ... más variables */
}
```

### Agregar Proyectos

1. Crear archivo `util/nuevo-proyecto.json`
2. Agregar entrada en `util/projects.json`
3. Crear imagen en `assets/img/galerias/nuevo-proyecto/`
4. Agregar traducciones en `util/en.json` y `util/es.json`

### Modificar Contenido

- **Traducciones**: Editar `util/en.json` y `util/es.json`
- **Proyectos**: Modificar `util/projects.json`
- **Habilidades**: Actualizar en `css/styles.css` (sección skills)

## 🎯 Variables de Configuración CSS

```css
/* Espaciado */
--spacing-xs: 8px;
--spacing-sm: 12px;
--spacing-md: 20px;
--spacing-lg: 25px;
--spacing-xl: 40px;
--spacing-2xl: 30px;

/* Bordes */
--border-radius-sm: 5px;
--border-radius-md: 15px;
--border-radius-lg: 20px;
--border-radius-xl: 25px;

/* Transiciones */
--transition-fast: 0.3s ease;
--transition-base: 0.4s ease;

/* Sombras */
--shadow-sm: 0 10px 25px rgba(0, 0, 0, 0.2);
--shadow-md: 0 15px 35px rgba(0, 0, 0, 0.25);
--shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.3);
```

## 📱 Breakpoints Responsivos

- **1024px** - Tablets grandes
- **900px** - Tablets y dispositivos medianos
- **768px** - Tablets pequeñas
- **480px** - Móviles

## 🎭 Temas Disponibles

### Tema Oscuro (por defecto)
- Fondo: `#0f172a` (azul muy oscuro)
- Texto: `#f1f5f9` (blanco apagado)
- Acento: `#38bdf8` (cyan brillante)

### Tema Claro
```css
body.light {
    --bg-color: #f8fafc;
    --text-color: #0f172a;
    --accent-color: #2563eb;
}
```

## 🔗 Enlaces Sociales

Los iconos de redes sociales incluyen:
- ✨ Fondos circulares con bordes
- 🌟 Efecto glow en hover
- 🎬 Animaciones suaves
- 📍 Escala y elevación al pasar

## 📝 Estructura de Datos JSON

### projects.json
```json
{
    "projects": [
        {
            "id": "proyecto1",
            "title": "Mi Proyecto",
            "image": "assets/img/galerias/proyecto1/main.jpg",
            "dataFile": "util/proyecto1.json"
        }
    ]
}
```

### Archivo de Traducción (en.json / es.json)
```json
{
    "hero": {
        "subtitle": "Texto aquí",
        "title": "Título",
        "description": "Descripción..."
    }
}
```

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados y animaciones
- **JavaScript (Vanilla)** - Sin dependencias
- **Font Awesome** - Iconos
- **Google Fonts** - Tipografía (Orbitron)

## 🎬 Animaciones Incluidas

- **Reveal**: Fade-in con translateY al scroll
- **Hover Effects**: Scale, translateY, glow
- **Pulse**: Animación de disponibilidad
- **Gradient**: Transiciones suaves de colores

## 💡 Características Especiales

### Badge de Disponibilidad
- Indicador con punto pulsante
- Estados: Disponible / No disponible
- Animaciones personalizadas

### Timeline de Educación
- Línea vertical con puntos
- Transiciones suaves al hover
- Diseño moderno y limpio

### Formulario de Contacto
- Validación integrada
- Feedback visual en inputs
- Responsivo en todas las pantallas

## 📞 Implementar Contacto Real

Para activar el envío de emails, conectar a un servicio como:
- **Formspree** - Sin backend
- **EmailJS** - Cliente JavaScript
- **Backend propio** - Node.js/PHP

## 🎯 Mejoras Futuras

- [ ] Agregar backend para contacto
- [ ] Sistema de comentarios
- [ ] Blog integrado
- [ ] Dark mode automático según preferencias del sistema
- [ ] Analytics
- [ ] PWA para modo offline

## 📄 Licencia

Este proyecto es de uso personal y educativo.

## 👨‍💻 Autor

Desarrollado con ❤️

---

**Última actualización:** 15 de febrero de 2026
