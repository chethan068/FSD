function Createprofile(obj,array){
    const[first,second]=array;
    return {name:obj.name,age:obj.age,primaryinterest:first,secondaryinterest:second};

}
const obj={name:"chethan",age:20}
interest=["cricket","movies"]
console.log(Createprofile(obj,interest))