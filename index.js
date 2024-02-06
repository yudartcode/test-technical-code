const express = require('express');
const { mainApp } = require('./todos');
const app = express();
const port = 3000;

app.get('/', mainApp);

app.listen(port, () => {
    console.log("running on port " + port);
})