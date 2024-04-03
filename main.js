const botoes= document.querySelectorAll(".botao");
const texto= document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
  botoes[i].onclick=function(){
    
    for(let j=0;j<botoes.length;j++{
      botoes[j].classlist.remove("ativo");
      textos[j].classlist.remove("ativo")
    }
    
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  }
}

const contadores= document.querySelectorAll(".contador");
const tempoObjetivo1= new Date("2029-06-12T00:00:00");
const tempoObjetivo2= new Date("2025-02-22T00:00:00");
const tempoObjetivo3= new Date("2027-12-09T00:00:00");
const tempoObjetivo4= new Date("2028-09-15T00:00:00");
let tempoAtual= new Date();

contadores[0].textContent= calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo){
  let tempoAtual= newDate();
  let tempoFinal= tempoObjetivo - tempoAtual;
  let segundos= Math.floor(tempoFinal / 1000);
  let minutos= Math.floor(segundos / 60);
  let horas= Math.floor(minutos / 60);
  let dias= Math.floor(horas / 24);

  segundos %= 60;
  minutos %=60;
  horas %=24;
  return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
  
}
