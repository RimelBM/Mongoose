const Person = require("../models/person");
const person = require("../models/person");


// 1 . create one person
const createAndSavePerson = function(onePerson) {

   
  
   onePerson.save()
   .then ((person)=>console.log(person))
   .catch  ((err)=>console.log(err)   )     
  };

  
// 2 . Create many person

const createManyPerson = function(arrayOfPeople){

    Person.create(arrayOfPeople)
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
    };

// 3. find all people by name 
const findAllByName = function (personName){
  Person.find({name:personName})
  .then ((foundName)=>console.log(foundName))
  .catch((err)=>console.log(err))
};

// 4 . Find just one person by food

const findOneByFood = function(food){
  Person.findOne({favoriteFoods : food})
  .then((data)=> console.log(data))
  .catch((err)=> console.log(err))
}

// 5 . find by id

const findOnePerosnById = function(personId){
  Person.findById({_id :personId},function (err,data)  {
    if(err){console.log(err)}
    else{console.log(data)}
  })
}

// 6 . Find , Edit , then save , avec food ='hamburgeur'
const findEditThenSave = function(personIdd){
  const foodToAdd = "hamburgeur"
  Person.findById({_id : personIdd} , (err,data)=>{
    if(err){console.log(err)}
    data.favoriteFoods.push(foodToAdd);
    data.save((err,data)=>{
      if(err){console.log(err)}
      else {console.log(data)}
    })
  })
}

// 7 . findOne and update 
const FindAndUpdate = function(personNamee){
  const ageSet = 20 ;
  Person.findByIdAndUpdate({name : personNamee} ,
                           {age:ageSet},
                           {new:true} ,function (err,data){
          if(err){console.log(err)}
          else{console.log(data)}                   
          })
}

// 8 . Find By Id , then remove

const removoeById =function (personIddd){
  Person.findByIdAndRemove({_id:personIddd} , function(err,data){
    if(err){console.log(err)}
    else{console.log(data)  }
    }
  )
  }

// 9 . Delete Many People 
const removeManyPeople = function(nameToRemove) {
  Person.remove({name : nameToRemove} ,function (err, data){
    if(err){console.log(err)}
    else{console.log(data)}
  })
}

// 10 . Find people who like burrito. 
const queryChain = function(){
  const foodToSearch = "burrito" ; 
  Person.find({favoriteFoods:foodToSearch})
  .sort({name:'asc'})
  .limit(2)
  .select({age:0})
  .exec((err,data)=>{
    if(err){console.log(err)}
    else{console.log(data)}
  })
}


  module.exports = createAndSavePerson ; 
  module.exports = createManyPerson;
  module.exports = findAllByName;
  module.exports = findOneByFood ; 
  module.exports = findOnePerosnById;
  module.exports = findEditThenSave;
  module.exports = FindAndUpdate;
  module.exports = removoeById;
  module.exports = removeManyPeople;
  module.exports = queryChain;