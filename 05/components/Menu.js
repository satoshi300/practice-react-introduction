import React from "react";
import MenuItem from "./MenuItem";


const Menu = () => {
    return (
        <ul>
            <MenuItem text="home" url="/" />
            <MenuItem text="kontakt" url="/contact" />
        </ul>
    )
}

export default Menu;