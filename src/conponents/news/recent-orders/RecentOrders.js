import React from 'react';
import classes from './RecentOrders.module.css';
import Chart from 'react-apexcharts';

const RecentOrders = () => {
    const data = {
        series: [
            {
                name: "Recent Reviews",
                data: [10, 20, 40, 50, 60, 70, 60]
            }
        ],
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
    };
    return <div className={classes['recent-orders']}>
        <Chart series={data.series}  options={data.options}/>
    </div>
}

export default RecentOrders;