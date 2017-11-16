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


app.set('port', process.env.PORT || 3600);
app.set('appData', dataFile);

app.use(require('./routes/index'))
app.use(require('./routes/speakers'))


const port = app.get('port');

const server = app.listen(port, () => {
  console.log(`listen on port: ${port}`);
  
})

