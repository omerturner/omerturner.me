var mongoose = require('mongoose');

module.exports = mongoose.model('works', {
  href: String,
  name: String,
  type: String,
  img: [String],
  description: String,
  link: String,
  github: String
});