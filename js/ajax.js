function testObject2() {

    const root = 'http://jsonplaceholder.typicode.com';
    let id = Math.floor(Math.random() * 20) + 1;
    let uri = root + '/users/' + id;
    console.log('FETCH:', uri);


    fetch( uri )
    .then(function (response) { 
        if(response.status==200){
        return response.json(); }
        else{
            throw new Error('Invalid user ID');
        }
    })
    .then((data) => {
            console.log(data);
            let jsonData = JSON.stringify(data);
            console.log(jsonData);
            let output = document.getElementById('wydruk2');
            output.textContent = jsonData;
    
} ).catch ((err)=>{
    console.log(err.message);
} );






}
