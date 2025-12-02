import React from "react";

const MenuItem = props => {
    return (
        <ul>
            <li>
                <a href="#">{props.text} {props.url}</a>
            </li>
        </ul>
    );
}

export default MenuItem;


