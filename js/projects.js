// ============================================================================
// PROJECT DETAIL SCRIPT
// Carga y renderiza información dinámica de proyectos desde JSON
// ============================================================================

let projectData = null;

// Cargar datos del proyecto al cargar la página
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Obtener ID del proyecto desde la URL
        const projectId = getProjectIdFromURL();
        
        if (!projectId) {
            showError('No se especificó un proyecto válido');
            return;
        }

        // Cargar el JSON del proyecto específico
        projectData = await loadProject(projectId);

        // Renderizar todos los componentes
        renderProjectData();
        
    } catch (error) {
        console.error('Error cargando proyecto:', error);
        showError('Error al cargar la información del proyecto');
    }
});

/**
 * Obtiene el ID del proyecto desde los parámetros de la URL
 */
function getProjectIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

/**
 * Carga el archivo JSON del proyecto específico
 */
async function loadProject(projectId) {
    const response = await fetch(`./util/${projectId}.json`);
    if (!response.ok) {
        throw new Error(`Error al cargar ${projectId}.json`);
    }
    return await response.json();
}

/**
 * Renderiza todos los datos del proyecto en el HTML
 */
function renderProjectData() {
    if (!projectData) return;

    // Renderizar encabezado
    renderHeader();
    
    // Renderizar galería
    renderGallery();
    
    // Renderizar stack de tecnologías
    renderTechStack();
    
    // Renderizar descripción
    renderDescription();
    
    // Renderizar endpoints
    renderEndpoints();
    
    // Renderizar botones de acción
    renderActions();
}

/**
 * Renderiza el encabezado del proyecto
 */
function renderHeader() {
    const header = document.querySelector('.project-header');
    if (!header) return;

    header.innerHTML = `
        <a href="index.html#proyectos" class="breadcrumb">
            <i class="fas fa-arrow-left"></i> Volver a Proyectos
        </a>
        <h1 class="project-title">${projectData.title}</h1>
        <p class="project-subtitle">${projectData.subtitle}</p>
    `;
}

/**
 * Renderiza la galería de imágenes
 */
function renderGallery() {
    const gallery = document.querySelector('.project-gallery');
    if (!gallery || !projectData.gallery || projectData.gallery.length === 0) return;

    const mainImageHtml = `<img id="mainImage" src="${projectData.gallery[0]}" alt="${projectData.title}">`;
    
    const thumbnailsHtml = projectData.gallery.map((img, index) => `
        <img 
            src="${img}" 
            alt="Galería ${index + 1}" 
            class="thumbnail" 
            onclick="changeMainImage(this.src)"
        >
    `).join('');

    gallery.innerHTML = `
        <div class="gallery-main">
            ${mainImageHtml}
        </div>
        <div class="gallery-thumbnails">
            ${thumbnailsHtml}
        </div>
    `;
}

/**
 * Cambia la imagen principal de la galería
 */
function changeMainImage(src) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = src;
    }
}

/**
 * Renderiza el stack de tecnologías
 */
function renderTechStack() {
    const stackContainer = document.querySelector('.project-stack');
    if (!stackContainer || !projectData.technologies) return;

    let techHtml = '<h2>Stack Tecnológico</h2>';
    techHtml += '<div class="tech-cards-container">';
    
    Object.entries(projectData.technologies).forEach(([category, techs]) => {
        techs.forEach(tech => {
            const icon = getTechIcon(tech);
            techHtml += `
                <div class="tech-card">
                    <div class="tech-card-icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="tech-card-name">${tech}</div>
                </div>
            `;
        });
    });

    techHtml += '</div>';
    stackContainer.innerHTML = techHtml;
}

/**
 * Obtiene el icono correspondiente a la tecnología específica
 */
function getTechIcon(tech) {
    const icons = {
        // Frontend
        'React': 'fab fa-react',
        'Vue': 'fab fa-vuejs',
        'Angular': 'fab fa-angular',
        'HTML': 'fab fa-html5',
        'CSS': 'fab fa-css3-alt',
        'JavaScript': 'fab fa-js-square',
        'TypeScript': 'fab fa-js-square',
        'Tailwind': 'fas fa-palette',
        'Bootstrap': 'fab fa-bootstrap',
        'Next.js': 'fab fa-react',
        'Nuxt': 'fab fa-vuejs',
        
        // Backend
        'Node.js': 'fab fa-node-js',
        'Express': 'fab fa-node-js',
        'Python': 'fab fa-python',
        'Django': 'fab fa-python',
        'Flask': 'fab fa-python',
        'Java': 'fab fa-java',
        'Spring Boot': 'fab fa-java',
        'PHP': 'fab fa-php',
        'Laravel': 'fab fa-php',
        'Ruby': 'fas fa-gem',
        'Rails': 'fas fa-gem',
        'Go': 'fas fa-code',
        '.NET': 'fab fa-windows',
        'C#': 'fas fa-code',
        
        // Database
        'MongoDB': 'fas fa-leaf',
        'MySQL': 'fas fa-database',
        'PostgreSQL': 'fas fa-database',
        'Firebase': 'fas fa-fire',
        'Redis': 'fas fa-database',
        'Oracle': 'fas fa-database',
        'SQL': 'fas fa-database',
        
        // DevOps & Cloud
        'Docker': 'fab fa-docker',
        'Kubernetes': 'fab fa-docker',
        'AWS': 'fab fa-aws',
        'Azure': 'fab fa-windows',
        'GCP': 'fas fa-cloud',
        'Jenkins': 'fas fa-cogs',
        'GitLab CI': 'fab fa-gitlab',
        'GitHub Actions': 'fab fa-github',
        
        // Tools & Other
        'Git': 'fab fa-git-alt',
        'GitHub': 'fab fa-github',
        'GitLab': 'fab fa-gitlab',
        'REST API': 'fas fa-code',
        'GraphQL': 'fas fa-code',
        'WebSocket': 'fas fa-wifi',
        'OAuth': 'fas fa-lock',
        'JWT': 'fas fa-lock',
        'Socket.io': 'fas fa-plug',
        'RabbitMQ': 'fas fa-comments',
        'Kafka': 'fas fa-stream',
        'Webpack': 'fas fa-box',
        'Vite': 'fas fa-bolt',
        'NPM': 'fab fa-npm',
        'Yarn': 'fab fa-yarn',
        'Jest': 'fas fa-vial',
        'Cypress': 'fas fa-vial',
        'Selenium': 'fas fa-vial'
    };
    
    return icons[tech] || 'fas fa-cog';
}

