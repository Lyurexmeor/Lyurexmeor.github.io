function mark(){

var fullmarks = 50;

let mark1 = prompt("Enter Mark1");
let mark2 = prompt("Enter Mark2");
let mark3 = prompt("Enter Mark3");

var markahLabtask ={
items :[
    {criteria: "TASK COMPLETION WITHIN TIME ALLOCATED" , marks :Number(mark1)},
    {criteria: "REQUIRED ELEMETS AND INTERACTIVITY" , marks :Number(mark2)},
    {criteria: "CONTENT OF REPORT",marks :Number(mark3)}

],

total :0
};

for (var i =0; i <markahLabtask.items.length;i++){
    markahLabtask.total+= markahLabtask.items[i].marks;
}

var percent = markahLabtask.total/fullmarks*100

console.log("TOTAL MARKS : " + markahLabtask.total);
console.log("PERCENTAGES : " + percent);

}
