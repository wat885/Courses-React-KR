//10 DefaultParameter

getDataCustomer =(customerName = 'ไม่ใส่ชือ'  , customerAddress ='ไม่ใส่ที่อยู่')=>{
    const address = `ชื่อลูกค้า : ${customerName}
    ที่อยู่ ${customerAddress}`
    return address
}

console.log(getDataCustomer('ก้อง', 'ระยอง'))
console.log(getDataCustomer('ก้อง'))