const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

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
