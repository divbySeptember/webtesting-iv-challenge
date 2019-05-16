exports.seed = function(knex) {
  return knex("user_animals").insert([
    // Sam
    { id: 1, user_id: 1, animal_id: 1 },
    { id: 2, user_id: 1, animal_id: 2 },
    { id: 3, user_id: 1, animal_id: 3 },
    // Frodo
    { id: 4, user_id: 2, animal_id: 1 },
    { id: 5, user_id: 2, animal_id: 2 },
    // Gandalf
    { id: 6, user_id: 3, animal_id: 3 }
  ]);
};
