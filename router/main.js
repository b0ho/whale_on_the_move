var XLSX = require("xlsx");

var workbook = XLSX.readFile("./asset/wordbook.xlsx");
var firstSheetName = workbook.SheetNames[0];
var firstSheet = workbook.Sheets[firstSheetName];
var set = XLSX.utils.sheet_to_json(firstSheet, { raw: true });

var alph = [];
var phon = [];
var han = [];

for (var i in set) {
  alph[i] = set[i].s_alpha;
  phon[i] = set[i].s_phonetic;
  han[i] = set[i].s_hangeul;
}

module.exports = function(app, fs) {
  app.get("/", function(req, res) {
    res.render("index.html", {
      alph: alph,
      phon: phon,
      han: han
    });
  });
};
