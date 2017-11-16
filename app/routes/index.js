const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  

  res.send(`
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <h1>Welcomes to my</h1>
    <img src="/images/misc/background.jpg" style="height:300px;">
    <script src="/reload/reload.js"></script>
  `)
  
});

module.exports = router;