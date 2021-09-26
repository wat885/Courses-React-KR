import React from "react";
import Item from "./Item";
import "./Transaction.css";
import { v4 as uuidv4 } from "uuid";

const Transaction = () => {
  const data = [
    { title: "ค่ารักษา", amount: 2000 },
    { title: "จ่ายประกัน", amount: 300 },
    { title: "ค่าเช่า", amount: 5000 },
  ];

  return (
    <div>
      <ul className="item-list">
        {data.map((element) => {
          // return <Item title={element.title}  amount={element.amount}/>;
          // return <Item {...element} key={element.id} />;
          return <Item {...element} key={uuidv4()} />;
        })}
      </ul>
    </div>
  );
};

export default Transaction;
