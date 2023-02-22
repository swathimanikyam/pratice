const fs = require('fs');
const http = require('http')

const textIn = fs.readFileSync('./start.txt', 'utf-8');
console.log(textIn);


const server = http.createServer((req, res) => {
    res.end('Hello from the server');
})

server.listen(30000, '127.0.0.1', () =>{
    console.log('Listening to request on port 30000');
})