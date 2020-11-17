// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var moment = require('moment')

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/timestamp/:date",(req,res) => {

  var validate = function(t){
    console.log(t);
    typeof(t)
    var valid = (new Date(parseInt(t))).getTime() > 0;
    console.log(valid)
    return valid
  }


  if(validate(req.params.date)){
    res.json({
      'unix': new Date(parseInt(req.params.date)).getTime(),
      'utc': new Date(parseInt(req.params.date)).toUTCString()
    })
  } else {
   res.json({
     "error" : "Invalid Date (expected Format: YYYY-MM-DD)"
   })
  }
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
