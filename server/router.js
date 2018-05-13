const Authentication = require('./authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
	app.get('/', (req, res) => {
		res.send('hi there');
	});
	app.post('/signin', Authentication.signin);
	app.post('/signup', Authentication.signup);
};
