const db = require('../data/db-config.js');



module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};


function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipe_ingredients as ri')
        .join('recipes as r', 'ri.recipe_id', 'r.id')
        .join('ingredients as i', 'ri.ingredient_id', 'i.id')
        .select('i.ingredient_name', 'ri.quantity', 'i.measured_in')
        .where('recipe_id', recipe_id)
}

function getInstructions(recipe_id) {
    return db('instruction_steps as ist')
        .join('instructions as i', 'i.id', 'ist.instructions_id')
        .join('recipes as r', 'r.id', 'i.recipe_id')
        .select('ist.id', 'ist.step_number', 'ist.details')
        .where({recipe_id});
}