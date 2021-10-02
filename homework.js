// La variable "string", contiene lineas de caráctes, en su defecto letras (necesita comillas dobles o simples).
var letras = "Hola";
console.log("Son:",letras)

//La variable numérica, que puede contener cualquier número y no necesita comillas.
var numero = 45;
console.log("El numero es:", numero);

//Las VARIABLES BOOLEANAS se expresan como verdadero o falso.
var bool1 = true; //VERDADERO
var bool2 = false; //FALSO
console.log("Opción 1 es:", bool1);
console.log("Opción 2 es:", bool2);

//OPERACIONES MATEMATICAS
// RESTA
var menos = 12 - 4; //Se utiliza el guion medio para representar el signo de la resta.
console.log("La resta es de:", menos); //Esta linea de codigo pasa a imprimirse en pantalla.

//MULTIPLICACION
var multi = 12 * 3; //La operacion asignada por el asterisco. 
console.log ("La multiplicasción es de:", multi); // Esta linea de codigo pasa a imprimirse en pantalla.

//MODULO
var modulo = 21 % 5; //Muestra el residuo de los dos numeros.
 console.log("El residuo es de:", modulo);// Esta linea de codigo pasa a imprimirse en pantalla.

//FUNCIONES
//SUMA
console.log ("Coloque 'suma()' para ejecutar la funcion y asigne valores entre()")
function suma (x,y) { 
var resultado = x + y;
console.log ("La suma de", x , "y" , y , "es:")
return resultado; 
}
 
//TEXTO
function devolverSring(str) {
return str;
}
devolverSring ()

//RESTA
console.log ("Coloque 'resta()' para ejecutar la funcion y asigne valores entre()")
function resta (x,y) { 
var resultado = x -y
console.log ("La resta de", x ,"y", y , "es:");
return resultado;
}

//MULTIPLICACIÓN
console.log ("Coloque 'multiplica()' para ejecutar la funcion y asigne valores entre()")
function multiplica(x,y) {
    var resultado = x * y
    console.log("La multiplicación de", x , "y" , y , "es:");
return resultado;
}


//DIVISIÓN
console.log ("Coloque 'divide()' para ejecutar la funcion y asigne valores entre()")
function divide(x,y) {
    var resultado = x / y
    console.log("La división entre", x , "y" , y , "es:")
return resultado;
}


//IGUALDAD BOOLEANA
console.log ("Coloque 'sonIguales()' para ejecutar la funcion y asigne valores entre()")
function sonIguales(x,y) {
if (x === y) {   
    console.log ("X de valor" ,x, "y Y de valor,", y , ",¿es igual?")
    return true;
} else {
    console.log ("X de valor" ,x, "y Y de valor,", y , ",¿es igual?")
    return false;
 }
}

// IGUALDAD
console.log ("Coloque 'tienenlaMismaLongitud()' para ejecutar la funcion y asigne valores entre()")
function tienenlaMismaLongitud(Log1, Log2) {
if (Log1 === Log2) {
    console.log("La longitud 1 de",Log1 ,"y la longitud 2 de",Log2 ,"¿Son iguales?");
    return true;
} else {
    console.log("La longitud 1 de",Log1 ,"y la longitud 2 de",Log2 ,"¿Son iguales?")
    return false;
 } 
} 

//MENOR QUE
console.log ("Coloque 'menosQueNoventa()' para ejecutar la funcion y asigne valores entre()")
function menosQueNoventa(num) {
if (num < 90) {
    console.log ("Edad", num)
    return true;
} else {
    console.log ("Edad", num)
    return false;
 }
}

//MODULO
console.log ("Coloque 'obtenerResto()' para ejecutar la funcion y asigne valores entre()")
function obtenerResto (x,y) {
    var resultado = x % y;
    console.log("El residuo de", x , "y", y, "es:")
return resultado
}


//NÚMERO PAR
console.log ("Coloque 'esPar()' para ejecutar la funcion y asigne un valor entre()")
function esPar (num) {
    if (num % 2 === 0) {
        console.log ("¿El numero" ,(num) , "es par?")
        return true;  
    }else {
        console.log ("¿El numero" ,(num) , "es par?")
        return false;
    }
}

