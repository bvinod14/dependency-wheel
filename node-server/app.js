const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const reactViews = require('express-react-views');
const session = require('express-session');

//Routes
const Index = require('./routes/index');
const CountDown = require('./routes/countDown');
const FamilyTree = require('./routes/familyTree');

const app = express();

//Cache-Control for Back button issue
app.use(function (req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next()
});
//

//view engine setup for react
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../frontend/public')));
app.use(session({
  name: '_SESSION',
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 86400000 },
  secure: true,
  httpOnly: true
}));

//map the routes
app.use('/', Index);
app.use('/countDown', CountDown);
app.use('/familyTree', FamilyTree);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  //next(err);
  console.log("inside 404 function");
  res.render('404', { url: req.url });
  return;
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;