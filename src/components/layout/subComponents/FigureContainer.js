import React from 'react';

const FigureContainer = (props) => {
    return (
        <div className='row'>
            <div className='container p-3 mt-2 mb-2 border border-dark rounded-lg'>
                <h5 className="card-title text-center">{props.title}</h5>
                <h3 className={`card-subtitle mb-2 text-center ${props.textColorClass}`}>{props.value}</h3>
            </div>
        </div>
     );
}
 
export default FigureContainer;