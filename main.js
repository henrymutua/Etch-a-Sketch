document.addEventListener('DOMContentLoaded', function(){
    console.log('Document loaded')
}
)

function createGrid(size){
    const grid = document.querySelector('.grid');
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    const numDivs = size *size;
    for(let i=0; i<numDivs; i++){
        const div = document.createElement('div');
        div.style.backgroundColor = 'yellow'
        grid.insertAdjacentElement('beforeend', div);
    }
}

function userInput(){
    const choice = prompt('Please input some size');
    const message = document.querySelector()
    if(choice === ""){
    return 
    }
}