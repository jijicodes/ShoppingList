import PropTypes from "prop-types";

export const HowMany = ({ itemList }) => {
  return (
    <span>
      <div> {itemList.length} items in the shopping list!!</div>
    </span>
  );
};
HowMany.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
