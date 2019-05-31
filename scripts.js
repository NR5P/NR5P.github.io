const currentImage = document.querySelector("#current-img");
const imgs = document.querySelectorAll("#images-line > img");
const opacity = 0.4;

let projectDescription = document.getElementById("project-description");

imgs[0].style.opacity = opacity;
            projectDescription.innerHTML = 
                "This is written in Python and I later redesigned it in C++ as well (with QT). It's a " +
                "homestead automation controller for controlling irrigation, greenhouse humidity, and temperature" +
                ". I run it on a raspberry pi and can be controlled over my home wifi network. <a href='https://github.com/NR5P/complete_plant_automation'>github</a> ";


imgs.forEach(img =>
    img.addEventListener("click", imgClicked));
    
function imgClicked(e) {
    imgs.forEach(img => (img.style.opacity = 1));

    currentImage.src = e.target.src;

    currentImage.classList.add("fade-in");

    setTimeout(() => currentImage.classList.remove("fade-in"), 500);

    e.target.style.opacity = opacity;

    switch(e.target.id) {
        case "homestead-automation" :
            projectDescription.innerHTML = 
                "This is written in Python and I later redesigned it in C++ as well (with QT). It's a " +
                "homestead automation controller for controlling irrigation, greenhouse humidity, and temperature" +
                ". I run it on a raspberry pi and can be controlled over my home wifi network. <a href='https://github.com/NR5P/complete_plant_automation'>github</a> ";
            break;
        case "git-it-delivered" :
            projectDescription.innerHTML = "I created this website to learn more about AJAX. " +
                "It's still a project in the making, it will have the ability for a restaurant " +
                "owner to receiver orders from online, it will display order times and other " +
                "critical information. It will also allow customers to place orders online." +
                "<a href='https://github.com/NR5P/restaurant_online_ordering'>github</a>";
            break;
        case "kivy-calculator" :
            projectDescription.innerHTML = "This project was to learn gui development in Python " + 
                "I learned about MVC and a lot about event driven programming with this app " +
                "<a href='https://github.com/NR5P/basic_kivy_calaculator'>github</a>";
            break;
        case "sunset-herbs" :
            projectDescription.innerHTML = "Form for filling out online orders for a website selling herbs. " +
                "This has client side validation with feedback.";
            break;
    }
}