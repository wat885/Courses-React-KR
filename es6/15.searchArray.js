//indexof   ได้ตำแหน่ง index ไม่เจอ -1
//find   ได้ข้อมูลที่เจอ  ไม่เจอได้ undefined
//findIndex  เจอ index  ไม่เจอ -1

const colors = ["แดง", "เขียว", "น้ำเงิน", "ม่วง", "ขาว"];
console.log(colors)

console.log(colors.indexOf('แดง'))
console.log(colors.indexOf('ฟ้า'))
search = colors.find(e => e==='แดง')
console.log(search)
search = colors.find(e => e==='ฟ้า')
console.log(search)