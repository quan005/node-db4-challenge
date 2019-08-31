exports.seed = function(knex) {
  return knex('instructions').insert([
    {recipe_id: 1},
    {recipe_id: 2},
  ]);
};
