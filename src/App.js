import React from "react";

import "./App.css";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main defaultCity="Tokyo" />
        <Footer />
      </div>
    </div>
  );
}
