import React from "react";
import propTypes from 'prop-types'

const MenuItem = props => {
    const { text, url } = props;
    return (
        <li>
            <a href={props.url}> {props.text}</a>
        </li>
    );
}

MenuItem.propTypes = {
    text: propTypes.string.isRequired,
    url: propTypes.string.isRequired,
}
export default MenuItem;