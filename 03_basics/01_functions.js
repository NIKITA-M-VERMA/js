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


function calculatecartprize(val1,val2,...num){
    return num
}
console.log(calculatecartprize(100,2000,200,300))
//this is called rest operator where we put all the elements in a array and return that array 

const user={
    name:"christie",
    amount:4000
}

function handleobject(anyobject){
    console.log(`user is ${anyobject.name} and the amount spend is ${anyobject.amount}`)
}
handleobject(user)
handleobject({
    name:"elasine",
    amount:5000
})
