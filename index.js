let values = [
  9.9, 9.9, 9.9, 9.9, 9.9, 9.9, 9.9, 9.9, 12.9, 12.9, 12.9, 12.9, 15.9, 15.9,
  15.9, 15.9, 23.9, 23.9, 23.9, 23.9, 39.9, 39.9, 39.9, 39.9, 49.9, 59.9, 69.9,
  79.9, 99.9, 349.9, 699.9,
];
const getEloStart = document.getElementById("eloToStart");
const rankEloStart = document.getElementById("divisionToStart");
const getEloEnd = document.getElementById("eloToEnd");
const FinalValue = document.getElementById("FinalValue");
const rankEloEnd = document.getElementById("divisionToEnd");
function HandleValueToPayForJob() {
  let sum = 0;
  let init;
  let late;
  if (Number(getEloStart.value) >= 28) {
    rankEloStart.style.display = "none";
    init = Number(getEloStart.value);
  }
  if (Number(getEloEnd.value) >= 28) {
    rankEloEnd.style.display = "none";
    late = Number(getEloEnd.value);
  }
  if (Number(getEloStart.value) < 28) {
    rankEloStart.style.display = "inline";
    init = Number(getEloStart.value) + Number(rankEloStart.value);
  }
  if (Number(getEloEnd.value) < 28) {
    rankEloEnd.style.display = "inline";
    late = Number(getEloEnd.value) + Number(rankEloEnd.value);
  }

  for (let i = init; i <= late; i++) {
    sum += values[i];
  }
  FinalValue.innerHTML = "R$ " + sum.toFixed(2);
}
