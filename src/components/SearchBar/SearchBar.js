import React from "react";
import { SearchBar as SearchInput } from "./SearchBarStyle";
const SearchBar = (props) => {
  return (
    <>
      <SearchInput
        type="text"
        placeholder={props.placeholder}
        onChange={props.Provedi}
      />
    </>
  );
};

export default SearchBar;