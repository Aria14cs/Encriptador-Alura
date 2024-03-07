

const campo_Message = document.querySelector("#message");
// console.log(campo_Message);
const campo_Encriptado = document.querySelector("#parrafo");

const titulo_Mensaje =document.getElementById("titulo-mensaje");
const parrafo = document.getElementById("parrafo");
const muñeco = document.getElementById("muñeco");
const text_encriptado = document.querySelector("#message_encriptado2")

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
    // Capturamos el valor del mensaje 
    const message_Texto = campo_Message.value;
    // Encriptar mensaje
    const message_encriptado = encriptado(message_Texto);
    // Mostrar mensaje encriptado
    campo_Encriptado.value = message_encriptado;

    // Verificar si el mensaje encriptado está vacío
    if (message_encriptado.length === 0) {
        // Si está vacío, mostramos la imagen del muñeco, el texto del párrafo y el título del mensaje
        muñeco.style.display = "block";
        titulo_Mensaje.textContent = "Ningún mensaje encontrado";
        parrafo.style.display = "none"; // Ocultar el textarea del mensaje encriptado
        parrafo.textContent = ""; // Limpiar el contenido del textarea
    } else {
        // Si no está vacío, ocultamos la imagen del muñeco, el texto del párrafo y el título del mensaje
        muñeco.style.display = "none";
        titulo_Mensaje.textContent = ""; // Limpiar el texto del título
        parrafo.style.display = "block"; // Mostrar el textarea del mensaje encriptado
        parrafo.textContent = message_encriptado; // Asignar el mensaje encriptado al contenido del textarea
        message_Texto=text_encriptado;

    }
}


// //crear una funcion para capturar el mensaje
// function button_Encriptar() {
//     //capturamos el valor del mensaje 
//     const message_Texto = campo_Message.value;
//     //encriptar mensaje
//     const message_encriptado = encriptado(message_Texto);
//     //Mostrar mensaje encriptado
//     campo_Encriptado.value=message_encriptado;

//     // Verificar si el mensaje encriptado está vacío
//     if (message_encriptado.length === 0) {
//         // Si está vacío, mostramos la imagen del muñeco, el texto del párrafo y el título del mensaje
//         muñeco.style.display = "block";
//         titulo_Mensaje.textContent = "Ningún mensaje encontrado";
//         parrafo.style.display = "block";
//         parrafo.style.display = "none"; // Ocultar el textarea del mensaje encriptado
//     } else {
//         // Si no está vacío, ocultamos la imagen del muñeco, el texto del párrafo y el título del mensaje
//         muñeco.style.display = "none";
//         titulo_Mensaje.textContent = ""; // Limpiar el texto del título
//         parrafo.style.display = "none";
//    parrafo.style.display = "block"; // Mostrar el textarea del mensaje encriptado
//    parrafo = message_encriptado; // Mostrar el mensaje encriptado en el textarea
//     }
// }
    





//crear una funcion para capturar el mensaje
function button_Desencriptar() {
    //capturamos el valor del mensaje
    const encriptado = campo_Encriptado.value;
    
    //Desencriptar el valor
    const mensaje_Desencriptado = desencriptar(encriptado);
    //Mostrar mensaje desencriptado
    campo_Message.value=mensaje_Desencriptado;

    // if (mensaje_Desencriptado.length != 0) {
    //     campo_Encriptado.style.display = "none";
    //     muñeco.style.display = "none"; // Opcionalmente, puedes ocultar el muñeco también cuando se muestre el mensaje desencriptado
    // } else {
    //     campo_Encriptado.style.display = "none";
    //     muñeco.innerHTML = '<img src="ruta_de_la_imagen_del_muñeco.jpg" alt="Muñeco">';
    //     muñeco.style.display = "block";
    // }


    }
    

    //boton para copiar.
    function button_Copy(){
        const campo_Coppy =  message_encriptado.valor
        
      
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




function desencriptar(message_Desencriptado){

    for( let i = 0; i<codigo_matriz.length;i++){
        if(message_Desencriptado.includes(codigo_matriz[i][1])){
            message_Desencriptado=message_Desencriptado.replaceAll(
                codigo_matriz[i][1],
                codigo_matriz[i][0]
            )


        }
     
    }

    console.log(message_Desencriptado,"desencriptadp")
    return message_Desencriptado;

}




















// **********

// const campo_Message = document.querySelector("#message");
// // console.log(campo_Message);
// const campo_Encriptado = document.querySelector("#message_encriptado");

// const titulo_Mensaje =document.getElementById("index.html");
//  const parrafo=document.getElementById("parrafo")
// const muñeco = document.getElementById("muñeco");

// //Matriz codigo
// const codigo_matriz = [
//     ["e", "enter"],
//     ["i", "imes"],
//     ["a", "ai"],
//     ["o", "ober"],
//     ["u", "ufat"]
// ];
// // console.log(codigo_matriz);


// //crear una funcion para capturar el mensaje
// function button_Encriptar() {
//     //capturamos el valor del mensaje 
//     const message_Texto = campo_Message.value;
//     //encriptar mensaje
//     const message_encriptado = encriptado(message_Texto);
//     //Mostrar mensaje encriptado
//     campo_Encriptado.value=message_encriptado;

//     if(message_encriptado.length !=0){
     

//     }

// }

// //crear una funcion para capturar el mensaje
// function button_Desencriptar() {
//     //capturamos el valor del mensaje
//     const encriptado = campo_Encriptado.value;
    
//     //Desencriptar el valor
//     const mensaje_Desencriptado = desencriptar(encriptado);
//     //Mostrar mensaje desencriptado
//     campo_Message.value=mensaje_Desencriptado;

//     }
    

//     //boton para copiar.
//     function button_Copy(){
//         const campo_Coppy =  message_encriptado.valor
        
      
//     }

// //recorrer el mensaje 
// function encriptado(messageEncriptado) {
//     for (let i = 0; i < codigo_matriz.length; i++) {
//         if (messageEncriptado.includes(codigo_matriz[i][0])) {
//             messageEncriptado = messageEncriptado.replaceAll(
//                 codigo_matriz[i][0],
//                 codigo_matriz[i][1],
//                 // codigo_matriz[i][2]
//                 // codigo_matriz[i][3],
//                 // codigo_matriz[i][4],

//             )
//         }

//     }
//     console.log(messageEncriptado);
//     return messageEncriptado;
// }




// function desencriptar(message_Desencriptado){

//     for( let i = 0; i<codigo_matriz.length;i++){
//         if(message_Desencriptado.includes(codigo_matriz[i][1])){
//             message_Desencriptado=message_Desencriptado.replaceAll(
//                 codigo_matriz[i][1],
//                 codigo_matriz[i][0]
//             )


//         }
     
//     }

//     console.log(message_Desencriptado,"desencriptadp")
//     return message_Desencriptado;

// }



