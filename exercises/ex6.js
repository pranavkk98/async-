//run the following functions in parallel  and extract the results
const getUser = async () => {
    // gets the user object
    return user;
   }
   const getGroups = async () => {
    // gets the groups
    return groups;
   }
   
   //Along with the async task, start another Promise that rejects when the time out is reached


   //write a function to differentiate between these 2 errors
   const fn = async () => {
    throw new Error();
   };
   try {
    const result = await timeout(fn(), 1000);
   }catch(e) {
    // error or timeout?
   }