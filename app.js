var http = require('http');
var pg = require('pg');
var express = require('express');
var app = express();
var path = require('path');
var connectionString = "postgres://postgres:1234@localhost:5432/IotAssetList";
var client = new pg.Client(connectionString);
var bodyParser = require("body-parser");
var $ = require("jquery");
app.use(bodyParser.urlencoded({ extended: false }));

client.connect(function(err) {
  if(err)
    {
      return console.error('could not connect to postgres', err);
    }else
    {
      console.log("Database connection established");
    }
});
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/a'));
// });
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'www')));
app.get('/asset', function (req, res){
client.query('SELECT "Id","Name","Description","ReferenceLink","ApproximateCost","Images" FROM "Assets"."transportationSensorTb" ORDER BY "Id" ASC', (err, result) => {
    var length=result.rows.length;
    if(err) {
      console.log('Error in database connection', err);
      res.status(503).send("Database connection problem");
    }
    else
    {
             if(length>0){
               var var1 = {};
               var1 = result.rows;

               res.send(JSON.stringify(var1));
             }
           }

       });
  });


  var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

  });
