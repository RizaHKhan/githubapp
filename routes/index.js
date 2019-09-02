var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', (req, res, send) => {
  res.render('about')
})


router.get('/contact', (req, res, send) => {
  res.render('contact')
})


module.exports = router;
