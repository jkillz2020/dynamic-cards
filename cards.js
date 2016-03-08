var create =  document.getElementById("create");
var deleteCard = document.getElementsByClassName("delete");
var container = document.getElementById("container");
var input = document.getElementById("input");
var card = document.getElementsByClassName("card"); //array like object
var text = document.getElementsByClassName("text");

create.addEventListener("click", createCard );


function createCard(){
  var output = '<div class = "card"><section><p class = "text">' + input.value + '</p></section><input type = "button" class = "delete" value = "delete"></div>'
    container.innerHTML += output
    deleteBtnEventListener();
}

//target the parent card and instruct to remove child with each click of each delete button//////
function removeCard(event){
var thisCard = event.target.parentElement;
container.removeChild(thisCard)  ////used node.removeChild method as the card is i.e container is the child of the div or the create card function
}
////made event listener on each dynamically created delete button
function deleteBtnEventListener(){
  for(var i = 0; i < deleteCard.length; i++){
    var del = document.getElementsByClassName("delete")
      for(var d = 0; d < del.length; d++){
        del[d].addEventListener("click", removeCard);
      }
  }
  console.log(del);
}