/* 
1) Entrar
2) Sale un prompt que tiene tres productos, y te pregunta 'cuantos de estos tipos de cajas vas a querer?' (3 OPCIONES) - CHECK
2-1] Si quiere un solo tipo de caja preguntarle que caja va a querer - CHECK
2-2] Si quiere dos tipos de cajas preguntarle la primera caja que quiere y despues la segunda caja que quiere
    2-2-1] Preguntarle cuantas cajas quiere de el primer tipo de caja y despues preguntarle cuanta cajas quiere del segundo tipo de caja
        2-2-1-1] Cada vez que el diga una cantidad que se quede un contador de cuantos kilos va
2-3] Si quiere tres tipos de cajas saltear la pregunta de que tipo de cajas quiere (2-2) y pasar al siguiente (2-2-1)
3) Que salga una alerta final diciendole cuantas cajas pidio de cada producto, al lado el peso en kilos y abajo el precio total

ERRORES
(2)- Si no va a querer ninguno de esos productos se tiene que cerrar la funcion y salir una alerta que diga 'No quieres ningun tipo de caja? Ok'
(2-1 / 2-2)- Si no pone bien el nombre de la caja, decirle 'Ese producto no es valido! y volverle a mandar el prompt para que lo ingrese bien
(2-2-1)- Si pone un 0 o un numero menor a 0 mandarle una alert de que no es valido y volverle a mandar el prompt para que lo escriba bien
*/

let prodA= 'T2A 6x2'
let prodB= 'Hex T2 14x2';
let prodC= 'Tor Alas 10x2';
let ingresarTipo;
let unProd;
let dosProd;
let tresProd;
//Solicito tipo de producto
const cuantosTipos = (cantidadDeTipos) =>{
    while(true){
        let ingresarTipo = parseInt(prompt('-' + prodA + '\n-' + prodB + '\n-' + prodC + '\n\n' + 'Cual de estos productos va a querer comprar?\n' + '-Uno solo producto: "1"\n-Dos productos: "2"\n-Tres productos: "3"'));
        switch(ingresarTipo){
            case 1:
                return 'check 1';
                break
            case 2:
                return 'check 2';
                break
            case 3:
                return 'check 3';
                break
            default:
                alert ('Ingrese un valor valido')
                break
        }
    }
}
let respuestaTipos = cuantosTipos();
console.log (respuestaTipos)

//Si producto es 1 o 2 decir que productos quiere (podes hacerlo con for)

//Decir cuantas cajas quiere de cada producto

//Si son 3 cajas pasar al paso anterior

//Calcular el precio
