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

let attempt =0;

function checkPass1(){

    let password = prompt("Please Enter your Password");
    if(attempt >=3){
        console.log("attempt reach the limit");
        return false;
    }
    //Condition Nested if
    if(Number(password)){
        if(password.length >= 10){

        console.log("Strong Password");
    }else{
        console.log("Weak Password");
        attempt +=1;
        checkPass1();
        
    }}else{
        console.log("Enter Number Only");

    }


}