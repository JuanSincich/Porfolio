/* ----------------PAGINA CERTIFICACIONES------------------ */

/* const images = document.querySelectorAll(".clickable");

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
}); */

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
