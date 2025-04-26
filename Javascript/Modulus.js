function calModulus(){
    let num1 = prompt("Enter Interger Number");
    let num2 =num1%2;

    if(num2==1){
        alert("This even number");
    }else if(num2==0){
        alert("this odd number");
    }else{
        alert("this o")
    }



}

function looping(){
for (let i=1; i<=6;i--){
    console.log("Countdown"+1);
}
}

function NamaLooping(){
    let student =["Quan","Fatin","Meor","Heng","Imran"];
    console.log(student.length);

    for(let i=0;i<student.length;i++){
        console.log(greet(student[i]));


    }


}
function greet(){
   return "hello"+greet;


}