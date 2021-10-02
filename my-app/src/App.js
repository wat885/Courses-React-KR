import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";

import "./App.css";
import { useState, useEffect } from "react";
import DataContext from "./data/DataContext";
import ReportComponet from "./components/ReportComponet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // const initdata = [
  //   { id: 1, title: "ค่ารักษา", amount: 2000 },
  //   { id: 2, title: "จ่ายประกัน", amount: 300 },
  //   { id: 3, title: "ค่าเช่า", amount: 5000 },
  // ];
  // const [items, setItems] = useState(initdata);

  const initState = [
    { id: 1, title: "ค่าเช่าบ้าน", amount: -2000 },
    { id: 2, title: "เงินเดือน", amount: 20000 },
    { id: 3, title: "ค่าเดินทาง", amount: -500 },
    { id: 4, title: "ขายของ", amount: 2000 },
  ];

  const [items, setItems] = useState(initState);

  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const [test, setTest] = useState('test value');

  const onAddNewItem = (newItem) => {
    // console.log("ข้อมูลที่ส่งมาจาก form Component", newItem);
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0)

    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1;
    // console.log("ยอดรายได้ " + income);
    // console.log("ยอดรายจ่าย " + expense);

    setReportIncome(income.toFixed(2));
    setReportExpense(expense.toFixed(2));
  }, [items, reportIncome, reportExpense]);

  // // reducer state
  // const [showReport, setshowReport] = useState(false);
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SHOW":
  //       // return showReport ? setshowReport(false) : setshowReport(true)
  //       return setshowReport(true);
  //     case "HIDE":
  //       return setshowReport(false);
  //   }
  // };
  // // const [ผลจากการเปลียนแปลงstate, dispatchเรียกใช่ actionใน reducer] = useReducer(reducerที่ทำงานด้วย ,stateส่งไปทำงาน)
  // const [resule, dispatch] = useReducer(reducer, showReport);

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
        value : test,
      }}
    >
      <div className="container">
        <h1 style={{ textAlign: "center", color: "lightgray" }}>
          แอพรายรับ ร่ายจ่าย
        </h1>

        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
          </div>

          <Switch>
            <Route path="/" exact>
              <ReportComponet />
            </Route>
            <Route path="/insert">
              <FormComponent onAddItem={onAddNewItem} />

              <Transaction items={items} />
            </Route>
          </Switch>
        </Router>

        {/* {showReport && <ReportComponet />} */}

        {/* <h1>{resule}</h1>
        <button onClick={() => dispatch({ type: "SHOW" })}>แสดง</button>
        <button onClick={() => dispatch({ type: "HIDE" })}>ซ่อน</button> */}
      </div>
    </DataContext.Provider>
  );
}

export default App;
