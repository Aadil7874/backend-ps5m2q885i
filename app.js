import http from "http"
// const require = require("http")
const server = http.createServer();
const port = 5000;
server.listen(port, () => console.log("Server is UP & Running!"))