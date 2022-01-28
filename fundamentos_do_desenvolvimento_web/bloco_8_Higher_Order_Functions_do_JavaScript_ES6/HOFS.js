    let listinha = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'Ruby' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' },
    { firstName: 'Victor', lastName: 'F.', country: 'Brazil', continent: 'Americas', age: 19, language: 'JavaScript' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 100, language: 'C' },
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript'},
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
    { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
    { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
    { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
  ];

  // 1# retorne o número de estudantes da europa.
  const retornaEuropeus = () => {
    return listinha.filter((element) => element.continent === 'Europe').length;
  };
  //console.log(retornaEuropeus());

  // 2# adiciona greeting na lista com uma saudação.
  const adicionaSaudacao = () => {
    list1.forEach((element) => {
    element.greeting = `Olá ${element.firstName}, bem vindo a empresa!`
    })
  };
  //adicionaSaudacao();
  //console.log(list1);

  // 3# Verifica se algum participante do evento usa Ruby.
  const listaRuby = () => list1.some((element) => element.language === 'Ruby');
  //console.log(listaRuby());

  //

    // 4# informa qual o primeiro participante da lista que coda em python.
    const participantePython = () => {
      if (list1.find((participante) =>participante.language === 'Python') === undefined) {
         return 'Ninguém que programa em Pyhton se inscreveu!';
      }
      const encontraPessoa = list1.find((participante) =>participante.language === 'Python');
      return `${encontraPessoa.firstName}, ${encontraPessoa.country}`;
    }
    //console.log(participantePython());

    //

    // 5# Informa a quanta de programadores em cada linguagem.
    const verificaLinguagens = () => {
        const contador = {
        JavaScript: 0,
        Ruby: 0,
        HTML: 0,
        CSS: 0,
        Python: 0,
        Clojure: 0,
        C: 0,
        PHP: 0,
        }
        const contagem = list1.forEach((elemento) => {
          if (elemento.language === 'JavaScript') {
              contador.JavaScript += 1
          } else if (elemento.language === 'Ruby') {
            contador.Ruby += 1
          } else if (elemento.language === 'HTML') {
            contador.HTML += 1
          } else if (elemento.language === 'CSS') {
            contador.CSS += 1
          } else if (elemento.language === 'Python') {
            contador.Python += 1
          } else if (elemento.language === 'clojure') {
            contador.Clojure += 1
          } else if (elemento.language === 'C') {
            contador.C += 1
          } else if (elemento.language === 'PHP') {
            contador.PHP += 1
          };
        })
        return contador;
    }
    //console.log(verificaLinguagens());

    //

    // 6# verifica se todos os programadores da lista 1 codam em JavaScript.
    const verificaIgualdade = () => list1.every((element) => element.language === 'JavaScript');
    //console.log(verificaIgualdade());

    //

    // 7# verifica quais os programadores mais velhos da lista 3
    const verificaMaisVelho = () => {
        let idade = 0;
        const maiorIdade = list1.forEach((element) => {
            if (element.age > idade) {
                idade = element.age
            };
        })
        return list1.filter((element) => element.age === idade)
    };
    //console.log(verificaMaisVelho());

    //

    // 8# verifica se tem no mínimo 1 desenvolvedor em cada continente esperado
    const verificaContinente = () => {
        const lista = {
        Africa: 0,
        Americas: 0,
        Asia: 0,
        Europe: 0,
        Oceania: 0,
        }
        const verificacao = list1.forEach((element) => {
           if ( element.continent === 'Africa') {
               lista.Africa += 1;
           } else if ( element.continent === 'Americas' ) {
               lista.Americas += 1;
           } else if ( element.continent === 'Asia' ) {
            lista.Asia += 1;
           } else if ( element.continent === 'Europe' ) {
            lista.Europe += 1;
           } else if ( element.continent === 'Oceania' ) {
            lista.Oceania += 1;
           }
        })
        return (lista.Africa > 0 && lista.Americas > 0 && lista.Asia > 0 && lista.Europe > 0 && lista.Oceania > 0) ? true : false;
    };
    //console.log(verificaContinente());

    // 9# verifica se todos os participantes tem as idades desejadas.
    const verificaIdade = () => {
        let contador = 0;
        const idadeDesejada = {
            adolescentes: 0,
            vinte: 0,
            trinta: 0,
            quarenta: 0,
            cinquenta: 0,
            sessenta: 0,
            setenta: 0,
            oitenta: 0,
            noventa: 0,
            cem: 0,
            }
            const verificaIdade = list1.forEach((element) => {
                if ( element.age < 20) {
                    idadeDesejada.adolescentes += 1;
                    contador += 1;
                } else if ( element.age < 30 ) {
                    idadeDesejada.vinte += 1;
                    contador += 1;
                } else if ( element.age < 40  ) {
                    idadeDesejada.trinta += 1;
                    contador += 1;
                } else if ( element.age < 50) {
                    idadeDesejada.quarenta += 1;
                    contador += 1;
                } else if ( element.age < 60) {
                    idadeDesejada.cinquenta += 1;
                    contador += 1;
                } else if ( element.age < 70) {
                    idadeDesejada.sessenta += 1;
                    contador += 1;
                } else if ( element.age < 80) {
                    idadeDesejada.setenta += 1;
                    contador += 1;
                } else if ( element.age < 90) {
                    idadeDesejada.oitenta += 1;
                    contador += 1;
                } else if ( element.age < 100) {
                    idadeDesejada.noventa += 1;
                    contador += 1;
                } else if ( element.age >= 100 ) { 
                    idadeDesejada.cem += 1;
                } { return `O problema começa na idade ${element.age}` }
             })
             return idadeDesejada;
    };
    //console.log(verificaIdade());