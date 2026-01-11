/* objects formed either from literals or constructors 
objects formed from literals are not singletons(using object.create ) whereaas when used contructors they are singletons 
*/

const sym= Symbol("key1")

const user={
    name: "philisia",
    age :26,
    city: "san jose",
    [sym]: "this is it"
}


console.log(user["city"])
console.log(user.name)
console.log(user[sym])

user.age=30
console.log(user.age)
//Object.freeze(user)
console.log(user)

user.greeting= function(){
    console.log("we arre happy to have you on board");
}

user.cooking= function(){
    console.log(`we are here Mr.${this.name} to cook food of ${this.city} cuisine`)
}

console.log(user.greeting())
console.log(user.cooking())

