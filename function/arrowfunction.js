// const user = {
//     username: "Divyansh",
//     price: 999,

//     message: function(){
//         console.log(`${this.username}, welcome to website`);    // 'this' refers to current context
//     }
// }
// user.message()
// console.log(this);     // here this refers to empty object



// function chai(){
//     let username = "Divyansh"
//     console.log(this.username);  // Here 'this' does not refer to current object, gives undefined
    
// }
// chai()



// const add = (num1, num2) => {      // Arrow Function
//     return num1 + num2;            // if using 'return' then it is explicit return
// }
// console.log(add(2,3));



// const add = (num1, num2)=> num1 + num2;   // if we are not using 'return' keyword then it is implicit return
// console.log(add(2,3));



// const add = (num1, num2)=> (num1 + num2);   // Implicit return
// console.log(add(2,3));



// const add = () => ({username:"Divyansh"})    // if using object then we have to wrap it in ()
// console.log(add());
 

const id = 20
const add = (e) => {
    return e == id;
}
console.log(add(20));