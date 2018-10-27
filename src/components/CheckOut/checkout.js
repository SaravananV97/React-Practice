import React from "react";
import classes from "../CheckOut/checkout.css";

const CheckOut = (props) =>{
    
    let order = false;
    if(props.cost > 2){
        order = true;
    }
    return(
        <div className = {classes.CheckOut}>
            <h1>The totalCost is {props.cost}</h1>
            <button onClick = {props.clickHandler} disabled = {!order}>Order Now!</button>
            <br />
        </div>
    )
}
export default CheckOut;
