// Loop Array
// for Loop , forEach , Forof

const data = [10, 20, 30, 40, 50];

// for (let i = 0; i < data.length; i++) {
//   data[i] > 30 ? console.log(i) : console.log(`ลำดับ ${data[i]} = ${data[i]}`);
// }

// data.forEach(e => console.log('forEach '+e))

// for (d of data) {
//     console.log('of '+d)
// }

// let sum = 0;
// data.forEach((e) => {
//   sum += e;
//   console.log(sum);
// });

for (e of data) {
  if (e >= 30) break;
  console.log("of " + e);
}
