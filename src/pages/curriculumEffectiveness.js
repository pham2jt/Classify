import React from 'react';
import SmallHeader from '../components/smallHeader.js';
import PercentFrame from '../components/percentFrame.js';
import GraphFrame from '../components/graphFrame.js';
import './curriculumEffectiveness.css';
function CurriculumEffectiveness() {
    const percentages = [80, 88, 95, 88, 92];
    const labels = ['Education', 'Business', 'Nursing', 'Media Arts', 'Psychology'];
    return (
        <div>
            <SmallHeader className="header" />
            <h1>Curriculum Effectiveness</h1>
            <div className='frames'>
                <PercentFrame percentage='80' school='College of Education' change='0' />
                <PercentFrame percentage='88' school='College of Business' change='2' />
                <GraphFrame percentages={percentages} labels={labels} />
            </div>  
        </div>
    )
}

export default CurriculumEffectiveness