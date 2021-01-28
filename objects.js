function testObject() {//here will be learning work with object
    let dog = { "name": "Pinokio", "type": "dog" };
    let cat = { "name": "Candy", "type": "cat" };
    let pets = [dog, cat, { "name": "Lili", "type": "chicken" }];
    pets.push({ "name": "Robert", "type": "rabbit" });


    cat.age = 2;
    dog["age"] = 14;


    for (let x = 0; x < pets.length; x++) { 
        console.log(pets[x]);
}
}
