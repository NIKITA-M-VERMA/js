let a =10
const b=20
var c=30

console.log(a)
//a and b are scopes specific 
//c var is not scope specific var canbe accessed outside the scope therefore the var is not preferred 
//global scope is available in local scope but local scope is not available in global scope //sccope in the inspect is different from scope declared in running of code using node 


function one(){
const user="hiketish"
function two(){
   const  website="gogo"
    console.log(user)
}
console.log(user )
two()
}


one()



//function
//if function is called before declaration no error is reported 

function addone(num){
    return num+1
}

addone(45)

//variable
//is variable in called before declaration error is reported 

const addtwo= function(num){
    return num+2
}


console.log(addtwo(45))