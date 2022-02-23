//convert the foll code to async await

fetch("http://localhost/api/v2/pokemon")
.then((res) => res.json())
.then((PokemonList) =>{
    fetch("http://localhost:5050/api/v2/pokemon")
    .then((res) => res.json())
    .then((data)=>{
        console.log(data.stats)
    })
})
.catch((err) =>{
    console.log(err)
})

const getPokemon = async () =>{
    const dataResp = await fetch(url)
    return await dataResp.json()
}

//write a promisified fn getFirstPokemon which gets the first pokemon