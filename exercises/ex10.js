// what will be the output of the foll function 
const strings = ["msg1", "msg2", "msg3"];
strings.map(double);


const strings = ["msg1", "msg2", "msg3"];
await strings.map(digestMessage);





// synchronous
[1, 2, 3, 4, 5].filter((i) => {
    return i % 2 === 0;
   });

   // asynchronous
   [1, 2, 3, 4, 5].filter(async (i) => {
    return i % 2 === 0;
   });



   
   // synchronous
{
    const res = [];
    for (let i of [1, 2, 3]){
    res.push(i + 1);
    }
    
   }
   // asynchronous
   {
    const res = [];
    for (let i of [1, 2, 3]){
    await sleep(10);
    res.push(i + 1);
    }
  
   }

  
const arr = [1, 2, 3];
const syncRes = arr.reduce((memo, e) => {
 return memo + e;
}, 0);
console.log(syncRes);

const arr = [1, 2, 3];
const syncRes = arr.reduce((memo, e) => {
 return memo + e;
}, 0);
console.log(syncRes);



const arr = [1, 2, 3];
const syncRes = arr.map((i) => {
 return i + 1;
});

const arr = [1, 2, 3];
const asyncRes = await Promise.all(arr.map(async (i) => {
 await sleep(10);
 return i + 1;
}));

