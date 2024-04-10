const botoes= document.querySelectorAll(".botao");
const texto= document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
  contadores[0].textContent= calculaTempo(tempos[i]);
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
const tempoObjetivo2= new Date("2025-22-02T00:00:00");
const tempoObjetivo3= new Date("2027-09-12T00:00:00");
const tempoObjetivo4= new Date("2028-15-09T00:00:00");
let tempoAtual= new Date();

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];


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

function atualizaCronometro(){
  for(let i=0; i<contadores.lenght; i++){
    contadores[i].textContent=calculaTempo(tempos[i]);
  }
}

function comecaCronometro(){
  atualizaCronometro();
  setInterval(atualizaCronometro,1000);
}
comecaCronometro();

