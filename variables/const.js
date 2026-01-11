// console.log(a);    // error, leads to TDZ
// const a = 10;


// const a = 10;
// const a = 20;       // re-declaration is not allowed
// console.log(a);


// const a = 10;
// a = 20;              // re-defined is not allowed
// console.log(a);


// function fun(){        // Const is blocked scoped, cannot be accessed outside of scope.
//     const a = 10;
//     console.log(a); 
// }
// fun()


// const a = 10;
// function fun(){        // can be accessed
//     console.log(a); 
// }
// fun()


// function fun(){    
//     const a = 10;
//     if(true){
//         console.log(a);    
//     }
//     console.log(a);
// }
// fun()


// function fun(){
//     for(const i=0;i<5;i++){
//         console.log(i);    // const value cannot be changed, that is cannot be used in loops
//     }
//     console.log(i);        // error, const is blocked scope and value cannot be changed.
// }
// fun()


