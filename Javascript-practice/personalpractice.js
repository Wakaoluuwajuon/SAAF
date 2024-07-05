console.log(`welcome to my first javascript console`);

//CONSOLE.LOG ---IS MAINLY USED TO SEE WHAT YOU WRITING ON JAVASCRIPT


//PROMPT---- THIS IS JUST TO MAKE A USER MAKE AN INPUT 
// HOW PROMPT WORKS
// prompt(`Enter your Address`)

//ALERT---- THIS IS JUST TO PASS INFORMATION TO A USER
// HOW ALERT WORKS
// alert(`you've logged in successfully`)


//---VALUES AND VARIABLE ---

// VALUE-------

// A VALUE UNIT OF DATA AND IT CAN BE OF DIFFERENT TYPE SOME OF WHICH INCLUDES 

//STRINGS
//NUMBER
//BOOLEAN
//UNDEFINED
//NULL
//OBJECT
//ARRAY


//STRINGS-- this can be passed in a console having "" or `` as long has it inside the string be it number or letter 
// HOW STRINGS WORKS
console.log(`Hello world`)


//Number--- this is used without the use of string SO IT JUST A NUMBER VALUE
// HOW NUMBERS WORKS
console.log(45)


//BOOLEAN--- THIS RETURNS A TRUE OR FALSE VALUE
// HOW BOOLEAN WORKS
console.log(true)


//UNDEFIENED--- THIS absent of a  VALUE
// HOW UNDEFIENED WORKS
console.log(undefined)


//NULL--- THIS is an intentional absence of a value VALUE
// HOW NULL WORKS
console.log(null)

//OBJECT--- this is complex data structure and can hold multiple values 
// ---object always requires Key Value looking at this sample --names, age, name is the key---while 24,esther is the value for the object----so an object can hold multiple values-----the value must be in a string mainly letter but for number it stays as number 

//OBJECT ARE NOT ALWAYS IN A ORDERED LIST
// HOW OBJECT WORKS
console.log(
     names = {
        'age' : 24,  
        'name' : 'esther'
        // so this is the value TYPE WHICH IS NUMBER AND THE KEY IS THE `AGE`
    }
)

//ARRAY--- THIS is A ORDERED COLLECTIONS OF VALUE --ITS IMPORTANT TO NOTE THAT ARRAY IS ALWAYS IN A ORDERED LIST----- AND IMPORTANTLY AN ARRAY CAN HOLD DIFFERENT DATA TYPES LIKE (STRINGS,NUMBER,BOOLEAN,NULL,UNDEFIENED,OBJECT)

//HOW ARRAY WORKS---

console.log([2,5,6,true,`welcome`])


//VARIABLES---

//VARIABLES ARE USED TO STORE AND MANIPULATE DATA WITHIN A PROGRAM---AND THE DATA STORED IN A VARIABLE CAN BE CHANGED OVER THE TIME 

// USE OF VARIABLE 
//VARIABLE CAN STORE OR HOLD DIFFERENT DATA TYPES LIKE (STRINGS,NUMBER,BOOLEAN,NULL,UNDEFIENED,OBJECT)

//ALSO VARIABLES HAS THEM THAT YOU CAN CHOOSE BEFORE YOU CAN DECLEAR THEM SOME OF WHICH INCLUDES 

//EXAMPLES OF VARIBLE ---
myName = `waka`;  //--- AN EXAMPLE OF VARIABLE
console.log(myName) //---view this on the browser it your console....

// This an example of variable storing a data type ----myName(is the variable) and while (`waka`..is the data type which is string)

//HOW TO DECLEAR A VARIABLE

// LET OR CONST-----EITHER ONE OF THE TWO

//LET----- WHENEVER WE USE (LET) IT MEANS WE HAVE THE ABLITIY TO CHANGE A DATA TYPE OR ANYTHING THE VARIABLE IS STORING (VALUE)

//AN EXAMPLE OF DECLEARING A VARIABLE WITH LET

// let myName = `waka` 
//-- THIS IS FOR WHEN THE VALUE OR DATA TYPE IS STRING---- SO (LET) IS DECLARING A VARIABLE 

// let myAnswer = true
//-- THIS IS FOR WHEN THE VALUE OR DATA TYPE IS BOOLEAN---- SO (LET) IS DECLARING A VARIABLE

//REAL EXAMPLE OF DECLARING WITH THE LET VARIABLE

let myName1 = `esther`;
console.log(myName1)

//SO IF I WANT TO CHANGE THE VAULE OF THE DATA TO ANOTHER NAME THEN I CAN WITH THIS EXAMPLE 

