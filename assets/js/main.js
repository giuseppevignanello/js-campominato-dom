// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// general const
const playBtnEl = document.querySelector(".play_btn");
const selectEl = document.querySelector(".form-select");
const footerEl = document.getElementById("app_footer");
const mainEl = document.getElementById("app_main");
// Create a void array (bombs); 

// Create a counter (safe click)
let safeClicks = 0;
//Generate 16 random numbers and put them into the array; 

// check: the same number can't be two times in the array; 
// create a while loop, with the condition: bombs.lenght < 16

let bombs = [];
while (bombs.length < 16) {
    // if the new random number is not included yet in the bomb array 
    let randomNumber = random_number_in_a_int_range(0, 100);
    if (!bombs.includes(randomNumber)) {
          // push random number to array 
        bombs.push(randomNumber); 
    }
}
console.log(bombs)



// Create an if/else condition inside the cell's "add event listener" to check if the cell is a bomb or not. 
// if the cell is a bomb the game stops (show the safe click counter)
// else +1 to the safe click counter



// addEventListener on play button
playBtnEl.addEventListener("click",
    function () {

        if (selectEl.value === "easy") {
            innerSquareGridToContainer(100, "bg_lightblue", "easy");
        } else if (selectEl.value === "medium") {
            innerSquareGridToContainer(81, "bg_lightblue", "medium")
        } else if (selectEl.value === "hard") {
            innerSquareGridToContainer(49, "bg_lightblue", "hard")
        }
        footerEl.innerHTML = "<span> Created by Giuseppe Vignanello</span>";
        mainEl.classList.add("py-4");
    }
)




// functions

//generate square grid
function innerSquareGridToContainer(maxCellNumb, bgColor, difficulty) {
    const containerEl = document.querySelector(".container");
    containerEl.innerHTML = ""

    //create a for loop to create cells "cell's max number" times
    for (let i = 1; i <= maxCellNumb; i++) {
        const cellEl = `<div class="cell ${difficulty}"></div>`
        containerEl.innerHTML += cellEl;
    }

    // take all the cells from the DOM
    const cells = document.querySelectorAll(".cell");

    // create a for to 
    for (let i = 0; i < cells.length; i++) {
        const thisCell = cells[i];
        thisCell.append(i + 1)
        // add the click event to each cell 
        thisCell.addEventListener("click",
            // change the bg color with classList 
            function () {
                thisCell.classList.toggle(bgColor);
                console.log(i + 1);
            }
        )
    }
}

// random function
function random_number_in_a_int_range(min, max) {
    randomNumber = Number(Math.ceil(Math.random() * (max - min + 1)));
    return randomNumber
};

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella:
// se il numero è presente nella lista dei numeri generati
// abbiamo calpestato una bomba
// la cella si colora di rosso e la partita termina.
// Altrimenti
// la cella cliccata si colora di azzurro
// l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.






















// tools
// -addEventListener
//for loop
// varibles
// log
// createElement
// querySelector/getElementbyadd
// append
//classList(toggle)