//Immediately Invoked Function Expressions 

//named iife 
(function chai(){
    console.log("DB CONNECTED ")
})();

//FIRST () is the place where we will write the defination of the function 
//SECOND () IS FOR THE EXECUTION CALL 
// WE HAVE PROBLEM SOMETIMES DUE TO GLOBAL SCOPE KA POLLUTION 
//IIFE USED TO ELIMINATE GLOBAL SCOPE POLLUTION 
//WE SPECIFICALLY NEED TO INSERT A SEMICOLON AFTER EXECUTION OF AN iife function 
//we can even take an arrow function also  

//unamed iife with parameter 
(  (name )=>{
    console.log(`hey buddy ${name} `)
}

)('glecia')