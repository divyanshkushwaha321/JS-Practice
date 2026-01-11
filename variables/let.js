// console.log(a);    // error, leads to TDZ
// let a = 10;


// let a = 10;
// let a = 20;       // re-declaration is not allowed
// console.log(a);


// let a = 10;
// a = 20;              // re-defined is allowed
// console.log(a);


// function fun(){        // let is blocked scoped, cannot be accessed outside of scope.
//     let a = 10;
//     console.log(a); 
// }
// fun()


// let a = 10;
// function fun(){        // can be accessed
//     console.log(a); 
// }
// fun()


// function fun(){    
//     let a = 10;
//     if(true){
//         console.log(a);    
//     }
//     console.log(a);
// }
// fun()


// function fun(){
//     for(let i=0;i<5;i++){
//         console.log(i);    // output: 0 1 2 3 4
//     }
//     console.log(i);        // error, let is blocked scope
// }
// fun()


