const mensaje = document.querySelector(".mensaje");
const mensajeEncriptado = document.querySelector(".mensaje-encriptado");



function btnEncriptar(){
    const textoEncriptado = encriptar(mensaje.value)
    mensajeEncriptado.value = textoEncriptado
    mensaje.value = "";
    mensajeEncriptado.style.backgroundImage = "none"
}

function encriptar(stringencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringencriptada = stringencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringencriptada.includes(matrizCodigo[i][0])){
            stringencriptada = stringencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringencriptada;
}


function btndesencriptar(){
    const textoEncriptado = desencriptar(mensaje.value)
    mensajeEncriptado.value = textoEncriptado
    mensaje.value = "";
}

function desencriptar(stringdesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringdesencriptada = stringdesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringdesencriptada.includes(matrizCodigo[i][1])){
            stringdesencriptada = stringdesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringdesencriptada;
}

function btnCopiar() {
    const mensajeEncriptado = document.querySelector(".mensaje-encriptado");
    mensajeEncriptado.select(); // Selecciona el texto del textarea
    document.execCommand("copy"); // Ejecuta el comando de copiado
    alert("¡Texto copiado!");
    mensajeEncriptado.value = "";
    mensajeEncriptado.style.backgroundImage = "url(../img/Muñeco.png)";
}


