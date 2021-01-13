var box = document.getElementsByClassName("treino");

box[0].style.backgroundColor = "#f12f2f";
box[1].style.backgroundColor = "#f1cd2f";
box[2].style.backgroundColor = "#86f12f";
box[3].style.backgroundColor = "#2fc4f1";
box[4].style.backgroundColor = "#f12fb0";
box[5].style.backgroundColor = "#3647e7";


box[0].style.opacity = ".5"
box[0].style.transform = "translateX(-10em)"
box[0].style.transition = ".5s"


box[1].style.opacity = ".5"
box[1].style.transform = "translateX(10em)"
box[1].style.transition = ".5s"

box[2].style.opacity = ".5"
box[2].style.transform = "translateX(-10em)"
box[2].style.transition = ".5s"


box[3].style.opacity = ".5"
box[3].style.transform = "translateX(10em)"
box[3].style.transition = ".5s"

box[4].style.opacity = ".5"
box[4].style.transform = "translateX(10em)"
box[4].style.transition = ".5s"

box[5].style.opacity = ".5"
box[5].style.transform = "translateX(10em)"
box[5].style.transition = ".5s"

window.addEventListener("scroll", function () {


    var tamTela = window.innerHeight
    var tela = tamTela / 3

    var tam0 = box[0].getBoundingClientRect();
    var tam1 = box[1].getBoundingClientRect();
    var tam2 = box[2].getBoundingClientRect();
    var tam3 = box[3].getBoundingClientRect();
    var tam4 = box[4].getBoundingClientRect();
    var tam5 = box[5].getBoundingClientRect();

    if (tam0.top < tela * 2) {
        box[0].style.opacity = "1"
        box[0].style.transform = "translateX(0)"
    } else {
        box[0].style.opacity = ".5"
        box[0].style.transform = "translateX(-10em)"
    }

    // -------------

    if (tam1.top < tela * 2) {
        box[1].style.opacity = "1"
        box[1].style.transform = "translateX(0)"
    } else {
        box[1].style.opacity = ".5"
        box[1].style.transform = "translateX(10em)"
    }

    // -------------

    if (tam2.top < tela * 2) {
        box[2].style.opacity = "1"
        box[2].style.transform = "translateX(0)"
    } else {
        box[2].style.opacity = ".5"
        box[2].style.transform = "translateX(-10em)"
    }

    // -------------

    if (tam3.top < tela * 2) {
        box[3].style.opacity = "1"
        box[3].style.transform = "translateX(0)"
    } else {
        box[3].style.opacity = ".5"
        box[3].style.transform = "translateX(10em)"
    }

    // -------------

    if (tam4.top < tela * 2) {
        box[4].style.opacity = "1"
        box[4].style.transform = "translateX(0)"
    } else {
        box[4].style.opacity = ".5"
        box[4].style.transform = "translateX(-10em)"
    }

    // -------------

    if (tam5.top < tela * 2) {
        box[5].style.opacity = "1"
        box[5].style.transform = "translateX(0)"
    } else {
        box[5].style.opacity = ".5"
        box[5].style.transform = "translateX(10em)"
    }

})



