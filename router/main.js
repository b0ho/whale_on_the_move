module.exports = function(app) {
  app.get("/alpha", function(req, res) {
    res.render("index4.html");
  });
  app.get("/", function(req, res) {
    res.render("index.html");
  });
  app.get("/cube", function(req, res) {
    res.render("index3.html");
  });
};
