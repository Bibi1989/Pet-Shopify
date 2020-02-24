import React from "react";
import { DogProvider } from "./context/dog-context/DogProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DogComponent from "./DogComponent";
import { NavBar } from "./Home/NavBar";
import FrontPage from "./Home/FrontPage";
import Products from "./Home/Products";
import Footer from "./Home/Footer";
import AddPet from "./sellers/AddPet";
import SinglePet from "./Home/SinglePet";
import CartComponent from "./Home/CartComponent";

function App() {
  return (
    <div className='App'>
      <Router>
        <DogProvider>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <>
                <FrontPage />
                <Products />
                <Footer />
              </>
            </Route>
            <Route exact path='/view/:id'>
              <SinglePet />
            </Route>
            <Route exact path='/cart/:id'>
              <CartComponent />
            </Route>
            <Route exact path='/seller'>
              <AddPet />
            </Route>
            <Route exact path='/not'>
              <DogComponent />
            </Route>
          </Switch>
        </DogProvider>
      </Router>
    </div>
  );
}

export default App;
