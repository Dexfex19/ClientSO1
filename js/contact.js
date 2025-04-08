document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Capturar valores
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();
        const consent = document.getElementById("consent").checked;

        // Validar que todos los campos obligatorios estén llenos
        if (!name || !email || !phone || !consent) {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        // Validar email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Por favor, introduce un correo electrónico válido.");
            return;
        }

        // Mensaje de éxito
        alert("¡Formulario enviado correctamente!");
        form.reset();
    });
});
