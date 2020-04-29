const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const image = require('./controllers/image');

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })
app.post('/demographics', (req, res) => { image.handleDemographics(req, res) })

app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});
