/* destructuring the array and the object */


const course={
    name:"telusko",
    faculty:"aziz ahas",
    fee:"$999",
    duration: "9 days"

}

const {fee: coursefe}= course
//these curly braces means the destructuring along with renaming 

console.log(coursefe)

/* json is just {}
keys and values both are strings(except numbers and boolean ) 
json do not have name unlike the objects 

json can also be an array containing so many objects in it 
*/