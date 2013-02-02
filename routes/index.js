var passport = require('passport'),
    models   = require(__dirname + '/../models'),
    User     = models.User;

exports.index = function(req, res){
        res.locals({
                user: req.user
        });
        res.render('index', {
                title: 'Express'
        });
};

exports.login = passport.authenticate('local', {
        failureRedirect: '/?login_fail=1',
        successRedirect: '/?login_success=1'
});


exports.logout = function(req, res){
        try {
                req.logout();
        } catch (e) {
                res.redirect('/?logout_fail=1');
        }
        res.redirect('/?logout_success=1');
};

exports.signup = function (req, res) {
        var username = req.body.username;
        var password = req.body.password;

        User.findOne({ username: username }, function (err, user) {
                if (err) {
                        throw err;
                }
                if (user) {
                        res.redirect('/?signup_fail=1');
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
                        res.redirect('/?signup_success=1');
                });
        });

};