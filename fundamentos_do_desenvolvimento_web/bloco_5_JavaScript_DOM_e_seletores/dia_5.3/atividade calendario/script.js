function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  
  let calendario = document.getElementById("days");

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function addDias() {
    for(i=0; i<dezDaysList.length; i+=1){
      let dia = dezDaysList[i];
      let diaCriado = document.createElement("li");

      if (dia === 24 || dia === 25 || dia === 31){
        diaCriado.className = "diaDeFeriado";
        diaCriado.innerHTML = dia;
        calendario.appendChild(diaCriado)
      } else if (dia === 4 || dia === 11 || dia === 18 || dia === 25){
        diaCriado.className = "diaDeSexta"
        diaCriado.innerHTML = dia;
        calendario.appendChild(diaCriado)
      } else {
        diaCriado.className = "dia"
        diaCriado.innerHTML = dia;
        calendario.appendChild(diaCriado)
      }
    }
  }
  addDias();

  let butt = document.getElementsByClassName('buttons-container')[0];
  butt.id = "feriado"

  //Criando botão de feriados
  let botaoDeFeriados = document.createElement("button");
  botaoDeFeriados.innerHTML = "Feriados";
  butt.appendChild(botaoDeFeriados);
  botaoDeFeriados.addEventListener("click", mudarCorFeriado)
  let powerFeriado = "off";

  //criando a lógica do botão dos feriados
  function mudarCorFeriado() {
    let alvos = document.getElementsByClassName("diaDeFeriado")
    if (powerFeriado === "off") {
    for(i=0; i < alvos.length; i+=1) {
      alvos[i].style.border = "3px solid purple";
    }
    powerFeriado = "on"
  } else {
    for(i=0; i < alvos.length; i+=1) {
      alvos[i].style = "rgb(238,238,238)";
    }
    powerFeriado = "off";
  }
  }

  //criando botão de sextas
  let botaoDeSexta = document.createElement("button");
  botaoDeSexta.innerHTML = "Sextas";
  butt.appendChild(botaoDeSexta);
  botaoDeSexta.addEventListener("click", mudarCorSexta)
  let powerSexta = "off";

  //criando a lógica do botão de sexta
  function mudarCorSexta() {
    let alvos = document.getElementsByClassName("diaDeSexta")
    if (powerSexta === "off") {
    for(i=0; i < alvos.length; i+=1) {
      alvos[i].style.border = "3px solid green";
    }
    powerSexta = "on"
  } else {
    for(i=0; i < alvos.length; i+=1) {
      alvos[i].style = "rgb(238,238,238)";
    }
    powerSexta = "off";
  }
  }

  
