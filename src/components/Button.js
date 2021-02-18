import React from "react";
import {Link} from "react-router-dom";
import "./Button.css";

export const Button=({buttonStyle,buttonSize,children,onclick,type})=>{


    const STYLES=["btn--primary","btn--outline"];
    const SIZES=["btn--medium","btn--large"];

    const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize=SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(<>
   
   <Link to="/signup" className="btn-mobile">

       <button className={ `btn ${checkButtonStyle} ${checkButtonSize} `} onClick={onclick} type={type}>{children}</button>
   
   </Link>

    </>);



}

