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

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(404).send('Page Not Found');
  res.status(500).send('Something is broken');
});

app.listen(3000);
console.log("Server running on port 3000");