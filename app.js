const container = document.querySelector('.container');
const divColor = 'rgba(255, 255, 255, 0.999)'
const clearBtn = document.getElementById('clr-btn');
const shadingBtn = document.getElementById('shading');
const colorPick = document.getElementById('color-pick');
const bordersBtn = document.getElementById('borders');
let paintMode = colorPick.value;
let borders = true;


function generateGrid(num) {
    let divWidth = 50 / num + 'rem';
    let divHeigth = 50 / num + 'rem';
    for (i = 0; i < (num * num); i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('divs')
        newDiv.classList.add('border')
        newDiv.style.width = divWidth;
        newDiv.style.height = divHeigth;
        container.appendChild(newDiv);
        newDiv.addEventListener('mouseover', changeColor)
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

function changeMode(mode) {
    paintMode = mode;
}

function clear() {
    let cells = container.querySelectorAll('div');
    for (const cell of cells) {
        cell.style.backgroundColor = divColor
    }
}

clearBtn.addEventListener('click', clear);


function enableBorders() {
    if (borders == true) {
        borders = false
        let cells = container.querySelectorAll('div');
        for (const cell of cells) {
            cell.classList.remove('border'); 
        }
    } else {
        borders = true
        let cells = container.querySelectorAll('div');
        for (const cell of cells) {
            cell.classList.add('border');
        }
    }
};

bordersBtn.addEventListener('click', enableBorders);


function changeColor() {
    if (paintMode === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (paintMode === 'shading') {
        if (this.style.backgroundColor.match(/rgba/)) {    
            let opacity = Number(this.style.backgroundColor.slice(-4, -1));
            if (opacity < 0.9) {
                this.style.backgroundColor = `rgba(0, 0, 0, ${opacity + 0.1})`;
            }
            if (this.style.backgroundColor === 'rgb(0, 0, 0)') {
                for (const divs of container) {
                    divs.removeEventListener('click', changeColor)
                }
            }
        } else {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        }
    } else if (paintMode === 'pick') {
        this.style.backgroundColor = colorPick.value
    } else {
        this.style.backgroundColor = paintMode;
    }
};