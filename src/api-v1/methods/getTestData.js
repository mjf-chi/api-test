const moment = require('moment');

module.exports = function getTestData(req, res) {
  res.json({
    id: 1,
    time: moment().valueOf(),
  });
}
