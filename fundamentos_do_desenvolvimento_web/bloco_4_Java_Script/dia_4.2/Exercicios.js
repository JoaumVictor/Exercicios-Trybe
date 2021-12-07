/* 1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let percorrer of numbers) {
    console.log(percorrer)
} */



/* 2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let numeroSoma of numbers) {
    soma +=  numeroSoma 
}
console.log(soma)
 */



/* 3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let numeroSoma of numbers) {
    soma +=  numeroSoma 
}
console.log(soma / numbers.length) */



/* 4- Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let numeroSoma of numbers) {
    soma +=  numeroSoma 
}
let mediaAritmeticaNumbers = (soma / numbers.length)
if (mediaAritmeticaNumbers > 20) {
    console.log("O valor é maior que 20")
} else {
    console.log("O valor é menor que 20")
} */

/* 5- Utilizando for , descubra qual o maior valor contido no array e imprima-o; */
/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var maior = Math.max.apply(null, numbers );
console.log(maior)


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
for(let i = 0; i < numbers.length; i += 1) {
    if (maior < numbers[i]) {
        maior = numbers[i]
    }
}
console.log(maior) */



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 1000000;
for(let i = 0; i < numbers.length; i += 1) {
    if (menor > numbers[i]) {
        menor= numbers[i]
    }
}
console.log(menor)