const sorteio = (x) => {
    let numeroSorteado = 0;
    const gerarNumero = () => numeroSorteado = Math.floor((Math.random()*5)+1);
    const checagem = () => { return (x === numeroSorteado)? console.log(`Seu número é ${x}, e o número sorteado foi ${numeroSorteado}, parabéns!`) : console.log(`Seu número é ${x}, e o número sorteado foi ${numeroSorteado}, mais sorte da próxima vez!`)};
    gerarNumero();
    checagem();
};
sorteio(4);