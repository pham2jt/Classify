import React from 'react';
import Card from '../components/card.js';
import Header from '../components/header.js';
import Button from '../components/button.js';
import Donut from '../components/donut.js';
import './home.css';
import Announcement from '../components/announcement.js';
import { Link } from 'react-router-dom';
function Home() {
  const content1 =  "Don't miss out on a variety of food trucks every weekend this month outside of the Student Union building.";
  const content2 = "New Eloyce Online Job Board! Search local job listings for full-time, part-time and temporary positions.";
  const content3 = "Fall 2022 registration begins soon. Get a head start by reviewing your academic plans with you advsior.";
  
  return (
    <div>      
      <Header className="header" />
      <div className="content">
        <div className="announcements">
          <Announcement content={content1} number="1" total="3" link="empty" linkTitle="empty" />
          <Announcement content={content2} number="2" total="3" link="empty" linkTitle="empty" />
          <Announcement content={content3} number="3" total="3" link="empty" linkTitle="empty" />
        </div>
        <div className="cards">
          <Card title="Classify" empty={false}>
            <Donut percent='80' />
            <div className='card-text'>
              <p className="card-text-big">Career Readiness Score</p>
              <p className="card-text-small">80% of JMU Grads are ready for the workforce</p>
            </div>
            <Link to='/curriculumEffectiveness'>
              <Button content="EXPLORE READINESS SCORE" />
            </Link>
          </Card>
          <Card title="Card Title" empty={true} />
          <Card title="Card Title" empty={true} />
        </div>
        <div className="cards">
          <Card title="Card Title" empty={true} />
          <Card title="Card Title" empty={true} />
          <Card title="Card Title" empty={true} />
        </div>
      </div>
    </div>
  );
}

export default Home;
