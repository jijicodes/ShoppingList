import { useState } from "react";
import { PropTypes } from "prop-types";

export const AddItem = ({ onAdd }) => {
  const [newItemText, setNewItemText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(newItemText);
        setNewItemText("");
      }}
    >
      <input
        value={newItemText}
        onChange={(event) => setNewItemText(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
AddItem.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
