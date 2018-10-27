import React, {Component}  from "react";
import Aux from "../../hoc/aux";
import Burger from "../../components/burger/burger";
import BuildControls from "../../components/burger/build controls/build_controls";
import CheckOut from "../../components/CheckOut/checkout";
import Modal from "../../components/UI/Modal/modal";
import classes from "../../components/CheckOut/checkout.css";
import OrderSummary from "../../components/OrderSummary/orderSummary";
import Layout from "../../components/layout/layout";
class BurgerBuilder extends Component{

    constructor(props){
        super();
        this.state = {
            ingredients:{
            Salad:0,
            Meat: 0,
            Cheese:0,
            Bacon:0
            },
            total: 2,
            checkingOut: false
    }
}

    continueHandler = () => {
        alert("Checking out...")
    }

    cancelHandler = () => {
        this.setState({checkingOut: false});
    }

    checkOutHandler = () => {
        console.log("Checking out.....")
        this.setState({checkingOut:true});
    }

    total = (ingredients) =>{
        return (ingredients.Salad*0.25 + ingredients.Meat*5 + 
                ingredients.Cheese * 0.2 + ingredients.Bacon * 0.5 )
    }

    getCount = (type) => {
        return this.state.ingredients[type];
    }

    deleteIngredient = (type) => {
        let ingredients = {...this.state.ingredients}
        if(ingredients[type] > 0){
            ingredients[type] = ingredients[type] - 1
            this.setState({ingredients, total: 2 + this.total(ingredients)});
    }
}

    addIngredient = (type) => {
        let ingredients = {...this.state.ingredients};
        ingredients[type] += 1; 
        this.setState({ingredients, total: 2 + this.total(ingredients)});
    }  

    render(){
        // const style = {
        //     textAlign:"center",
        //     position: "Absolute",
        //     top: "200px",
        //     left: "330px"
        // }

        return(
    <Aux>
        <Layout />
        <Modal show = {this.state.checkingOut}><OrderSummary price = {this.state.total} continueHandler = {this.continueHandler} cancelHandler = {this.cancelHandler} ingredients = {this.state.ingredients} /></Modal>
          <Burger ingredients = {this.state.ingredients}></Burger>
          <div className = {classes.CheckOut}><CheckOut clickHandler = {this.checkOutHandler} cost = {this.state.total}></CheckOut></div>
          <BuildControls count = {this.getCount} deleteIngredients = {this.deleteIngredient} addIngredients = {this.addIngredient} ></BuildControls>  
    </Aux>
    );
    }
}

export default BurgerBuilder;

