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

     (function(){
        emailjs.init("ZGAO7V0dT48MBvWAX"); // Lo obtienes desde EmailJS Dashboard
      })();
    
      document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const form = this;
    
        emailjs.sendForm("service_pl8h5dk", "template_81jtzok", this)
          .then(function(response) {
            alert("¡Correo enviado!");
            form.reset();
          }, function(error) {
            alert("Hubo un error al enviar el correo.");
            console.log(error);
          });
      });