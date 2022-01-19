const nomesEmail = (nome1, nome2, nome3) => {

    const criarEmail = (alvo) => {
        let nomeDoAlvo = alvo;
        let corpoDoEmail = `${alvo}@trybe.com`;
        
        return {
            nome: nomeDoAlvo,
            email: corpoDoEmail
        };
    };

    const employees = {
      id1: criarEmail(nome1),
      id2: criarEmail(nome2),
      id3: criarEmail(nome3),
    };

    console.log(employees);

  };

  nomesEmail('carlos', 'igor', 'passip');
