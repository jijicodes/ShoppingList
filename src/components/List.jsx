import PropTypes from "prop-types";
import { Fragment } from "react";

export const List = ({ shoppingItems, onRemoveItem }) => {
  return (
    <ul>
      {shoppingItems.map((item) => (
        <Fragment>
          <li>
            {item} <button onClick={() => onRemoveItem(item)}>remove</button>
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

List.propTypes = {
  shoppingItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};
