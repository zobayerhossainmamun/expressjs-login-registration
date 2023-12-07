const express = require('express');
const { loginController, signupController, accountController, logoutController } = require('./routes');
const router = express.Router();

router.get('/', loginController);
router.get('/signup', signupController);
router.get('/account', accountController);
router.get('/account/logout', logoutController);

module.exports = router;