const container = document.getElementById('container');
const resetButton = document.getElementById('resetGrid');

function generateGrid(gridSize) {
    container.innerHTML = '';
    const squareSize = 1000 / gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-square');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        
        div.addEventListener('mouseover', () => {
            const randomColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
            div.style.backgroundColor = randomColor;
            
            let currentOpacity = parseFloat(div.style.opacity) || 0;
            if (currentOpacity < 1) {
                div.style.opacity = currentOpacity + 0.1; // Darken the square
            }
        });
        container.appendChild(div);
    }
}

generateGrid(16);

resetButton.addEventListener('click', () => {
    let gridSize = parseInt(promp('Enter the number of squares per side (Max. is 100): '), 10);

    if (gridSize && gridSize > 0 && gridSize <= 100) {
        generateGrid(gridSize);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
}) 