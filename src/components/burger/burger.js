import React from "react";
import BurgerIngredients from "./Ingredients/ingredients";
import classes from "./burger.css";
const burger = (props) => {
   let ingredients = Object.keys(props.ingredients);
   let insideBread = ingredients.map((key) => {
    return [...Array(props.ingredients[key])].map((_,i) =>{
        return (
            <BurgerIngredients key = {key+i} type = {key}></BurgerIngredients>
        );
    })
});
    insideBread = insideBread.reduce((arr,el) => arr.concat(el),[]);
    return (
        <div className = {classes.Burger} >
            <BurgerIngredients type = "BreadTop"/>
            {insideBread.length>0?insideBread:<p>Burger is Empty!</p>}
            <BurgerIngredients type  = "BreadBottom" />
        </div>
    );
}

export default burger;
