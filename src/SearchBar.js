import React from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <div className="SearchBar col-12 col-sm-4 mt-3">
      <form className="search-bar" onSubmit={props.handleSubmit}>
        <input
          autoFocus
          autoComplete="off"
          id="city-input"
          placeholder="🔍 Where to?"
          type="search"
          className="form-control"
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
}
