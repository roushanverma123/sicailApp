const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! From Roushan!!');

});

app.get('/greetings', (req, res) => {
  res.send('Greetings! From Roushan!!');

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});