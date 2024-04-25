import React from 'react';
import { Link } from 'react-router-dom';
import BarChart from './barChart.js';
import './graphFrame.css';

const GraphFrame = ({ labels, percentages }) => {
    
    return (
        <div className="percent-frame">
            <div className="content">
                <p className="title">Most Career Ready Majors</p>
                <BarChart labels={labels} percentages={percentages} />
            </div>
            <div className="link">
                <Link to="/curriculumEffectiveness">Learn More</Link>
            </div>
        </div>
    );
};

export default GraphFrame;