myName1 =`daniel`;
console.log(myName1)

//CONST---- WHENEVER WE USE (CONST) IT MEANS WE DONT HAVE THE ABILITY TO CAN THE DATA TYPE OR VAULE STORED IN THE VARIABLE 

//AN EXAMPLE OF DECLEARING A VARIABLE WITH CONST

const mySchool = `Unilag`;
console.log(mySchool)

//WAYS TO NAME VARIABLE ------BECAUSE WORDS CANT JUST BE NAMED ANYHOW

//SO THE DIFFERENT WAYS TO NAME IN JAVASCRIPT

//-1-- CAMELCASE (camelCase)...THIS IS DONE BY HAVING THE FIRST WORD ON LOWERCASE AND CAPITALISING THE FOLLOW-UP WORD LETTER OF EACH WORDS 

//--EXAMPLE--(CamelCase, mediaQuery,justTheWay,herIdentitySurface)
//-----THIS IS MANLY USED TO AVOID THE USE OF SPACING OR (-)

//NOTE; this camelCase IS USED WHEN NAMING (FUNCTIONS,VARIABLES OR ANY OBJECT PROPERTIES)

//-1-- PASCAL CASE (Pascalcase)...THIS IS DONE BY HAVING THE FIRST WORD to be  CAPITALISING AND THE FOLLOW-UP WORD LETTER OF EACH WORDS TO BE ON LOWERCASE

//--EXAMPLE--(Camelcase, Mediaquery,Justtheway,Heridentitysurface)
//-----THIS IS MANLY USED TO AVOID THE USE OF SPACING OR (-)

//NOTE; this PASCAL-CASE IS USED WHEN NAMING (CLASSES OR CONSTRUCTOR FUNCTIONS)

// BUT THE BEST IS CAMELCASE


//CLASS-WORK

// let isIsland = true;
// let language;
// language = `english`
// console.log(typeoflanguage);
// console.log(isIsland, population, country, language)


//BASIC OPERATORS

//A OPEARTOR IS A SPECIAL KEY OR SYSMBOLS THAT IS USED TO PERFOM OPERATIONS ON VALUES OR VARIABLES

// IT ALSO HELPS TO MANIPULATES DATA AND AS WELL PERFORM CALCULATIONS

//MAIN TYPES OF OPERATOR ------

//ARTHEMENTIC- OPERATOR
//ASSIGNMENT- OPERATOR
//COMPARISON OPERATOR
//LOGICAL OPERATOR

//--LOOKING AT EACH OPERATOR ONE AFTER THE THE OTHER ------

//ARTHEMENTIC- OPERATOR 
//-- THE WORK OF AN ARTHEMENTIC OPERATOR IS TO ADD ONE OR MORE VALUES TOGETHER (IN SHORT THEY ARE USED TO PERFORM CALCULATIONS IN JAVASCRIPT)

//EXAMPLE 
console.log(5+9+3+4)

//MAKING A CALCULATION WITH VARIABLE
let number1 = 21
let number2 = 32
console.log( number1 + number2)

// UNDER ARTHEMENTIC- OPERATOR WE HAVE 

//CONCATENATE--OPERATOR
//SUBTRACTION--OPERATOR
//MULTIPLICATION--OPERATOR
//DIVISION--OPERATOR
//INCREMENT AND DECREMENT--OPERATOR
//ASSIGNMENT OPERATORS

//CONCATENATE--OPERATOR--------------------------------------------------
//-- THIS IS THE PROCESS OF ADDING TWO OR MORE STRINGS INTO A SINGLE STRING OR A SINGLE VALUE 

//EXAMPLE

let hisName =`Oluuwajuwonlo`;
let jobTitle = `Product Designer`;
let hisAge = 25;
let hisCity = `Lagos Nigeria`;
let hisMaritalStatus = `Married`;

//TO USE THE CONCATENATE OPTION OF ADDINING ALL THE STRINGS OR VALUES IN A SINGLE VALUE 

let hisData = hisName + ` is a  ` + jobTitle + ` and he is ` + hisAge + ` living in ` + hisCity + ` as a ` + hisMaritalStatus + ` man `
console.log(hisData)

//EXAMPLE 2

let hisName2 = `oluwajuwonlo`
let hisRole = `Product Designer`
let hisAge2 = 26
let hisResidence = `ikeja Lagos`
let hisHomeTown = `Sagamu 0gun-State`
let hisMaritalStatus2 = `Married`
let hisFiniacialWorth =`Has Enough` 

