var imgs;
var overlay;
var bigimg;
var closeOverlay;


document.addEventListener("DOMContentLoaded", function () {
    overlay = document.getElementById("overlay");
    closeOverlay = document.getElementById("close");
    bigimg = document.getElementById("big-img");

    const images = document.querySelectorAll("img");
    images.forEach(function (img) {
        img.addEventListener("click", function () {
            bigimg.setAttribute("src", img.getAttribute("src"));
            overlay.classList.toggle("show");

        });
    })
    closeOverlay.addEventListener("click", function () {
        overlay.classList.toggle("show");
    }); 
        

});