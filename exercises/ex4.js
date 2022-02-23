//convert the following function, so that the user session starts right after the request comes

const http = require("http");
const getUserSession = async (req) => {
 // extract the session cookie
 // fetch the session from Redis
 // return the user object
};
const server = http.createServer(async (req, res) => {
 // validate request
 // fetch configuration
 const session = await  getUserSession(req);
 // handle request
});
server.listen(8080);