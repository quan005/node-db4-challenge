exports.seed = function(knex) {
  return knex('instruction_steps').insert([
    { instructions_id: 1, step_number: 1, details: 'Set the oven to 375°F.'},
    { instructions_id: 1, step_number: 2, details: 'Spread 1/2 cup salsa in an 11x8x2-inch baking dish.'},
    { instructions_id: 1, step_number: 3, details: 'Stir 1/4 cup salsa, chicken, sour cream and 1/2 cup cheese in a medium bowl.'},
    { instructions_id: 1, step_number: 4, details: 'Spoon about 3 tablespoons chicken mixture down the center of each tortilla.'},
    { instructions_id: 1, step_number: 5, details: 'Roll up the tortillas around the filling and place seam-side down in the baking dish.'},
    { instructions_id: 1, step_number: 6, details: 'Top with the remaining salsa.'},
    { instructions_id: 1, step_number: 7, details: 'Bake for 15 minutes.'},
    { instructions_id: 1, step_number: 8, details: 'Sprinkle with the remaining cheese.'},
    { instructions_id: 1, step_number: 9, details: 'Bake for 5 minutes or until the cheese is melted.'},
    { instructions_id: 2, step_number: 1, details: 'Preheat your oven to 350°F. (You can skip this step if you have a toaster oven!) Start prepping when your oven comes up to temperature!'},
    { instructions_id: 2, step_number: 2, details: 'Prep: Wash and dry all produce. Finely chop the cilantro. Juice the limes into a large bowl. Mince the jalapeño, if using, removing the ribs and seeds if you prefer less heat.'},
    { instructions_id: 2, step_number: 3, details: 'Make the sloppy joe mixture: Heat a large pan over medium-high heat. Add a drizzle of oil, then the onion and as much jalapeño as you like (if desired.) Cook, stirring often, until softened, 4-5 min. Add the ground beef to the pan and cook, breaking the beef up into pieces, for 3-4 min until browned and cooked through. Stir in the spice blend and 1 tsp honey (DO: measure out.) Reduce heat to medium-low and stir the tomatoes into the pan. Simmer for about 15 min, until very thick. Taste and season with salt and pepper.'},
    { instructions_id: 2, step_number: 4, details: 'Make the dressing: Meanwhile, in the large bowl with the lime juice, whisk in a drizzle of oil, cilantro and 2 tsp honey (DO: measure out.)'},
    { instructions_id: 2, step_number: 5, details: 'Toast the buns: Halve the hamburger buns then place on a baking sheet in the oven to toast for 3-5 min. (TIP: If you have a toaster oven, toast until golden brown instead.)'},
    { instructions_id: 2, step_number: 6, details: 'Make the shredded carrot salad: When the sloppy joe mixture is ready, toss the spring mix and grated carrot into the cilantro-lime vinaigrette.'},
    { instructions_id: 2, step_number: 7, details: 'Finish and serve: Scoop the sloppy joe mixture onto the toasted buns. Serve alongside the shredded carrot salad. Enjoy!'},
  ]);
};