const passport = require('passport');
const { Strategy } = require('passport-local');

passport.use(new Strategy((username, password, done) {
  User.findOne({ username }, (err, user) {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
}));


module.exports = function authenticateUser(req, res) {



}
