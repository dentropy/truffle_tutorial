const express = require('express');
const app = express();
app.use('/', express.static('src'));
app.use('/abi', express.static('truffleWorkspace/build/contracts'));
app.listen(3042, () => console.log('Example app listening on port 3042!'));