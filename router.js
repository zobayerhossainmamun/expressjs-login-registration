const express = require('express');
const { loginController, signupController, accountController } = require('./routes');
const router = express.Router();

router.get('/', loginController);
router.get('/signup', signupController);
router.get('/account', accountController);

module.exports = router;