/**
 * Submit Login Form
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
function loginSubmitController(req, res, next) {
    try {
        const data = req.body;

        res.json({ status: 1, message: 'Login Success.', redirect_url: '/account' });
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
function signupSubmitController(req, res, next) {
    try {
        const data = req.body;

        res.json({ status: 1, message: 'Signup Success.', redirect_url: '/account' });
    } catch {
        res.json({ status: 0, message: 'Internal Server Error.' });
    }
}