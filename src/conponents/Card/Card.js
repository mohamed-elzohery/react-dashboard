import React, { useState } from 'react';
import classes from './Card.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from 'react-apexcharts';
import {UilTimes} from '@iconscout/react-unicons'; 

import { AnimateSharedLayout, motion } from 'framer-motion';

const CompactCard = ({param, setExpanded}) => {
    const {icon: Icon} = param;
    return  <motion.div layoutId='expandableCard' className={classes['card--compact']} style={param.style} onClick={setExpanded}>
        <div className={classes['radial-bar']}>
            <CircularProgressbar
            value={param.barVal}
            text={`${param.barVal}%`}
            />
            <h3 className={classes['card__title']}>{param.title}</h3>
        </div>
        <div className={classes['card__details']}>
            <Icon />
            <span>${param.value}</span>
            <span>Last 24 hours</span>
        </div>
    </motion.div>
};


const ExpandedCard = ({param, setExpanded}) => {
    const data = {
        options: {
            chart: {
                type: "area",
                height: "auto"
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: .35
            },
            fill: {
                colors: ["#FFF"],
                type: "gradient"
            },
            dataLabels: {
                enabled: false
            },
            stroke:{
                curve: "smooth",
                colors: ["#FFF"]
            },
            tooltip: {
                x:{
                    format: "dd/MM/yy HH:mm"
                }
            },
            grid:{
                show: true
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00:00.000Z",
                    "2018-09-19T01:30:00:00.000Z",
                    "2018-09-19T02:30:00:00.000Z",
                    "2018-09-19T03:30:00:00.000Z",
                    "2018-09-19T04:30:00:00.000Z",
                    "2018-09-19T05:30:00:00.000Z",
                    "2018-09-19T06:30:00:00.000Z"
                ]
            }
        }
    } 
    return <motion.div layoutId='expandableCard' className={classes['card--expanded']} style={param.style}>
        <div className={classes['chart-close']} style={{marginLeft: "auto", color: "#FFF", cursor: "pointer"}}>
            <UilTimes onClick={setExpanded}/>
        </div>
        <h3>{param.title}</h3>
        <div className={classes['chart-area']}>
            <Chart type='area' series={param.series} options={data.options}/>
        </div>
        <span>Last 24 hours</span>
    </motion.div>
};


const Card = (props) => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <AnimateSharedLayout>
            {isExpanded ? <ExpandedCard param={props} setExpanded={() => setIsExpanded(false)}/> : <CompactCard param={props} setExpanded={() => setIsExpanded(true)} />}
        </AnimateSharedLayout>)
    
}



export default Card;