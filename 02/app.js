import React from "react";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const headerStyles = {
    border: '1px solid blue',
    color: 'red',
    backgroundColor: 'yellow',
    padding: '20px',
    textAlign:'center'
}
const HeaderFn = () => {
    return (
        <header style={headerStyles}>Moja pierwsza strona w React.</header>
    );
};

class HeaderCl extends React.Component {
    render() {
        return <header style={headerStyles}>Moja pierwsza strona w React!</header>
    }
}

const App = () => {
    return (
        <>

            <HeaderFn />
            <HeaderCl />
        </>
    )
}

root.render(<App />)
