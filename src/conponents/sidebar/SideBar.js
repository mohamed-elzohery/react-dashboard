import React, { useState } from 'react';
import Logo from '../../imgs/logo.png';
import classes from './SideBar.module.css';
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilBars
} from '@iconscout/react-unicons';
import SideBarItem from './SideBarItem';
import {motion} from 'framer-motion';

const SideBarItems = [
    {
        title: 'Home',
        Icon: UilEstate
    },
    {
        title: 'Orders',
        Icon: UilClipboardAlt
    },
    {
        title: 'Customers',
        Icon: UilUsersAlt
    },
    {
        title: 'Products',
        Icon: UilPackage
    },
    {
        title: 'Analytics',
        Icon: UilChart
    },
];

const SideBar = () => {
    const [activeIndex, SetActiveIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);

    const onClickHandler = (index) => {
        SetActiveIndex(index);
    }

    const sidebarVariants = {
        open: {
            left: '0'
        },
        close:{
            left: '-60%'
        }
    }
    
    return <>
        <div className={classes['side-btn']} onClick={() => setExpanded(prev => !prev)}><UilBars /></div>
    <motion.div className={classes['sidebar']} variants={sidebarVariants} animate={expanded ? 'open' : 'close'}>
        <div className={classes['sidebar__logobox']}>
            <img className={classes['sidebar__logo']} src={Logo}  alt='logo' />
            <h1 className={classes['sidebar__header']}>Admin</h1>
        </div>
        <ul className={classes['sidebar__list']}>
            {SideBarItems.map(({title, Icon}, index) =>
             (<SideBarItem title={title} Icon={Icon} key={index} isActive={activeIndex === index} onClickAction={onClickHandler.bind(this, index)}/>))}
            <SideBarItem title={"Signout"} Icon={UilSignOutAlt}/>
        </ul>
    </motion.div>
    </> 
}

export default SideBar;