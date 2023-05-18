/* 
1) Entrar
2) Sale un prompt que tiene tres productos, y te pregunta 'cuantos de estos tipos de cajas vas a querer?' (3 OPCIONES) - CHECK
2-1] Si quiere un solo tipo de caja preguntarle que caja va a querer - CHECK
2-2] Si quiere dos tipos de cajas preguntarle la primera caja que quiere y despues la segunda caja que quiere - CHECK
    2-2-1] Preguntarle cuantas cajas quiere de el primer tipo de caja y despues preguntarle cuanta cajas quiere del segundo tipo de caja
        2-2-1-1] Cada vez que el diga una cantidad que se quede un contador de cuantos kilos va
2-3] Si quiere tres tipos de cajas saltear la pregunta de que tipo de cajas quiere (2-2) y pasar al siguiente (2-2-1)
3) Que salga una alerta final diciendole cuantas cajas pidio de cada producto, al lado el peso en kilos y abajo el precio total

ERRORES
(2-1 / 2-2)- Si no pone bien el nombre de la caja, mandarle una alerta y volverle a mandar el prompt para que lo ingrese bien - CHECK
(2-2-1)- Si pone un 0 o un numero menor a 0 mandarle una alert de que no es valido y volverle a mandar el prompt para que lo escriba bien
*/

let prodA= 'T2A 6x2';
let prodB= 'Hex T2 14x2';
let prodC= 'Tor Alas 10x2';
let queProd;
let queCant;
let valA;
let valB;
let valC;
//Solicito tipo de producto
const cuantosTipos = () =>{
    while(true){
        const ingresarTipo = parseInt(prompt('-' + prodA + '\n-' + prodB + '\n-' + prodC + '\n\n' + 'Cuantos de estos productos va a querer comprar?\n' + '-Uno solo producto: "1"\n-Dos productos: "2"\n-Tres productos: "3"'));
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
                alert ('Ingrese un valor valido');
                break
        }
    }
}
let respuestaTipos = cuantosTipos();
console.log (respuestaTipos);

//Si producto es 1 o 2 decir que productos quiere (podes hacerlo con for)

const queProducto = (respuestaTipos) =>{
    while(true){
        if(respuestaTipos == 'check 1'){
            queProd= prompt('Que producto quieres comprar (A-C)?\n\n-' + prodA + '(A)\n-' + prodB + '(B)\n-' + prodC + '(C)').toUpperCase();
            if ((queProd !== 'A') && (queProd !== 'B') && (queProd!=='C')){
                alert('Vuelva a ingresar');
                queProducto(respuestaTipos);
            }
            return(queProd);
        }else if(respuestaTipos == 'check 2'){
            let resultados = '';
            for (let i = 1; i <= 2; i++){
                let queProd = '';
                while (queProd !== 'A' && queProd !== 'B' && queProd !== 'C'){
                    queProd = prompt('Producto ' + i + '\n\n' + prodA + ' (A)\n' + prodB + ' (B)\n' + prodC + ' (C)\n\n' + 'Para seleccionarlo escriba la letra (A-C)').toUpperCase();
                    if (queProd !== 'A' && queProd !== 'B' && queProd !== 'C'){
                        alert('Ingrese un valor válido');
                    }
                }
                resultados += queProd;
            }
            return resultados;
        }else{
            return('ABC');
        }
    } 
}
let respuestaQueProducto = (queProducto(respuestaTipos));
console.log(respuestaQueProducto)
//Decir cuantas cajas quiere de cada producto

