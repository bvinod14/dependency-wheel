const express = require('express');
const router = express.Router();
const resolvePath = require('./resolvePaths');

const stylesList = ['index.css'];
const scriptsList = ['index.js'];
const styles = resolvePath(stylesList, 'familyTreeData', 'css');
const scripts = resolvePath(scriptsList, 'familyTreeData');

router.get('/', function (req, res, next) {
  res.render('index', { pageTitle: 'Family tree data', styles: styles, scripts: scripts })
})

module.exports = router;