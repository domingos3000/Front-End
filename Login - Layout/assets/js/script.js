
var button_criar = document.getElementById("criarconta")
var cadastro = document.getElementById("cadastro")
var login = document.getElementById("login_form")

window.addEventListener("load", function() {
    let logo_svg = document.getElementById("svg");
    let tela_login = document.getElementById("caixadelogin");

    logo_svg.classList.add("voltar")
    tela_login.classList.add("voltar")
})

button_criar.addEventListener("click", function() {
    let logo_svg = document.getElementById("svg");
    let tela_login = document.getElementById("caixadelogin");

    logo_svg.classList.remove("voltar")
    tela_login.classList.remove("voltar")
    cadastro.classList.add("vir")
})

login.addEventListener("click", function() {
    let logo_svg = document.getElementById("svg");
    let tela_login = document.getElementById("caixadelogin");

    logo_svg.classList.add("voltar")
    tela_login.classList.add("voltar")
    cadastro.classList.remove("vir")
})


// ==================== VARIAVEIS ============================
var jaa = window.document.getElementById('login')
var user = window.document.querySelector("input.inusuario")
var passe = window.document.querySelector("input.inpasse")
var img1 = window.document.querySelector("img.imgusuario")
var img2 = window.document.querySelector("img.imgpasse")


// ===========================================================
// ==================== EVENTOS ==============================
user.addEventListener("focus", input_um)
passe.addEventListener("focus", input_dois)
user.addEventListener("focusout", input_tres)
passe.addEventListener("focusout", input_quatro)
// ===========================================================
// ==================== FUNÇÕES ==============================
function input_um() { img1.style.opacity = "100%"; img1.style.width = "1rem"; img1.style.height = "1rem" }
function input_dois() {
    img2.style.opacity = "100%"; img2.style.opacity = "100%"; img2.style.width = "1rem"; img2.style.height = "1rem"
}
function input_tres() {
    img1.style.opacity = "50%"; img1.style.width = "1.5rem"; img1.style.height = "1.5rem"
}
function input_quatro() {
    img2.style.opacity = "50%"; img2.style.opacity = "50%"; img2.style.width = "1.5rem"; img2.style.height = "1.5rem"
}
// ===========================================================
// ==================== VALIDAÇÕES ===========================

function validar() {

    if (user.value == "" || passe.value == "") {
        alert('Por favor, preencha todos os campos')

        return false
    }

    if (passe.value.length < 6) {
        alert('A palavra-passe não pode conter menos de 6 digitos')
        return false
    }
}
// ===========================================================





