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
  
// Adicione o código do exercício aqui:{

//const imprimirLivros = books.map((livros) => `${livros.name} - ${livros.genre} - ${livros.author.name}`);
//console.log(imprimirLivros);

//const idadeDoCara = () => books.map((alvo) => ({ autor: alvo.author.name, idade: alvo.releaseYear - alvo.author.birthYear })).sort((x, y) => x.idade - y.idade);
//console.log(idadeDoCara());

//const filtrarGenero = () => books.filter((alvo) => alvo.genre === 'Fantasia' || alvo.genre === 'Ficção Científica');
//console.log(filtrarGenero());

//const livrosAntigos = () => (books.filter((alvo) => alvo.releaseYear < 1962).sort((livro1, livro2) => livro1.releaseYear > livro2.releaseYear));
//console.log(livrosAntigos());

//const autoresPorGenero = () => books.filter((alvo) => alvo.genre === 'Fantasia' || alvo.genre === 'Ficção Científica').map((alvo) => alvo.author.name).sort();
//console.log(autoresPorGenero());