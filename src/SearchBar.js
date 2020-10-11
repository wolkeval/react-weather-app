import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="SearchBar col-12 col-sm-4 mt-3">
      <form className="search-bar">
        <input
          autoFocus
          autoComplete="off"
          id="city-input"
          placeholder="🔍 Where to?"
          type="search"
          className="form-control"
        />
      </form>
    </div>
  );
}
