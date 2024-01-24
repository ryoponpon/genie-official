var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('menu', { title: '【公式】GENIE' });
});

module.exports = router;
