const container = document.getElementById("container");
console.log(container);



//create default board
function defaultGrid() {
    makeRows(16);
    makeCells(16);
}

function makeRows(rowNum) {
    for (i = 0; i < rowNum; i++) {
        let rows = document.createElement('div');
        container.appendChild(rows);
    }

}
 function makeCells(cellNum) {
    for (i = 0; i < rowNum; i++) {
        for (j = 0; j < cellNum; j++) {
            let cells = document.createElement('div');
            container.appendChild(cells);
        }
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