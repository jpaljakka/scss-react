import logo from "./logo.svg";
import "./style.js";
import React, { useEffect } from "react";
import WaveSvg from "./WaveSvg";
const App = () => {
  return (
    <div className="waves">
      <WaveSvg black />
    </div>
  );
};

export default App;
