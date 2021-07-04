exports.seed = function(knex) {
  return knex('recipe_ingredients').insert([
    {recipe_id: 1 , ingredient_id: 1, quantity: 16.0},
    {recipe_id: 1, ingredient_id: 2, quantity: 12.0},
    {recipe_id: 1, ingredient_id: 3, quantity: 4.0},
    {recipe_id: 1, ingredient_id: 4, quantity: 12.0},
    {recipe_id: 1, ingredient_id: 5, quantity: 8.0},
    {recipe_id: 2, ingredient_id: 6, quantity: 1.0},
    {recipe_id: 2, ingredient_id: 7, quantity: 2.0},
    {recipe_id: 2, ingredient_id: 8, quantity: 14.0},
    {recipe_id: 2, ingredient_id: 9, quantity: 227.0},
    {recipe_id: 2, ingredient_id: 10, quantity: 1.0},
    {recipe_id: 2, ingredient_id: 11, quantity: 56.0},
    {recipe_id: 2, ingredient_id: 12, quantity: 170.0},
    {recipe_id: 2, ingredient_id: 13, quantity: 1.0},
    {recipe_id: 2, ingredient_id: 14, quantity: 1.0},
    {recipe_id: 2, ingredient_id: 15, quantity: 4.0},
    {recipe_id: 2, ingredient_id: 16, quantity: 17.6},
  ]);
};
