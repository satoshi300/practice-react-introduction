import React from "react";
import { createRoot } from 'react-dom/client';
import MenuItem from './components/MenuItem';

const root = createRoot(document.querySelector('#root'));

const App = () =>
    <>
        <MenuItem text="kontakt" />
        <MenuItem url="/contact/" />

    </>

root.render(<App />)