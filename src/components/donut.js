import Chart from 'chart.js/auto';
import React from "react";
import './donut.css';

const Donut = ({ percent }) => {  // Make sure to destructure `percent` if it's passed in an object.
    const canvas = React.useRef(null);

    React.useEffect(() => {
        const empty = 100 - percent;
        const data = {
            labels: ['Percent', 'Empty'],
            datasets: [{
                label: 'Chart',
                data: [percent, empty],  // Directly use numbers here.
                backgroundColor: [
                    '#BA46A6',
                    '#DFAAD6'
                ],
                borderWidth: 5
            }]
        };

        const config = {
            type: 'doughnut',
            data: data,
            options: {
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                },
                elements: {
                    center: {
                        text: '{percent}%',
                        color: '#000',
                        fontStyle: 'Inter',
                        padding: 0
                    }
                }
            },
            plugins: [{  // Define a new plugin to draw the percentage text
                id: 'textInMiddle',
                beforeDraw: function(chart) {
                    let width = chart.width,
                        height = chart.height,
                        ctx = chart.ctx;
                    ctx.restore();
                    let fontSize = 1.5625;
                    ctx.font = fontSize + "em Inter";
                    ctx.textBaseline = "middle";

                    let text = `${percent}%`,
                        textX = Math.round((width - ctx.measureText(text).width) / 2),
                        textY = height / 2;

                    ctx.fillText(text, textX, textY);
                    ctx.save();
                }
            }]
        };

        const ctx = canvas.current;
        const chartInstance = new Chart(ctx, config);

        // Cleanup function to destroy chart instance on component unmount
        return () => {
            chartInstance.destroy();
        };
    }, [percent]);  // Ensure that `percent` is the only dependency unless others are required

    return (
        <div className='donut'>
            <canvas ref={canvas} />
        </div>
    );
}

export default Donut;
