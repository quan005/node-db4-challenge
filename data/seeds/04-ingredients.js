exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient_name: 'Salsa Verde', measured_in: 'ounces'},
    {ingredient_name: 'Shredded Cooked Chicken', measured_in: 'ounces'},
    {ingredient_name: 'Sour Cream', measured_in: 'ounces'},
    {ingredient_name: 'Shredded Cheddar Jack Cheese', measured_in: 'ounces'},
    {ingredient_name: 'Corn Tortilla (warmed)', measured_in: 'units'},
    {ingredient_name: 'Jalapeño', measured_in: 'units'},
    {ingredient_name: 'Lime', measured_in: 'units'},
    {ingredient_name: 'Cilantro', measured_in: 'grams'},
    {ingredient_name: 'Red Onion', measured_in: 'grams'},
    {ingredient_name: 'Carrot', measured_in: 'units'},
    {ingredient_name: 'Crushed Tomatoes', measured_in: 'ounces'},
    {ingredient_name: 'Spring Mix', measured_in: 'grams'},
    {ingredient_name: 'Honey', measured_in: 'table spoons'},
    {ingredient_name: 'Roasted Ground Cumin', measured_in: 'units'},
    {ingredient_name: 'Brioche Buns', measured_in: 'units'},
    {ingredient_name: 'Ground Beef', measured_in: 'ounces'},
  ]);
};
