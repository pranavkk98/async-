const getUser = async () => {
    // gets the user object
    return user;
   }
   const getGroups = async () => {
    // gets the groups
    return groups;
   }
   
const [user, groups] = await Promise.all([
    getUser(),
    getGroups(),
   ]);

   const timeout = (prom, time) =>
 Promise.race([
 prom,
 new Promise((_r, rej) => setTimeout(rej, time))
 ]);


 const timeoutError = Symbol();
try {
 const result = await timeout(prom, 1000, timeoutError);
 // handle result
}catch (e) {
 if (e === timeoutError) {
 // handle timeout
 }else {
 // other error
 throw e;
 }
}
