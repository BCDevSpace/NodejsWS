const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) =>{
    //lodash
    const num = _.random(0, 25);
    console.log(num);
    
    //console.log (req.url, req.method);
    let path = './views/';

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200; //status codes
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us': //redirects
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    //res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path, (err, data) =>{
        if (err){
            console.log(err);
            res.end();
        }  else {
            res.end(data);
        }
        
    });   
    
});

server.listen(3000, 'localhost', ()=>{
    console.log('listing for request on port 3000');
});