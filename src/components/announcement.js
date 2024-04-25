import React from 'react';
import './announcement.css';
const Announcement = ({ content, number, total, link, linkTitle }) => {
var linkContent;
  if (link) {
    linkContent = (
        <div className='empty-link'>
            <a href='https://google.com'>Optional Text Link</a>
        </div>
    );
  } else {
    linkContent = (
        <div className="link">
            <a href={link}>{linkTitle}</a>
        </div>
    )
  }
  return (
    <div className='announcement'>
      <div className='accent' />
      <div className='ann-content'> 
        <p>{content}</p>
      </div>
      <div className='bottom'>
        <div className='number'>
          <p>{number} of {total}</p>
        </div>
        <div className='link'>
          {linkContent}
        </div>
      </div>
      
    </div>
  );
};

export default Announcement;