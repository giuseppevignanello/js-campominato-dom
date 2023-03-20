// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// take play btn from DOM 

const playBtnEl = document.querySelector(".play_btn");
const selectEl = document.querySelector(".form-select");
const footerEl = document.getElementById("app_footer");
const mainEl = document.getElementById("app_main");
//take container from DOM


//create a const for the cell's max number

// const maxCellNumb = 100;
// addEventListener on play button


playBtnEl.addEventListener("click",

    function () {

        if (selectEl.value === "easy") {

            innerSquareGridToContainer(100, "bg_lightblue", "easy")

        } else if (selectEl.value === "medium") {

            innerSquareGridToContainer(81, "bg_lightblue", "medium")
        } else if (selectEl.value === "hard") 
        {
            innerSquareGridToContainer(49, "bg_lightblue", "hard")
        }

        footerEl.innerHTML = "<span> Created by Giuseppe Vignanello</span>";
        mainEl.classList.add("py-4")


    }
)







// function to create grid

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

















// tools
// -addEventListener
//for loop
// varibles
// log
// createElement
// querySelector/getElementbyadd
// append
//classList(toggle)