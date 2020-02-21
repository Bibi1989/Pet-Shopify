import React from "react";
import { DogProvider } from "./context/dog-context/DogProvider";
import "./App.css";
import DogComponent from "./DogComponent";
import { NavBar } from "./Home/NavBar";
import FrontPage from "./Home/FrontPage";
import Products from "./Home/Products";

function App() {
  return (
    <div className='App'>
      <DogProvider>
        <NavBar />
        <FrontPage />
        <Products />
        <DogComponent />
      </DogProvider>
    </div>
  );
}

export default App;