let hisData2 = hisName2 + ` is a ` + hisRole + ` and he's ` + hisAge2 + ` Living at ` + hisResidence + ` and he is from ` + hisHomeTown + ` and as well ` + hisMaritalStatus2 + ` and he ` +  hisFiniacialWorth

console.log(hisData2);

//SUBTRACTION--OPERATOR
//-- THIS IS THE PROCESS OF REMOVE OR SUBTRACT TWO OR MORE VALUES 

//EXAMPLE
console.log(10-5)// subtraction
console.log(10*5)//multiplication
console.log(10/5)// division
console.log(54/2/2/2)// division

//INCREMENT AND DECREMENT--OPERATOR
//-- THIS IS THE PROCESS OF INCREASING AND DECREASING THE VAULE OF A VARIABLE BY 1

// SO INCREMENT IS +1
// DRECREMENT IS -1

//EXAMPLE
//FOR INCREMENT
let calc1 = 5
console.log(++calc1)

//FOR DECREMENT
let calc2 = 10
console.log(--calc2)

//ASSIGNMENT OPERATORS ------------------------------------------------------
// ARE USED TO ASSIGN VAULES TO VARIABLES

//OPERATORS WE HAVE UNDER THE ASSIGNMENT OPERATOR

// --1-- EQUALS TO (=) 
// THIS TYPE OF ASSIGNMENT OPERATOR (ASSIGNS THE VALUE ON THE LEFT HAND TO THE VALUE ON THE RIGHT HAND) FOR EXAMPLE 

//EXAMPLE FOR ADDITION

let countryName = `Nigeria` //THE countryName WHICH IS THE (LEFT HAND)is what is being assigned to the (RIGHT HAND) which is Nigeria

// --2-- ADDITTION (+=)
// IT ADDS THE VARIABLE ON THE RIGHT HAND SIDE  TO THE LEFT HAND SIDE
 
//EXAMPLE FOR ADDITION (+=)
let myDate = 2024
myDate += 5
console.log(myDate)

//EXAMPLE FOR SUBTRACTION (-=)
let myDate2 = 2024
myDate2 -= 5
console.log(myDate2)

//EXAMPLE FOR MULITPLICATION (*=)
let myDate3 = 24
myDate3 *= 5
console.log(myDate3)

//EXAMPLE FOR MODULUS (%=)
let myDate4 = 10
myDate4 %= 10
console.log(myDate4)

//--2--COMPARISON OPERATORS ------------------------------------------
// ARE USE TO COMPARE VALUES AND DETERMINE IF THEY ARE EQUALS TO, NOT EQUALS TO,GREATER THAN, LESS THEN , OR PROBABLY MEETS OTHER SPECIFIC CONDITIONS 

// DIFFERENCE BETWEEN VALUES AND DATA TYPES 
//SO THE DIFFERENCE BETWEEN BOTH IS 
// FOR VALUE ARE BASICALLY THIS 
// 1,2,3, TRUE,FALSE ,ESHTER,DOYIN
// WHILE FOR DATATYPES ARE JUST 
// BOOLEAN ,NULL,UNDEFINED,ARRAYS,OBJECT,STRINGS,NUMBER

// -----SOME OF THE OPERATORS UNDER COMPARISON OPERATORS ARE-------

//--1-- LOOSE EQUALITY (==)
// THIS HELPS CHECK IF TWO VALUES ARE EQUAL IN WITHOUT COMPARING THEIR DATA TYPES 
//AND THIS LOOSE EQUALITY WOULD MOST BE USED WHEN WE WORKING ESPECIALLY ON (IF STATEMENTS)

//EXAMPLE
let nameGirl = `doyin`
let nameBoy = true

console.log( 20 == `20`)


//--2-- NOT EQUALS TO (!=)
// THIS HELPS CHECK IF TWO VALUES ARE NOT EQUAL

//EXAMPLE
console.log(5 != `egg`) // so it just checks if the values are equal 

//--3-- STRICT EQUALITY (===)
// THIS JUST COMPARE TWO VALUES FOR EQUALITY WHILE CONSIDERING THEIR DATA TYPES and their value
// SO IN SHORT IT WILL RETURN TRUE IF BOTH THE  DATA TYPE AND THE VALUE ARE THE SAME ----- AND----- IT WILL RETURN FALSE IF THEY ARE NOT

//EXAMPLE 
console.log(22 === `22`) //this will be False
console.log(`22` === `22`) //this will be true
console.log(true === false) //this will be False
console.log(true === true) //this will be true

//--4-- GREATER THAN (>)
//  IT CHECKS IF THE VAULE ON THE LEFT IS (GREATER THAN) THE VALUE ON THE RIGHT 

