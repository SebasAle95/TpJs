let num = prompt("ingrese un numero");

num = Number(num);

if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0){
    alert("el numero es divisible por 2, 3, 5 o 7");
}else {
    alert("el numero no es divisble por 2,3,5 o 7");
}