//Destructuring

//// array array
// const colors = ["เขียว", "แดง", "เหลือง"];
// // const [green,red,yellow] = colors;
// const [green,,yellow] = colors;

// // console.log(red)
// // console.log(green)
// console.log(yellow)


/// object
const product ={
    productName: 'com',
    price:30000,
    stock:10,
}

console.log(product)

const {productName,price,stock} = product
// const {productName:productName,price:price,stock:stock} = product
// ซ้าย property   ขวาตัวแปลที่เก็บค่า
console.log(productName)
console.log(price)