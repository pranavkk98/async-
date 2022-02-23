//1
async function f1 (){
    const listResp = await fetch("http://localhost..")
const PokemonList = await listResp.json()

const dataResp = await fetch(PokemonList.results[0].url)
const data = await dataResp.json()
console.log(data.stats)
}
f1()


const getFirstPokemon = async () =>{
    new Promise(async(res, rej) =>{
        try {
            const list = await getPokemonList()
            res( await getPokemon(list.results[0].url))
            
        } catch (error) {
            rej(err)
            
        }
    })
}