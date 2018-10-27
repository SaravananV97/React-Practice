import React from "react";
import Aux from  "../../hoc/aux";

const orderSummary =  (props) => {

    const buttonStyle = {
        display: "grid",
        gridAutoFlow: "column",
        justifyContent: "center", 
        alignItems: "center",
        gridGap: "10px"
      };
    const continueStyle = {

        background: "green",
        color: "white",
        height: "40px",
        width: "75px",
        fontSize: "1em",
        padding: "2px",
        textAlign: "right"
    };

    const cancelStyle = {

        background: "red",
        color: "white",
        height: "40px",
        width: "60px",
        fontSize: "1em",
        padding: "2px"
    };

    const keys = Object.keys(props.ingredients);
    const ingredientsList = keys.map((key,i) => 
    {
      return (<li key = {i}>{key} : {props.ingredients[key]}</li> );      
    })

    return (
        <Aux>
            <h3>The Summary of your Order is as follows</h3>
            <ul>
                {ingredientsList}
            </ul>
            <h2>The Total Price is ${props.price} </h2>
            <p>Continue to CheckOut??</p>
            <div style = {buttonStyle}>
            <button style = {continueStyle} onClick = {props.continueHandler}>Continue</button>
            <button style = {cancelStyle} onClick = {props.cancelHandler}>Cancel</button>
            </div>
        </Aux>
    )
}

export default orderSummary;
