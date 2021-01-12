$(document).ready(function () {



    var caixae = document.getElementsByClassName("box-form-left");
    var caixad = document.getElementsByClassName("box-form-right");
    var caixa = document.getElementById("caixa");


    $(".cadastro").click(function () {


        caixa.classList.add("anima");
        $(".cadastro").delay('3000');


        caixad[0].classList.toggle('hide');
        caixad[1].classList.toggle('hide');
        caixae[0].classList.toggle('hide');
        caixae[1].classList.toggle('hide');

        function remover() {
            caixa.classList.remove("anima");
        }

        setTimeout(remover, 1100);

    })


    $(".login").click(function () {


        caixa.classList.add("anima");

        caixad[0].classList.toggle('hide');
        caixad[1].classList.toggle('hide');
        caixae[0].classList.toggle('hide');
        caixae[1].classList.toggle('hide');

        function remover() {
            caixa.classList.remove("anima");
        }

        setTimeout(remover, 1100);

    })

});