const http = require("http");
const getUserSession = async (req) => {
 // extract the session cookie
 // fetch the session from Redis
 // return the user object
};
const server = http.createServer(async (req, res) => {
    const sessionProm = getUserSession(req);
    // validate request
    // fetch configuration
    const session = await sessionProm;
    // handle request
   });
   
 const session = await  getUserSession(req);
 // handle request

server.listen(8080);