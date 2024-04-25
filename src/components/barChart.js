import Chart from 'chart.js/auto';
import React from "react";
import './barChart.css';

const BarChart = ({ labels, percentages }) => {  // Make sure to destructure `percent` if it's passed in an object.
    const canvas = React.useRef(null);

    React.useEffect(() => {
        const data = {
            labels: labels,
            datasets: [{
                label: 'Chart',
                data: percentages,  // Directly use numbers here.
                backgroundColor: '#FF8C3A',
                borderWidth: 5
            }]
        };
                
        const config = {
            type: 'bar',
            data: data,
            options: {
                borderSkipped: true,
                scales: {
                    y: {
                        display: false,
                        
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        };

        const ctx = canvas.current;
        const chartInstance = new Chart(ctx, config);

        // Cleanup function to destroy chart instance on component unmount
        return () => {
            chartInstance.destroy();
        };
    }, [labels, percentages]);  

    return (
        <div className='barGraph'>
            <canvas ref={canvas} />
        </div>
    );
}

export default BarChart;
