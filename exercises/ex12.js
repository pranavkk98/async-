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
