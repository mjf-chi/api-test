const { 
  getTestData,
} = require('./methods');

module.exports = router = (require('express-promise-router')());

router.get('/test', getTestData);


