var express = require("express");
var app = express();
var router = require("./router/main")(app);

app.use(express.static("node_modules"));
app.use("/script", express.static(__dirname + "/script"));
app.use("/public", express.static(__dirname + "/public"));
app.use("/images", express.static(__dirname + "/images"));
app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

var server = app.listen(3000, function() {
  console.log("Express server has started on port 3000");
});
