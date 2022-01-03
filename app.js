const spaceShuttle = "Determination";
const shuttleSpeed = 17500;
const distanceToMars = 225000000;
const distanceToMoon = 384400;
const milesPerKilometre = 0.621;

// Getting the data type of each varable
console.log(typeof(spaceShuttle));
console.log(typeof(shuttleSpeed));
console.log(typeof(distanceToMars));
console.log(typeof(distanceToMoon));
console.log(typeof(milesPerKilometre));

//Claculate days to reach Mars
const milesToMars = distanceToMars * milesPerKilometre;
const hoursToMars = milesToMars / shuttleSpeed;
const daysToMars = hoursToMars / 24;
console.log(`${spaceShuttle} will take ${daysToMars} days to reach Mars.`);

//Calculate days to reach moon
const milesToMoon = distanceToMoon * milesPerKilometre;
const hoursToMoon = milesToMoon / shuttleSpeed;
const daysToMoon = hoursToMoon / 24;
console.log(`${spaceShuttle} will take ${daysToMoon} days to reach Moon`);

let x = 2;
let y = x++;
console.log(y);
console.log(x);
for (let counter = 0; counter <= 100; counter++ ){
    if (counter % 3 === 0) {
     console.log("buzz")  
    }
   else if(counter % 5 === 0) {
    console.log("fuzz")     
   }
   else{
       console.log(counter)
   }
    }
    
//looping a triangle
let theAsh = "#";
for(let i = 0; i <=6; i++){
    console.log(theAsh);
    theAsh += "#";
}