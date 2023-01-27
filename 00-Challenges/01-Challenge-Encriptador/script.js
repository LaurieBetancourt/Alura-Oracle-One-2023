/* INTRUCCIONES 

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

ORDEN para evitar que se repita el proceso
y cambie las vocales de las conversiones
e --> enter 
o --> ober 
i --> imes 
a --> ai 
u --> ufat 

*/

/* FUNCION PARA BOTON ENCRIPTAR*/

function encriptar() {
    var texto = document.getElementById("input").value.toLowerCase();
    /*  i es para reemplazar mayusculas y minusculas 
        g es para toda la linea u oracion
        m es para multiples lineas o parrafos */
    var textoCifrado = texto.replace(/e/igm,"enter")
    var textoCifrado = textoCifrado.replace(/o/igm,"ober");
    var textoCifrado = textoCifrado.replace(/i/igm,"imes");
    var textoCifrado = textoCifrado.replace(/a/igm,"ai");
    var textoCifrado = textoCifrado.replace(/u/igm,"ufat");

    /* MOSTRAR RESULTADO 
        la imagen del cuadro derecho debe desaparecer
        y tambien el texto
    */
    
    /* para que desaparezca la imagen */
    document.getElementById("img-der").style.display = "none";
    /* para que desaparezca el titulo: Ningun mensaje fue... */
    document.getElementById("titulo-result").style.display = "none";
    /* para que aparezca el resultado del texto cifrado*/
    document.getElementById("text-area-result").innerHTML = textoCifrado;
    /* el boton para copiar aparece */
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit"

} 


/** FUNCION PARA BOTON DESENCRIPTAR 
 * NOTA: Usamos la misma funcion anterior, solo que
 * con algunas modificaciones
*/

function desencriptar() {
    var texto = document.getElementById("input").value.toLowerCase();
    /*  i es para reemplazar mayusculas y minusculas 
        g es para toda la linea u oracion
        m es para multiples lineas o parrafos */
    var textoCifrado = texto.replace(/enter/igm,"e")
    var textoCifrado = textoCifrado.replace(/ober/igm,"o");
    var textoCifrado = textoCifrado.replace(/imes/igm,"i");
    var textoCifrado = textoCifrado.replace(/ai/igm,"a");
    var textoCifrado = textoCifrado.replace(/ufat/igm,"u");

    /* MOSTRAR RESULTADO 
        la imagen del cuadro derecho debe desaparecer
        y tambien el texto
    */
    
    /* para que desaparezca la imagen */
    document.getElementById("img-der").style.display = "none";
    /* para que desaparezca el titulo: Ningun mensaje fue... */
    document.getElementById("titulo-result").style.display = "none";
    /* para que aparezca el resultado del texto cifrado*/
    document.getElementById("text-area-result").innerHTML = textoCifrado;
    /* el boton para copiar aparece */
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";

} 


/** FUNCION PARA COPIAR TEXTO 
 * 
*/

function copiar(){
    var content = document.getElementById('text-area-result');
    
    content.select();
    document.execCommand('copy');
    alert("Se copio el texto!");

}
