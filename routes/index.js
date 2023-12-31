const { clearCookie } = require('../utils/session');

/**
 * Index Controller
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
function indexController(req, res, next) {
  res.render('index', {
    title: 'Express Login Registration System'
  });
}

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

/**
 * Logout account route
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
function logoutController(req, res, next) {
  clearCookie(res, process.env.SESSION_KEY);
  res.redirect('/');
}

module.exports = {
  indexController,
  loginController,
  signupController,
  accountController,
  logoutController
}