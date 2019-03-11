
exports.getAlpha = function() {
    var XLSX = require("xlsx");

    var workbook = XLSX.readFile("./asset/wordbook.xlsx");
    var firstSheetName = workbook.SheetNames[0];
    var firstSheet = workbook.Sheets[firstSheetName];
    var alphaset = XLSX.utils.sheet_to_json(firstSheet);
    return alphaset;
};