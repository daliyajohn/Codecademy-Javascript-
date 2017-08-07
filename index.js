
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

// Array   
var bucketList =['daliya', 'seeniya', 'viji'];
console.log(bucketList );

//array example 2
var bucketList =['daliya', 'seeniya', 'viji'];
console.log(bucketList );
var listItem = bucketList[0];
var listItem = bucketList[3];
console.log(listItem );
console.log(listItem);

// length of array
var bucketList =['daliya', 'seeniya', 'viji'];
console.log(bucketList );
var listItem = bucketList[0];
var listItem = bucketList[3];
console.log(listItem );
console.log(listItem);
console.log(bucketList.length);

//array push
var bucketList =['daliya', 'seeniya', 'viji'];
console.log(bucketList );
var listItem = bucketList[0];
var listItem = bucketList[3];
console.log(listItem );
console.log(listItem);
console.log(bucketList.length);
bucketList.push('dalimol', 'vijimol');
console.log(bucketList);

//array pop
var bucketList =['daliya', 'seeniya', 'viji'];
console.log(bucketList );
var listItem = bucketList[0];
var listItem = bucketList[3];
console.log(listItem );
console.log(listItem);
console.log(bucketList.length);
bucketList.push('dalimol', 'vijimol');
console.log(bucketList);
bucketList.pop('dalimol', 'vijimol');


//for loop
var vacationSpots = ['daliya','seeniya','viji'];
for (var i=0; i<vacationSpots.length; i++) {
  console.log('I would love to visit '+ vacationSpots[i]);
}

// for loop with array
var myPlaces =['kollam', 'tvm','ktym'];
var friendPlaces = ['place1', 'plce2', 'place3'];
for (var i=0; i<myPlaces.length; i++) {
  console.log(myPlaces[i]);
  for(var j=0; j<friendPlaces.length; j++){
    if(myPlaces[i]===friendPlaces[j]){
       console.log(friendPlaces[j]);
       }
    else {
      console.log('undefined');
    }
  }
}

// while loop
var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
var currentCard = 'Heart';
while (currentCard !== 'Spade') {
  console.log(currentCard);  
  var randomNumber = Math.floor(Math.random() * 4);
  currentCard = cards[randomNumber];
}
console.log('Found a Spade!');

// Alert
alert('Hello JavaScript!');

//get id
var skillset = document.getElementsByClassName('skillset');
alert(skillset);

// ready function
function main() {
}
$(document).ready(main);

//fade
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
}

$(document).ready(main);

// on click
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function () { })
}
$(document).ready(main);

//show div
  $('.projects').show();

//toggle on button click
 $('.projects-button').on('click', function () { 
  $('.projects').toggle();
})

//toggle class active
 $('.projects-button').toggleClass('active');

//this - avoid multiple use of class
  $(this).toggleClass('active');

//next()
$(this).next().toggle();

//text
$('.projects-button').on('click', function () { 
  $(this).text('Projects Viewed');
})


// Understand String Immutability 
var myStr = "Jello World";
myStr = "Hello World"; 

// Use Bracket Notation to Find the Nth Character in a String
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];

// Use Bracket Notation to Find the Last Character in a String
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length -1];

// Word Blanks 
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";
  return result;
}
wordBlanks("dog2", "big5", "ran1", "quickly8");

// Store Multiple Values in one Variable using JavaScript Arrays
var myArray = ["daliya",56 ];

// Nest one Array within Another Array
var ourArray = [["the universe", 42], ["everything", 101010]];

// Access Array Data with Indexes
var myArray = [1,2,3];
var myData = myArray[0];

// Modify Array Data With Indexes
var myArray = [1,2,3];
myArray[0]=3;
myArray[1]=2;
myArray[2]=3;

// Access MultiDimensional Arrays With Indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];  // value 8

// Manipulate Arrays With push
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

// Manipulate Arrays With pop
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray =myArray.pop(["cat", 2]);

// Manipulate Arrays With shift
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray =myArray.shift(["John", 23]);   //removes the first element instead of the last.

// Manipulate Arrays With unshift
var myArray = [["John", 23], ["dog", 3]];
myArray.shift(["John", 23]);
myArray.unshift(["Paul", 35]);


// Shopping List
var myList = [["daliya", 5, 5], ["seeniya", 5, 5] , ["viji", 5, 5], ["john", 5, 5], ["vincy", 5, 5]];

