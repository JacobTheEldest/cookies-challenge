const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/login', (req, res) => {
  res.cookie('name', req.query.user);
  res.send('Thanks for logging in');
})

app.get('/hello', (req, res) => {
  res.send(`Welcome ${req.cookies.name}`);
})


app.listen(port, () => console.log(`Cookies-challenge app listening at http://localhost:${port}`))
