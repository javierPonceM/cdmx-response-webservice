const express = require('express');
const router = express.Router();
var getResponse = require('../wsCDMX/simulationWebService');


router.post('/simulation/json/wsCDMX', function(req, res, next) {
  console.log(req);
  res.status(200).json(getResponse.getResponse());
});

router.post('/simulation/soap/wsCDMX', function(req, res, next) {
  console.log(req);
  res.status(200).json(getResponse.getResponse());
});

module.exports = router;
// headers: {
//   'accept-encoding': 'gzip,deflate',
//   'content-type': 'application/xml',
//   'content-length': '3544',
//   host: 'localhost:3001',
//   connection: 'Keep-Alive',
//   'user-agent': 'Apache-HttpClient/4.1.1 (java 1.5)'
// },