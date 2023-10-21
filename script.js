const container = document.getElementById("container");
const gridRow = document.getElementById("gridRow");
const randomColourButton = document.querySelector("#randomColour");
const blackButton = document.querySelector("#black");
const eraserButton = document.querySelector("#eraser");
const resetButton = document.querySelector("#reset");
let gridSquare;
let rows;
let columns;
let colourSelection = "black";


//create default board
function defaultGrid() {
    generateRows(16);
    generateColumns(16);
}

function generateRows(gridWidth) {
    for (rows = 1; rows <= gridWidth; rows++) {
        let row = document.createElement('div');
        row.setAttribute("id", "gridRow");
        container.appendChild(row);

        for (columns = 1; columns <= gridWidth; columns++) {
            let column = document.createElement('div');
            column.setAttribute("id", "gridColumn");
            row.appendChild(column);

            column.addEventListener("mouseover", function() {
               column.style.backgroundColor = colourSelection;
            })
        };
    };

}


resetButton.addEventListener("click", newGrid);

/*new grid function must contain prompt to query the 
    number of squares for grid dimensions*/
function newGrid() {
    clearGrid();
    let newGridSize = prompt("How many squares would you like the grid to have on each side?", "");
    if (newGridSize > 200) {
        alert("Invalid input. Please choose a smaller grid.");
    } else if (newGridSize < 1) {
        alert("Invalid input. Please select a larger grid size");
    } else {
        generateRows(newGridSize);
    }
    
};
function clearGrid() {
    container.innerHTML='';   
}

//add RGB colour function and button
//add opacity function


defaultGrid();