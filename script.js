const container = document.getElementById("container");
const gridRow = document.getElementById("gridRow");
let gridSquare;
let rows;
let columns;


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
            column.setAttribute("id", "gridColumn" + columns);
            row.appendChild(column);
        };
    };

}



function generateColumns(gridWidth) {

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