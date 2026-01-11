function addtwonumbers(number1,number2){
    console.log(number1+number2)
}
const result=addtwonumbers(1,2)

//currently result gives the value undefined because we have not returned any value from the function 
//when you do not pass arguments it gives back undefined 
//we can have default value assigned also 
function login(username="buddy"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} you just logged in here`
}
console.log(login("zinisha"))