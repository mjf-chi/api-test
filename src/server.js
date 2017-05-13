const Express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const bodyParser = require('body-parser');

const app = new Express();

app.enable('trust proxy');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

let port = process.env.PORT || 8081;

app.use('/', require('./api-v1'));
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`HTTP service is running on port ${port}`);
  }
});
