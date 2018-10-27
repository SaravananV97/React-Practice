import React from "react";
import classes from "./backdrop.css";
const Backdrop = (props) => {
    console.log("Backdropping...");
    console.log(props.show);
    if(props.show)
        return <div className = {classes.BackDrop}></div>
    else
        return null;
}

export default Backdrop;

