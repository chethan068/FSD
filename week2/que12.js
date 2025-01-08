function Createprofile(obj){
    return {name:obj.name,email:obj.email};

}
let obj={name:"chethan",age:20,email:"chethan@gmail.com",address:"st1 lane"};
console.log(Createprofile(obj));