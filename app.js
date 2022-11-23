// Checkboxen bereitstellen
let cheap = document.querySelector("#cheap");
let fast = document.querySelector("#fast");
let good = document.querySelector("#good");



cheap.addEventListener("change", clickCheck)
fast.addEventListener("change", clickCheck)
good.addEventListener("change", clickCheck)
/*
Fragen: 
1) Die Input Felder registrieren (querySelector)
2) Wissen welches Feld geklickt wurde -> und merken!
3) Clicks zählen (es dürfen nur 2 Haken gesetzt sein!)
4) Ist Checkbox aktiv?
5) Gibt es 3 Haken? 
    5a) ja = reduzieren auf 2
    5b) nein = 1 oder 2?
    5c) 1 - 1 Haken noch möglich
    5d) 2 = Ende!
*/

let countClicks = 0; 
let savedCheckbox;

function clickCheck(event) {
   
if (event.target.checked === true) {
  countClicks++;
} else {
    countClicks--;
 }

if (countClicks === 3) {
    countClicks--;
    savedCheckbox.checked = false; 
}

savedCheckbox = event.target;

}
