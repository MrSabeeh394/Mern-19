// If Else Lecture

/* let marks = 9;
if (marks > 33) {
    console.log("Congrats! you are passed");
}
else {
    console.log("You are failed");
}

let a = new Date();
a= a.getHours()
console.log(a);
if (a < 12) {
    console.log("Good Morning");
}
else {
    console.log("Good Evening")
}
*/


/// Switch Statment used: 



// Nested if else


// let a = 5;
// let b = 2;
// let c = 1;
// if (a > b) {
//     if (a > c) {
//         console.log("a is greater than c")
//     }
//     else {
//         console.log("c is greater than a");
//     }
// }
// else {
//     console.log("b is greater than a")
// }




// let time = new Date().getHours();
// // console.log(time);
// if (time < 10) {
//     console.log("Good Morning");
// }
// else if (time < 20) {
//     console.log("Good Day");
// }
// else {
//     console.log("Good Evening");
// }






// Switch statement
let day;

switch (new Date().getDay()) {
    case 0:
        day= "Sunday"
        
        break;
    case 1:
        day= "Monday"
        
        break;
    case 2:
        day= "Tuesday"
        
        break;
    case 3:
        day= "Wednessday"
        
        break;
    case 4:
        day= "Thursday"
        
        break;
    case 5:
        day = "Friday"
        
        break;

    default:
        day= "Saturday"
        break;
}
console.log(day);





// A variable with different values and you want to check its value against multiple possible case

let daysOfWeek = 10;
//alert(daysOfWeek);
switch (daysOfWeek) {
    case 1:
        console.log("Today is Monday ")
        break;
    case 2:
        console.log("Today is Tuesday ")
        break;
    case 3:
        console.log("Today is Wednessday ")
        break;
    case 4:
        console.log("Today is Thursday ")
        break;
    case 5:
        console.log("Today is Friday")
        break;
    case 6:
        console.log("Today is Satuday ")
        break;
    case 7:
        console.log("Today is Sunday ")
        break;

    default:
        console.log("Not valid day");
        break;
}


let age = 35;
switch (true) {
    
    case (age>=20 && age<=30):
        console.log("You are eligible");
        break;
    case (age>=30 || age<=20):
        console.log("You are not eligible");
        break;

    default:
        console.log("Enter valid age");
        break;
}


 
// let x = '5' // string
// let y = 10 // number
// console.log(x + y); // '510' this is string (Type coercion) Implicit type conversion




// Explicit type conversion
//parseInt()

// let x = '10'; // x is a string
// let y = parseInt(x); // Explicitly convert x to an integer using parseInt()
// console.log(y); // Output: 10
// console.log(typeof y);

let num = 15;
let str = String(num);
console.log(str);
console.log(typeof str);


let strr = "26";
let numb = Number(strr);
console.log(numb);
console.log(typeof numb);

