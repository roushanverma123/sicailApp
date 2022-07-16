const express = require('express');
const app = express();
const port =  process.env.PORT || 4000;
const format = require('date-format');


app.get('/', (req, res) => {
  res.status(200).json({msg:"hello from Roushan!!"});

});

app.get('/greetings', (req, res) => {
  res.status(200).json({msg:"greetings from Roushan!!"});

});

app.get('/api/v1/instagram', (req, res) => {
  const instaSocial = {
    username: "roushanverma123",
    followers:66,
    following:77,
    date: format.asString("dd-MM-yyyy, hh:mm:ss",new Date),
  }
  res.status(200).json(instaSocial);

});

app.get('/api/v1/facebook', (req, res) => {
  const facebookSocial = {
    username: "roushanvermapage",
    followers:100,
    following:200,
    date: format.asString("dd-MM-yyyy, hh:mm:ss",new Date),
  }
  res.status(200).json(facebookSocial);

});

app.get('/api/v1/linkedin', (req, res) => {
  const linkedinSocial = {
    username: "roushanvermaofficial",
    followers:66,
    following:77,
    date: format.asString("dd-MM-yyyy, hh:mm:ss",new Date),
  }
  res.status(200).json(linkedinSocial);

});

app.get('/api/v1/:token', (req, res) => {
  res.status(200).json({param: req.params.token});

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});