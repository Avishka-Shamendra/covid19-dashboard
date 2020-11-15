import React from 'react';

const TitleCard = (props) => {
    return ( 
        <div className='card p-3 mb-3 rounded-lg shadow'>
            <div className='card-content text-center'>
                <h5>{props.title}</h5>
            </div>
        </div>
     );
}
 
export default TitleCard;