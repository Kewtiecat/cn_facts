let tableau = [
    "Quand Chuck Norris fait l'épreuve des araignées dans Fort Boyard, elles sortent elles-mêmes les petits papiers et lisent à voix haute.",
    "Chuck Norris peut gagner une partie de puissance 4 en trois coups.", 
    "Un jour, Chuck Norris a perdu son alliance. Depuis c'est le bordel dans les terres du milieu...",
    "Chuck Norris joue à la roulette russe avec un chargeur plein.",
    "Chuck Norris a un jour avalé un paquet entier de somnifères. Il a cligné des yeux.",
    "Chuck Norris peut encercler ses ennemis. Tout seul.",
    "Chuck Norris est la raison pour laquelle Charlie se cache.",
]

function changeText()
{
    let fact = document.getElementById("fact");
    let random = Math.floor(Math.random() * tableau.length);
    fact.textContent = tableau[random]; 
}

let tableColor = [
    "#FF00FF",
    "#00FFFF",
    "#FFFF00",
]

function changeColor()
{
    let backgrnd = document.querySelector("body");
    let randomColor = Math.floor(Math.random() * tableColor.length);
    backgrnd.style = tableColor[randomColor]; 
}

let other = document.getElementById("btn");
other.addEventListener("click",changeText, changeColor);