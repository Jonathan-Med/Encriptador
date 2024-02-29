const texto = document.querySelector(".texto");
const aviso_animado = document.querySelector(".aviso");
const btnEncriptar = document.querySelector(".encriptar");
const btnDesencriptar = document.querySelector(".desencriptar");
const salida = document.querySelector(".salida");
const resultado = document.querySelector(".resultado");
const resultadoTitulo = document.querySelector(".resultado-titulo");
const resultadoTexto = document.querySelector(".resultado-texto");
const btnCopiar = document.querySelector(".copiar");

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiar);
window.addEventListener("unload", limpiarTextos);
window.addEventListener("beforeunload", limpiarTextos);
window.addEventListener('load', verificarAnchoPantalla);
window.addEventListener('resize', verificarAnchoPantalla);
function limpiarTextos() {
    resultado.value = "";
    texto.value = "";
}

function aviso() {
    if (texto.value !== "") {
        aviso_animado.classList.add("animar_aviso");
        setTimeout(() => {
            aviso_animado.classList.remove("animar_aviso");
        }, 1000);
    }
    
}

function encriptar() {
    if (/^[a-z\s]+$/.test(texto.value)) {
        var anchoPantalla = verificarAnchoPantalla();
        const textoEncriptado = texto.value
            .replace(/e/gi, "enter")
            .replace(/i/gi, "imes")
            .replace(/a/gi, "ai")
            .replace(/o/gi, "ober")
            .replace(/u/gi, "ufat");

        resultado.value = textoEncriptado;
        texto.value = "";
        resultado.style.backgroundImage = "none";
        resultadoTitulo.style.display = "none";
        resultadoTexto.style.display = "none";
        btnCopiar.style.display = "inline-block";
        if (anchoPantalla >= 1081){
            resultado.style.height = "380px";
        }
        else if (anchoPantalla <= 1080){
            resultado.style.display = "inline-block";
            salida.style.height = "550px";
            resultado.style.height = "450px";
        }
    }
    else 
    {
        aviso();
    }
    
}

function desencriptar() {
    if (/^[a-z\s]+$/.test(texto.value)) {
        const textoDesencriptado = texto.value
            .replace(/enter/gi, "e")
            .replace(/imes/gi, "i")
            .replace(/ai/gi, "a")
            .replace(/ober/gi, "o")
            .replace(/ufat/gi, "u");

        resultado.value = textoDesencriptado;
        texto.value = "";
        resultado.style.backgroundImage = "none";
        resultadoTitulo.style.display = "none";
        resultadoTexto.style.display = "none";
        btnCopiar.style.display = "inline-block";
        if (anchoPantalla >= 1081){
            resultado.style.height = "380px";
        }
        else if (anchoPantalla <= 1080){
            resultado.style.display = "inline-block";
            salida.style.height = "550px";
            resultado.style.height = "450px";
        }
    }
    else 
    {
        aviso();
    }
}

function copiar() {
    resultado.select();
    navigator.clipboard.writeText(resultado.value);
}


function verificarAnchoPantalla() {
    var anchoPantalla = window.innerWidth;
    return anchoPantalla;
}