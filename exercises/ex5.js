//Use Promisified functions to do the required tasks

const {
    getGithubAccountByUserNameCallback,
    getGithubAccountByUserNamePromise,
} = require('./github/api');

let users = [] //fill in any 2 github users

users = users.map(user => getGithubAccountByUserNamePromise(user));
//Promisify the users

const getUsers = async () =>{
    //get the async users
}

//convert the following code into Promisified one
const checkAdmin = (id, isAdmin, notAdmin) => {
    if (/* admin logic */) {
    isAdmin();
    }else {
    notAdmin();
    }
   };
