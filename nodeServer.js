const http = require('http');

const sever = http.createServer((req,res) => {
    res .writeHead(200,{'Content-type': 'text/plain'});
    res.end('Hello Word111');
});

sever.listen(3001, '127.0.0.1', () => {
    console.log('sever is running on 127.0.0.1:3001');
})