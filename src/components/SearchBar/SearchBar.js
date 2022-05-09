import React from "react";
const SearchBar = (props) => {
  return (
    <>
      <SearchInput
        type="text"
        placeholder={props.placeholder}
        onChange={props.Trazi}
      />
    </>
  );
};

export default SearchBar;