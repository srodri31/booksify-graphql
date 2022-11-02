/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('book').del()
    await knex('book').insert([
      {id: 1, title: 'Javascript for dummies', published_on: '12/12/1989', editorial: 'Planeta', description: 'A library for dumm', library_id: 1  },
      {id: 2, title: 'Cien añod de soledad', published_on: '05/12/1997', editorial: 'Editorial Test', description: 'realismo magico de colombia', library_id: 1  },
      {id: 3, title: 'Libro test', published_on: '12/12/2005', editorial: 'Planeta', description: 'A very common description', library_id: 1  },
    ]);
  };
  