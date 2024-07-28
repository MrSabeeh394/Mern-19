const arrow = () => {
    return true;
}
const array = [1, 'one', null, undefined, [1, 2], { age: 20 }, arrow];
//console.log(array);
// console.log(array[4][1]);
// console.log(array[5]);
// console.log(array[5].age);

// Methods: push, pop, shift, unshift, indexOf, includes
// push
// console.log(array.push("Sabeeh")); // push new element at the end of array and return new lenght of the array

// console.log(array);



// pop
// let newArray = array.pop(); // pop remove element from end of the array
// console.log(newArray);
// console.log(array);

// shift remove array first element and return removed element 
console.log(array.shift());

// un shift remove array first element and return removed element 
console.log(array.unshift("Apple"));
console.log(array);

