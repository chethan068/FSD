function objectmerge(...details){
    return Object.assign({},...details);
}

const userDetails = {name: "CVR", age: 25}
const userAddress = {address: "Mangalpally", city: "Hyderabad"}
const userPreferences = {theme: "Engineering Edu", language: "EN"}
let newobject=objectmerge(userDetails,userAddress,userPreferences)
console.log(newobject)
