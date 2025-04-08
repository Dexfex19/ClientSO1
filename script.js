document.addEventListener("DOMContentLoaded", function () {
    console.log("Página cargada correctamente");

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Gracias por contactarnos, " + name + ". Te responderemos pronto.");
            this.reset();
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
});
