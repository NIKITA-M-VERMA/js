/*

for each loop can not return value it returns only undefined 


*/

const mynums=[1,2,3,4,5,6]
 const newnum=mynums.filter((num)=> num>4)
 //if instead of this we use an array fucntion it will return an emplty [] because it requires explicit return 
 //.filter( (num)=>{return num>4})
 console.log(newnum)

 // myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )