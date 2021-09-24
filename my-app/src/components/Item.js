import React from "react";

// const Item = ({amount, title}) => {
const Item = (props) => {
  const {amount, title} = props;
  return (
    <div>
      <li>
        {amount} <span> {title}</span>
      </li>
    </div>
  );
};

export default Item;
