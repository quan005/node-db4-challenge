
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 128).notNullable().unique();
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes');
    })
    .createTable('instruction_steps', tbl => {
        tbl.increments();
        tbl.integer('instructions_id').unsigned().notNullable().references('id').inTable('instructions');
        tbl.integer('step_number').unsigned().notNullable();
        tbl.text('details').notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 128).notNullable().unique();
        tbl.string('measured_in', 128).notNullable();
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes');
        tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients');
        tbl.primary(['recipe_id', 'ingredient_id']);
        tbl.float('quantity').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
