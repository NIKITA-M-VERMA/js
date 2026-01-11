let mydate =  new Date()
console.log(mydate)

let currdate= new Date(2023,25,5,14,20)
console.log(currdate.toString())

let timestmp= Date.now()
console.log(timestmp)
console.log(mydate.getTime())

console.log(mydate.toLocaleString('default', {
    weekday : "long",
   
}))

