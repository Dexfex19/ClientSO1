document.addEventListener("DOMContentLoaded", function () {
    // Carrusel
    const servicesContainer = document.querySelector(".services-container");
    console.log("servicesContainer:", servicesContainer);
    const scrollStep = 200;
    let scrollPosition = 0;

    document.querySelector(".services-carousel").addEventListener("mousemove", function (event) {
        const { clientX, clientWidth } = this;
        const left = clientWidth * 0.2;
        const right = clientWidth * 0.8;

        if (event.clientX < left) {
            scrollPosition = Math.max(scrollPosition - scrollStep, 0);
        } else if (event.clientX > right) {
            scrollPosition = Math.min(
                scrollPosition + scrollStep,
                servicesContainer.scrollWidth - servicesContainer.clientWidth
            );
        }

        servicesContainer.style.transform = `translateX(-${scrollPosition}px)`;
    });

    // Modal
    const modal = document.getElementById("service-modal");
    console.log("modal:", modal);
    const modalImage = document.getElementById("modal-image");
    console.log("modalImage:", modalImage);
    const modalTitle = document.getElementById("modal-title");
    console.log("modalTitle:", modalTitle);
    const modalDescription = document.getElementById("modal-description");
    console.log("modalDescription:", modalDescription);
    const closeBtn = document.querySelector(".close-btn");
    console.log("closeBtn:", closeBtn);

    const serviceDetails = {
        "Gestión Empresarial": {
            img: "images/gestionempresarial.jpg",
            description: `
                <strong>Impulsa el potencial de tu empresa</strong> con nuestras soluciones de gestión empresarial personalizadas. 
                Nuestro equipo trabaja contigo para identificar ineficiencias e implementar estrategias que aumenten la productividad y fomenten el crecimiento.
                <br><br>
                Creamos estructuras organizativas sólidas que empoderan a tu equipo, optimizan los recursos y estimulan la innovación. 
                Ya sea que busques mejorar la colaboración o perfeccionar procesos, nuestras soluciones se adaptan a tus necesidades.
                <br><br>
                <a href="#contacto" class="contact-link">Ir a la sección de contacto</a>
            `
        },
        "Soporte TI": {
            img: "images/itsupport.jpg",
            description: `
                <strong>Soporte técnico 24/7</strong> para operaciones sin interrupciones. 
                Te ayudamos a mantener la integridad del sistema, proteger tu infraestructura y brindar asistencia a tus usuarios.
                <br><br>
                Nuestro equipo monitorea proactivamente tus sistemas y resuelve problemas antes de que afecten tu negocio. Confía en nosotros para mantener tu tecnología funcionando.
                <br><br>
                <a href="#contacto" class="contact-link">Ir a la sección de contacto</a>
            `
        },
        "Optimización de Ventas": {
            img: "images/ventas.jpg",
            description: `
                <strong>Mejora tu rendimiento en ventas</strong> con estrategias basadas en datos. 
                Ofrecemos herramientas e información para optimizar tu embudo de ventas, gestionar clientes potenciales y aumentar conversiones.
                <br><br>
                Descubre todo tu potencial de ingresos con reportes avanzados, integración con CRM y asesoría personalizada en ventas.
                <br><br>
                <a href="#contacto" class="contact-link">Ir a la sección de contacto</a>
            `
        },
        "Recursos Humanos": {
            img: "images/recursoshumanos.jpg",
            description: `
                <strong>Potencia tu equipo humano</strong> con soluciones modernas de RRHH. 
                Desde el reclutamiento hasta la retención, te ayudamos a formar un equipo fuerte y motivado.
                <br><br>
                Nuestras estrategias se enfocan en la motivación del empleado, desarrollo de talento y evaluación de desempeño para lograr el éxito a largo plazo.
                <br><br>
                <a href="#contacto" class="contact-link">Ir a la sección de contacto</a>
            `
        },
        "Contabilidad": {
            img: "images/contabilidad.jpg",
            description: `
                <strong>Simplifica tus operaciones financieras</strong> con nuestro respaldo contable experto. 
                Llevamos tus registros, aseguramos el cumplimiento y brindamos información útil para la toma de decisiones.
                <br><br>
                Desde presupuestos hasta declaraciones fiscales, nuestras soluciones te mantienen en control y te ayudan a tomar decisiones financieras inteligentes.
                <br><br>
                <a href="#contacto" class="contact-link">Ir a la sección de contacto</a>
            `
        }
    };



    servicesContainer.addEventListener("click", function (event) {
        const card = event.target.closest(".service-card");
        if (!card) return;
        console.log("Tarjeta clickeada:", card);

        const title = card.querySelector(".service-title").childNodes[0].textContent.trim();
        const info = serviceDetails[title];
        console.log("Mostrando modal");
        console.log("info:", info);
        if (info) {
            modalImage.src = info.img;
            modalTitle.innerText = title;
            modalDescription.innerHTML = info.description;
            modal.classList.add("show");
            document.body.style.overflow = "hidden";
        }

    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
        document.body.style.overflow = "";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
            document.body.style.overflow = "";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            modal.classList.remove("show");
            document.body.style.overflow = "";
        }
    });
    modal.addEventListener("click", function (e) {
        if (e.target.tagName === "A" && e.target.getAttribute("href").startsWith("#")) {
            modal.classList.remove("show");
            document.body.style.overflow = "";
        }
    });
});
