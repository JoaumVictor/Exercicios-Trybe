const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

//saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

[mensagem, funcao] = saudacoes;
//console.log(`${mensagem}`);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

//console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao
//seu verdadeiro tipo.

const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
  };
  
const { nationality } = person;

console.log(nationality);