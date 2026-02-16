


/*// Variables globales
let currentLanguage = localStorage.getItem('language') || 'es';
let translations = {};

// Cargar las traducciones
async function loadTranslations(language) {
  try {
    const response = await fetch(`./util/${language}.json`);
    translations = await response.json();
    return translations;
  } catch (error) {
    console.error('Error cargando traducciones:', error);
  }
}

// Obtener un valor anidado del objeto de traducciones
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, prop) => current?.[prop], obj);
}

// Traducir todos los elementos con data-i18n
function translatePage() {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getNestedValue(translations, key);
    
    if (translation) {
      // Si el elemento es un input, actualizar el placeholder
      if (element.tagName === 'INPUT' && element.type === 'text') {
        element.placeholder = translation;
      } else if (element.tagName === 'LABEL') {
        element.textContent = translation;
      } else if (element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    }
  });
  
  // Traducir atributos alt de imágenes
  const images = document.querySelectorAll('img[data-i18n-alt]');
  images.forEach(img => {
    const key = img.getAttribute('data-i18n-alt');
    const translation = getNestedValue(translations, key);
    if (translation) {
      img.alt = translation;
    }
  });
}

// Cambiar idioma
async function changeLanguage(language) {
  currentLanguage = language;
  localStorage.setItem('language', language);
  
  await loadTranslations(language);
  translatePage();
  
  // Actualizar botón activo
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-lang="${language}"]`).classList.add('active');
  
  // Actualizar atributo lang del documento
  document.documentElement.lang = language;
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', async () => {
  // Cargar traducciones iniciales
  await loadTranslations(currentLanguage);
  translatePage();
  
  // Configurar evento para cambiar idioma
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLanguage) {
      btn.classList.add('active');
    }
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const language = btn.getAttribute('data-lang');
      changeLanguage(language);
    });
  });
  
  // Actualizar atributo lang inicial
  document.documentElement.lang = currentLanguage;
}); */

// ===============================
// Variables globales
// ===============================
let currentLanguage = localStorage.getItem('language') || 'es';
let translations = {};


// ===============================
// Cargar las traducciones
// ===============================
async function loadTranslations(language) {
  try {
    const response = await fetch(`./util/${language}.json`);
    translations = await response.json();
    return translations;
  } catch (error) {
    console.error('Error cargando traducciones:', error);
  }
}


// ===============================
// Obtener valor anidado (ej: about.title o tags.0)
// ===============================
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, prop) => current?.[prop], obj);
}


// ===============================
// Traducir todos los elementos
// ===============================
function translatePage() {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getNestedValue(translations, key);

    // ⚠️ Muy importante: no usar if (translation)
    if (translation !== undefined) {

      // 🔥 Si es array → generar elementos dinámicamente
      if (Array.isArray(translation)) {
        element.innerHTML = ""; // limpiar contenido previo

        translation.forEach(item => {
          const span = document.createElement("span");
          span.textContent = item;
          element.appendChild(span);
        });

      } 
      // Inputs tipo texto
      else if (element.tagName === 'INPUT' && element.type === 'text') {
        element.placeholder = translation;
      } 
      // Textareas
      else if (element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } 
      // Todo lo demás
      else {
        element.textContent = translation;
      }
    }
  });

  // ===============================
  // Traducir atributos ALT de imágenes
  // ===============================
  const images = document.querySelectorAll('img[data-i18n-alt]');
  
  images.forEach(img => {
    const key = img.getAttribute('data-i18n-alt');
    const translation = getNestedValue(translations, key);

    if (translation !== undefined) {
      img.alt = translation;
    }
  });
}


// ===============================
// Cambiar idioma
// ===============================
async function changeLanguage(language) {
  currentLanguage = language;
  localStorage.setItem('language', language);

  await loadTranslations(language);
  translatePage();

  // Actualizar botón activo
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  const activeButton = document.querySelector(`[data-lang="${language}"]`);
  if (activeButton) {
    activeButton.classList.add('active');
  }

  // Actualizar atributo lang del documento
  document.documentElement.lang = language;
}


// ===============================
// Inicializar cuando el DOM esté listo
// ===============================
document.addEventListener('DOMContentLoaded', async () => {

  // Cargar idioma inicial
  await loadTranslations(currentLanguage);
  translatePage();

  // Configurar botones de idioma
  const langButtons = document.querySelectorAll('.lang-btn');

  langButtons.forEach(btn => {

    if (btn.getAttribute('data-lang') === currentLanguage) {
      btn.classList.add('active');
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const language = btn.getAttribute('data-lang');
      changeLanguage(language);
    });
  });

  // Establecer atributo lang inicial
  document.documentElement.lang = currentLanguage;
});
