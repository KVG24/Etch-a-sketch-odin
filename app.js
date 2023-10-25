const container = document.querySelector('.container');
const divColor = 'rgb(255, 255, 255, 1)'
const clearBtn = document.getElementById('clr-btn');
const shadingBtn = document.getElementById('shading');
let paintColor = 'black';

function generateGrid(num) {
    let divWidth = 50 / num + 'rem';
    let divHeigth = 50 / num + 'rem';
    for (i = 0; i < (num * num); i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'divs';
        newDiv.style.width = divWidth;
        newDiv.style.height = divHeigth;
        container.appendChild(newDiv);
        newDiv.addEventListener('mouseover', color)
    }
    container.addEventListener('contextmenu', (event) => {event.preventDefault()});
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
    let cells = container.querySelectorAll('div');
    for (const cell of cells) {
        cell.style.backgroundColor = divColor
    }
}

clearBtn.addEventListener('click', clear);

function changeColor(newColor) {
    paintColor = newColor;
}

function color() {
    if (paintColor === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (paintColor === 'shading') {
            let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
            if (currentOpacity <= 0.9) {
                this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                this.classList.add('shade');
            } else if (this.classList == 'shade' && this.style.backgroundColor == 'rgb(0, 0, 0)') {
                return;
            } else {
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        }
    } else {
        this.style.backgroundColor = paintColor;
    }
};