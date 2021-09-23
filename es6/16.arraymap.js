// map

// const number = [10, 20, 30, 40];

// result = number.map((e) => e * 2);
// console.log(result);
//
// const data = ["ฝนตก", "แดดออก", "อากาศดี", "แดดออก", "อากาศดี", "แดดออก", "อากาศดี"];

// const result = data.map((e, i) => {
//   return `วันที่ ${i+1} สภาพอากาศ ${e}`;
// });

// console.log(result);

const data = [
  { day: "01/06/2564", weather: "แดดร้อน", temp: 27 },
  { day: "03/06/2564", weather: "ฝนตก", temp: 23 },
  { day: "04/06/2564", weather: "หมอก", temp: 17 },
];

const result = data.map((e, i) => {
  return e.weather
});

console.log(result);
