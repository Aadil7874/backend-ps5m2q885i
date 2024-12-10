import http from "http"
// const require = require("http")

const controller = (req, res) => {
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
const port = 5000;
server.listen(port, () => console.log("Server is UP & Running!"))