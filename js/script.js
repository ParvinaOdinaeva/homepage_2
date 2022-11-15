console.log("Hi everybody!");

let headerButton = document.querySelector(".js-toggleHeader");
let header = document.querySelector(".js-header");
headerButton.addEventListener("click", () => {
  header.classList.toggle("hide");
});


let imageButton = document.querySelector(".js-imageRemove");
let image = document.querySelector(".js-image");
imageButton.addEventListener("click", () => {
  image.remove();
});


let bodyButton = document.querySelector(".toggleContainerColor");
let body = document.querySelector(".container");
bodyButton.addEventListener("click", () => {
  body.classList.toggle("toggleContainer");
});