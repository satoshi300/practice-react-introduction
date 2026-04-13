import React from "react";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const headerStyles = {
    backgroundColor: '#e0e0e0',
    color: '#333',
    padding: '30px',
    textAlign: 'center',
    borderRadius: '16px',
    fontSize: '24px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    margin: '20px',
    boxShadow: `
        8px 8px 16px #bebebe,
        -8px -8px 16px #ffffff
    `
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
