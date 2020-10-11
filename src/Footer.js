import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer row justify-content-center mt-4">
      <footer>
        <a
          href="https://github.com/wolkeval/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Valeria Strusi 👩‍💻
      </footer>
    </div>
  );
}
