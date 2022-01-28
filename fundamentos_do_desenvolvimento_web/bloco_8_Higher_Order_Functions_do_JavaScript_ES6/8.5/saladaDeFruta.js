// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'uva', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'nozes', 'castanha'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));