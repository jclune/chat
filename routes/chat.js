var express = require('express');
var router = express.Router();
var controller = require('../controller/chat');

router.get('/', controller.chat.html);

module.exports = router;
