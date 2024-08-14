const textArea = document.querySelector(".text_area"); 
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    if (textArea && mensaje) { 
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
}

function encriptar(stringEncriptado) {
    stringEncriptado = stringEncriptado.toLowerCase();

    if (/[^a-z\s]/.test(stringEncriptado)) {
        alert("El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas y espacios.");
        return "";
    }

    let codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 

    for (let i = 0; i < codigoMatriz.length; i++) {
        stringEncriptado = stringEncriptado.replaceAll(codigoMatriz[i][0], codigoMatriz[i][1]);
    }
    return stringEncriptado;
}

function btnDesencriptar() {
    if (textArea && mensaje) { 
        const textoDesencriptado = desencriptar(textArea.value);
        mensaje.value = textoDesencriptado;
        textArea.value = "";
    }
}

function desencriptar(stringDesencriptado) {
    stringDesencriptado = stringDesencriptado.toLowerCase();

    let codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 

    for (let i = 0; i < codigoMatriz.length; i++) {
        stringDesencriptado = stringDesencriptado.replaceAll(codigoMatriz[i][1], codigoMatriz[i][0]);
    }
    return stringDesencriptado;
}

function copiarTexto() {
    if (mensaje && mensaje.value) {
        mensaje.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles");
    }
}

