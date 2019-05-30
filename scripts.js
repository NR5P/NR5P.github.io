const currentImage = document.querySelector("#current-img");
const imgs = document.querySelectorAll("#images-line > img");
const opacity = 0.4;

imgs[0].style.opacity = opacity;

imgs.forEach(img =>
    img.addEventListener("click", imgClicked));
    
function imgClicked(e) {
    imgs.forEach(img => (img.style.opacity = 1));

    currentImage.src = e.target.src;

    currentImage.classList.add("fade-in");

    setTimeout(() => currentImage.classList.remove("fade-in"), 500);

    e.target.style.opacity = opacity;
}