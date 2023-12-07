const express = require('express');
const router = express.Router();
const { loginController, signupController, accountController, logoutController, indexController } = require('./routes');
const { loginSubmitController, signupSubmitController } = require('./routes/action');

// General Controller
router.get('/', indexController);
router.get('/login', loginController);
router.get('/signup', signupController);
router.get('/account', accountController);
router.get('/account/logout', logoutController);

// Ajax Action Controller
router.post('/action/login', loginSubmitController);
router.post('/action/signup', signupSubmitController);

module.exports = router;