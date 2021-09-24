import React from "react";
import Item from "./Item";
import "./Transaction.css";

const Transaction = () => {

  const data = [
    {title:"ค่ารักษา",amount:"2000"},
    {title:"เงินเดือน",amount:"20000"},
    {title:"ค่าเช่า",amount:"5000"},
    {title:"ค่าเดินทาง",amount:"2000"},
  ]

  return (
    <div>
      <ul className="item-list">
        
        <Item title={data[0].title} amount={data[0].amount} />
        <Item title={data[1].title} amount={data[1].amount} />

      </ul>
    </div>
  );
};

export default Transaction;
