
exports.index = {};
exports.index.html = function(req, res){
  res.render('index', { title: 'Login' });
};