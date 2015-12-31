var express              = require("express"),
      app                    = express(),
      bodyParser        = require('body-parser'),
      mongoose         = require('mongoose'),
      worksController = require('./server/controller/works-controller');

mongoose.connect('mongodb://localhost:27017/portfolio');

app.use(express.static(__dirname + "/src"));
app.use(bodyParser.json());

//REST API
app.get('/api/works', worksController.list);

app.listen(3000);
console.log("Server running on port 3000");