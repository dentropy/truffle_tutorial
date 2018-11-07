const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
app.use('/', express.static('src'))
app.use('/abi', express.static('etherlimeWorkspace/build'))

app.get('/etherlime', (req, res) => res.send(fs.readFileSync(path.resolve(__dirname, 'etherlimeWorkspace/.etherlime-store/.history.json'), 'utf8')))

app.listen(3042, () => console.log('Example app listening on port 3042!'))