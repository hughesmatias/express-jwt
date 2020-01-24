const express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
  res.json({
    users: [{
      name: 'nombre1'
    },{
      name: 'nombre2'
    }]
  })
})

module.exports = router;
