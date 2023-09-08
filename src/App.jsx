// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navication from "./components/Navication";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";

function App() {
  // const userName = "Le Huu Trong";
  // const greeting = {
  //   name: "Le Huu Trong",
  //   age: 21,
  // };

  const products = [
    {
        id: 1,
        title: "iPhone 9",
        originalPrice: 549,
        image: "https://placehold.co/450x300",
        voted: true,
    },
    {
        id: 2,
        title: "iPhone X",
        originalPrice: 799,
        image: "https://placehold.co/450x300",
        voted: false,
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        originalPrice: 399,
        image: "https://placehold.co/450x300",
        voted: true,
    },
];

  return (
    <>
      <Welcome name=""/>
      <Navication />
      <Header />
      <ProductList products={products} />
      <Footer />
    </>
  );
}

export default App;
