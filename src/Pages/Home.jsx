import React from "react";
import Hero from "../Components/Hero";
// import HeroNew from "../Components/HeroNew";
import SearchComponent from "../Components/SearchComponent";


export default function Home() {
  return (
    <div >
      <Hero></Hero>
      {/* <HeroNew></HeroNew> */}
      <SearchComponent></SearchComponent>
    </div>
  );
}
