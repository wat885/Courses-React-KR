import React from "react";
import PropTypes from "prop-types";

// const Item = ({amount, title}) => {
const Item = (props) => {
  const { amount, title } = props;
  return (
    <div>
      <li>
        {title} <span> {amount}</span>
      </li>
    </div>
  );
};

Item.propTypes  = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
