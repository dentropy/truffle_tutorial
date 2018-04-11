const express = require('express');
const app = express();
const fs = require('fs');
//const ip = require("ip");// ip.address() 
app.use('/src', express.static('src'));
app.use('/abi', express.static('truffleWorkspace/build/contracts'));
app.get('/', function (req, res) {
    fs.readFile('./src/index.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data);

        console.log("\n--> Success, you've Requested a page from server.js !!! ");
    });
});
//Host the app
app.listen(3042, () => console.log('Example app listening on port 3042!'));