import React from "react";

import "./App.css";

import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Main defaultCity="Tokyo" />
        <Footer />
      </div>
    </div>
  );
}
