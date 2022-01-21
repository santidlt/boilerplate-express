var express = require('express');
var app = express();

console.log("Hello World");
absolutePath = __dirname + "/views/index.html"
absolutePath2 = __dirname + "/public"


app.get("/", function(req, res){
  res.sendFile(absolutePath);
})

app.use("/public", express.static(absolutePath2));


app.get("/json", function(req,res){
  if (process.env.MESSAGE_STYLE == "uppercase") {
  console.log("Hello json".toUpperCase())
} else {
  console.log("Hello json")
}
})























 module.exports = app;
