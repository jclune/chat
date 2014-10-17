var redis = require('redis');
var client = require('../lib/redis');

exports.chat = {};
exports.chat.html = function(req, res) {
    var user = req.param('user');
    var room = req.param('room');

    var roomExists;
    var roomId;
    var roomLength = 0;

    //get the number of roomId values for the room:"name" key in the set
    client.openclient.scard('room:' + room, function(err, output) {
        if (err) return;
        console.log(output);
        roomExists = output;
        if (roomExists) {
            client.openclient.smembers('room:' + room, function(err, output) {
                if (err) return;
                console.log(output[0]);
                roomId = output[0];

                res.render('chat', {
                    title: 'Join Chat',
                    user: user,
                    room: room,
                    roomId: roomId
                });
            });
        } else {
            //get length of room hash and use that as id for new room
            client.openclient.hlen('room:name', function(err, output) {
                if (err) return;
                console.log(output);
                roomLength = output;
                client.openclient.hmset('room:name', roomLength, room, redis.print);
                client.openclient.sadd('room:' + room, roomLength, redis.print);

                res.render('chat', {
                    title: 'New Chat',
                    user: user,
                    room: room,
                    roomId: roomLength
                });
            });
        }

    });
};