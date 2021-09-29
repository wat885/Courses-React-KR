import React, { useContext } from "react";
import DataContext from "../data/DataContext";

const ReportComponet = () => {
  // const name = useContext(DataContext);

  //วิธีที่ 2 useContext
  const { income, expense } = useContext(DataContext);
  return (
    <div>
      {/* //วิธีที่ 2 useContext */}
      <p>
        รายรับ {income} รายจ่าย {expense}
      </p>

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
