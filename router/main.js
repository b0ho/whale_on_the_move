
var randomWords = require('random-words');
words = randomWords(5, { min: 3, max: 10 })
console.log(words);


module.exports = function (app, fs) {
  app.get("/alpha", function (req, res) {
    res.render("index4.html", {
      words : words
    });
  });
  app.get("/", function (req, res) {
    res.render("index.html");
  });
  app.get("/cube", function(req, res) {
    res.render("index3.html");
  });
};
