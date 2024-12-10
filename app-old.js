import http from "http";
// import path from "path";
// import fs from "fs";
// import os from "os";
// const require = require("http");
import add from "./module.js";
// const require = require("http")


const port = 5000;

const controller = (req, res) => {
    // console.log(path.join());
    //   console.log(req.body);
    //   res.statusCode = 400;
    //   res.end("Hello World!");
    if (req.url.includes("welcome")) {
        res.statusCode = 200;
        res.end("Welcome to My Backend Server!");
    } else {
        res.statusCode = 404;
        res.end();
    }

}
const server = http.createServer(controller);
console.log(add());

server.listen(port, () => console.log("Server is UP & Running!"))