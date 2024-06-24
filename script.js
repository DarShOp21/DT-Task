var arrow = document.querySelector('#journey-arrow');
var journeyBoard = document.querySelector('#journey-board');
var isOpen = false;

arrow.addEventListener('click', () => {
    if(isOpen) {
       journeyBoard.style.marginLeft = "-17%"; 
    } else {
        journeyBoard.style.marginLeft = "0"; 
    }
    isOpen = !isOpen
})