
/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
Crie uma função que mude a cor do quadrado vermelho para branco.
Crie uma função que corrija o texto da tag <h1>.
Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function mudarTexto (){
    let alvo = document.body.getElementsByTagName("p")[1];
    alvo.innerText = "Bem na minha carreira";
};

function mudarCorPraVerde(){
    let alvo = document.body.getElementsByClassName("main-content")[0];
    alvo.style.backgroundColor = "rgb(76, 164, 109)";
};

function mudarCorPraBranco(){
    let alvo = document.body.getElementsByClassName("center-content")[0];
    alvo.style.backgroundColor = "white";
};

function ajustarNome(){
    let alvo = document.body.getElementsByClassName("title")[0];
    alvo.innerText = "Exercício 5.1 - JavaScript";
};

function paragrafoMaiusculo() {
    let alvo = document.getElementsByTagName("p")[0];
    alvo.innerText = alvo.innerText.toUpperCase();
}

function imprimirP() {
    let alvo = document.getElementsByTagName("p");
    for (let i = 0; i <= alvo.length; i += 1) {
        console.log(alvo[i])
    }
}

mudarTexto();
mudarCorPraVerde();
mudarCorPraBranco();
ajustarNome();
paragrafoMaiusculo();
imprimirP();
