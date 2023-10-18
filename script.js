const container = document.getElementById("container");
console.log(container);
let gridSquare;



//create default board
function defaultGrid() {
    generateGrid(16);

}

function generateGrid(gridWidth) {
    let totalSquares = gridWidth * gridWidth;
    for (i = 0; i < totalSquares; i++) {
        gridSquare = document.createElement('div');
        container.appendChild(gridSquare);

    }

}




//create onHover drawing function
function draw() {

}

//add clear grid function
function clearGrid() {

}

//add clear grid/create new grid button


//add create custom grid function
/*new grid function must contain prompt to query the 
    number of squares for grid dimensions*/
function newGrid() {
    let newGridSize = prompt("How many squares would you like the grid to have on each side?", "");
    console.log(newGridSize);
};


defaultGrid();




//add RGB colour function and button
//add opacity function