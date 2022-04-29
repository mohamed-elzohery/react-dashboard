import React from 'react';
import classes from './Updates.module.css';
import img1 from '../../../imgs/img1.png';
import img2 from '../../../imgs/img2.png';
import img3 from '../../../imgs/img3.png';

const Updates = () => {
    const allUpdates = [
        {
            name: 'Mohamed Hany',
            noti: 'has ordered one right back instead of him and delivered on time.',
            img: img1,
            date: '20 mins ago'
        },
        {
            name: 'Magdy Afsha',
            noti: 'has sent one K.O to ZSC fans on 27 Nov 20220.',
            img: img2,
            date: '55 mins ago'
        },
        {
            name: 'Percy Tau',
            noti: 'had died since 2016 and still run like an ant.',
            img: img3,
            date: '2 hours ago'
        }
    ]

    return <div className={classes['updates']}>
        {
            allUpdates.map((update, index) => {
                return <div className={classes['update']} key={index}>
                    <img src={update.img} alt={update.name} />
                    <div>
                    <span className={classes['name']}>
                        {update.name}
                    </span>
                    <span className={classes['noti']}> {update.noti}</span>
                    <div className={classes['date']}>
                        <span>{update.date}</span>
                    </div>
                    </div>
                </div>
                
            })
        }
    </div>
}

export default Updates;