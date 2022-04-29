import React from 'react';
import OrderTable from '../table/OrderTable';
import Cards from './Cards';
import classes from './MainDash.module.css';

const MainDash = () => {
    return <div className={classes['main-dash']}>
        <h2 className={classes['main-dash__header']}>Dashboard</h2>
        <Cards />
        <OrderTable />
    </div>
}

export default MainDash;