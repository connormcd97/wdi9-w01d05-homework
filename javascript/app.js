/*




Pre question things to do */

let firstVariable='Hello World';
firstVariable=2;
let secoundVariable=firstVariable;
secoundVariable='hello world';
// 2
var yourname = "Connor McDonough";
hello="hello my name is "+yourname;

const a = 4;
 const b = 53;
 const c = 57;
 const d = 16;
 const e = 'Kevin';

 console.log(a < b);
 console.log(c> d);
 console.log('Name'==='Name');
 console.log(true != false);
 console.log(false === false != false != false != false != false === true);
 console.log(false===false)
 console.log(e === 'Kevin');
 console.log(a < b < c);
 console.log(a==a !=d);
 console.log(48 !== '48');


 const animal = 'cow';
 if(animal=='cow'){
   console.log('Moooo!');
 }
 if(animal!='cow'){
   console.log('Hey! Youre not a cow');
 }

const age=19;
if(age >= 16){
  console.log("here's the keys");
}
else{
  console.log("sorry youre to young");
}

for(let i=0;i<10;i++){
  console.log(i);
}
for(let i=10;i<=400;i++){
  console.log(i);
}
for(let i=12;i<=4000;i+=3){
  console.log(i);
}

for(let i=2;i<100;i+=2){
  console.log(`${i}<-- is an even number`);
}
for(let i=1;i<=100;i++){
  if(i%5==0){
    console.log(`I found a ${i}. High five!`);
  }
  else if(i%3==0){
    console.log(`I found a ${i}.  Three is a crowd`);
  }
}
let bankaccount=0;
for(let i=1;i<=10;i++){
  bankaccount+=i;
}
console.log('bank account='+bankaccount);
for(let i=1;i<100;i++){
  bankaccount+=i;
}

console.log('bank account='+bankaccount*2);
//done e
//variables
//
qoutes=["Don't cry because it's over, smile because it happened",
"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
, "legs feed the wolves"];
const randomThings = [1, 10, "Hello", true]
randomThings[0];
randomThings[2]="world";
console.log(randomThings[2]);
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[2];
ourClass[4]="octocat";
ourClass.push('cloud city');
const myArray = [5, 10, 500, 20];
myArray.push('egon');
myArray.push('hi');
myArray.splice(0, 1);
myArray.unshift("bob Marley");
myArray.pop();
myArray.reverse();
let integer=22;
if(integer<100){
  console.log('little Number');
}
else {
  console.log('big number');
}
if(integer<5){
  console.log("little number");
}
else if (integer>10) {
  console.log('big number');
}
else{
  console.log('monkey');
}
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
console.log(`Kristyn is rocking that ${kristynsCloset[2]} Today!`);

kristynsCloset.splice( 6, 0, 'raybans' );
kristynsCloset[5]="stained knit hat";
console.log(kristynsCloset);
console.log(`tom is rocking that ${thomsCloset[0][0]} Today!`);
console.log(`tom is rocking that ${thomsCloset[1][0]} Today!`);
console.log(`tom is rocking that ${thomsCloset[2][0]} Today!`);
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]} `);
thomsCloset[1][2]="Footie Pajamas";

const printGreeting =(str)=>{
  return "Hello there,"+str;
}
console.log(printGreeting('slimer'));
const printCool =(str)=>{
  return str +" is cool";
}
console.log(printCool("Captain Reynolds"));

const calculateCube=(num)=>{
  return(Math.pow(num,3));
}
console.log(calculateCube(5));
const isVowel=(char)=>{
   return ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1
}
console.log(isVowel('a'));

const getTwoLenghts=(str1,str2)=>{
  twol=[]
  twol.push(str1.length);
  twol.push(str2.length);
  return twol;
}
console.log(getTwoLenghts("Hank", "Hippopopalous"));
const getMultipleLengths=(arr)=>{
  len=[]
  for(i=0;i<arr.length;i++){
    len.push(arr[i].length);
  }

  return len;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
const maxOfThree=(num1,num2,num3)=>{
  if(num1>=num2 && num1>=num3){
      return num1;
    }

  else if(num2>=num1 && num2>=num3){
      return num2;
    }
  else{
    return num3;
  }
}
console.log(maxOfThree(6, 9, 1));
const transmogrify=(num1,num2,num3)=>{
  return(Math.pow((num1*num2),num3));
}
console.log(transmogrify(5, 3, 2));
const reverseWord=(str)=>{
  temp='';
  const words=[];
  let word ="";
  for(let i=0;i<str.length;i++){
    word+=str[i];
    if(str[i]===" "){
    words.push(word);
    word="";
  }
  if(i===str.length-1){
    words.push(word);
  }
  }
  for(i=0;i<words.length;i++){


  temp+=(words[words.length-(i+1)]+" ");


}
return temp
}
console.log(reverseWord('Ishmael me Call'));
const random1n10=()=>{
return Math.floor(Math.random()*10);
}
console.log(random1n10());
const random10n100=()=>{
return Math.floor(Math.random()*100)+10;
}
console.log(random10n100());
const random532n13276=()=>{
return (Math.random()*13276)+532;
}
console.log(random532n13276());
const randomn1n10=()=>{
return (Math.random()*10);
}
console.log(randomn1n10());
const getRandomElemetent=(arr)=>{
  return arr[Math.floor(Math.random()*(arr.length-1))];
}
console.log(getRandomElemetent(qoutes));


const user={
  name:'guy',
  email:'guy@aol.com',
  age:35,
  purchased:[]
}
user.email='guy@gmail.com';
user.age++;
user.location="colorado";
user['purchased'].push('carbohydrates');
user['purchased'].push('peace of mind');
user['purchased'].push('Merino jodhpurs');
console.log(user.purchased);
user.friend = {
    name: "Grace Hopper",
    age: 85,
    location:'grass',
    purchased:[]
}
console.log(user.friend['name']);
console.log(user.friend['location']);
user.friend['age']=55;
user.friend['purchased'].push('The One Ring');
user.friend['purchased'].push('A latte');
console.log(user.friend['purchased'][1]);
for(i=0;i<user.purchased.length;i++){
  console.log(user.purchased[i]);

}
for(i=0;i<user.friend.purchased.length;i++){
  console.log(user.friend.purchased[i]);

}
const updateUser=()=>{
  user.age++;
  user.name=user.name.charAt(0).toUpperCase() + user.name.slice(1);
}

const oldAndLoud=(person)=>{
  person.age++;
  person.name=person.name.charAt(0).toUpperCase() + person.name.slice(1);

}
oldAndLoud(user);
