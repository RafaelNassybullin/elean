import React from "react";

import {Products} from "./components/Products/Products";
import {About} from "./components/About/About";
import {Navigation} from "./components/Navigation/Navigation";
import {HeroSlider} from "./components/HeroSlider/HeroSlider";
import './App.scss';

function App() {

    return (
        <>
            <Navigation/>
            <HeroSlider/>
            <Products/>
            <About/>
        </>
    );
}


export default App;