//EXAMPLE 
console.log(40>40)

//--5-- LESS THAN (<)
//  IT CHECKS IF THE VAULE ON THE LEFT IS (LESS THAN) THE VALUE ON THE RIGHT 

//EXAMPLE 
console.log(50<40)

//--6-- GREATER THAN OR EQUALS TO (>=)
//  IT CHECKS IF THE VAULE ON THE LEFT IS (LESS THAN 0R EQUALS TO) THE VALUE ON THE RIGHT 

//EXAMPLE 
console.log(60>=50) //this will be TRUE
console.log(40>=50) //this will be FALSE


//--7--LESS THAN OR EQUALS TO (>=)
//  IT CHECKS IF THE VAULE ON THE LEFT IS (LESS THAN 0R EQUALS TO) THE VALUE ON THE RIGHT 

//EXAMPLE 
console.log(20<=50) //this will be TRUE
console.log(60<=50) //this will be FALSE



// LOGICAL OPERATOR
//  (THIS IS A TYPE OF OPERATOR THAT IS MOSTLY USED WITH CONDITIONAL STATEMENT OR MOSTLY USE TO COMBINE CONDITIONAL STATEMENT (SUCH AS IF STATEMENTS AND WHILE LOOPS)
//CANT BE USED WITHOUT IF STATEMENT

// AND (&&)
// OR (||)
// NOT (!!)


// --------------------TRUTHY AND FASLY VALUE ----------------------------//

// TRUTHY AND FASLY VALUE 
// TRUTHY AND FASLY VAULE ARE 






// -------------------- CLASS-WORK ----------------------------------------//


let countrName = 'Nigeria';

let continentLocation = `West Africa`;

let language = `English`;

let population = 14000000

let dividePopulation = 14000000 / 2;
console.log(dividePopulation)

let addedPopulation = ++population;
console.log(addedPopulation);

let greaterPopulation = 7000000 > 6000000;
console.log(greaterPopulation)

let lesserPopulation = 7000000 < 3300000;
console.log(dividePopulation)

let Description = countrName + ' and is located in ' + continentLocation + ' and its total population is ' + population + ' and they communicate with ' + language ;

console.log(Description)





// --------------------CONVERSION AND COERSION----------------------------//

// ---1---TYPE CONVERSION IS A  DELIBIRATE OR MANUAL CONVERSION FROM ONE DATA TYPE TO ANOTHER 

// AND JAVASCRIPT CAN ONLY CONVERT TO THREE THINGS WITH THIS TYPE COVERSION
//
// NUMBER
// STRINGS 
// BOOLEAN

// EXAMPLE
let herDaughter = `21`
console.log(Number(herDaughter))  
// ----- this is me coverting a string back to a number Data Type

let Country = `21`
console.log(String(Country))  
// ----- this is me coverting a string back to a number Data Type

// SO WHAT SENARIO DO WE MAKE USE OF THIS (TYPE CONVERSION)

// let getData = prompt ("how you doing")
// console.log(String(getData)) // Converted to Number

// although by set to default anything showing the console will be set to show as a string 

// NOTE WHEN CHECKING ON YOUR CONSOLE TO KNOW IF YOU SEEING A STRINGS OR NUMBER ---- (STRINGS ARE WHITE) ----  (NUMBERS ARE PURPLE) ---------


//-----------------------------------
// ---2---TYPE COERCION IS AN AUTOMATIC CONVERSION OF A VALUE FROM ONE DATA TYPE TO ANOTHER ..

// SO IN SHORT THIS HAPPENS WHEN AN OPERATOR IS DEALING WITH TWO VALUES THAT HAS DIFFERENT DATA TYPES

// BUT WHEN USING PLUS (+) OPERATOR IT WILL CONCATENATE OR COVERT 
// IT WIL CONVERT NUMBERS TO STRINGS 

// ANY OTHER THING ASIDE FROM (+) WILL CONVERT IT TO NUMBER

// SO WHERE EVER WE SEE 0R HAVE MINUS(-) IT WILL CONVERT IT STRAIGHT TO NUMBER (OR WHERE EVER WE SEE ANYTHING ELSE OTHER THAN PLUS WILL TURN TO A NUMBER)

// EXAMPLE
let calc12 = `20` + 19; //result here will be 2019 --- why because it has different data value but the result will be in strings
console.log(calc12)

console.log(`143` < 34)

// --------------------TEMPLATE ITERALS ----------------------------//
//TEMPLATE ITERALS 
// TEMPLATE ITERALS ALLOWS FOR MORE POWERFUL AND FLEXIBLE STRING FORMATTING