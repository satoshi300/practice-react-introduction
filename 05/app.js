import React from "react";
import { createRoot } from 'react-dom/client';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';

const root = createRoot(document.querySelector('#root'));

const App = () =>
    <>

        <Menu />
    </>

root.render(<App />)