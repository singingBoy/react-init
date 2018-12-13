import React from 'react';
import './image-box.scss';

export default function ImageBox({
  image, column, title, description, time, user, count
}) {
  return(
      <div style={{backgroundImage: image}} className="image-box">
        <div className="image-column">{column}</div>
        <h1 className="image-title">{title}</h1>
        <p className="image-description">{description}</p>
        <div>

        </div>
      </div>
  )
}
