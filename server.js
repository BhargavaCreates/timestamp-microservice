var express = require('express');
var app = express();
var moment = require('moment')

// enable CORS 
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/timestamp',(req,res) => {
  res.json({
    "unix": Date.now(),
    "utc": new Date().toUTCString()
  })
})

app.get('/api/timestamp/:dateString',(req,res) => {
  const dateString = req.params.dateString;
  let date;

  if(!dateString){
    date = new Date();
  }

  if(!isNaN(dateString)){
    date = new Date(parseInt(dateString));
  } else {
    date = new Date(dateString);
  }

  if(date.toString() === 'Invalid Date'){
    res.json({
      error: date.toString()
    })
  } else {
    res.json({
      unix: date.getTime(),
      utc : date.toUTCString()
    })
  }



}) 

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
