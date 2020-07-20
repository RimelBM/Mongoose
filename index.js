const express = require ('express' );
const app = express();
const connectDB = require('./DB/Connection');
const createAndSavePerson = require('./controllers/personController');
const createManyPerson = require('./controllers/personController');
const findAllByName = require('./controllers/personController');
const findOneByFood = require('./controllers/personController');
const findOnePerosnById = require('./controllers/personController');
const findEditThenSave = require('./controllers/personController');
const FindAndUpdate = require('./controllers/personController');
const removoeById = require('./controllers/personController');
const removeManyPeople = require('./controllers/personController');
const queryChain = require('./controllers/personController');
const Person = require('./models/person')





connectDB(); //connction to mongodb

const PORT = process.env.PORT || 8080;



// appel function to create one person ----------------------------------------------------------
  let onePerson = new Person(
    {name: "Sami", age: 54, favoriteFoods: ["spagetty", "juce"]});
  createAndSavePerson(onePerson);

//appel function to create many person ----------------------------------------------------------
  let arrayOfPeople = [ {name: "Sameh", age: 34, favoriteFoods: ["cake", "juce"]},
  {name: "Ahlem", age: 14, favoriteFoods: ["coca", "juce"]},
  {name: "wessa", age: 24, favoriteFoods: ["pizza", "burrito"]}] ;
  createManyPerson(arrayOfPeople);

// appel function to Find all peopoleby name 

let personName = "Ahlem";
findAllByName(personName) ; 

//appel function to find one peron by food
let food = "pizza" ;
findOneByFood(food) ; 

// appel function to find person by id (in argument)

let personId = "5f157f8066676b19a41ebca7" ; 
findOnePerosnById (personId) ;

//Appel function Find and edit then save by Id
let personIdd = "5f157f8066676b19a41ebca7" ; 
findEditThenSave(personIdd) ; 

//Appel find and update by Name
let personNamee ="Ahlem"
FindAndUpdate(personNamee) ;

//Remove By Id 
let personIddd = "5f157f8066676b19a41ebca7" ;
removoeById(personIddd)

// Remove many person By Name
let nameToRemove ="wessa"
removeManyPeople(nameToRemove);

// appel function Find people who like burrito.
queryChain();



app.listen(PORT , console.log('server is starting at' +PORT)) ;