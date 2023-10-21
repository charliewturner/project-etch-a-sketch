const container = document.getElementById("container");
const gridRow = document.getElementById("gridRow");
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
    for (rows = 0; rows <= gridWidth; rows++) {
        let row = document.createElement('div');
        row.setAttribute("id", "gridRow");
        container.appendChild(row);

        for (columns = 0; columns <= gridWidth; columns++) {
            let column = document.createElement('div');
            column.setAttribute("id", "gridColumn");
            row.appendChild(column);

            column.addEventListener("mouseover", function() {
               column.style.backgroundColor = colourSelection;
            })
        };
    };

}



//create onHover drawing function


//add clear grid function
function clearGrid() {

}

/*new grid function must contain prompt to query the 
    number of squares for grid dimensions*/
function newGrid() {
    let newGridSize = prompt("How many squares would you like the grid to have on each side?", "");
    clearGrid();
    generateRows(newGridSize);
};

//add RGB colour function and button
//add opacity function


defaultGrid();