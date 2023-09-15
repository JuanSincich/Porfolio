/* ----------------PAGINA CERTIFICACIONES------------------ */

const images = document.querySelectorAll(".clickable");

document.addEventListener("click", (event) => {
  images.forEach((image) => {
    if (image.classList.contains("expanded") && !image.contains(event.target)) {
      image.classList.remove("expanded");
    }
  });
});

images.forEach((image) => {
  image.addEventListener("click", (event) => {
    event.stopPropagation();
    if (image.classList.contains("expanded")) {
      image.classList.remove("expanded");
    } else {
      images.forEach((otherImage) => {
        if (otherImage.classList.contains("expanded")) {
          otherImage.classList.remove("expanded");
        }
      });
      image.classList.add("expanded");
    }
  });
});

/* ----------------PAGINA EXPERIENCIA LABORAL------------------ */
const panels = document.querySelectorAll(".panel");

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    if (panel.classList.contains("active")) {
      removeActiveClasses();
    } else {
      removeActiveClasses();
      panel.classList.add("active");
    }
  });
});
/* ----------------go-top-button------------------ */
const goTopButton = document.querySelector(".go-top-button");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    goTopButton.classList.add("mostrar");
  } else {
    goTopButton.classList.remove("mostrar");
  }
});

goTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
/* ----------------download cv------------------ */
/* document.addEventListener("DOMContentLoaded", function () {
  // Obtén una referencia al botón
  const botonDescargar = document.getElementById("descargar-pdf");

  // URL del archivo PDF que deseas descargar
  const urlPdf = "file:///D:/FrontEgg/porfolio/img/CV-Dev-09-23.pdf"; // Reemplaza con la ruta de tu PDF

  // Agrega un evento de clic al botón para descargar el PDF
  botonDescargar.addEventListener("click", function () {
    // Crea un elemento de enlace (hipervínculo) invisible
    const enlace = document.createElement("a");
    enlace.href = urlPdf;

    // Especifica el atributo "download" para que el navegador descargue el archivo en lugar de navegar a él
    enlace.setAttribute("download", "mi-archivo.pdf");

    // Simula un clic en el enlace para iniciar la descarga
    enlace.click();
  });
});
 */
