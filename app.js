const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  res.status(200).send('Hello, GitHub Workflow!');
});
app.listen(3000, () => {
    console.log('App cracking on 3000!!!')
})
module.exports = app;
