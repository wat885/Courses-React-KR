//ลดข้อมูลใน array

const data = [10, 20, 30, 40];
const mapData = data.map(e=> 100)  // เปลียนเป็น 100
console.log(mapData)
const filterData = data.filter(e=> e>20)
console.log(filterData)

//////array.reduce((ค่าที่ถูกประมวลผม, e)=>{},ค่าเริมต้น)

result=data.reduce((value,e)=>{
    // console.log(value)
    const total = e+value;
    return total
},0)
console.log(result)
