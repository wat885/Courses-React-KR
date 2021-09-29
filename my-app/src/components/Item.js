import React from "react";
import PropTypes from "prop-types";
import "./item.css";
import DataContext from "../data/DataContext";

// const Item = ({amount, title}) => {
const Item = (props) => {
  const { amount, title } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+";

  return (
    <li className={status}>
      {title}{" "}
      <span>
        {symbol} {Math.abs(amount)}
      </span>
      <DataContext.Consumer>
        {value=> <p>{value}</p>}
      </DataContext.Consumer>

    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
