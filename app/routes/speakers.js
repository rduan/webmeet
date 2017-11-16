const express = require('express');
const router = express.Router();




router.get('/speakers', (req,res) => {  
  let info='';
  let dataFile = req.app.get('appData');

  dataFile.speakers.forEach(item => {
    info += `
      <li>
        <h2>${item.name}</h2>
        <p>${item.summary}</p>
      </li>
    `;
    
  });
  // var dataFile = req.app.get('appData');
  res.send(`
    <h1>Roux Meetups</h1>
    ${info}
  `)
  
});

router.get('/speakers/:speakerid', (req,res) => {

  var dataFile = req.app.get('appData');
  var speaker = dataFile.speakers[req.params.speakerid];


  res.send(`
    <h1>${speaker.title}</h1>
    <h2>${speaker.name}</h2>
    <p>${speaker.summary}</p>
  `)
  
});

module.exports = router;