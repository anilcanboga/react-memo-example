import React, { useState } from "react";
import Component1 from "./Component1";
import "./App.css";

function App() {
  // Sorun
  // Tıkla 1 yazılı butona her basıldığında Component1'e giden props değişmediği halde tekrar render oluyor

  // Çözüm
  // Resolve1 Klasöründe Parent componentte useMemo yapılıyor, Children componentte değişen bir şey yok
  // Resolve1 Klasöründe Children componentte useMemo yapılıyor, Parent componentte değişen bir şey yok

  console.log("App Render Edildi");
  const [count, setCount] = useState(0);
  const [statee, setStatee] = useState("0");

  return (
    <>
      <Component1 statee={statee} />
      <br />

      <button onClick={() => setCount(Math.random() * 10)}>Tıkla 1</button>
      <button onClick={() => setStatee("1")}>Tıkla 2</button>

      <br />
      <br />
      {count}
    </>
  );
}

export default App;