const cuantasCajas = (respuestaQueProducto)=>{
    while(true){
        //Si quiere un producto o tres productos
        if(respuestaQueProducto == 'A'){
            queCant = '';
            while (isNaN(queCant) || (queCant)<=0){
                queCant = parseInt(prompt ('Cuantas cajas queres de ' + prodA + '?'));
                if (isNaN(queCant) || (queCant)<=0){
                    alert('Tienes que ingresar un valor numerico');
                }
            }
            return console.log(queCant);
        }else if (respuestaQueProducto == 'B'){
            queCant = '';
            while (isNaN(queCant) || (queCant)<=0){
                queCant = parseInt(prompt ('Cuantas cajas queres de ' + prodB + '?'));
                if (isNaN(queCant) || (queCant)<=0){
                    alert('Tienes que ingresar un valor numerico');
                }
            }
            return console.log(queCant);
        }else if (respuestaQueProducto == 'C'){
            queCant = '';
            while (isNaN(queCant) || (queCant)<=0){
                queCant = parseInt(prompt ('Cuantas cajas queres de ' + prodC + '?'));
                if (isNaN(queCant) || (queCant)<=0){
                    alert('Tienes que ingresar un valor numerico');
                }
            }
            return console.log(queCant);
        }else if (respuestaQueProducto == 'ABC'){
            valA=0;
            valB=0;
            valC=0;
            while ((isNaN(valA) || valA<=0)){
                valA=parseInt(prompt('Cuantas cajas queres de ' + prodA + '?'))
                if ((isNaN(valA) || valA<=0)){
                    alert('Tienes que ingresar un numero valido')
                }
            }
            while ((isNaN(valB) || valB<=0)){
                valB=parseInt(prompt('Cuantas cajas queres de ' + prodB + '?'))
                if ((isNaN(valB) || valB<=0)){
                    alert('Tienes que ingresar un numero valido')
                }
            }
            while ((isNaN(valC) || valC<=0)){
                valC=parseInt(prompt('Cuantas cajas queres de ' + prodC + '?'))
                if ((isNaN(valC) || valC<=0)){
                    alert('Tienes que ingresar un numero valido')
                }
            }
            let resultados= (valA + valB + valC);
            return(resultados)
        }else if (respuestaQueProducto == 'AB' || respuestaQueProducto == 'BA'){
            let resultados = 0;
            for (let i = 1; i <= 2; i++){
                let cuantasCajas = 0;
                while (isNaN(cuantasCajas) || (cuantasCajas)<=0){
                    cuantasCajas = parseInt(prompt('cuantas cajas vas a querer del producto ' + i + '?'));
                    if (isNaN(cuantasCajas) || (cuantasCajas)<=0){
                        alert('Ingrese un valor válido');
                    }
                }
                resultados += parseInt(cuantasCajas);
            }
            return resultados;
        }else if (respuestaQueProducto == 'AC' || respuestaQueProducto == 'CA'){
            let resultados = 0;
            for (let i = 1; i <= 2; i++){
                let cuantasCajas = 0;
                while (isNaN(cuantasCajas) || (cuantasCajas)<=0){
                    cuantasCajas = parseInt(prompt('cuantas cajas vas a querer del producto ' + i + '?'));
                    if (isNaN(cuantasCajas) || (cuantasCajas)<=0){
                        alert('Ingrese un valor válido');
                    }
                }
                resultados += parseInt(cuantasCajas);
            }
            return resultados;
        }else if (respuestaQueProducto == 'BC' || respuestaQueProducto == 'CB'){
            let resultados = 0;
            for (let i = 1; i <= 2; i++){
                let cuantasCajas = 0;
                while (isNaN(cuantasCajas) || (cuantasCajas)<=0){
                    cuantasCajas = parseInt(prompt('cuantas cajas vas a querer del producto ' + i + '?'));
                    if (isNaN(cuantasCajas) || (cuantasCajas)<=0){
                        alert('Ingrese un valor válido');
                    }
                }
                resultados += parseInt(cuantasCajas);
            }
            return resultados;
        }else if (respuestaQueProducto == 'AA' || respuestaQueProducto == 'BB' || respuestaQueProducto == 'CC'){
            alert('No puedes ingresar dos productos iguales en dos situaciones diferentes. Reingrese')
        }else{
            alert('Lo bugueaste jaja')
        }
    }    
}

let respuestaQueCantidad = (cuantasCajas(respuestaQueProducto));
console.log(respuestaQueCantidad)


//Calcular el precio
