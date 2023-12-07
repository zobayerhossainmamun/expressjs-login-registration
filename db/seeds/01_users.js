/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  return knex('users').insert({
    firstname: 'Test',
    lastname: 'User',
    email: 'test@gmail.com',
    password: '12345678'
  });
};
