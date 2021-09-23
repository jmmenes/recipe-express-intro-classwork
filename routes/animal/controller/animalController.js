const Animal = require('../model/Animal');

module.exports = {
  getAllAnimal: (body, callback) => {
    Animal.find(body, function (err, foundAnimal) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, foundAnimal);
      }
    });
  },

  createAnimal: (body, callback) => {
    const createdAnimal = new Animal({
      animalType: body.animalType,
      animalName: body.animalName,
      animalAge: body.animalAge,
    });

    createdAnimal.save(function (err, savedAnimal) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, savedAnimal);
      }
    });
  },

  deleteAnimal: (id, callback) => {
    Animal.findByIdAndDelete(id, function (err, deletedAnimal) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, deletedAnimal);
      }
    });
  },

  updateAnimalById: (id, body, callback) => {
    Animal.findByIdAndUpdate(
      id,
      body,
      { new: true },
      function (err, updatedAnimal) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, updatedAnimal);
        }
      }
    );
  },
};

//using the current application
//create a route for recipe /api/recipe
//Basically, it is the same thing what we been doing for animal
//GET, PUT, CREATE, DELETE
//In the schema it should have the following
//recipe - type String, date, price - type Number
