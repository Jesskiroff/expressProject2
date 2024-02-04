const express = require('express');
const app = express();
const PORT = 1337;

app.get('/', (req, res, next) => {
  try {
    res.send(`
            <html>
            <head>
                <title>Cute puppies and kittens site</title>
            </head>
            <body>
                <h1>Adorable puppies and kittens galore</h1>
            </body>
            </html>
            `);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

app.get('/puppies', (req, res) => {
  try {
    res.send(`<h3> dog</h3>`);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

app.get('/kittens', (req, res) => {
  try {gi
    res.send(`<h3> kittens</h3>`);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

app.listen(PORT, () => {
  console.log(`listening to some coding on port ${PORT}`);
});
