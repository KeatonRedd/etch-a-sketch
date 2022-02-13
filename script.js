function createGrid(squareThis) {
    gridWidth = (document.getElementById('body').clientWidth) * .5;
    gridHeight = gridWidth;

    for (let i = 0; i < (squareThis ** 2); i++) {
        let newSquare = document.createElement('div');
        newSquare.classList.add(`squareItem`);

        document.getElementById('theGrid').append(newSquare);
    }

    for (let i = 0; i < squareThis; i++) {
        const gta = document.getElementById('theGrid');

        if (gta.getAttribute('grid-template-areas') === null) {
            gta.setAttribute('grid-template-areas', 'a ');
            // gta.style.gridTemplateAreas = ('a ');
        }

        else {
            gta.setAttribute('grid-template-areas', `${gta.getAttribute('grid-template-areas') + 'a '}`);
            // gta.style.gridTemplateAreas = (`${gta.getAttribute('grid-template-area') + 'a '}`);
        }

        console.log(gta.getAttribute('grid-template-areas'));

    }
}

createGrid(4);