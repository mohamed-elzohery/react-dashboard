import React from 'react';
import Cards from './Cards';
import classes from './MainDash.module.css';

const MainDash = () => {
    return <div className={classes['main-dash']}>
        <h2 className={classes['main-dash__header']}>Dashboard</h2>
        <Cards />
    </div>
}

export default MainDash;