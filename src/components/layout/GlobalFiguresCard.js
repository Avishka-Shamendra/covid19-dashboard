import React from 'react';
import { Fade } from 'react-awesome-reveal';
import FigureContainer from './subComponents/FigureContainer';

const GlobalFiguresCard = (props) => {
    return ( 
        <div className='col-lg-5 col-md-12'>
            <Fade direction='left'  triggerOnce delay={100}>
            <div className='card shadow rounded-lg mt-3'>
                    <div class="card-body">
                    <h5 class="card-title text-center">Golobal Figures</h5>
                        <div className='col'>
                            <FigureContainer title='Total Cases' value='45,045,79' textColorClass='text-primary'/>
                            <FigureContainer title='Total Deaths' value='5,679,789' textColorClass='text-danger'/>
                            <FigureContainer title='Total Recoveries' value='34,678,590' textColorClass='text-success'/>
                            <FigureContainer title='Active Cases' value='675,687' textColorClass='text-warning'/>
                        </div>
                        <p class="card-text text-muted text-center mt-2">Last Update</p>
                    </div>
                </div>
                </Fade>
            </div>

     );
}
 
export default GlobalFiguresCard;