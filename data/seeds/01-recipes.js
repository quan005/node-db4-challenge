exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe_name: 'Cheesy Chicken Enchiladas'},
    {recipe_name: 'Smoky Sloppy Joes'},
  ]);
};
