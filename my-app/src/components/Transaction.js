import React from "react";
import Item from "./Item";
import "./Transaction.css";

const Transaction = () => {
  const data = [
    { title: "ค่ารักษา", amount: "2000" },
    { title: "เงินเดือน", amount: "20000" },
    { title: "ค่าเช่า", amount: "5000" },
    { title: "ค่าเดินทาง", amount: "2000" },
    { title: "ค่าประกัน", amount: "300" },
  ];

  return (
    <div>
      <ul className="item-list">
        {data.map((element) => {
          return <Item title={element.title}  amount={element.amount}/>;
        })}
      </ul>
    </div>
  );
};

export default Transaction;
