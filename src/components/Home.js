import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../styles/Home.css";
import pic1 from "../assets/pic1.jpg";

function Home() {
  const [scrollPages, setScrollPages] = useState(0);
  useEffect(() => {
    console.log("useeffectis working");
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      const currpage = Math.ceil(scrollPosition / windowHeight);
      setScrollPages(currpage);
      
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPages]);
  const transformValue = `translate3d(0px,${-scrollPages*796}px,0px)`

  return (
    <>
      <Navbar />
      <div className="main" style={{transform:transformValue}} >
  
          <div className="container">
            <div className="image">
              <img src={pic1} alt="" />
            </div>
          
        </div>
       
          <div className="container">
            <div className="image">
              <img src={pic1} alt="" />
            </div>
      
        </div>
        
        <div className="container">
            <div className="image">
              <img src={pic1} alt="" />
            </div>
          
        </div>
        
        <div className="container">
            <div className="image">
              <img src={pic1} alt="" />
            </div>
         
        </div>
       
        <div className="container">
            <div className="image">
              <img src={pic1} alt="" />
            </div>
          
        </div>
      </div>
    </>
  );
}

export default Home;
