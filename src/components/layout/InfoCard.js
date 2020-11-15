import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const  InfoCard= (props) => {
    return ( 
        <div className='col-lg-3 col-md-12 '>
            <Zoom triggerOnce delay={250}>
            <div className='card p-3 rounded-lg m-1 rounded-lg shadow'>
                <div className='container border border-secondary rounded-lg'>
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <h3 className={`card-subtitle mb-2 text-center ${props.textColorClass}`}>{props.value}</h3>
                </div>
                </div>
            </div>
            </Zoom>
        </div>
     );
}
 
export default InfoCard;