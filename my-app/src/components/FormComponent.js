import React, { useState } from "react";
import "./FormComponent.css";

const FormComponent = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  const inputTitle = (event) => {
    // console.log(event.target.value);
    setTitle(event.target.value);
  };
  const inputAmount = (event) => {
    // console.log(event.target.value);
    setAmount(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault(); //ไม่ให้จอ refresh
    // console.log("บันทึกข้อมูลเรียบร้อย");
    const itemData = {
      title: title,
      amount: Number(amount),
    };
    console.log(itemData);
    setTitle("");
    setAmount(0);
  };
  return (
    <div>
      {/* {title}{amount} */}
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input
            type="text"
            placeholder="ระบุชื่อรายการของคุณ"
            onChange={inputTitle}
            value={title}
          />
        </div>
        <div className="form-control">
          <label>จำนสนเงิน</label>
          <input
            type="number"
            placeholder="(+ รายรับ , - รายจ่าย)"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button type="submit" className="btn ">
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
