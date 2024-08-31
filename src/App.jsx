import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import Menus from './components/Menu/Menus';
import Banner from './components/Banners/Banner';
import Banner2 from "./components/Banners/Banner2";
import Banner3 from './components/Banners/Banner3';
import Footer from './components/Footer/Footer';



const App = () => {
  return (
  <>
    <main className="overflow-x-hidden">

      <Navbar/>
      <Hero></Hero>
      <Menus></Menus>
      <Banner></Banner>
      <Banner2></Banner2>
      <Banner3></Banner3>
      <Footer></Footer>
      
    </main>
  </>
  );
};

export default App;