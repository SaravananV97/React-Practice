import React from "react";
import BuildControl from "./build_control";
// import classes from "./build_control.css"
const items = [{name: "Salad", type: "Salad"}, 
                {name: "Cheese", type: "Cheese"},
                {name: "Meat", type: "Meat"},
                {name: "Bacon", type: "Bacon"},];

const buildControls = (props) => {
    const controls = items.map((item) => {
        return (<BuildControl key = {item.name} getCount = {() => props.count(item.type)} label = {item.type} deleteIngredient = {() => props.deleteIngredients(item.type)} addIngredient = {() => props.addIngredients(item.type)}></BuildControl>)
    });
    return <div>{controls}</div>;
};

export default buildControls;
