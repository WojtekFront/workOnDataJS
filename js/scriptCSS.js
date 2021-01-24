let childrenSelect;

//reaction  inout:empty, focus, not empty
childrenSelect = document.querySelector('textarea');
console.log(childrenSelect.style);

let changeText = document.getElementById("textArea");
changeText.onchange = function (e) { 
    if (changeText.value == "" || changeText.value == null) { 
        e.target.style.border = "thick solid red"; 
    } else if(changeText.value != ""){
        e.target.style.border = "thick solid green"; 

    }

}; 

//reaction select: focus, blur


//add tekst above select
let selectOpis = document.createElement("p");
let node = document.createTextNode("Wybierz:");
selectOpis.appendChild(node);

var element = document.getElementById("newDiv");
var child = document.getElementById("ilosc");
element.insertBefore(selectOpis, child);