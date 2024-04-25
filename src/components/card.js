import React from 'react';
import './card.css';
import  {ReactComponent as ThreeDots} from '../assets/three-dots-vertical.svg';
import  {ReactComponent as Bookmark} from '../assets/bookmark-solid.svg';
import {ReactComponent as Lock} from '../assets/lock.svg';
const Card = ({ title, empty, children }) => {
  var content;
  if (empty) {
    content = (
      <div className="empty-content" />
    );
  } else {
    content = (
      <div className="card-content">
        {children}
      </div>
    );
  }

  var buttons;
  if (empty) {
    buttons = (
      <div>
        <button className='three-dots'>
            <ThreeDots />
          </button>
          <button className='bookmark'>
            <Bookmark />
        </button>
      </div>
    );
  } else {
    buttons = (
      <div>
        <button className='three-dots'>
          <Lock />
        </button>
      </div>
    );
  }
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        <div className="card-menu">
          {buttons}
        </div>
      </div>
      {content}
    </div>
  )
};

export default Card;
