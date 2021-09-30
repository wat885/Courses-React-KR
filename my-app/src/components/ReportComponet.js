import React, { useContext } from "react";
import DataContext from "../data/DataContext";
import "./RepoerComponent.css";

const ReportComponet = () => {
  // const name = useContext(DataContext);

  //วิธีที่ 2 useContext
  const { income, expense } = useContext(DataContext);
  return (
    <div>
      <h4>ยอดคงเหลือ (บาท)</h4>
      <h1>{income - expense}</h1>
      <div className="report-container">
        <div>
          <h4>ยอดรายรับ</h4>
          <p className="report plus">฿{income}</p>
        </div>
        <div>
          <h4>ยอดรายจ่าย</h4>
          <p className="report minus">฿{expense}</p>
        </div>
      </div>

      {/* //วิธีที่ 2 useContext */}
      {/* <p>รายรับ {income}</p>
      <p>รายจ่าย {expense}</p> */}

      {/* วิธีที่ 1.ใช่ข้อมูลโดย consumer */}
      {/* <DataContext.Consumer>
        {(context) => (
          <p>
            รายรับ {context.income} รายจ่าย {context.expense}
          </p>
        )}
      </DataContext.Consumer> */}
    </div>
  );
};

export default ReportComponet;
