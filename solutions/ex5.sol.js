const {
    getGithubAccountByUserNameCallback,
    getGithubAccountByUserNamePromise,
} = require('./github/api');

let users = ['mathias54', 'ndnzingano'];

users = users.map(user => getGithubAccountByUserNamePromise(user));

Promise.all(users).then(newUsers => {
    console.log(newUsers);
});

const getUsers = async () => {
    const asyncUsers = users.map(user => getGithubAccountByUserNamePromise(user));
    for await (let user of asyncUsers) {
        console.log(user);
    }
};

getUsers();

const promisifiedCheckAdmin = (id) => new Promise((res) => {
    if (/* admin logic */) {
    res(true);
    }else {
    res(false);
    }
   };