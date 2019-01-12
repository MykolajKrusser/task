import React from 'react';
import classes from './Header.css';

import  Logo from '../UI/Logo/Logo';
import Button from '../UI/Button/Button';

const toolbar = (props)=>(
    <header className={classes.Header}>
        <Logo/>
        <Button>Log in with GitHub</Button>
    </header>
);
export default toolbar;