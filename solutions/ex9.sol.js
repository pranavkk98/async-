const callWithRetry = async (fn, depth = 0) => {
    try {
    return await fn();
    }catch(e) {
    if (depth > 7) {
    throw e;
    }
    await wait(2 ** depth * 10);
    
    return callWithRetry(fn, depth + 1);
    }
   }

   const result = await callWithRetry(maybeFailingOperation);


   //progress call
   const callWithProgress = async (fn, status, depth = 0) => {
    const result = await fn(status);
    // check completion
    if (result.progress === 1) {
    // finished
    return result.result;
    }else {
    // unfinished
    if (depth > 7) {
    throw result;
    }
    await wait(2 ** depth * 10);
    
    return callWithProgress(fn, result.progress, depth + 1);
    }