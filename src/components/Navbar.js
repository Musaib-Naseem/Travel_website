import React,{useState,useEffect} from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import {Button} from "./Button";

const Navbar=()=>{
      

    const [click,setClick]=useState(false);

    const handleClick=()=>{

        setClick(!click);
    }


    const closeMobileMenu=()=>{

        setClick(false);
    }

   const [button,setButton]=useState(true);

   const showButton=()=>{

    if(window.innerWidth<960){

        setButton(false);
    }
    else{

        setButton(true);

    }
   }
  
   
   useEffect(()=>{

    showButton();
   },[]);
   
   window.addEventListener("resize",showButton);
  

    return(

        

        <>
       
       <nav className="navbar">
           
       <div className="navbar-container">
       
       <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>

      TRAVL <i class='fab fa-typo3' />

       </Link>


       <div className="menu-icon" onClick={handleClick}>
           <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
       </div>

       <ul className={click ? "nav-menu active" : "nav-menu"}>
       
       <li className="nav-item" onClick={closeMobileMenu}>

        <Link  to="/" className="nav-links">

            Home
        </Link>   
       </li>

       <li className="nav-item" onClick={closeMobileMenu}>

        <Link  to="/services" className="nav-links">

            Services
        </Link>   
       </li>

       <li className="nav-item" onClick={closeMobileMenu}>

        <Link  to="/products" className="nav-links">

            Products
        </Link>   
       </li>

       <li className="nav-links-mobile" onClick={closeMobileMenu}>

        <Link  to="/signup" className="nav-links">

            Sign-Up
        </Link>   
       </li>

       </ul>

      {button && <Button buttonSize="btn--medium" buttonStyle="btn--outline" >Sign-Up</Button>}
       </div>






       </nav>

        </>
    );
}

export default Navbar;