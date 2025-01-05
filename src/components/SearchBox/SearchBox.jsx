import css from "./SearchBox.module.css";
import { useState } from "react";

const SearchBox = ({ value, onFilter }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={css.searchBoxWrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
