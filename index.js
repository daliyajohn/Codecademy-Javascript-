
// Introduction to JavaScript

// TYPES
var myString = undefined;
var myNumber = undefined;
var myBoolean = undefined;
console.log("Name: " + myString);
console.log("Lucky Number: " + myNumber);
console.log("Good joke? " + myBoolean);

// We can ask JavaScript to print words to the console with this line of code
console.log("daliya");

// JavaScript includes the general math operators that you can find on a calculator:
console.log(3.5+24);
console.log(2017-1969);
console.log(65/240);
console.log(0.2708333333333333*100);

 // generate a random number within a program
 console.log(Math.floor(Math.random() * 100));

// Variables 
var strength = '50,000 pounds';
var age = 24;
var hasPet = true;
console.log(age);
console.log('How much stuff can a variable hold? ', strength);
console.log(hasPet);

// Control flow  - if ,else
var harryPotterFan = true;
if(harryPotterFan ) {
   console.log('Mischief managed.');
}
else {
   console.log('I lead a muggle\'s life.');
}

// if/else statements are made even more powerful with comparison operators. less than and greater than
var hungerLevel  =5;
if(hungerLevel>7) {
  console.log('Time to eat!');
} else {
  console.log('Let\'s eat later.');
}

// To check if two things equal each other, we can use === 
var moonPhase  = "full";
if (moonPhase ==="full") {
    console.log('Howwwwlll!!');
}else {
     console.log('I swear I am not a werewolf...');
}

// We can add more conditions to our if/else statement with: else if
var moonPhase  = "full";
moonPhase= "mostly full";
moonPhase= "mostly new";
moonPhase= "solar eclipse";
if (moonPhase ==="full") {
    console.log('heloww');
}
else if (moonPhase ==="mostly full") {
    console.log('Arms and legs are getting hairier');
} else if (moonPhase ==="mostly new") {
     console.log('Back on two feet');
   }
else {
  console.log('Invalid moon phase');
}

// using &&
var moonPhase  = "full";
var foggyNight =true;
moonPhase= "mostly full";
moonPhase= "mostly new";
moonPhase= "solar eclipse";
if (moonPhase ==="full" && foggyNight === true) {
    console.log('heloww');
    }
else if (moonPhase ==="mostly full") {
    console.log('Arms and legs are getting hairier');
    }
else if (moonPhase ==="mostly new") {
     console.log('Back on two feet');
    }
else {
  console.log('Invalid moon phase');
} 

// Using ||
var moonPhase  = "full";
var foggyNight =true;
moonPhase= "mostly full";
moonPhase= "mostly new";
moonPhase= "solar eclipse";
if (moonPhase ==="full" || foggyNight === true) {
    console.log('heloww');
    }
else if (moonPhase ==="mostly full") {
    console.log('Arms and legs are getting hairier');
    }
else if (moonPhase ==="mostly new") {
     console.log('Back on two feet');
    }
else {
  console.log('Invalid moon phase');
}

// we can turn to a switch statement to write more concise and readable code.
var moonPhase  = "full";
switch (moonPhase ) {
  case 'full':
    console.log('Howwwwlll!!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid item');
    break;
}


// function - Example  1
function takeOrder () {
  console.log('Order: pizza');
}
takeOrder();

// we can use parameters
function takeOrder (topping) {
  console.log('Order: pizza topped with' + topping);
}
takeOrder('daliya');


// We can set as many parameters
function takeOrder (topping, crustType ) {
  console.log('Order: pizza topped with' + crustType);

}
takeOrder('daliya1', 'john1');
takeOrder('daliya2', 'john2');
takeOrder('daliya3', 'john3');

// Example 2
var orderCount =0;
var pizzaOrder ;
orderCount = orderCount +1;
orderCount = orderCount *7;
function takeOrder  () {
  orderCount = orderCount +1;
  
}
function getSubTotal(itemCount) {
    return itemCount *7.5;
  }
takeOrder ();
console.log(getSubTotal(orderCount));


// Example 3
var orderCount =0;
var pizzaOrder ;
orderCount = orderCount +1;
orderCount = orderCount *7;
function takeOrder  () {
  orderCount = orderCount +1;
}
function getSubTotal(itemCount) {
    return itemCount *7.5;
}
function getTax() {
  return getSubTotal(orderCount)*0.06;
} 
function getTotal  () {
  return  getSubTotal(orderCount) + getTax();
}
takeOrder ();
getTax();
console.log(getTotal());
console.log(getSubTotal(orderCount));

// Scope
var laundryRoom = 'Basement';
var mailRoom = 'Room 1A';
console.log('ddd' + laundryRoom , 'fff' +mailRoom);

// scope with function
var laundryRoom = 'Basement';
var mailRoom = 'Room 1A';
console.log('ddd' + laundryRoom , 'fff' +mailRoom);
function myApartment() {
  var mailBoxNumber = 'Box 3';
  laundryRoom = 'In-unit';
  console.log('Mail box: ' + mailBoxNumber + ', Laundry:' + laundryRoom);
}
myApartment();

