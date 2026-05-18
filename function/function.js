// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }
// addTwoNumbers(2,3)


// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }
// const result = addTwoNumbers(2,3)
// console.log(result);                  // Here the value of result will be undefined



// function addTwoNumbers(number1, number2){
//     let result = number1+number2
//     console.log(result);
//     return result;           // after return nothing will execute 
// }
// let result = addTwoNumbers(3,5)
// console.log(result);                   // now in result we will get our value



// function Name(username){
//     return `${username} logged In`
// }
// console.log(Name('Divyansh'));



// function calculate(...num){              // using ...num we can pass multiple arguments
//     return num  
// }
// console.log(calculate(2, 3, 4, 35435));



// function calculate(val1, val2, ...num){         // using ...num we can pass multiple arguments
//     return num  
// }
// console.log(calculate(2, 3, 4, 10));    // output will be [4, 10]



// const user = {
//     name: 'Divyansh',
//     age:'23'
// }
// function handleObject(username){
//     return `Username is ${username.name} and age is ${username.age}`
// }
// console.log(handleObject(user));



// const array = [12, 3, 44, 24]

// function value(getArray){
//     return getArray[1]
// }
// console.log(value(array));
// // console.log(value([13, 4, 5, 45, 35]));



const id = 20
const e = 20;
function abc(e){
    // console.log(e)
    return e == id;
}
console.log(abc(e));

// (e) => e.id === id)