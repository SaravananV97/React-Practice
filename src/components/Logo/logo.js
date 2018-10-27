import React from "react";
import logo from "../../assets/logo.png";
const Logo = (props) => {
    return (
        <div className = {props.className} >
        <img src = {logo} alt = "Django"></img>
        </div>   
    );
}

export default Logo;

