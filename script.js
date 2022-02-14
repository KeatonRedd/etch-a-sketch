const theGrid = document.querySelector('#theGrid');
const gridWidth = document.getElementById('body').clientWidth / 2;
const gridItems = theGrid.children;
const clearBtn = document.querySelector('#clearBtn');
const randomBtn = document.querySelector('#randomBtn')
createGrid(4);

function createGrid(squareThis) {
    setGridContainer();
    let squareSize = (gridWidth / squareThis);

    for (let i = 0; i < (squareThis ** 2); i++) {
        let newSquare = document.createElement('div');

        newSquare.classList.add('squareItem');
        newSquare.style.width = squareSize + 'px';
        newSquare.style.height = squareSize + 'px';

        theGrid.append(newSquare);
    }

    if (randomBtn.checked) {
        randomMouseover();
    }

    else {
        mouseoverListener();
    }
}

function setGridContainer() {
    theGrid.style.width = (gridWidth) + 'px';
    theGrid.style.height = (gridWidth) + 'px';
}

function mouseoverListener() {
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('mouseover', () => {
            gridItems[i].classList.add('colored');
        });
    };
}

function randomMouseover() {
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('mouseover', () => {
            gridItems[i].style.backgroundColor = `${'#' + Math.floor(Math.random()*16777215).toString(16)}`;
        })
    }
}

function clearSquares() {
    while (theGrid.firstChild) {
        theGrid.removeChild(theGrid.firstChild);
    }
}

clearBtn.addEventListener('click', () => {
    let userInput;

    do {
        userInput = prompt("How many rows and columns would you like to have?");
    }while (userInput > 100)

    clearSquares();
    createGrid(userInput);
});
