import React from "react";

const navigationItem = (props) => {
    return (
        <li><a>{props.children}</a></li>
    );
};

export default navigationItem;
