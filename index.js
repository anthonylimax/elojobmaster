const cardOne = document.getElementById("card1")
const cardTwo = document.getElementById("card2")
const titleOne = document.getElementById("titulo1")
const titleTwo = document.getElementById("titulo2")
const imageOne = document.getElementById("elo1")
const imageTwo = document.getElementById("elo2")
const getEloStart = document.getElementById("eloToStart");
const rankEloStart = document.getElementById("divisionToStart");
const getEloEnd = document.getElementById("eloToEnd");
const FinalValue = document.getElementById("FinalValue");
const rankEloEnd = document.getElementById("divisionToEnd");
const dontHave = document.getElementById("dont-have");
const elos = document.getElementsByClassName("elo");
const elost = document.getElementsByClassName("elo2");
const container = document.getElementsByClassName("container_choose_your_elo_first");
const containerTwo = document.getElementsByClassName("container_choose_your_elo_second");
const division = document.getElementsByClassName("container_division");
const divisiont = document.getElementsByClassName("container_division2");
let values = [
  9.9, 9.9, 9.9, 9.9, 9.9, 9.9, 9.9, 9.9, 12.9, 12.9, 12.9, 12.9, 15.9, 15.9,
  15.9, 15.9, 23.9, 23.9, 23.9, 23.9, 39.9, 39.9, 39.9, 39.9, 49.9, 59.9, 69.9,
  79.9, 99.9, 349.9, 699.9,
];

let corePalette = {
  ferro: "#3E313099",
  bronze: "#2B1F21E0",
  prata: "#6E7784",
  ouro: "#B47330",
  platina: "#3154A2",
  esmeralda: "#009E60",
  diamante: "#2D4D94",
  mestre: "#703DAE",
  graomestre: "#943839",
  challenger: "#3580cb"
}
let indexElos = {
  0: "ferro",
  4: "bronze",
  8: "prata",
  12: "ouro",
  16: "platina",
  20: "esmeralda",
  24: "diamante",
  28: "mestre",
  29: "graomestre",
  30: "challenger"
}

container[0].addEventListener("click", ({target})=>{
  if(target.classList[0] == "container_choose_your_elo_first" ){
    container.item(0).style.display = "none"
  }
})
containerTwo[0].addEventListener("click", ({target})=>{
  console.log("click")
  if(target.classList[0] == "container_choose_your_elo_second" ){
    containerTwo.item(0).style.display = "none"
  }
})

function OpenFirst(){
  const open = document.getElementsByClassName("container_choose_your_elo_first")[0];
  open.style.display = "flex"
}
function OpenSecond(){
  const open = document.getElementsByClassName("container_choose_your_elo_second")[0];
  open.style.display = "flex"
}

function DefaultState(){
  for(let i = 0; i < elos.length; i++){
    elos[i].classList.remove("elo__clicked");
  }
}
function DefaultDivision(){
  for(let i = 0; i < division.length; i++){
    division[i].classList.remove("container_division__clicked");
  }
}
function DefaultDivisionT(){
  for(let i = 0; i < divisiont.length; i++){
    divisiont[i].classList.remove("container_division__clickedT");
  }
}
function DefaultStateT(){
  for(let i = 0; i < elost.length; i++){
    elost[i].classList.remove("elo2__clicked");
  }
}

for(let i = 0; i < elos.length; i++ ){
  elos[i].addEventListener("click", ()=>{
    if(elos[i].classList.contains("elo__clicked")){
      DefaultState();
      return 0;
    }
    else{

      DefaultState();
      elos[i].classList.add("elo__clicked");
      getEloStart.value = elos[i].dataset.value;
      HandleValueToPayForJob();
    }
  })
}

for(let i = 0; i < division.length; i++ ){
  division[i].addEventListener("click", ()=>{
    if(division[i].classList.contains("container_division__clicked")){
      return 0;
    }
    else{

      DefaultDivision();
      division[i].classList.add("container_division__clicked");
      rankEloStart.value = division[i].dataset.value;
      console.log(division[i].dataset.value)
      HandleValueToPayForJob();
    }
  })
}
for(let i = 0; i < divisiont.length; i++ ){
  divisiont[i].addEventListener("click", ()=>{
    if(divisiont[i].classList.contains("container_division__clickedT")){
      DefaultDivisionT();
      return 0;
    }
    else{
      DefaultDivisionT();
      divisiont[i].classList.add("container_division__clickedT");
      rankEloEnd.value = divisiont[i].dataset.value;
      HandleValueToPayForJob();
    }
  })
}
for(let i = 0; i < elost.length; i++ ){
  elost[i].addEventListener("click", ()=>{
    if(elost[i].classList.contains("elo2__clicked")){
      DefaultState();
      return 0;
    }
    else{

      DefaultStateT();
      elost[i].classList.add("elo2__clicked");
      getEloEnd.value = elost[i].dataset.value;
      HandleValueToPayForJob();
    }
  })
}



HandleValueToPayForJob();
function HandleValueToPayForJob() {
  let sum = 0;
  let init;
  let late;
  let textOne;
  let textTwo;
  imageOne.src = `images/${indexElos[getEloStart.value]}.webp`;
  imageTwo.src = `images/${indexElos[getEloEnd.value]}.webp`;
  cardOne.style.backgroundColor = corePalette[indexElos[getEloStart.value]];
  cardTwo.style.backgroundColor = corePalette[indexElos[getEloEnd.value]];
  
  if (Number(getEloStart.value) >= 28) {
    init = Number(getEloStart.value);
    textOne = `${indexElos[getEloStart.value].toUpperCase()}`;
  }
  if (Number(getEloEnd.value) >= 28) {
    
  textTwo = `${indexElos[getEloEnd.value].toUpperCase()}`;
    late = Number(getEloEnd.value);
  }
  if (Number(getEloStart.value) < 28) {
    init = Number(getEloStart.value) + Number(rankEloStart.value);
    textOne = `${indexElos[getEloStart.value].toUpperCase()} ${rankEloStart.options[rankEloStart.value].innerHTML}`;
  }
  if (Number(getEloEnd.value) < 28) {
    late = Number(getEloEnd.value) + Number(rankEloEnd.value);
    textTwo = `${indexElos[getEloEnd.value].toUpperCase()} ${rankEloEnd.options[rankEloEnd.value].innerHTML}`;
  }
  if(init >= late){
    dontHave.style.display = "inline";

  }
  else{
    dontHave.style.display = "none";
  }
  titleOne.innerHTML = textOne;
  titleTwo.innerHTML = textTwo;
  for (let i = init + 1; i <= late; i++) {
    sum += values[i];
  }
  FinalValue.innerHTML = "R$ " + sum.toFixed(2);
}
