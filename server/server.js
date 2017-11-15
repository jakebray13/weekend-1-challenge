var express = require('express');

var app = express(); //app is what is returned when we call express as function

app.use(express.static('server/public')); //but also... express is an object with methods

app.listen(5000, function() {
    console.log('Listening on port 5000')
});