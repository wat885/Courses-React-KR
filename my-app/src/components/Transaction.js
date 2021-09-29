import React, { useContext } from "react";
import Item from "./Item";
import "./Transaction.css";
import DataContext from "../data/DataContext";


const Transaction = (props) => {
  const { items } = props;
  const { income, expense } = useContext(DataContext);


  return (
    <div>
      <ul className="item-list">
        {items.map((element) => {
          return <Item {...element} key={element.id} />;
        })}
      </ul>
      <p> รายรับ {income} รายจ่าย {expense} </p>

      {/* <DataContext.Consumer>{(value) => <p>{value}</p>}</DataContext.Consumer> */}
    </div>
  );
};

export default Transaction;
