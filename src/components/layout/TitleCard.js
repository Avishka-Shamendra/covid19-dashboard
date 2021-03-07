import React from 'react';

const TitleCard = (props) => {
    return ( 
        <div className='card p-3 mb-3 rounded-lg shadow'>
            <div className='card-content text-center'>
                <div className='row justify-content-around align-items-center'>
                    <img src='/assets/sl_flag.jpg' alt='sl flag' id='flag-1' width='50px'></img>
                    <h5>{props.title}</h5>
                    <img src='/assets/sl_flag.jpg' alt='sl flag' id='flag-2' width='50px'></img>
                </div>
                
            </div>
        </div>
     );
}
 
export default TitleCard;