// console.log(a);   // output : undefined
// var a = 10;


// var a = 10;
// var a = 20;       // re-declaration allowed
// console.log(a);


// var a = 10;
// a = 20;              // re-defined is allowed
// console.log(a);


// function fun(){        // var is function scoped, cannot be accessed outside of scope.
//     var a = 10;
//     console.log(a); 
// }
// fun()
// console.log(a);


// var a = 10;
// function fun(){
//     console.log(a);     // can be accessed 
// }
// fun()


// function fun(){    //  The var is not blocked scope
//     var a = 10;
//     if(true){
//         console.log(a);    
//     }
//     console.log(a);
// }
// fun()


// function fun(){
//     for(var i=0;i<5;i++){
//         console.log(i);    // output: 0 1 2 3 4
//     }
//     console.log(i);        // output: 5
// }
// fun()