//NUMERO IMPAR
console.log ("Coloque 'esImpar()' para ejecutar la funcion y asigne un valor entre()")
function esImpar (num) {
    if (num % 2 === 1) {
        console.log("¿El numero" ,(num) , "es impar?")
        return true;
    } else {
        console.log("¿El numero" ,(num) , "es impar?")
        return false;
    }
}

//A LA POTENCIA
console.log ("Coloque 'elevarAlCuadrado()' para ejecutar la funcion y asigne un valor entre()")
function elevarAlCuadrado (num) {
    var resultado = num ** 2
    console.log("El numero" ,(num) , "elevado al cuadrado es:")
    return resultado;
}

//ELEVAR AL CUBO
console.log ("Coloque 'elevarAlCubo()' para ejecutar la funcion y asigne un valor entre()")
function elevarAlCubo (num) {
    console.log ("El numero" ,(num) , "elevado al cubo es:");
    return num * num * num;
}

//ELEVAR A N EXPONENCIAL
function elevar (num , exponent) {
    var resultado = Math.pow(num, exponent)
    console.log ("El numero de base" ,num,"de exponente", exponent ,"tiene como resultado")
    return resultado;
}

//REDONDEAR UN NUMERO AL MAS CERCANO
console.log ("Coloque 'redondearNumero()' para ejecutar la funcion y asigne un valor entre()")
function redondearNumero(num) {    //Esta es una forma de redondear un decimal.
    var resto = num % 1;           //Se dijita el decimal 2.5. Resultado del modulo: 0.5
    var entero = num - resto       //Entonces 2.5 - 0.5 = 2
    if (resto >= 0.5) {    
        console.log ("El numero" ,num,"redondeado es:")// La condicion dice si 0.5 es mayor o igual a 0.5 entonces
        return entero + 1          // 2 + 1 = 3 por lo tanto se repondeo 2.5 a su siguiente mas cercano que es 3.
    } else {    
        return entero;             // 2, porque no cumple la condicion
    }                       
}

//TAMBIEN SE PUEDE USAR LA EXPRESION MATH.ROUND QUE ES BASCICAMENTE LO MISMO DE ARRIBA
function redondearNumeroConMath (num) {
    console.log ("El numero", (num), "redondeado es:",)
    return Math.round(num) //Solamente se usa esta expresion que redondea cualquier numero decimal.
}

//REDONDEAR HACIA ARRIBA
function redondearHaciaArriba(num) {
    console.log ("El numero", num,"redondeado hacia arriba es:",);
    return Math.ceil(num);
}

 
//NUMERO RAMDOM
function numeroRandom (min, max){
    return Math.floor (Math.random () * (max - min)) + min;
}
console.log ("Numero aleatorio del 1 al 100 es:", numeroRandom);

//SI UN NUMERO ES POSITIVO O NEGATIVO
function esPositivo (numero) {
    if (numero === 0) {
        return false;
    }
else if(numero > 0) {
    return "Es positivo"
}
else {
    return "Es negativo"
}
}

// AGREGAR SIMBOLO DE EXCLAMACIÓN
function agregarSimbolodeExclamacion (str) {
    var str = "Hola mundo"
    return str + '!'
}

//COMBINAR PALABRAS
function combinarnombres (nombre, apellido) {
    var combinado = "Soy " + nombre + ' ' + apellido;
    return combinado;
}

//OBTENER SALUDO
function obtenerSaludo (nombre) {
    return 'hola ' + nombre + '!';
}
//AREA RECTANGULO
function obtenerAreaRectangulo (base, altura) {
    var area = base * altura
    return area;
} 
console.log ("El area de rectangulo es: ", area)

//PERIMETRO DEL CUADRADO
function retornarPerimetro (lado) {
    return lado * 4
}
console.log ("El perimetro del cuadrado es: ", lado)

//AREA DEL TRIANGULO
function areaDelTriangulo (base, altura) {
    var area = (base * altura) / 2
    return area
}
console.log ("El area del triangulo es de:", area)

//CONVERSION DE EURO A DOLAR
function deEuroAdolar (euro) {
    var conversion = euro * 1.15
    return conversion
}
console.log ("De, ", euros , "son" , conversion , "dolares")

//DETERMINAR UN VOCAL
function esVocal (letra) {
    if(letra.length > 1){
        return "Dato incorrecto"
      }
      if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        return "Es vocal"
      }
      return "Dato incorrecto"
}