/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('author').del()
    await knex('author').insert([
      {id: 1, first_name: 'Gabriel', last_name: 'Garcia Marques', age: 80 },
      {id: 2, first_name: 'Author', last_name: 'Test', age: 15 },
      {id: 3, first_name: 'Eduardo', last_name: 'Galeano', age: 45 },
    ]);
  };
  