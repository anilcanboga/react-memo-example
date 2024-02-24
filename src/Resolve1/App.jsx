import React, { useState } from "react";
import Component1 from "./Component1";
import "./App.css";

function App() {
  console.log("App Render Edildi");
  const [count, setCount] = useState(0);
  const [statee, setStatee] = useState("0");

  return (
    <>
      <MemoizedComponent1 statee={statee} />
      <br />

      <button onClick={() => setCount(Math.random() * 10)}>Tıkla 1</button>
      <button onClick={() => setStatee("1")}>Tıkla 2</button>

      <br />
      <br />
      {count}
    </>
  );
}
const MemoizedComponent1 = React.memo(Component1, (prevProps, nextProps) => {
  return prevProps.statee === nextProps.statee;
});
export default App;
