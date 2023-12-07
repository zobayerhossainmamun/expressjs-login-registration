/**
 * Set cookies to browser.
 * @param {import("express").Response} res 
 * @param {string} key 
 * @param {string} value 
 * @param {string} expires 
 */
const setCookie = (res, key, value, expires) => {
    let expires_time = 0;

    switch (expires) {
        case "5min":
            expires_time = 300000;
            break;

        case "1day":
            expires_time = 86400000;
            break;

        case "7day":
            expires_time = 604800000;
            break;

        case "1month":
            expires_time = 604800000;
            break;
        default:
            expires_time = 86400000;
    }

    res.cookie(key, value, {
        maxAge: expires_time,
        httpOnly: true,
        path: '/',
        signed: true
    });
};


/**
 * Get Cookies from browser by key.
 * @param {import("express").Request} req 
 * @param {string} key 
 * @returns {string}
 */
const getCookie = (req, key) => {
    if (typeof req.signedCookies[key] !== "undefined") {
        return req.signedCookies[key];
    } else {
        return false;
    }
};

/**
 * Clear cookie from browser by key.
 * @param {import("express").Response} res 
 * @param {string} key 
 */
const clearCookie = (res, key) => {
    res.clearCookie(key, { path: '/' });
}

module.exports = {
    setCookie,
    getCookie,
    clearCookie
}