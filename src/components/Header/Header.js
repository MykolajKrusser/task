import React from 'react';
import classes from './Header.css';

import Logo from '../UI/Logo/Logo';
import Auth from '../../container/Auth/Auth';

const toolbar = (props)=>(
    <header className={classes.Header}>
        <Logo/>
        <Auth/>
    </header>
);
export default toolbar;