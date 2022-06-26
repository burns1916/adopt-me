import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Bentley" animal="Dog" breed="French Bulldog" />
      <Pet name="Nala" animal="Dog" breed="French Bulldog" />
      <Pet name="Metro" animal="Cat" breed="Mix" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
