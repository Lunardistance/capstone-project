var port = process.env.port || 9010;
var express = require('express')
var app = express();
var bodyParser = require("body-parser");


app.use(function (req, res, next ){
  //website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:" + port);

  //request methods you wish to allow
  res.setHeader("Access-Control-Allow-Origin", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  next();
  //Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type')
//Set to true if you need the website to include cookies in the requests sent to the API
//ie. in case you use sessions
  res.setHeader('Access-Control-Allow-Headers', true);

//pass to next layer of middleware
  next;
});


app.use(bodyParser.urlencoded({ extended: true}));

app.set('view engine', 'ejs');

app.use("/assets", express.static(__dirname + "/assets"));

require('./app/routes')(app);

app.listen(port, function(err){
  if(err)console.log('error', err);

  console.log("server listening on port" + port);

});
