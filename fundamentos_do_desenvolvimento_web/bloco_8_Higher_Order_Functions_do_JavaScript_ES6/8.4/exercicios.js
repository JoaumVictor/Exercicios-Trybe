const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const transformArray = arrays.reduce((caixa, alvo) => caixa.concat(alvo));
  //console.log(transformArray);

  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  // Adicione o código do exercício aqui:

  const autores = (caixa, alvo, index, array) => {
    if( index === array.length -1 ) {
        return caixa += `${alvo.author.name}.`
    };
    if( index !== array.length) {
        return caixa += `${alvo.author.name}, `
        };
    };
  //let result = books.reduce(autores, "");
  //console.log(result);

 const idadeDosCara = (caixa, alvo, index, array) => {
    return caixa += (alvo.releaseYear - alvo.author.birthYear) / array.length;
 };
//console.log(Math.floor(books.reduce(idadeDosCara, 0)));

const maiorNomeDeLivro = (caixa, alvo, index, array) => {
    if (alvo.name.length > caixa.length) {
    return caixa = alvo.name;
    }
    return caixa;
};
//console.log(books.reduce(maiorNomeDeLivro, ''));

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
  
const containsA = () => {
    
};
console.log(containsA);
