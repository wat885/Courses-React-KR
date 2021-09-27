import "./App.css";
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import { useState } from "react";

function App() {
  const initdata = [
    { id: 1, title: "ค่ารักษา", amount: 2000 },
    { id: 2, title: "จ่ายประกัน", amount: 300 },
    { id: 3, title: "ค่าเช่า", amount: 5000 },
  ];
  const [items, setItems] = useState(initdata);

  const onAddNewItem = (newItem) => {
    // console.log("ข้อมูลที่ส่งมาจาก form Component", newItem);
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    })
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "lightgray" }}>โปรแกรม</h1>
      <FormComponent onAddItem={onAddNewItem} />

      <Transaction items={items} />
    </div>
  );
}

export default App;
