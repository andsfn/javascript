const tinder = {}
 tinder.user_id = 5
 tinder.name = "sujan"

// console.log(tinder)
let tinder1 = {1:"a",2:"b"}
let tinder2 = {3:"c",4:"d"}
let tinder3 = {...tinder1,...tinder2}
// console.log(tinder3)


const course = {
    courseinstructor : "sujan",
    id : 101,

}
const{courseinstructor} = course
console.log(courseinstructor)