

const campo_Message = document.querySelector("#message");
// console.log(campo_Message);
const campo_Encriptado = document.querySelector("#parrafo");

const titulo_Mensaje = document.getElementById("titulo-mensaje");
const parrafo = document.getElementById("parrafo");
const muñeco = document.getElementById("muñeco");
const text_desencriptar = document.querySelector("#message_encriptado2")

//Matriz codigo
const codigo_matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];
// console.log(codigo_matriz);

function button_Encriptar() {
    const message_Texto = campo_Message.value;

    // Verificar si el texto ingresado está en minúsculas (Unicode)
    if (!/^\p{Ll}+$/u.test(message_Texto)) {
        alert("Por favor, ingresa solo texto en minúsculas para encriptar.");
        return; // Detener la función si el texto no está en minúsculas
    }

    // Si el texto está en minúsculas, proceder con la encriptación
    const message_encriptado = encriptado(message_Texto);
    campo_Encriptado.textContent = message_encriptado;
    text_desencriptar.value = message_encriptado;

    // Verificar si el mensaje encriptado está vacío
    if (message_encriptado.length === 0) {
        muñeco.style.display = "block";
        titulo_Mensaje.textContent = "Ningún mensaje encontrado";
        parrafo.style.display = "none";
    } else {
        muñeco.style.display = "none";
        titulo_Mensaje.textContent = "";
        parrafo.style.display = "none";
    }
}
function button_Encriptar() {
    const message_Texto = campo_Message.value;

    // Verificar si el texto ingresado está en minúsculas (Unicode)
    if (!/^\p{Ll}+$/u.test(message_Texto)) {
        alert("Por favor, ingresa solo texto en minúsculas para encriptar.");
        return; // Detener la función si el texto no está en minúsculas
    }

    // Si el texto está en minúsculas, proceder con la encriptación
    const message_encriptado = encriptado(message_Texto);
    campo_Encriptado.textContent = message_encriptado;
    text_desencriptar.value = message_encriptado;

    // Verificar si el mensaje encriptado está vacío
    if (message_encriptado.length === 0) {
        muñeco.style.display = "block";
        titulo_Mensaje.textContent = "Ningún mensaje encontrado";
        parrafo.style.display = "none";
    } else {
        muñeco.style.display = "none";
        titulo_Mensaje.textContent = "";
        parrafo.style.display = "none";
    }
}


// Función para copiar el mensaje encriptado
function button_Copy() {
    text_desencriptar.select();
    document.execCommand("copy");
    alert("Mensaje encriptado copiado!");
}


//crear una funcion para capturar el mensaje
function button_Desencriptar() {
    //capturamos el valor del mensaje encriptado
    const encriptado = campo_Encriptado.textContent; // Usamos textContent ya que campo_Encriptado es un elemento <div>

    //Desencriptar el valor
    const mensaje_Desencriptado = desencriptar(encriptado);

    //Mostrar mensaje desencriptado en campo_Message
    campo_Message.value = mensaje_Desencriptado;

}



//recorrer el mensaje 
function encriptado(messageEncriptado) {
    for (let i = 0; i < codigo_matriz.length; i++) {
        if (messageEncriptado.includes(codigo_matriz[i][0])) {
            messageEncriptado = messageEncriptado.replaceAll(
                codigo_matriz[i][0],
                codigo_matriz[i][1],
                // codigo_matriz[i][2]
                // codigo_matriz[i][3],
                // codigo_matriz[i][4],

            )
        }

    }
    console.log(messageEncriptado);
    return messageEncriptado;
}




function desencriptar(message_Desencriptado) {

    for (let i = 0; i < codigo_matriz.length; i++) {
        if (message_Desencriptado.includes(codigo_matriz[i][1])) {
            message_Desencriptado = message_Desencriptado.replaceAll(
                codigo_matriz[i][1],
                codigo_matriz[i][0]
            )


        }

    }

    console.log(message_Desencriptado, "desencriptadp")
    return message_Desencriptado;

}


