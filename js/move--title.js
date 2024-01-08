document.addEventListener("DOMContentLoaded", function(){
    var mouseX, mouseY;
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    var traX, traY;
    var title = document.querySelector("h1");

    document.addEventListener('mousemove', function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = ((5 * mouseX) / 570) + 40;
        traY = ((5* mouseY) / 570) + 40;
        console.log(traX)
        title.style.backgroundPosition = traX +"%" + traY + "%";
    });
});