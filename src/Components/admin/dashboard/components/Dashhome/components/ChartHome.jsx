import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import up_chart_icon from '../assets/icons/up_chart.svg'
import '../../../../styles/dashhome.css'
import FilterCart from './FilterCart';
// Register the necessary components
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,      // Make sure to register PointElement
    CategoryScale,
    LinearScale
);

const ChartHome = () => {
    // Data for the line chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
        datasets: [
            {
                label: 'Monthly Sales',
                data: [65, 59, 80, 81, 56, 55, 40], // Data points
                borderColor: 'black',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.1, // Adds smoothing to the line
            }
        ]
    };

    // Options for the line chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `Sales: ${tooltipItem.raw}`;
                    }
                }
            }
        }
    };

    return (
        <div className='w-full chartdash p-5 rounded-[32px] bg-[--main-color-orange-dark] my-4 mx-2 text-black avenir-heavy'>
            <div className='flex flex-col md:flex-row justify-center text-center md:justify-between items-center my-1'>
                <div className="content">
                    <p className='text-xl'>الزيارات</p>
                    <div className='flex gap-4 items-center'>
                        <span>238,560.93</span>
                        <pre>13.02%</pre>
                        <img src={up_chart_icon} alt="up chart icon" />
                    </div>
                </div>
                <FilterCart/>
                </div>
            <Line  data={data} options={options} style={{width:'100%'}}/>
        </div>
    );
}

export default ChartHome;
