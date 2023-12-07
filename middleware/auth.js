const url = require('url');
const { removeTrailingSlash } = require('../utils/helper');
const { getCookie, clearCookie } = require('../utils/session');
const { getUserById } = require('../services/userService');
const AUTH_URL = ['/login', '/action/login', '/signup', '/action/signup'];

/**
 * This function used to redirect to url with message.
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {string} msg 
 * @param {string} url 
 */
const Redirect = (req, res, msg, url) => {
    if (req.xhr) {
        res.send({ status: 0, msg: msg, redirect_url: url });
    } else {
        res.redirect(url);
    }
}

/**
 * Authentication Middleware
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
async function auth(req, res, next) {
    try {
        const urlPath = removeTrailingSlash(url.parse(req.originalUrl).pathname);
        const urlParts = urlPath.split('/');
        const cookie = getCookie(req, process.env.SESSION_KEY);
        res.locals.IS_LOGIN = false;

        if (cookie) {
            if (AUTH_URL.includes(urlPath)) {
                return Redirect(req, res, "You are already logged in.", '/account');
            }
            const user = await getUserById(cookie);
            if (!user) {
                clearCookie(res, process.env.SESSION_KEY);
                return Redirect(req, res, "Please login again.", '/login');
            }
            res.locals.IS_LOGIN = true;
            res.locals.AUTH_DATA = user;
        } else {
            if (urlParts.length > 1) {
                if (urlParts[1] === 'account') {
                    return Redirect(req, res, "Please login first.", '/login');
                }
            }
        }
    } catch (err) {
        console.log(err);
    }
    next();
}
module.exports = auth;