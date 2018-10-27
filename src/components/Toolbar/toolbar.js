import React from "react";
import classes from "./toolbar.css";
import NavigationItem from "../../components/Navigation/navigationitem";
import Logo from "../Logo/logo";
const toolbar = (props) => {
        

    return (
        <nav className = {classes.Navigation}>
            <ul>
                <div className = {classes.Item}>
                <NavigationItem><Logo className = {classes.Logo} /></NavigationItem>
                <NavigationItem>Menu</NavigationItem>
                <NavigationItem>Logo</NavigationItem>
                </div>
            </ul>
        </nav>

    );
}

export default toolbar;
