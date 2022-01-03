let eu = document.getElementById("elementoOndeVoceEsta");

let pai = eu.parentElement;
pai.style.color = "green";

let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerText = "filhoDaMãeKKKK";

let primeiroFilho = pai.firstElementChild;

let primeiroFilho2 = eu.previousElementSibling;

let elemento = eu.NextSibling;

let terceiroFilho = eu.nextElementSibling;

let terceiroFilho2 = pai.lastElementChild.previousElementSibling;

let irmaoNovo = document.createElement('div');
irmaoNovo.id = "irmaoNovo";
pai.appendChild(irmaoNovo);

let filhoMeu = document.createElement("div");
filhoMeu.id = "filhoMeu";
eu.appendChild(filhoMeu);

let filhoDoFilhoDoFilho = document.createElement("div");
filhoDoFilhoDoFilho.id = "filhoDoFilhoDoFilho";
primeiroFilhoDoFilho.appendChild(filhoDoFilhoDoFilho);




let paiDoPai = document.getElementById("paiDoPai");
let tamanhoPDP = paiDoPai.childNodes.length;

for ( i = 0; i >= tamanhoPDP.lengt; i += 1) {
     let alvo = tamanhoPDP[i];
        if(alvo.innerText.includes.id ("pai" || "elementoOndeVoceEsta" || "primeiroFilhoDoFilho")) {
         } else {
            paiDoPai.removeChild(alvo);
        }
    }

