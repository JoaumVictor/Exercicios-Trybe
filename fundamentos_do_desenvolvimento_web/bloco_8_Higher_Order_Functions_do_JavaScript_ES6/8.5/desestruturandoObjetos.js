
    const user = {
    name: 'Maria',
    age: 21,
    nationality: 'brasileira',
  };
  
  const jobInfos = {
    profession: 'engenheira de software',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  //Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals .

  const mariaInfo = {...user, ...jobInfos};
  
  const {name, age, nationality, prefession, squad, squadInitials} = mariaInfo;

  console.log(`Olá, meu nome é ${name}, tenho ${age} anos e sou ${nationality}!`);