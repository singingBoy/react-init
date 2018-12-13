import React from 'react';
import dayJs from 'dayjs';
import './image-box.scss';

export default function ImageBox({
  image, column, title, description, time = Date.now(), user, commonts
}) {
  return(
      <div style={{backgroundImage: image}} className="image-box">
        <div className="image-column">{column}</div>
        <h1 className="image-title">{title}</h1>
        <p className="image-description">{description}</p>
        <div>
          <div>
            <img src={user.icon} alt={user.name}/>
            <div>
              <p>{user.name}</p>
              <p>{user.tag}</p>
            </div>
          </div>
          <div>
            <span>{dayJs(time).format('MMM')}</span>
            <span>{commonts}</span>
          </div>
        </div>
      </div>
  )
}
