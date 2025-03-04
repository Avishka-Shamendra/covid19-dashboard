import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import FigureContainer from './subComponents/FigureContainer';

const DailyFiguresCard = (props) => {
    return ( 
        <div className='col-lg-5 col-md-12'>
            <Zoom delay={500}  triggerOnce>
            <div className='card shadow rounded-lg mt-3'>
                    <div className="card-body">
                    <h5 className="card-title text-center">Daily Figures (SL)</h5>
                        <div className='col'>
                            <FigureContainer title='New Cases' value={props.new_cases.toLocaleString()} textColorClass='text-primary' iconColor='#0275d8' icon='virus' iconGlow='blue'/>
                            <FigureContainer title='New Deaths' value={props.new_deaths.toLocaleString()} textColorClass='text-danger' iconColor='#d9534f' icon='skull' iconGlow='red'/>
                            <FigureContainer title='New Recoveries' value={props.new_recovered.toLocaleString()} textColorClass='text-success' iconColor='#5cb85c' icon='heart'iconGlow='green'/>
                        </div>
                        <p className="card-text text-muted text-center mt-2">Updated on {props.last_update}</p>
                    </div>
                </div>
                </Zoom>
            </div>

     );
}
 
export default DailyFiguresCard;