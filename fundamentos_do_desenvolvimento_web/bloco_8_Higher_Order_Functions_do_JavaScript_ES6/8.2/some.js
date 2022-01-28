const lista = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const procurarNomes = (lista, nome) =>  lista.some((alvo) => alvo === nome);
console.log(procurarNomes(lista, 'Ana'));

//Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some.
