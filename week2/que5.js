function updatedetails(product,discount,stock){
    return {id:product.id,name:product.name,discount:discount,stock:stock};
}
const product = {id: 101, name: "Laptop", price: 1000, category:
    "Electronics"}
const updated=updatedetails(product,10,true)
console.log(updated)
console.log(product)
