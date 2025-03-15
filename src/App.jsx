import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <>
      <div>
        <h1>The 📔Dictionary</h1>
        <h2>
          <Dictionary />
        </h2>
      </div>
    </>
  );
}

export default App;
