/**
 * Remove last / from url string
 * @param {string} str 
 * @returns {string}
 */
function removeTrailingSlash(str) {
    return str.replace(/\/+$/, '');
}

module.exports = {
    removeTrailingSlash
};