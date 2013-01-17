
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.locals({
		user: req.user
	});
	res.render('index', {
		title: 'Express'
	});
};