const express = require('express');
const router = express.Router();




router.get('/speakers', (req,res) => {  
  let info='';
  let dataFile = req.app.get('appData');

  dataFile.speakers.forEach(item => {
    info += `
      <li>
        <h2>${item.name}</h2>
        <img src="/images/speakers/${item.shortname}_tn.jpg" >
        <p>${item.summary}</p>
      </li>
    `;
    
  });
  // var dataFile = req.app.get('appData');
  res.send(`
  <link rel="stylesheet" type="text/css" href="css/style.css">
  
    <h1>Roux Meetups</h1>
    ${info}
    <script src="/reload/reload.js"></script>
  `)
  
});

router.get('/speakers/:speakerid', (req,res) => {

  var dataFile = req.app.get('appData');
  var speaker = dataFile.speakers[req.params.speakerid];


  res.send(`
    <h1>${speaker.title}</h1>
    <h2>${speaker.name}</h2>
    <img src="/images/speakers/${speaker.shortname}_tn.jpg" >
    <p>${speaker.summary}</p>
    <script src="/reload/reload.js"></script>
  `)
  
});

module.exports = router;