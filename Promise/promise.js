// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Async task is completed");         // first this will run
//         resolve()                                       // to run .then resolve is neccessary
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("Promise consumed");               // then this will run  
// })



// new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Async task is completed");
//         resolve()      
//     }, 1000)
// }).then(function(){
//     console.log("Promised consumed");
// })



// const promisethree = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Async task is completed");
//         resolve({username: "Divyansh", email:"divyansh@gmail.com"})
//     })
// })
// promisethree.then(function(user){      // the parameters username and email will be recieved by user
//     console.log(user);    
// })



// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "Divyansh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })
//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// })
// .finally(()=>{
//     console.log("The promise is either resolved or rejected")
// })



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "Divyansh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })
// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);       
//     }
// }
// consumePromiseFive()



// async function getAllUser(){
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);       
//     }
// }
// getAllUser();



// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data); 
// })
// .catch((error)=>{
//     console.log(error);
// })


