// TODO: get display elements for the cards and the card-items
const cardItems = document.querySelectorAll(".card-item");
const cards = document.querySelectorAll(".card");
// TODO: add event listeners to card and card-items
for(const cardItem of cardItems) {
    cardItem.addEventListener("dragstart", dragStartHandler);

};

for(const card of cards){
    card.addEventListener("dragover", dragOverHandler);
    card.addEventListener("drop", dropHandler);
    card.addEventListener("dragleave", dragLeaveHandler);
    card.addEventListener("dragend", dragEndHandler);


}
// TODO: define functions to handle card and card-item interactions

function dragStartHandler(e){
    e.dataTransfer.setData("text/plain",e.target.id);
    // console.log(e.target.id);

}

function dragOverHandler(e){
    e.preventDefault();
    e.target.classList.add("over");
    // console.log(`Item dragged over item noted below: ${e.target.id}`);

}

function dropHandler(e){
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    // console.log(`Item being dragged: ${id}`);
    currentCardItem = document.getElementById(id);
    e.target.classList.remove("over");
    e.target.appendChild( currentCardItem);

}

function dragLeaveHandler(e){
    e.target.classList.remove("over");
    
}

function dragEndHandler(e){
    
    console.log("drag ended")
}
