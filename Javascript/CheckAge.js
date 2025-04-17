function checkumur(){
    let umur =prompt("Enter Age Please");

    if (umur<=13){
        console.log("kanak-kanak");
        alert('kanak-kanak');

    }else if((umur>=13)&&(umur >19)){
        console.log("Remaja");
        alert('Remaja');
        
    }else if((umur>=19)&&(umur<56)){
        console.log("Dewasa");
        alert('Dewasa');

    }else {
        console.log("Warga Emas");
        alert('Warga Emas');
    }



}

function checkIC(){
    let umur1 =prompt("Please Enter Your Age");
    let IC = confirm("Bring the IC");

    if (umur1>=18){
        if(IC){
            console.log("You Can Enter");

        }else {
            console.log("Please Bring Your IC CARD");

        }
    }else{

        console.log("Do not Enter");
    }



}

function CheckJantina{
switch(Jantina){
case  'Lelaki' :
case  'Perempuan' :
    console.log("Anda Jantina"+ case);    
break;
}


}