const express = require('express');
const app = express();
const port =  process.env.PORT || 4000;
const format = require('date-format');

//for basic enterence of the routes
app.get('/', (req, res) => {
  res.status(200).json({msg:"hello from Roushan!!"});

});

//instagram profile
app.get('/api/v1/instagram', (req, res) => {
  const instaSocial = {
    username: "roushanverma123",
    followers:70,
    following:79,
    date: format.asString("dd-MM-yyyy, hh:mm:ss",new Date),
  }
  res.status(200).json(instaSocial);

});

//facebook profile
app.get('/api/v1/facebook', (req, res) => {
  const facebookSocial = {
    username: "roushanvermapage",
    followers:100,
    following:200,
    date: format.asString("dd-MM-yyyy, hh:mm:ss",new Date),
  }
  res.status(200).json(facebookSocial);

});

//linkedin profile
app.get('/api/v1/linkedin', (req, res) => {
  const linkedinSocial = {
    username: "roushanvermaofficial",
    followers:660,
    following:770,
    date: format.asString("dd-MM-yyyy, hh:mm:ss",new Date),
  }
  res.status(200).json(linkedinSocial);

});

//testing api { send anything }
app.get('/api/v1/:token', (req, res) => {
  res.status(200).json({param: req.params.token});

});


//listening to port 4000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});