document.getElementById("pedidoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const pedidoSeleccionado = document.querySelector('input[name="pedido"]:checked');

    const resultado = document.getElementById("resultado");

    if (!nombre || !telefono) {
        resultado.innerHTML = "❌ Por favor completa tu nombre y teléfono.";
        return;
    }

    if (!pedidoSeleccionado) {
        resultado.innerHTML = "❌ Por favor selecciona un platillo.";
        return;
    }

    const pedido = pedidoSeleccionado.value;

    // Mensaje que se enviará por WhatsApp
    const mensaje = `
Pedido Don Bosco
Nombre: ${nombre}
Teléfono: ${telefono}
Platillo: ${pedido}
    `;

    const numeroDestino = "526864151018"; // 52 + tu número
    const urlWhatsApp = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensaje)}`;

    // Abrir WhatsApp
    window.open(urlWhatsApp, "_blank");

    resultado.innerHTML = "✅ Redirigiendo a WhatsApp para enviar tu pedido...";
});
