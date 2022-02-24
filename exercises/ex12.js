//Identify the errors and correct the code 


//1
const fn = async () => {
    return "result";
   }
   const outer = async () => {
    try {
    return fn(); 
    }catch(e) {
    console.log(e.message);
    }
   }
   await outer(); 


//2
   const fs = require("fs").promises;
   const os = require("os");
   const path = require("path");
   const dir = await fs.mkdtemp(
    await fs.realpath(os.tmpdir()) + path.sep
   );
   await fs.rmdir(dir, {recursive: true})   



//3   
getPromise()
 .then(process, handleError);

//Complete the following Task
//There is a made up API URL (http://great.jokes/christmas) that you can call to a get list of Christmas jokes in JSON format.

//Write an async function which takes an apiUrl and jokeId which returns a promise.
//The data will need to be filtered to get the specified joke by id.
//When you got the joke it should be accessible through a simple API of saySetup and sayPunchLine methods.

//If a joke can't be found throw an error message in this format new Error('No jokes found id: {jokeId}').
//Getting jokes from a another API URL may return a different data shape, throw this error message new Error('No jokes at url: {url}') for an unexpected shape.
//Throw error in a promise style
