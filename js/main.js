const form = document.getElementById("form-contacto");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const estado = document.getElementById("estado");
    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const mensaje = form.mensaje.value.trim();
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    if (!nombre || !correoValido || mensaje.length < 10) {
      estado.textContent = "Completa todos los campos (mensaje de al menos 10 caracteres) con un correo válido.";
      return;
    }
    estado.style.color = "green";
    estado.textContent = "¡Gracias " + nombre + ", te responderemos pronto!";
    form.reset();
  });
}