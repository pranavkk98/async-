//there is a missing await , so the try catch block won't handle exceptions. This is because exceptions are thrown from the await while 
//returning Promise from an async fn flattens the res, hence will be returned without a warning
const fn = async () => {
    throw new Error("error");
   }
   const outer = async () => {
    try {
    return await fn();
    }catch(e) {
    console.log(e.message); 
    }
   }
   await outer();
 

//A good practice is to always close the resources
const withTempDir = async (fn) => {
    const dir = await fs.mkdtemp(
    await fs.realpath(os.tmpdir()) + path.sep
    );
    try {
    return await fn(dir);
    }finally {
    fs.rmdir(dir, {recursive: true});
    }
   };
   await withTempDir((dir) => {
    
   })   

   //3 The second handler of the then() is called for err, but only from the prev steps, so if the result from the promise gets rejected, then it won't be handled
   getPromise()
 .then(process)
 .catch(handleError);
