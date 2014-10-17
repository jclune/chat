var redis = require('redis');
var client = require('../lib/redis');

exports.chatlist = {};
exports.chatlist.html = function(req, res) {
    var user = req.param('user');

    client.openclient.hgetall('room:name', function(err, output) {
        if (err) return;
        console.log(output);
        
        // var socketclients = io.of('/').sockets;
        // var socketclients2 = io.of('/').sockets;
        // console.log('namespace / ',socketclients);

        res.render('chatlist', {
            title: 'Chat List',
            user: user,
            chatlist: output
        });
    });
};