var express = require('express');
var app = express()
app.get('/', function(req,res)
{
    res.send('<h1Hrllo Students!</h1>\n<h3>Welcome</h3>');

});
app.listen(9090, function()
{
    console.log("Server running at 9090...");
});