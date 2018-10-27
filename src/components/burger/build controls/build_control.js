import React from "react";
import classes from "./build_control.css";

const buildControl = (props) => {
    let count = props.getCount();
    return(
    <div className =  {classes.BuildControl}>
        <div className = {classes.Plus}><button onClick = {props.addIngredient}>+</button></div>
        <div className = {classes.Label}>{props.label} <span>{count}</span></div>
        <div className = {classes.Minus}><button onClick = {props.deleteIngredient}>-</button></div>
    </div>
    );
}

export default buildControl;