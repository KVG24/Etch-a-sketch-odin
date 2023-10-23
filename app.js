const container = document.querySelector('.container');
const clearBtn = document.getElementById('clear');

function generateGrid(num) {
    let divWidth = 40 / num + 'rem';
    let divHeigth = 40 / num + 'rem';
    for (i = 0; i < (num * num); i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'divs';
        newDiv.style.width = divWidth;
        newDiv.style.height = divHeigth;
        container.appendChild(newDiv);
        newDiv.addEventListener('mouseover', () => {
            newDiv.classList.add('painted');
        });
        
    }
    
}

generateGrid(37);

