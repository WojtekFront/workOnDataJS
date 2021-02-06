function testObject() {//here will be learning work with object
    let dog = { "name": "Pinokio", "type": "dog" };
    let cat = { "name": "Candy", "type": "dog" };
    let pets = [dog, cat, { "name": "Lili", "type": "dog" }];
    pets.push({ "name": "Robert", "type": "rabbit" });


    cat.age = 2;
    dog["age"] = 14;
    pets[2].age = 7; //the best option for program in loop


    for (let x = 0; x < pets.length; x++) {
        //console.log(pets[x]);
    }
    //pets.forEach((item, index) => console.log(index, item));


    //długość wyrazów w liście
    let listaDoMapy = ["mama", "tata", "koza", "list", "komputer", "przygoda", "alfabet"];
    let listaDoMapyLenght = listaDoMapy.map(function (item, index, array) {
        return item.length;

    });
    //console.log(listaDoMapyLenght);


    //filter array method
    let listDoMapyNr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let breakPoint = 9;
    let smallNumbers = listDoMapyNr.filter(function (num) {
        return num & 2;
    });
    //smallNumbers.sort();
    //console.log(smallNumbers);
    let sum = listDoMapyNr.reduce(function (wprowadzona, item) {
        //console.log(wprowadzona, item);
        return wprowadzona + item;
    }, 0); //starting value is"0"
    //console.log(sum);

    let pierwszyWyraz = listaDoMapy.reduce(function (current, item) {
  //      console.log("porównaj", current, " do ", item);
        return (current < item) ? current : item;
    });
   // console.log("Pierwszy wyraz: ", pierwszyWyraz)

// some method
    let someMethod = listaDoMapy.some(function(current, index){
 //       console.log(index, current);
        return current.indexOf("kapa")>-1;
    });
  //  console.log(someMethod);

//every method
let greaterThen7= listDoMapyNr.every(function(current,index){
    //console.log(current,index);
    return current<7;
});
//console.log(greaterThen7);


//few methods


let names2 =pets.filter(function(animal){
    return animal.type.indexOf("dog") >-1
}).map(function(animal){
    return animal.name;
});
//console.log(names2);

let names3 =pets.filter(animal=>(animal.type.indexOf("dog")>-1)).map(animal=>animal.name);
//console.log(names3);







//currying
// function x(a){
//     console.log('x');
//     a();
// }
// function y(){
//     console.log('y');
// }
// let b= x(y);
// b(y);

// function greet(msg){
//     //console.log(msg)
//     return function (name){
//         console.log(msg,name);
//     }

// let engilsh = greet('hi');
// engilsh('tomi');

//callback function
let setTim = setTimeout(hello,2000,'2imie');
clearTimeout(setTim);
// function doThink(other){
    
// let name ="Stefan";
// other(name);
// }
function hello(nm){
    //console.log('hello',nm);
}
let setInt = setInterval(hello,200,"nm");
setInt;
clearInterval(setInt);

//immediately invoke function expressions
var somethingElse = (function (nm,nt){
    return {"name":"nm", "id":nt};
})("bob",123);
//console.log(somethingElse.name, somethingElse.id);

// let btn = document.getElementById('ilosc');

// btn.addEventListener('click', buttonClicked);
// function buttonClicked(ev){
//     console.log(ev.type, ev.target, ev.currentTarget);
// }
}


document.addEventListener('DOMContentLoaded',init);

function init(){
let textArea = document.getElementById('textArea');
textArea.addEventListener('keydown', anyKey);

 }

function anyKey(ev){
let targe = ev.currentTarget;
let tag = target.tagName;
let char = ev.char || ev.charCode || ev.which;
console.log(char, tag);
let s = String.fromCharCode(char);
console.log(s);
}








 

