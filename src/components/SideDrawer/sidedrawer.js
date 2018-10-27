import React from "react";
import NavigationItem from "../Navigation/navigationitem";
import Logo from "../Logo/logo";
import classes from "./sidedrawer.css";
const sideDrawer = (props) => {

    const style = {
        height: "40px",
        width: "20px",
        position: "absolute",
        left: "50%",
        display: "block"
    }

        return(
            <div className={classes.SideDrawer}>
            <nav>
            <ul>
                <div>
                <Logo className = {style} />
                <NavigationItem>Menu</NavigationItem>
                <NavigationItem>Logo</NavigationItem>
                </div>
            </ul>
                </nav>
            </div>
        )    

}

export default sideDrawer;
