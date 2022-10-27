/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('library').del()
  await knex('library').insert([
    {id: 1, name: 'Santo Domingo Savio', address: 'CR 45 #fake-12', city: 'Medellin', schedule: 'Mon-Fri 9-18'},
    {id: 2, name: 'Comfama Aranjuez', address: 'CR 95 #fake-16', city: 'Medellin', schedule: 'Mon-Fri 9-18'},
    {id: 3, name: 'Piloto', address: 'Calle 56 #fake-45', city: 'Medellin', schedule: 'Mon-Sat 9-21'},
  ]);
};
