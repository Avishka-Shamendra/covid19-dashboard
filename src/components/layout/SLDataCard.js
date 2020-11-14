import React from 'react';

const  SLDataCard= (props) => {
    return ( 
        <div className='col-lg-3 col-md-12 '>
            <div className='card p-3 rounded-lg m-1 rounded-lg shadow'>
                <div className='container border border-secondary rounded-lg'>
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <h3 className={`card-subtitle mb-2 text-center ${props.textColorClass}`}>{props.value}</h3>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default SLDataCard;