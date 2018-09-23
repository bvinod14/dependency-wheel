const express = require('express');
const router = express.Router();
const resolvePath = require('./resolvePaths');

const stylesList = ['index.css'];
const scriptsList = ['index.js'];
const styles = resolvePath(stylesList, 'countDown', 'css');
const scripts = resolvePath(scriptsList, 'countDown');

router.get('/', function (req, res, next) {
  res.render('index', { pageTitle: 'Count Down Timer', styles: styles, scripts: scripts })
})

module.exports = router;