// IF STATEMENTS-- used to make decision in your code 
let user = prompt ("How old are you")
let standardAge = 21;

if (user >=standardAge) {
    alert("You can drive")

}else if(user >=18){
    alert("Try next year")

}

let money;
if(money) {
    alert("you have money")
}else{
    alert("you do not have money")
}


let getGrade = prompt("Enter your grade")
if (getGrade  >= 90){
    alert(`${getGrade} is grade A`)
}
else if (getGrade >= 75) {
    alert(`${getGrade} is grade B`)
}
else if (getGrade >= 65) {
    alert(`${getGrade} is grade C`)
}
else if (getGrade >= 55) {
    alert(`${getGrade} is grade D`)
}
else if (getGrade >= 40) {
    alert(`${getGrade} is grade E`)
}
else if (getGrade >= 40) {
    alert(`${getGrade} is grade F`)
}



// classwork

let population = 2000000
let averagePopulation = 3300000

let togetherPopulation = averagePopulation - population

if (population >= averagePopulation) {
console.log(`Nigeria's population is above average.`)
}else {
    console.log(`Nigeria's population is ${ togetherPopulation}`)
}


//switch

switch (day) {
    case `Monday`:
        console.log(`Go to Market`)
        break;


    case `Tuesday`:
        console.log(`Go to Market`)
        break;


    case `Wednesday`:
        console.log(`Go to Market`)
        break;
    

     default:
        console.log(`invalid Day`)  
         

}



//class-work
let newlanguage  = prompt(`Most Spoken language in the world`)

switch (language) {

    case `chinese`:
       console.log(`1st place`)
       break;

   case `spanish`:
     console.log(`2nd place`)
     break;

   case `english`:
     console.log(`3rdd place`)
     break;

   case `hindi`:
     console.log(`4th place`)
     break;

   case `arabic`:
     console.log(`5th place`)
     break;

   
   default:
    alert(`Great language too :D`)
    
}

//teneary Operator
let age = 23;
age >= 40 ? console.log("yes") : console.log(`no`)

//functions

function  passMessage (Params){
    console.log(`hello world`)
}

//calling-running-invoking (either one it yo might be calling it or running it or invoking it )

//1994 -1990-2003-1914-2012

let calcAge = 2024 -1990
console.log(calcAge)

let calcAge1 = 2024 -1990
console.log(calcAge)

let calcAge2 = 2024 -1990
console.log(calcAge)

let calcAge3 = 2024 -1990
console.log(calcAge)

//let food processor = juice with 4 apples, 4 oranges and 4 pine apples

function fruitprocessor (apple,orange,pineapple){
 const juice = ` juice with ${apples} apples ${orange} orange ${pineapples} pineapples`; 

 return juice

}

console.log(fruitprocessor(4,5,6))
console.log(fruitprocessor(34,15,19))


//class-work

function  describeCountry (country,population,capitalcity){
    const describe =`${country} country has ${population} million peolple and its capital city is ${capitalcity} `

    return

}
let country1 = (describecountry(Canada,2000000,Ontario));

let country2 = (describecountry(unitedState,3000000,NewYork));

let country3 = (describecountry(Netherland,4000000,dutch));

console.log(country)
console.log(population)
console.log(capitalcity)

// TYPES OF FUNCTIONS 

//ARROW FUNCTION
const calcage23 = birthYear => 2024 - birthYear
console.log(calcage23(prompt (`Enter your age`)))

//FUNCTION DECLEARATION

function calCage26 (birthYear) {
    console.log(2023 - birthYear)
}
console.log(calCage26)

//FUNCTION EXPRESSION

const calCage24 = function (birthYear) {
    console.log(2029 - birthYear)

}
console.log(calcAge(1990))


//CLASS WORK

// const percentageOfWorl (population,percentage) {
//     console.log()
// }


// const percentageOfWorld = function (populationValue, percentage) {
//    return percentage = `${country} has ${population} million people, so it's about ${population / 7000 * 100}% of the world population`
// }


//------- WATCH MORE ON FUNCTION --------

//array .... collection of variables 
// arrays are reuseable 

// HOW ARRAYS ARE USED 

const newArray = [0,3, `strings`, true]
console.log(newArray[0])

year[2] = 'vera'
console.log(year)

// ARRAYS WITH DIFFERENT DATA TYPES

const friends = [ 'whitney', `jenifer`, `boomie`]
const lastName = `Bassey`
const aboutVera = [`vera`, lastName, 2024-1998, `instructor`, `friends`, true ]
aboutVera.push('English')
aboutVera.unshift(`Nigeria`)
aboutVera.pop()
console.log(aboutVera)













unshift
pop
push


// HOW ARRAYS ARE USED 