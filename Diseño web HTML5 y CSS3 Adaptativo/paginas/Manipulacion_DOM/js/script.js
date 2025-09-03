// Referencias a los elementos del DOM
let texto = document.getElementById("texto");
let elemento = document.getElementById("elemento-2");
let imagen = document.getElementById("elemento-3");
let cajas = document.getElementsByClassName("caja");

// Variables para guardar el estado original
let textoOriginal = texto.textContent;
let colorOriginal = elemento.style.backgroundColor;
let tieneClaseImagen = imagen.classList.contains("imagen");
let visibilidadOriginal = true;

function cambiarTexto() {
    if (texto.textContent === textoOriginal) {
        texto.textContent = "hola";
    } else {
        texto.textContent = textoOriginal;
    }
}

function cambiarColor() {
    if (elemento.style.backgroundColor === "red") {
        elemento.style.backgroundColor = colorOriginal;
    } else {
        // Guardar el color actual antes de cambiarlo
        if (elemento.style.backgroundColor !== "red") {
            colorOriginal = elemento.style.backgroundColor;
        }
        elemento.style.backgroundColor = "red";
    }
}

function cambiarImagen() {
    if (imagen.classList.contains("nueva-imagen")) {
        imagen.classList.remove("nueva-imagen");
        if (tieneClaseImagen) {
            imagen.classList.add("imagen");
        }
    } else {
        // Guardar si tenía la clase imagen antes de cambiarla
        tieneClaseImagen = imagen.classList.contains("imagen");
        imagen.classList.remove("imagen");
        imagen.classList.add("nueva-imagen");
    }
}

function ocultar() {
    if (visibilidadOriginal) {
        // Ocultar todas las cajas
        for (let i = 0; i < cajas.length; i++) {
            cajas[i].classList.add("oculto");
        }
        visibilidadOriginal = false;
    } else {
        // Mostrar todas las cajas
        for (let i = 0; i < cajas.length; i++) {
            cajas[i].classList.remove("oculto");
        }
        visibilidadOriginal = true;
    }
}

// Event listener para cambios (ejemplo adicional)
document.addEventListener("change", () => {
    // Aquí va todo el código que queramos agregar
});