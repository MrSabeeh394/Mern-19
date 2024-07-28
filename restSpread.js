// // Rest operation
// // array
// const array = [1, 2, 3, 4, 5, 6, 7];
// const [a, ...b] = array;
// console.log("a", a);
// console.log("b = ", b);
// // console.log(array);


// //spread
// //array
// const array1 = [1, 2, 3, 4, 5, 6, 7];
// const tempArr = [...array1];
// tempArr[0] = "New value";



// Rest Operator in Array
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const [a, ...b] = array;
// console.log("a", a);
// console.log("b", b);


// Rest operator in object 
const obj = {
    id: "1234",
    "full name": "Sabeeh Safdar",
    age: 26,
    dob: 1998,
}
//console.log(obj);
const { id, ...user } = obj;
// console.log(id);
// console.log(user);


// spread operator in function
const check = ({ id, ...user}, array) => {
    console.log(id);
    console.log(user);
    console.log(array);
}
// check(obj, array);


// Spread Operator
const array1 = [1, 2, 3];
// const tempArr = array1; // Shalow copy
const tempArr = [...array1]; // deep copy 
tempArr [0] = "new value";
// console.log(tempArr);
// console.log(array1);

//object


// function spread operator
const array2 = [1, 2, 3, 4, 5];
const newOne= (a,b,c) => {
    console.log(a);
    console.log(b);
    console.log(c);
 }
newOne(...array2);

