const knex = require("../db/knex");

/**
 * Check if email is exist in users table.
 * @param {string} email 
 * @returns {boolean}
 */
async function isEmailExist(email) {
    const check_email = await knex('users').select('id').where('email', email).limit(1);
    if (check_email.length === 0) {
        return false;
    } else {
        return true;
    }
}
/**
 * Create user in users table and return id.
 * @param {object} data 
 * @returns {number}
 */
async function createUser(data) {
    let result = await knex('users').insert(data).returning('id');
    if (result) {
        return result[0].id;
    } else {
        return false;
    }
}

/**
 * Get user information by user email.
 * @param {string} email 
 * @returns {object}
 */
async function getUser(email) {
    let result = await knex('users').select('*').where('email', email).limit(1);
    if (result.length > 0) {
        return result[0];
    } else {
        return false;
    }
}

/**
 * Get user information by user id.
 * @param {string} id 
 * @returns {object}
 */
async function getUserById(id) {
    let result = await knex('users').select('*').where('id', id).limit(1);
    if (result.length > 0) {
        return result[0];
    } else {
        return false;
    }
}

module.exports = {
    isEmailExist,
    createUser,
    getUser,
    getUserById
}