
var XLSX = require("xlsx");

var workbook = XLSX.readFile("./asset/wordbook.xlsx");
var firstSheetName = workbook.SheetNames[0];
var firstSheet = workbook.Sheets[firstSheetName];
var set = XLSX.utils.sheet_to_json(firstSheet);
var alphaset = JSON.stringify(set);

module.exports = function(app, fs) {
  app.get("/alpha", function(req, res) {
    res.render("index4.html", {
      alphaset: set
    });
  });

  app.get("/", function(req, res) {
    res.render("index.html");
  });
  app.get("/cube", function(req, res) {
    res.render("index3.html");
  });
};
