/**
 * Login Controller
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
function loginController(req, res, next) {
  res.render('login', {
    title: 'Login User'
  });
}

/**
 * Signup Controller
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
function signupController(req, res, next) {
  res.render('signup', {
    title: 'Signup User'
  });
}

/**
 * Account Controller
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
function accountController(req, res, next) {
  res.render('account', {
    title: 'Account dashboard'
  });
}

module.exports = {
  loginController,
  signupController,
  accountController
}