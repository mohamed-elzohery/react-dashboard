import React from 'react';
import classes from './News.module.css';
import RecentOrders from './recent-orders/RecentOrders';
import Updates from './updates/Updates';

const News = () => {
    return <div className={classes['news']}>
        <h3>Updates</h3>
        <Updates />
        <h3>Customers Review</h3>
        <RecentOrders />
    </div>
}

export default News;