require('dotenv').config();
const express = require('express');
const open = require('open');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('dist'));

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}/`)
  open(`http://localhost:${port}/`);
})