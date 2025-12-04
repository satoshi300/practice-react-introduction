import React from "react";
import { createRoot } from 'react-dom/client';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';

const root = createRoot(document.querySelector('#root'));

const App = () =>
    <>
        <MenuItem text='devmentor.pl' url='https://devmentor.pl' />
        <MenuItem text='React' url='https://pl.legacy.reactjs.org/' />
        <Menu />
    </>

root.render(<App />)