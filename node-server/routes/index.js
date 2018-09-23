const express = require('express');
const router = express.Router();
const resolvePath = require('./resolvePaths');

const stylesList = ['index.css'];
const scriptsList = ['index.js'];
const styles = resolvePath(stylesList,'searchAndDetails','css');
const scripts = resolvePath(scriptsList,'searchAndDetails');

router.get('/', function(req, res, next){
  res.render('index', {pageTitle: 'Dependency Wheel', styles:styles, scripts:scripts})
})

module.exports = router;