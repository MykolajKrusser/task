import React from 'react';
import classes from './Header.css';

import  Logo from '../UI/Logo/Logo';

const toolbar = (props)=>(
    <header className={classes.Header}>
        <Logo/>
        <div>User</div>
    </header>
);
export default toolbar;