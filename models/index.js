var mongoose = require('mongoose'),
    config   = require('config');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
	username: String,
	password: String
});

var User = mongoose.model('User', UserSchema);

// var user = new User();
// user.username = 'fnobi';
// user.password = 'hogehoge';
// user.save(function(err) {
// 	if (err) { console.log(err); }
// });

// User.findOne({
// 	'username': 'fnobi'
// }, 'username password', function (err, user) {
// 	if (err) {
// 		console.error(err);
// 		process.exit();
// 	}
// 	console.log(
// 		'%s:%s',
// 		user.username,
// 		user.password
// 	);
// });

module.exports.User = User;