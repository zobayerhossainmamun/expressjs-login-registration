const { setCookie } = require('../utils/session');
const { isEmailExist, createUser, getUser } = require('../services/userService');

/**
 * Submit Login Form
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
async function loginSubmitController(req, res, next) {
    try {
        const data = req.body;
        let user = await getUser(data.email);

        if (user) {
            if (user.password !== data.password) {
                return res.json({ status: 0, message: 'Password is wrong.' });
            }
            setCookie(res, process.env.SESSION_KEY, user.id, '1day');
            res.json({ status: 1, message: 'Login Success.', redirect_url: '/account' });
        } else {
            res.json({ status: 0, message: 'Email does not exist.' });
        }
    } catch {
        res.json({ status: 0, message: 'Internal Server Error.' });
    }
}


/**
 * Submit Signup Form
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
async function signupSubmitController(req, res, next) {
    try {
        const data = req.body;
        const query = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password
        }
        const isExist = await isEmailExist(query.email);
        if (isExist) {
            return res.json({ status: 0, message: 'This email is already exist.' });
        }
        let result = await createUser(query);
        if (result) {
            setCookie(res, process.env.SESSION_KEY, result, '1day');
            res.json({ status: 1, message: 'Signup Success.', redirect_url: '/account' });
        } else {
            res.json({ status: 0, message: 'Error in signup.' });
        }
    } catch(err) {
        console.log(err);
        res.json({ status: 0, message: 'Internal Server Error.' });
    }
}

module.exports = {
    loginSubmitController,
    signupSubmitController
}