import React from "react";
import { Footer } from "../NavbarAndFooter/Footer";
import { Navbar } from "../NavbarAndFooter/Navbar";
import { Carousel } from "./components/Carousel";
import { ExploreTopBook } from "./components/ExploreTopBook";
import { Heros } from "./components/Hero";
import { LibraryServices } from "./components/LibraryServices";
export const HomePage = () =>{
    return(
        <>
  
        <ExploreTopBook />
        <Carousel />
        <Heros/>
        <LibraryServices/>
        
      </>

    );
}