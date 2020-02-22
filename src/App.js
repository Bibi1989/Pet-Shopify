import React from "react";
import { DogProvider } from "./context/dog-context/DogProvider";
import "./App.css";
import DogComponent from "./DogComponent";
import { NavBar } from "./Home/NavBar";
import FrontPage from "./Home/FrontPage";
import Products from "./Home/Products";
import Footer from "./Home/Footer";
import AddPet from "./sellers/AddPet";

function App() {
  return (
    <div className='App'>
      <DogProvider>
        <NavBar />
        <FrontPage />
        <Products />
        <Footer />
        <AddPet />
        <DogComponent />
      </DogProvider>
    </div>
  );
}

export default App;
