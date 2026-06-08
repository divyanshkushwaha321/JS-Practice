function outer(){

    const name = "Divyansh";
    console.log(name)

    function inner1(){
        const username = "Kushwaha";
        console.log(username)
        // console.log("Hello from inner function");

        
    }
    function inner2(){
        const username2 = "Bang Bhosada";
        console.log(username2)
    }

    inner1()
    inner2()
    
}
outer();
