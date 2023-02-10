const express = require('express');


//instanciate express app

const app = express();

//Define server Portal
const port = 3000;

//create a default route
app.get('/', (req, res) => {
    res.send('Hello World');
});

//start listening on port 3000
app.listen(port);
