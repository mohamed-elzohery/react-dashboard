import React from 'react';
import classes from './Cards.module.css';
import {UilUsdSquare, UilMoneyWithdrawal, UilClipboardAlt} from '@iconscout/react-unicons';
import Card from '../Card/Card';
const CardsData = [
    {
        title: 'Sales',
        style: {
            backgroundColor: "#FF3CAC",
            background: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
            boxShadow: "0 1rem 20rem 0 #e0c6f5"
        },
        barVal: 70,
        value: "2,400",
        icon: UilUsdSquare,
        series: [
            {
                name: 'Sales',
                data: [30, 40, 20, 50, 43, 100, 88]
            }
        ]
    },
    {
        title: 'Revenue',

        style: {
            backgroundColor: "#FAACA8",
            background: "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)",
            boxShadow: "0 1rem 20rem 0 #e0c6f5"
        },
        barVal: 80,
        value: '14,200',
        icon: UilMoneyWithdrawal,
        series: [
            {
                name: 'Revenue',
                data: [10, 20, 30, 40, 50, 40, 30, 10]
            }
        ]
    },
    {
        title: 'Expenses',
        style: {
            backgroundColor: "#FAD961",
            background: "linear-gradient(to right, #cac531, #f3f9a7)",
            boxShadow: "0 1rem 20rem 0 #e0c6f5"
        },
        barVal: 63,
        value: '14,200',
        icon: UilClipboardAlt,
        series: [
            {
                name: 'Expenses',
                data: [5, 25, 54, 33, 77, 44, 90, 100]
            }
        ]
    },
];
const Cards = () => {
    return <div className={classes['cards']}>
        {CardsData.map((card, index) => (<Card 
            key={index}
            title={card.title}
            style={card.style}
            barVal={card.barVal}
            value={card.value}
            icon={card.icon}
            series={card.series}
         />))}
    </div>
}

export default Cards;