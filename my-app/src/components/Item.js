import React from "react";

const Item = (props) => {
  // const [amount, title] = props;
  return (
    <div>
      <li>
        {props.title} <span> -{props.amount}</span>
      </li>
    </div>
  );
};

export default Item;
