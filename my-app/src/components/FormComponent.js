import React, { useState, useEffect } from "react";
import "./FormComponent.css";
import { v4 as uuidv4 } from "uuid";


const FormComponent = (props) => {
  // console.log("render form components");

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [formValid, setFormValid] = useState(false);

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
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    // console.log(itemData);
    props.onAddItem(itemData);
    setTitle("");
    setAmount(0);
  };

  // จะถูกเรียกใช่เมือมีการ เปลียนแปลงค่าใน state แล้ว re render
  useEffect(() => {
    // const checkData = title.trim().length > 0 && amount !== 0  && amount > 0
    const checkData = title.trim().length > 0 && amount !== 0 
    setFormValid(checkData);


  }, [title, amount]); // ดักจับ state

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
          <label>จำนวนเงิน</label>
          <input
            type="number"
            placeholder="(+ รายรับ , - รายจ่าย)"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button type="submit" className="btn " disabled={!formValid}>
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
