var Works = require('../model/works');

module.exports.list = function (req, res) {
  Works.find({}, function (err, results) {
    res.json(results);
  });
}