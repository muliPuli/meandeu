$("body").hide();
$("window").ready(function () {
    $("body").fadeIn(1000);

})
let bgimg = document.querySelector("body");
window.addEventListener("scroll", function () {
    bgimg.style.backgroundPositionY = window.scrollY / 2 + "px";
})
