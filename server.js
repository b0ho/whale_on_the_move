var express = require("express");
var app = express("./router/main");
var router = require("./router/main")(app);


app.use(express.static("node_modules"));
app.use("/script", express.static(__dirname + "/script"));
app.use("/public", express.static(__dirname + "/public"));
app.use("/asset", express.static(__dirname + "/asset"));
app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

var server = app.listen(3000, function() {
  console.log("http://localhost:3000/alpha");
});
