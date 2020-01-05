const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const hostname = '192.168.43.137'
const https = require('https')

app.listen(port,hostname,() => console.log(`Example app listening on https://${hostname}:${port}!`))

var options = {
    key : fs.readFileSync('serverpem/private.pem'),
    cert : fs.readFileSync('serverpem/public.pem')
}

var https_server = https.createServer( options,(req,res) => {
    fs.readFile('artest.html',function(error,data){
        if(error){
            console.log(error);
        }
        else{
            res.writeHead(200);
            res.end(data);
        }
    })
}).listen(443);

app.get('/', function(req, res){
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
