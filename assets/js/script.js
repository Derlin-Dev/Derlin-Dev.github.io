 // Tema oscuro/claro
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        // Verificar preferencia del usuario
        const currentTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', currentTheme);
        
        if (currentTheme === 'dark') {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        
        // Alternar tema
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            if (newTheme === 'dark') {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
        
        // Animaciones al hacer scroll
        const sections = document.querySelectorAll('section');
        
        const observerOptions = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            observer.observe(section);
        });
        
        // Navegación suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

    document.addEventListener("DOMContentLoaded", () => {
    const parts = ["mailto:","d.valera", "peguero", "gmail", "com"];

    const email = `${parts[0]}${parts[1]}${parts[2]}@${parts[3]}.${parts[4]}`;

    const emailLink = document.getElementById("emailLink");

    if (!emailLink) {
        console.error("emailLink no encontrado en el DOM");
        return;
    }

    emailLink.href = `${email}`;
    emailLink.setAttribute("aria-label", "Enviar correo");
    });

    //Mensaje al enviar el formulario y no recargar la pagina 
    document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // 🚫 evita recarga

        status.textContent = "Enviando...";
        status.className = "form-status";

        const data = new FormData(form);

        try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
            "Accept": "application/json"
            }
        });

        if (response.ok) {
            status.textContent = "✅ Mensaje enviado correctamente. ¡Gracias!";
            status.classList.add("success");
            form.reset();
        } else {
            const result = await response.json();
            status.textContent = result.error || "❌ Ocurrió un error al enviar el mensaje.";
            status.classList.add("error");
        }

        } catch (error) {
        console.error(error);
        status.textContent = "❌ Error de red. Intenta más tarde.";
        status.classList.add("error");
        }
    });
    });
