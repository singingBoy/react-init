import React, {Fragment} from 'react';
import dayJs from 'dayjs';
import './image-box.scss';

export default function ImageBox({image, column, title, description, time, user, comments, href, bg}) {
  return(
      <a href={href} className={ href ? 'href-pointer':'' }>
        <div style={{backgroundImage: `url(${image})` }} className='image-box'>
          <div className='image-cover' style={{backgroundColor: bg}}/>
          <div className='image-info'>
            <div className='image-column'>{column}</div>
            <h1 className='image-title'>{title}</h1>
            <p className='image-description'>{description}</p>
          </div>
          <div className='image-footer flex align-items-center justify-content-between'>
            <div className='flex align-items-center'>
            {
              user ?
               <Fragment>
                 <img className='user-icon' src={user.icon} alt={user.name}/>
                 <div>
                   <p className='user-name'>{user.name}</p>
                   <p className='user-tags'>{user.tag.join('，')}</p>
                 </div>
               </Fragment>
                : null
            }
            </div>
            <div className='time-comments'>
              {
                time ? <span>{dayJs(time).format('YYYY MMM')}</span> : null
              }
              <span>{comments} comments</span>
            </div>
          </div>
        </div>
      </a>
  )
}
