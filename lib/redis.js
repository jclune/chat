var redis = require('redis');

exports.openclient = redis.createClient().on('error', function(err){
  console.log(err);
});

// exports.openclient = function(callback) {
//   var client = redis.createClient(function(err, openclient) {
//     client.on('error', function(err) {
//       throw err;
//     });
//     callback(err, openclient);
//   });
// }