/**
 * Renderiza la descripción del proyecto
 */
function renderDescription() {
    const descContainer = document.querySelector('.project-description');
    if (!descContainer) return;

    let featuresList = '';
    if (projectData.features && projectData.features.length > 0) {
        featuresList = `
            <h3>Características Principales</h3>
            <ul class="features-list">
                ${projectData.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
    }

    let achievementsList = '';
    if (projectData.achievements && projectData.achievements.length > 0) {
        achievementsList = `
            <h3>Logros y Resultados</h3>
            <ul class="features-list">
                ${projectData.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        `;
    }

    descContainer.innerHTML = `
        <h2>Descripción del Proyecto</h2>
        <p>${projectData.description}</p>
        ${featuresList}
        ${achievementsList}
    `;
}

/**
 * Renderiza la tabla de endpoints de la API
 */
function renderEndpoints() {
    const endpointsSection = document.querySelector('.endpoints-section');
    if (!endpointsSection || !projectData.endpoints || projectData.endpoints.length === 0) return;

    let tableHtml = `
        <h2>Documentación de Endpoints</h2>
        <p class="endpoints-description">
            Los siguientes endpoints están disponibles en la API de este proyecto:
        </p>
        <div class="endpoints-table-wrapper">
            <table class="endpoints-table">
                <thead>
                    <tr>
                        <th>Método</th>
                        <th>Ruta</th>
                        <th>Descripción</th>
                        <th>Respuesta</th>
                    </tr>
                </thead>
                <tbody>
    `;

    projectData.endpoints.forEach((endpoint, index) => {
        const methodClass = endpoint.method.toLowerCase();
        const responseJSON = JSON.stringify(endpoint.response, null, 2);
        const responseId = `response-${index}`;

        tableHtml += `
            <tr>
                <td>
                    <span class="method-badge ${methodClass}">
                        ${endpoint.method}
                    </span>
                </td>
                <td><code class="route-code">${endpoint.route}</code></td>
                <td>${endpoint.description}</td>
                <td>
                    <button class="btn-json" onclick="toggleJson('${responseId}')">
                        Ver JSON
                    </button>
                    <div class="json-response" id="${responseId}" style="display: none;">
                        <pre>${escapeHtml(responseJSON)}</pre>
                    </div>
                </td>
            </tr>
        `;
    });

    tableHtml += `
                </tbody>
            </table>
        </div>
    `;

    endpointsSection.innerHTML = tableHtml;
}

/**
 * Alterna la visibilidad del JSON response
 */
function toggleJson(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const isHidden = element.style.display === 'none';
    element.style.display = isHidden ? 'block' : 'none';
    
    // Cambiar texto del botón (opcional)
    const button = element.previousElementSibling;
    if (button) {
        button.textContent = isHidden ? 'Ocultar JSON' : 'Ver JSON';
    }
}

/**
 * Escapa caracteres HTML para evitar inyección
 */
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * Renderiza los botones de acción
 */
function renderActions() {
    const actionsContainer = document.querySelector('.project-actions');
    if (!actionsContainer) return;

    let html = '';

    if (projectData.githubUrl) {
        html += `
            <a href="${projectData.githubUrl}" target="_blank" class="btn-primary">
                <i class="fab fa-github"></i> Ver código
            </a>
        `;
    }

    if (projectData.demoUrl) {
        html += `
            <a href="${projectData.demoUrl}" target="_blank" class="btn-primary">
                <i class="fas fa-external-link-alt"></i> Ver demo
            </a>
        `;
    }

    actionsContainer.innerHTML = html;
}

/**
 * Muestra un mensaje de error
 */
function showError(message) {
    const container = document.querySelector('.project-detail');
    if (container) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <h2 style="color: #ef4444;">Error</h2>
                <p>${message}</p>
                <a href="index.html" class="btn-primary">Volver al inicio</a>
            </div>
        `;
    }
}
