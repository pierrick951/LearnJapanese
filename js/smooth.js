var cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(e) {
  cursor.style.left = e.pageX + "px"; // Ajoutez 20px à la position horizontale
  cursor.style.top = e.pageY + "px";  // Ajoutez 20px à la position verticale
});

document.addEventListener("mouseenter", function() {
  cursor.style.opacity = 1;
});

document.addEventListener("mouseleave", function() {
  cursor.style.opacity = 1;
});

//
