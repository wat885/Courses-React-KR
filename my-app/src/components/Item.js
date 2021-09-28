import React from "react";
import PropTypes from "prop-types";
import "./item.css";

// const Item = ({amount, title}) => {
const Item = (props) => {
  const { amount, title } = props;
  const status = amount < 0 ? "expense" : "income";

  return (
    <li className={status}>
      {title} <span> {amount}</span>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
