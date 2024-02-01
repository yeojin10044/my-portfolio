document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("intro-video");
    var homepage = document.getElementById("homepage");

    video.addEventListener("ended", function () {
        video.style.display = "none";
        homepage.style.display = "block";
    });
});