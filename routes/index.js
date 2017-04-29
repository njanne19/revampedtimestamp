var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/:dateVal', function(req, res) {
  var dateVal = req.params.dateVal;
//Natural Date Options
  var dateFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };



  if (isNaN(dateVal)) {
    var naturalDate = new Date(dateVal);
    naturalDate = naturalDate.toLocaleDateString('en-us', dateFormatOptions);

    var unixDate = new Date (dateVal).getTime()/1000;
  } else {
    var unixDate = dateVal;
    var naturalDate = new Date(dateVal * 1000);
    naturalDate = naturalDate.toLocaleDateString('en-us', dateFormatOptions);
  }
  res.json({unix: unixDate, natural: naturalDate});

});

module.exports = router;
