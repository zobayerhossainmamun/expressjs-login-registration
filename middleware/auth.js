/**
 * Authentication Middleware
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
function auth(req, res, next) {
    try {
        

    } catch (err) {
        console.log(err);
    }
    next();
}
module.exports = auth;