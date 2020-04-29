const Clarifai = require('clarifai');

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
  apiKey: '6a11f353f8dc464387cf577c5c1df081'
});

const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json('unable to work with API'))
}
const handleDemographics = (req, res) => {
  app.models
    .predict("c0c0ac362b03416da06ab3fa36fb58e3", req.body.input)
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json('unable to work with API'));
}

module.exports = {
  handleApiCall,
  handleDemographics
}