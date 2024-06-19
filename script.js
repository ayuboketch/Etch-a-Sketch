let container = document.getElementById('container');
let containerWidth = container.clientWidth;
let containerHeight = container.clientHeight;
let button = document.getElementById('choose-grid');
let input = document.getElementById('gridSize');
let submit = document.getElementById('submit');

let squareSize; // Declare squareSize at a higher scope

submit.addEventListener('click', () => {
    if (isNaN(input.value) || input.value === '') {
        alert('Please enter a valid number.');
        return;
    }
    let gridSize = parseInt(input.value);
    if (gridSize < 1 || gridSize > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }

    // Calculate squareSize based on both width and height of the container
    let maxSquareSizeWidth = Math.floor(containerWidth / gridSize);
    let maxSquareSizeHeight = Math.floor(containerHeight / gridSize);
    squareSize = Math.min(maxSquareSizeWidth, maxSquareSizeHeight);

    createGrid(gridSize);
});

// Create squares
function createSquares(numCols, numRows) {
    let squares = document.createElement('div');
    squares.classList.add('squares');
    squares.style.cssText = `display: flex; flex-wrap: wrap; width: ${numCols * squareSize}px; height: ${numRows * squareSize}px;`;

    for (let i = 0; i < numCols * numRows; i++) {
        let square = document.createElement('div');
        square.style.cssText = `width: ${squareSize}px; height: ${squareSize}px; box-sizing: border-box;`;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'red';
        });
        squares.appendChild(square);
    }

    // Append squares to the container
    container.innerHTML = ''; // Clear previous content
    container.appendChild(squares);
}

// Create grid  
function createGrid(newGrid) {
    let numCols = newGrid;
    let numRows = newGrid;
    createSquares(numCols, numRows);
}
