/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
let character = 22;


function isItLong (character){
  if (character.length > 20 ){
    console.log ("That's a long string!");
  }
}

function isItMedium (character){
  if (character.length > 10 && character.length  <20){
    console.log ("That's a regular sized string!")
  }
}
function isItShort (character){
  if (character.length < 10 ){
    console.log ("That's a small string!")
  } 
  else{
    console.log ("That's not a small string!")
  }
}
function howLongIsMyString (character){
if (character.length > 20){
  console.log ("That's a long string!")
} else if (character.length > 10 && character.length < 20){
  console.log ("That's a regular sized string!")
} else if (character.length < 10 ){
  console.log ("That's a small string!")
}
}
function instructorHeight (nameOfInstructor){
if (nameOfInstructor = "colin"){
  console.log (62)
}
if (nameOfInstructor = "Mesuara"){
  console.log (69)
}
}






/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}