import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import FigureContainer from './subComponents/FigureContainer';

const GlobalFiguresCard = (props) => {
    return ( 
        <div className='col-lg-5 col-md-12'>
            <Zoom  triggerOnce delay={100}>
            <div className='card shadow rounded-lg mt-3'>
                    <div className="card-body">
                    <h5 className="card-title text-center">Golobal Figures</h5>
                        <div className='col'>
                            <FigureContainer title='Total Cases' value='45,045,79' textColorClass='text-primary' iconColor='#0275d8' icon='virus' iconGlow='blue'/>
                            <FigureContainer title='Total Deaths' value='5,679,789' textColorClass='text-danger' iconColor='#d9534f' icon='skull' iconGlow='red'/>
                            <FigureContainer title='Active Cases' value='675,687' textColorClass='text-warning' iconColor='#f0ad4e' icon='alarm'iconGlow='yellow'/>
                        </div>
                        <p className="card-text text-muted text-center mt-2">Last Update</p>
                    </div>
                </div>
                </Zoom>
            </div>

     );
}
 
export default GlobalFiguresCard;