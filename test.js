var express = require('express');
var app = express();
var client_id = 'MqIs5qaBHMxGw2g8roJ5';//개발자센터에서 발급받은 Client ID
var client_secret = 'HEsxkBPZoY'; //개발자센터에서 발급받은 Client Secret
var query = "hi";
app.get('/translate', function (req, res) {
   var api_url = 'https://openapi.naver.com/v1/language/translate';
   var request = require('request');
   var options = {
       url: api_url,
       form: {'source':'en', 'target':'ko', 'text':query},
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.post(options, function (error, response, body) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
         res.end(body);
   });
 });
 app.listen(3001, function () {
   console.log('http://127.0.0.1:3001/translate app listening on port 3000!');
 });  