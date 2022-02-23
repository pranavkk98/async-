//Supposing you made a call to a remote server and it failed, how should it retry the req, so that it eventually succeeds while also mininimizing the calls made?


//the foll code fails 90% of the time, write a callWithRetry fn to tackle this issue
const wait = (ms) => new Promise((res) => setTimeout(res, ms));
const maybeFail = (successProbability, result, error) =>
 new Promise((res, rej) => Math.random() < successProbability
 ? res(result)
 : rej()
 );
const maybeFailingOperation = async () => {
 await wait(10);
 return maybeFail(0.1, "result", "error");
}

//write a fn for a progress call
//Progress calls: Another class of retriable operations is when each call might make some
//progress towards completion but might not reach it.


//the following is a code which It returns a progress field that goes from 0 to 1, and a result when
//the call is fully finished. It also needs to know the current progress, which
//is a parameter for the call:

const progressingOperation = async (startProgress = 0) => {
    await wait(10);
    const progress = Math.round(
    Math.min(startProgress + Math.random() / 3, 1) * 10
    ) / 10;
    return {
    progress,
    result: progress === 1 ? "result" : undefined,
    };
   }
   