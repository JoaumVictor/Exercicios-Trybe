const sortear = (x, fuck) => { return (x === fuck)? console.log(`Seu número é ${x}, e o número sorteado foi ${fuck}, parabéns!`) : console.log(`Seu número é ${x}, e o número sorteado foi ${fuck}, mais sorte da próxima vez!`)};
const gerar = Math.floor((Math.random()*5)+1);
sortear(4, gerar);