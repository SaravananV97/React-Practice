import React from "react";
import classes from "./modal.css"
import Aux from "../../../hoc/aux"
import Backdrop from "../BackDrop/backdrop"
const Modal = (props) => {
    if(props.show){
        return (
        <Aux>
        <Backdrop show = {props.show} />
        <div className = {classes.Modal}>{props.children}</div>
        </Aux>
        )
    }
    else
        return null;
}
export default Modal;
