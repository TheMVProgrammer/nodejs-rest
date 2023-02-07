const http = require('http'); //Me permite crear un servidor, manejar las peticiones y crear las respuestas

let database = [];

function getTaskHandler(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(database));
    res.end();
}

function createTaskHandler(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write('POST request received'); 
    res.end();
}

const server = http.createServer((req, res) => {
    const { url, method } = req; 

    //Logger
    console.log(`URL: ${url} - METHOD: ${method}`);   

    switch(method) {
        case "GET":
            if(url === '/') {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.write(JSON.stringify({message: 'Hello world'}));
                res.end();
            }
            else if (url === '/tasks') {
                getTaskHandler(req, res);
            }
        case "POST":
            if (url === '/tasks') {
                createTaskHandler(req, res);
            }
        // case "PUT":
        // case "DELETE":
        // default: 
    } 
});

server.listen(3000);
console.log('Server on port:', 3000);