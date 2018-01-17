var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(5000, function () {
    console.log('listening server 5000 port');
});