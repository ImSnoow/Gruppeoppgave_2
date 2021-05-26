// Her lager vi en funksjon for når man begynner å dra elementet.

function onDragStart(startDrag) {
    startDrag.dataTransfer.setData('text', startDrag.target.id); //brukes for å lagre data fra der den stod, drar den over til et annet sted.
    startDrag.currentTarget.style.backgroundColor = 'yellow';  //Oppdaterer stilen til elementet når man drar den.
}

// Event.preventDefault cancels an events default behaviour.
// Vi gjør dette fordi <div> som regel ikke tillater drag and drop funksjoner. 
function onDragOver(dragOver){
    dragOver.preventDefault();
}

function onDrop(dropMe){
    let dragging = dropMe.dataTransfer.getData('text');
    let draggableElement = document.getElementById(dragging);
    let dropzone = dropMe.target;
    
    dropzone.appendChild(draggableElement);
    dropMe.dataTransfer.clearData();
}

