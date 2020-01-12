const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

//const hostname = '192.168.43.137'
//const hostname = '192.168.0.123'
const hostname = '192.168.1.33'

const https = require('https')
const http = require('http')

app.use(express.static('src'));

var options_http = {
    hostname: hostname,
    path: '/',
    method: 'GET',
}

var options_https = {
    hostname: hostname,
    path: '/',
    method: 'GET',
    key : fs.readFileSync('serverpem/private.pem'),
    cert : fs.readFileSync('serverpem/public.pem'),
}

//http server on
var http_server = http.createServer(options_http,app).listen(3000);

//https server on
var https_server = https.createServer( options_https,app ).listen(443);

app.get('/artest', function(req, res){
    fs.readFile('artest.html',function(error,data){
        if(error){
            console.log(error);
        }
        else{
            res.writeHead(200);
            res.end(data);
        }
    })
});