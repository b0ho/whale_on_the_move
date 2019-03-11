var randomWords = require("random-words");

//랜덤 단어를 생성
words = randomWords(5, { min: 3, max: 10 });
words = words.join(" ");
words = words.toString();

//단어들을 번역
var client_id = "MqIs5qaBHMxGw2g8roJ5"; //개발자센터에서 발급받은 Client ID
var client_secret = "HEsxkBPZoY"; //개발자센터에서 발급받은 Client Secret
var query = words;
var api_url = "https://openapi.naver.com/v1/language/translate";
var request = require("request");
var options = {
  url: api_url,
  form: { source: "en", target: "ko", text: query },
  headers: {
    "X-Naver-Client-Id": client_id,
    "X-Naver-Client-Secret": client_secret
  }
};

module.exports = function(app, fs) {
  app.get("/alpha", function(req, res) {
    //request.post(options, function(error, response, body) {
    //var alpha = JSON.parse(body).message.result.translatedText;
    //단어와 해석을 보냄
    res.render("index4.html", {
      words: words
      //trans: alpha
    });
    //});
  });

  app.get("/", function(req, res) {
    res.render("index.html");
  });
  app.get("/cube", function(req, res) {
    res.render("index3.html");
  });
};
