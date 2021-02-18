import React from "react";
import "./HeroSection.css";
import {Button} from "./Button";

const HeroSection=()=>{


    return(
        <>
      

      <div className="hero-container">

       <video  src="/videos/video-1.mp4" autoPlay loop muted />

      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>

      <div className="hero-btns">

          <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--medium">Get Started</Button>
          <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--medium" onClick={console.log("hey")}>Watch Trailer <i className='far fa-play-circle' /></Button>
      </div>

      </div>

        </>
    );
}

export default HeroSection;