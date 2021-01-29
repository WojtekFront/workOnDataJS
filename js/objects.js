function testObject() {//here will be learning work with object
    let dog = { "name": "Pinokio", "type": "dog" };
    let cat = { "name": "Candy", "type": "cat" };
    let pets = [dog, cat, { "name": "Lili", "type": "chicken" }];
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
        console.log(index, current);
        return current.indexOf("kapa")>-1;
    });
    console.log(someMethod);
}
