// string
var myName = "Lucas";
// myName = 28;
//does not work, typescript has already defined myName as type string
//numbers
//can be integer or float, typescript only have type number
var myAge = 27;
// myAge = "Lucas" again does not work
// boolean 
var likesCereal = true;
//of type boolean, cannot set likesCereal to 1 or 0
//assign types:
var myRealAge; //this is of type "any"
myRealAge = 19;
myRealAge = "19"; //this will compile fine
// explicit assigning types in declarations:
var myFavoriteNumber; //this makes myFavoriteNumber be of type number, what was done to myRealAge would not work here
myFavoriteNumber = 19;
//array 
var hobbies = ["cooking", "sports"];
//hobbies = [100] - would not work, typescript has inferred that this is an array of strings
console.log(typeof hobbies);
//the types of the items in the array could be overriden by using this assignment
var anyArray = ["milk", "cereral"];
anyArray = [1, 2, 3]; //this is valid, but anyArray must always be an array
//tuples:
var address = ["somestreetname", 42069];
//must follow the types listed after address and must maintain order (string then number);
//used for arrays of fixed value formats
//enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
