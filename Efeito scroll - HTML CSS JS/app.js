var box = document.getElementsByClassName("treino");

// ESTILIZANDO
for (i = 0; i < box.length; i++) {

    if (i % 2 == 0) {
        box[i].style.opacity = ".5";
        box[i].style.transform = "translateX(-10em)";
        box[i].style.transition = ".5s";
    } else {
        box[i].style.opacity = ".5";
        box[i].style.transform = "translateX(10em)";
        box[i].style.transition = ".5s";
    }
}


window.addEventListener("scroll", () => {

    var tamanhos = [];

    for (i = 0; i < box.length; i++) {
        tamanhos.push(box[i].getBoundingClientRect().top);
    }

    var tamTela = window.innerHeight;
    var tela = tamTela / 3;


    for (var i = 0; i < box.length; i++) {

        if (i % 2 == 0) {

            if (tamanhos[i] < tela * 2) {
                box[i].style.opacity = "1";
                box[i].style.transform = "translateX(0)";
            } else {
                box[i].style.opacity = ".5";
                box[i].style.transform = "translateX(-10em)";
            }
        } else {

            if (tamanhos[i] < tela * 2) {
                box[i].style.opacity = "1";
                box[i].style.transform = "translateX(0)";
            } else {
                box[i].style.opacity = ".5"
                box[i].style.transform = "translateX(10em)";
            }
        }
    }
})