//ทำงานกับ object

const user = "kong";
const age = 25;
const address = "กทม";

const customer = {
  customersName: user,
  age,  //ถ้าชือเดียวกันใส่ age ได้เลย
  address,
  showData(){
    console.log("ลูกค้าชือ" + this.customersName)
  }
};

console.log(customer);
customer.showData();
