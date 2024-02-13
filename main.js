//  covert "My house has 2 stories, no parking, 2 bedrooms, a garden and an energy
// efficiency rating of D.", in an object

const myHouse = {
    stories: 2,
    parkingAvailable: false,
    bedrooms: 2,
    hasGarden: true,
    eer: "D"
};


// convert "My car is red, has 4 wheels, power steering, and 2 seats, and does 
// 20 miles per gallon.", to an object

const myCar = {
    colour: "red",
    wheels: 4,
    isPowerSteering: true,
    seats: 2,
    GallonsPerMile: 20
};

// convert "My favourite film's title is The Dark Knight, it was released in 2008, 
// and the lead actor is Christian Bale.", to an object

const myFavouriteFilm = {
    favouriteFilm: "the dark knight",
    released: 2008,
    lead: "Cristian Bale"
};

let person = {
    name: "Ben",
    likesChocolate: true,
  };

  //use dot notation to console.log the value of the `likesChocolate` property

  console.log(person.likesChocolate)

 // write an if statement that will console.log `"Ben loves chocolate"` 
 // if likesChocolate has a value of true else console.log `"Ben hates chocolate"`.
 // The condition for the if, and the name Ben should both be read from the object 
 // using dot notation.

 if(person.likesChocolate === true) {
    console.log("Ben likes chocolate")
 } else {
    console.log("Ben hates chocolate")
 }


let desiredPleasantry = "farewell";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

// Use bracket notation and the `smallTalk property` to console.log Ben's 
// smalltalk phrase

console.log(bensPhrases['smallTalk']);

// Use bracket notation and the `desiredPleasantry` variable to console.log 
// Ben's greeting phrase.

console.log(bensPhrases[desiredPleasantry])

let me = {
    firstName: "Mohamedamin",
    lastName: "Abdille",
    isBootcamper: false,
  };

// reassign the property of `isBootcamper` using the assignment operator. Make it `true`!

me.isBootcamper = !false;

console.log(me.isBootcamper);

let communication = {
    success: true,
    payload: {
      message: {
        text: "Please send biscuits!",
        priority: "URGENT",
      },
    },
  };

  // Using dot notation, read the text from the communication object and store it in a variable

  let theMessage = communication.payload.message.text;

  // If the priority is urgent, then console.log the variable, else do nothing 
   
  if(communication.payload.message.priority === "URGENT") {
    console.log(theMessage);
  } 