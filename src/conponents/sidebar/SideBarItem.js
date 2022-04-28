import React from 'react';
import classes from './SideBarItem.module.css';

const SideBarItem = ({Icon, title, isActive, onClickAction}) => {

    return <li className={`${classes['sidebar__item']} ${isActive && classes['active']}`} onClick={onClickAction}>
        <Icon className={classes['sidebar__icon']}/>
        <h3 className={classes['sidebar__title']}>{title}</h3>
    </li>
}

export default SideBarItem;