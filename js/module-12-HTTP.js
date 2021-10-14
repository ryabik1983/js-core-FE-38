console.log('Hello!');

fetch('https://pokeapi.co/api/v2/pokemon/').then(response =>{
// console.log(response.json());
return response.json()
})
.then(pokemon =>{
    console.log(pokemon);
})
.catch(error => {
    console.log(error);
})

