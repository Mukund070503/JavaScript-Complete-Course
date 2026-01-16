// Primitive datatype -  string, number , boolean, bigint, Symbol 
// reference datatype - array, object, function {anything that has a (),{},[]}

console.log(a); //undefined as temporal dead zone, hoisting taking place// answer undefined

//console.log(b) // answer error let is used for b 

//console.log(m) // answer error used const

var a = 10;
let b = 9;
const m = 5;

let str = "mukund";
 str.charAt(2);
 str[3];
 str.indexOf(u);
 str.lastIndexOf(u);
 str.length;
 str.slice(2,5);

 let arr = [1,2,3,4]

 arr.forEach(function(val){
    console.log(val);
 })

 arr.push(5);
 arr.pop();
 arr.map(function(val){
    return val**2;
 })
 arr.filter(function(val){
    return val%2===0;
 })
 arr[2]
 arr.reverse();
 arr.sort(function(a,b){///for string it can be used directly for ascending but for number they needs to be done this way as it converts to string first
    return a-b; // for ascending and b-a for descending 
 })

 let arr2 = [...arr];
  
let stud = {
    name : "Mukund",
    age : 22,
    address : {
        city:"Khandwa",
        state : "M.P."
    }
}

stud.age
stud.name
stud.address.city
stud["age"]
let n = "name";
stud[n]
stud["school"] = "SJC";
for(let val in stud){
    console.log(val);
}
const { name, age } = stud;
///stud?.address?.city;
Object.keys(stud);
Object.entries(stud);
let stud2 = {...stud}; //for nested objects as reference is passed use what in next line
let stud3 = JSON.parse(JSON.stringify(stud));


 //operators
 //+ - * / % ++ -- += -= *= /= === == <= >= ! !==   

 //functions

 function func(val1, val2){ //hoisting happening
    console.log(val1, val2);
    return val1+ val2;
 }

 function func2(...val){ // hoisting happening
    console.log(val);
 }

 let func3 = function(val){ // hoisting not happening
    console.log(val);
 }

 let func4 = (val)=>{ //no hoisting
    console.log(val);
 }


 for(let i=0 ; i<10; i++){
    console.log(i);
 }

 if(a !== 0 && a>5){
    console.log(a)
 }
 else if(a<5){
    console.log("Less than 5")
 }
 else{
    console.log("equal to zero")
 }

 while(condition){
    //
 }

 // break , continue

