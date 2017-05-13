const {
  authUser,
  getTestData,
  registerUser,
  updateUser,
} = require('./methods');

module.exports = router = (require('express-promise-router')());

// test api routes
router.get('/alive', getTestData);

// user authentication
router.post('/authenticate', authUser);
router.post('/register', registerUser);
router.get('/current', getCurrentUser);

// user settings
router.post('/:_id', updateUser);


