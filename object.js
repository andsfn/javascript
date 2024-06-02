// singleton object


//object literals

const mySym = Symbol("key1")
const jsUser = {
    name: "sujan",
    roll: 30,
    mySym,
    email: "sujantiwary5657@gmail.com",
    address: "Parbat",
    location: "Pokhara",
    citizen: "Nepali"
}
// console.log(jsUser.address);
console.log(jsUser["citizen"]);
console.log(jsUser.mySym);
jsUser.address = "Kaski"
console.log(jsUser.address);
Object.freeze(jsUser)
jsUser.address = "Kathmandu"
console.log(jsUser.address);
console.log(jsUser)
