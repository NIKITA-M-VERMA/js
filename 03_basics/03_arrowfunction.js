const user={
      username :"alice",
      fee: 5999,

      welcomemessage:function(){
        console.log(`${this.username}, welcome to ouur team  `);
        //hee this keyword is referring to current context 
        

      }

}
//when you are in  node environemnt this refers to a n empty object 
//when inside an object or methode refers to its objects  defiined 
//when in broswer the object is window 
//functions ke ander this kaam nah karta this.user will give undefined 
//funstione ke under bas this works and gives you so many information 


const chai1= function(){
  let user="david"
  console.log(this.user)
}

const chai=()=>{
  let user="david"
  console.log(this.user)
  
}
// even inside arrow function this keyword can not be used it gives undefined output 

//here is the arrow function defineed above we also have other inmplicit arrow function where the curly braces are removed 

const addtwo=(num1,num2)=> num1+num2
const add2two=(num1,num2)=> (num1+num2)
//no need to write the return keyword 

const ad2dtwo=(num1,num2)=>{
  return num1+num2
}
//return keyword is a must to return value 
//in order to return a object also you have to wrap it a parenthesis 