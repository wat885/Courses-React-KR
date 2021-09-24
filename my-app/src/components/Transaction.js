import React from "react";
import Item from "./Item";
import "./Transaction.css";

const Transaction = () => {
  return (
    <div>
      <ul className="item-list">
        <Item title="ค่ารักษา" amount="2000" />
        <Item title="เงินเดือน" amount="2000" />
        <Item title="ค่าเช่า" amount="2000" />
        <Item title="ค่าเดินทาง" amount="2000" />
      </ul>
    </div>
  );
};

export default Transaction;
