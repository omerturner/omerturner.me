var express = require("express");
var app = express();

works = require('./model/works.json');

var worksLists = Object.keys(works).map(function(value) {
                             return works[value]
                         });

app.use(express.static(__dirname + "/src"));

app.get("/works", function(req, res) {
    res.json(worksLists)
});

app.listen(3000);
console.log("Server running on port 3000");