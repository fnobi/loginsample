(function (module) {
        var alertNames = [
                'login_success',
                'login_fail',
                'logout_success',
                'logout_fail',
                'signup_success',
                'signup_fail'
        ];

        var alertConfig = function (req, res, next) {
                var locals = {};

                alertNames.forEach(function (name) {
                        locals[name] = (name in req.query);
                });

                res.locals({
                        alert: locals
                });

                next();
        };

        module.exports = alertConfig;
})(module);