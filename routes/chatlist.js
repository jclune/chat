var express = require('express');
var router = express.Router();
var controller = require('../controller/chatlist');

router.get('/', controller.chatlist.html);

module.exports = router;