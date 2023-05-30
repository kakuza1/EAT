let btns = document.querySelectorAll(".block");

btns.forEach(function(btn) {
  btn.addEventListener("mouseenter", function(event) {
    let sound = document.getElementById("Sound");
    sound.play();
  });
});