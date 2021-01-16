/*
	Desenvolvedor: DOMINGOS PEDRO NKULA.
	Data: 14-01-2021
	Endereço: Luanda (ANGOLA)

	GitHub = https://github.com/domingospedro-dev

	Twitter = @nkula_pedro

	Facebook = /domingosnkula.pedro
				Domingos Pedro Nkula

	Instagram = @domingosnkulajw

	Linkedin = linkedin.com/in/domingos-nkula-pedro-112b28203

	Skills = HTML
			 CSS
			 JAVASCRIPT
			 PHP
			 MYSQL
*/



// MINHAS VARIAVEIS GLOBAIS!!!

var imgLogo = document.getElementById("img-logo");
var linkLeft = document.querySelectorAll("li.linkLeft")
var linkRight = document.querySelectorAll("li.linkRight")
var menuMobile = document.getElementById("menu-mobile");
var dropMenu = document.querySelectorAll("ul.menu-dropdown")[0];


linkRight[0].addEventListener("click", () => {

						// ACTIVANDO MEU SUB-MENU
   						dropMenu.classList.toggle("open")

})



imgLogo.addEventListener("click", function () {

						/* 
						   ADICIONANDO E REMOVENDO UMA CLASSE
						   PARA HABILITAR O MENU-MOBILE
						*/

    let verificarMenu = linkLeft[0].classList.toggle("come");
					    linkLeft[1].classList.toggle("come");

					    linkRight[0].classList.toggle("come");
					    linkRight[1].classList.toggle("come");


	if(verificarMenu) {
						// QUANDO O MENU FOR ABERTO || ACÇÕES

						imgLogo.src = "img/closeMenu.png";
						imgLogo.alt = "Fechar Menu";
						imgLogo.title = "Fechar Menu";

	} else {
						// QUANDO O MENU FOR FECHADO || ACÇÕES

						imgLogo.src = "img/menu.png";
						imgLogo.alt = "Menu";
						imgLogo.title = "Menu";

						dropMenu.classList.remove("open")
	}
})