let sound = document.getElementById("Sound");
let container = document.getElementById("header");

container.addEventListener("mouseover", function(event) {
  if (event.target.classList.contains("block")) {
    sound.play();
  }
});