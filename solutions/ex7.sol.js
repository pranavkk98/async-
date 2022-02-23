//the 2nd function shall wait for the refresh process without starting a separate one, hence we need to serialize the calls

const wait = (ms) => new Promise((res) => setTimeout(res, ms));
const refresh = async () => {
 console.log("refreshing")
 await wait(1000);
};