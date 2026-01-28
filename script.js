document.getElementById("pedidoForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const tamal = document.getElementById("tamal").value;
    const atole = document.getElementById("atole").value;
    const pan = document.getElementById("pan").value;

    const mensaje = `
Pedido Iglesia
Nombre: ${nombre}
Teléfono: ${telefono}

Tamal: ${tamal}
Atole: ${atole}
Pan: ${pan}
    `;

    const numeroIglesia = "5216864151018"; // REEMPLAZA con el número real
    const url = `https://wa.me/${numeroIglesia}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
});
