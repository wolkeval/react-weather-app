import React from "react";
import Logo from "./Logo.js";
import SearchBar from "./SearchBar.js";
import Buttons from "./Buttons.js";

export default function Header() {
  return (
    <div className="Header row justify-content-center mt-4">
      <Logo />
      <SearchBar />
      <Buttons />
    </div>
  );
}
