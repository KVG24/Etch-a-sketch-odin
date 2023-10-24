const container = document.querySelector('.container');
const divColor = 'rgb(201, 201, 201'
let paintColor = 'black';


function generateGrid(num) {
    let divWidth = 40 / num + 'rem';
    let divHeigth = 40 / num + 'rem';
    for (i = 0; i < (num * num); i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'divs';
        newDiv.style.width = divWidth;
        newDiv.style.height = divHeigth;
        container.appendChild(newDiv);
        newDiv.addEventListener('mouseover', color);
        container.addEventListener('contextmenu', (event) => {event.preventDefault()});
    }
}

generateGrid(16);

function generateNew() {
    container.innerHTML = '';
    let size = prompt('Enter board size (2 - 100)');
    if (size <= 100 && size >= 2) {
    generateGrid(size);
    } else {
        alert('Incorrect number');
        generateNew()
    }
}

function clear() {
    let board = document.querySelector('.container');
    let cells = board.querySelectorAll('div');
    cells.forEach((cell) => cell.style.backgroundColor = divColor);
}

function color() {
    if (paintColor === 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
    this.style.backgroundColor = paintColor;
    }
};

function changeColor(newColor) {
    paintColor = newColor;
}

