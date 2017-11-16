const express = require('express');
var app = express();

var dataFile = require('./data/data.json');

let info='';

dataFile.speakers.forEach(item => {
  info += `
    <li>
      <h2>${item.name}</h2>
      <p>${item.summary}</p>
    </li>
  `;
  
});

console.log(info);

app.set('port', process.env.PORT || 3600);
app.get('/', (req,res) => {
  

  res.send(`
    <h1>Welcomes</h1>
  `)
  
});
app.get('/speakers', (req,res) => {
  

  res.send(`
    <h1>Roux Meetups</h1>
    ${info}
  `)
  
});
app.get('/speakers/:speakerid', (req,res) => {
  var speaker = dataFile.speakers[req.params.speakerid];


  res.send(`
    <h1>${speaker.title}</h1>
    <h2>${speaker.name}</h2>
    <p>${speaker.summary}</p>
  `)
  
});

const port = app.get('port');

const server = app.listen(port, () => {
  console.log(`listen on port: ${port}`);
  
})

