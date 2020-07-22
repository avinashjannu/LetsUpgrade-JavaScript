console.log('q3');

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(function(response){
    let data=response;
    data.forEach(element => {
        if(element.completed==true)
        {
            console.log(element);
        }
    });
    
})

