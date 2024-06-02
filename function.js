// function myName(){
// console.log("S")
// console.log("U")
// console.log("S")
// }
// myName()

function addTwoNumber(number1,number2){
    // console.log(number1 + number2)
    // let result = number1 + number2
    return number1 + number2
}
const result = addTwoNumber(5, 7)
// console.log("Result is:", result)



function calculateCartPrice(...num1){
    return num1

}
console.log(calculateCartPrice(200,400,1000))


// const user = {
//     username : "hitesh",
//     price : 200
// }
function handleObject(anyObject){
   console.log (`Name is:${anyObject.username} and the price is ${anyObject.price}`)
}
handleObject({
    username : "sujan",
    price : 500
})