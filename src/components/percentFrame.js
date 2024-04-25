import React from 'react';
import { Link } from 'react-router-dom';
import './percentFrame.css';

const PercentFrame = ({ percentage, school, change }) => {
    var changeContent = 'Career Readiness score ';
    if (change === 0) {
        changeContent += 'stayed the same';
    } else if (change > 0) {
        changeContent += 'up ' + change + '%';
    } else {
        changeContent += 'down ' + change + '%';
    }
    return (
        <div className="percent-frame">
            <div className="content">
                <p className="title">Percentage of Career-Ready Students</p>
                <p className="percentage">{percentage}%</p>
                <p className="school">{school}</p>
                <p className="change">{changeContent}</p>
            </div>
            <div className="link">
                <Link to="/curriculumEffectiveness">Learn More</Link>
            </div>
        </div>
    );
};

export default PercentFrame;