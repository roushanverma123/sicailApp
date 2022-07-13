const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! From Roushan!!');

});

app.get('/greetings', (req, res) => {
  res.status(200).send('Greetings! From Roushan!!');

});

app.get('/api/v1/instagram', (req, res) => {
  const instaSocial = {
    username: "roushanverma123",
    followers:66,
    following:77,
    date: Date.now(),
  }
  res.status(200).send({instaSocial});

});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});