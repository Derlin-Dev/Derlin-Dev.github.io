const themeButton = document.getElementById("themeToggle");

// Cargar tema guardado
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeButton.textContent = "☀️";
} else {
    themeButton.textContent = "🌙";
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeButton.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});

//Animacion de scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});

// Contador animado
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const speed = 100;

            const updateCount = () => {
                const increment = target / speed;
                count += increment;

                if (count < target) {
                    counter.textContent = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.textContent = target;
                }
            };

            updateCount();
            counterObserver.unobserve(counter);
        }
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});


//Formulario de contacto
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    status.textContent = "Enviando mensaje...";
    status.style.color = "var(--accent-color)";

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            status.textContent = "Mensaje enviado correctamente.";
            status.style.color = "lightgreen";
            form.reset();
        } else {
            status.textContent = "Hubo un error al enviar el mensaje.";
            status.style.color = "salmon";
        }

    } catch (error) {
        status.textContent = "Error de conexión.";
        status.style.color = "salmon";
    }
});
