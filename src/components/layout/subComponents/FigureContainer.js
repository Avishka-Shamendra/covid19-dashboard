import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { RiVirusFill,RiAlarmWarningFill } from 'react-icons/ri';
import { GiDeathSkull } from 'react-icons/gi';

const FigureContainer = (props) => {
    let icon = null;

    if (props.icon==='heart'){
        icon = <FaHeart color={props.iconColor} size="25px"/>
    }else if (props.icon==='virus'){
        icon = <RiVirusFill color={props.iconColor} size='25px'/>
    }else if (props.icon==='skull'){
        icon = <GiDeathSkull color={props.iconColor} size='25px'/>
    }else if (props.icon==='alarm'){
        icon = <RiAlarmWarningFill color={props.iconColor} size='25px'/>
    }
    return (
            <div className='container p-3 mt-2 mb-2 border border-dark rounded-lg'>
                <div className={`container p-0 d-flex align-items-center justify-content-center mb-2 glow-${props.iconGlow}`} style={
                    {
                    width:'50px',
                    height:'50px',
                    border:`1px solid ${props.iconColor}`,
                    borderRadius:'50%',
                    }
                }>
                {icon}
                </div>             
                <h5 className="card-title text-center">{props.title}</h5>
                <h3 className={`card-subtitle mb-2 text-center ${props.textColorClass}`}>{props.value}</h3>
            </div>
     );
}
 
export default FigureContainer;

// style={{
//     background: '#ffc0c0',
//     width: '50px',
//     height: '50px',
//     borderRadius: '50%',
//     textAlign: 'center',
//     lineHeight: '50px',
//     verticalAlign: 'middle',
// }}