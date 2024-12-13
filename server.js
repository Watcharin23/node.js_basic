const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.get('/writeFile', (req, res) => {
    fs.writeFileSync('test.txt', 'Hello World');
    res.send('File written successfully');
});


app.get('/readFile',(req,res)=> {
    const data = fs.readFileSync('test.txt','utf8');
    res.send(data);
});


app.post('/hello',(req,res) => {
    res.send(req.body);
});

app.put('/myput',(req,res) => {
    res.send(req.body);
});

app.delete('/mydelete/:id',(req,res) => {
    res.send('id = ' + req.params.id);
});

app.get('/hello', (req,res) =>  {
    res.send('Hello World11');    
});


app.get('/hello/:name', (req,res) => {
    res.send(`Hello ${req.params.name}`);
});

// multiple 

app.get('/hello/:name/:age',(req, res) => {
    res.send('name =' + req.params.name + ' age = ' + req.params.age);
});

app.listen(3001,() => {
    console.log('Server is runing on 127.0.0.3001');
});