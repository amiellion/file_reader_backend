import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';

import styles from './chart.module.scss';

Chart.register(...registerables);

const ChartComponent = ({ type, data, options }) => {
    return (
        <>
            {
                type === 'vertical_bar' || type === 'horizontal_bar' ? <div className={styles["container"]}><Bar data={data} options={options} /></div> :
                type === 'doughnut' ? <div className={styles["container"]}><Doughnut data={data} options={options} /></div> :
                type === 'line' ? <div className={styles["container"]}><Line data={data} options={options} /></div> :
                <div className={styles["container"]}><Pie data={data} options={options} /></div>
            }
        </>
    );
}

export default ChartComponent;