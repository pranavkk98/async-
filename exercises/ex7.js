//the following codde is broken as there are 2 concurrent alls coming to refresh the value, hence the refresh function is called twice

const badCachingFunction = (() => {
    const cacheTime = 2000;
    let lastRefreshed = undefined;
    let lastResult = undefined;
    return async () => {
    const currentTime = new Date().getTime();
    // check if cache is fresh enough
    if (lastResult === undefined ||
    lastRefreshed + cacheTime < currentTime) {
    // refresh the value
    lastResult = await refresh();
    lastRefreshed = currentTime;
    }
    return lastResult;
    }
   })();
   