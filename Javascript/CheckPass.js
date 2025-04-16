function checkPass(){
    let password = prompt("Please Enter your Password");
    
    //Condition else if
    if(password.length>=8){
        console.log("Strong Password");
    }else
    {
        console.log("Weak Password");
    }

}

function checkPass1(){

    let password = prompt("Please Enter your Password");
    
    //Condition Nested if
    if(Number(password)){
        if(password.length >= 10){

        console.log("Strong Password");
    }else{
        console.log("Weak Password");
        checkPass1();
        
    }}else{
        console.log("Enter Number Only");

    }


}