
/*
 * GET home page.
 */

var models = require(__dirname + '/../models');
var User = models.User;

exports.index = function(req, res){
	res.locals({
		user: req.user
	});
	res.render('index', {
		title: 'Express'
	});
};

exports.signup = function (req, res) {
	var username = req.body.username;
	var password = req.body.password;

	User.findOne({ username: username }, function (err, user) {
		if (err) {
			throw err;
		}
		if (user) {
			res.redirect('/signup');
			return;
		}

		var newUser = new User({
			username: username,
			password: password
		});

		newUser.save(function (err, user) {
			if (err) {
				throw err;
			}
			res.redirect('/');
		});
	});

};