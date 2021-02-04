const express = require('express');
const router = express.Router();
const path = require('path');

const views = path.join(__dirname, '../views/');

router.get('/', (req, res) => {
  // console.log(req.params.id);
  res.sendFile(views + 'index.html');
});

module.exports = router;
