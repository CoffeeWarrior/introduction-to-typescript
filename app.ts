// string
let myName = "Lucas";
// myName = 28;
//does not work, typescript has already defined myName as type string

//numbers
//can be integer or float, typescript only have type number
let myAge = 27;
// myAge = "Lucas" again does not work

// boolean 
let likesCereal = true;
//of type boolean, cannot set likesCereal to 1 or 0

//assign types:
 let myRealAge; //this is of type "any"

 myRealAge = 19;
 myRealAge = "19" //this will compile fine

// explicit assigning types in declarations:
let myFavoriteNumber: number; //this makes myFavoriteNumber be of type number, what was done to myRealAge would not work here

myFavoriteNumber = 19;

//array 
let hobbies = ["cooking", "sports"];
//hobbies = [100] - would not work, typescript has inferred that this is an array of strings
console.log(typeof hobbies);

//the types of the items in the array could be overriden by using this assignment
let anyArray: any[] = ["milk" , "cereral"];

anyArray = [1,2,3] //this is valid, but anyArray must always be an array

//tuples:
let address: [string, number] = ["somestreetname", 42069]
//must follow the types listed after address and must maintain order (string then number);
//used for arrays of fixed value formats

//enums
enum Color {
    Gray, // 0
    Green, // 1
    Blue, // 2

    //we can change what value of each enum will be equal to example below:
    Red = 100,
    Black, //black would be of value 101, it continues incrementing from the previous number. if we set black to 3, then set another number such as salmon
    Salmon //                                                                                   then salmon would continue from black, making it 4
}

let myColor: Color = Color.Green;

console.log(myColor);

//type "any"
//the most flexible type in typescript. Should attempt to avoid usage and only define variables explicitly.
let car:any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car)

//functions
    //string
function returnMyName(): string { //means that the return value must be of type string
    return myName; //because myName is defined at line2 as a string, it is an acceptable return type for this function
}
    //void
function sayHello(): void{ //no return type
    console.log("Hello!"); //will give error if returning anything
}