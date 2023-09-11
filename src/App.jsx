// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navication from "./components/Navication";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Counter from "./components/Couter";
import { useEffect, useState } from "react";
import Clock from "./components/Clock";

function App() {
  // const userName = "Le Huu Trong";
  // const greeting = {
  //   name: "Le Huu Trong",
  //   age: 21,
  // };

  // const [enableCounter, setEnableCounter] = useState(true);

  // const handleChange = (e) => {
  //   setEnableCounter(e.target.checked);
  // };

  // const [showClock, setShowClock] = useState(true);

  // const toggleClock = () => {
  //   setShowClock(!showClock);
  // };

  return (
    <>
      {/* <h1>Effects</h1>

      <label>
        <input
          type="checkbox"
          checked={enableCounter}
          onChange={handleChange}
        />
        <span>Enable counter</span>
      </label>

      <Counter disabled={!enableCounter} />
      <button onClick={toggleClock}>Toggle clock</button>

      {showClock && <Clock />} */}
      
      <Welcome name="" />
      <Navication />
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;
