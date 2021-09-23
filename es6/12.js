// push pop shift unshift 
// push ต่อท้าย pop ตัวท้ายออก
// shift ตัวหน้าออก  unshift เพิ่มหน้า

const data = [10,20,30]
console.log(data)
// data.push(500)
data.push(...[500,1000,1500])
console.log(data)
pop=data.pop()
console.log(data)
console.log(pop)

data.shift()
console.log(data)
data.unshift(999)
console.log(data)
