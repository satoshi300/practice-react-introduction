import React from "react";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const HeaderFn = () => {
    return (
        <header>Moja pierwsza strona w React.</header>
    );
};

class HeaderCl extends React.Component {
    render() {
        return <header>Moja pierwsza strona w React!</header>
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
