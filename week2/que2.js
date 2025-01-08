function addition(...args){
    let sum=0;
    for(let i=0;i<args.length;i++){
        sum=sum+args[i];
    }
    return sum;
}
console.log(addition(10, 20, 30, 40))