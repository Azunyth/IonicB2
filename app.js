var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use("/", require('./web'));

var port = process.env.PORT || 1337;

app.listen(port, function() {
    console.log(`App running on port: ${port}`);
});