import React from 'react';
import { Fade } from 'react-awesome-reveal';
import DailyFigureContainer from './subComponents/DailyFigureContainer';

const DailyFiguresCard = () => {
    return ( 
        <div className='col-lg-5 col-md-12'>
            <Fade delay={800} direction='right' triggerOnce>
            <div className='card shadow rounded-lg mt-3'>
                    <div class="card-body">
                        <h5 class="card-title text-center">Daily Figures</h5>
                        <div className='col'>
                            <DailyFigureContainer title='New Cases' value='450' textColorClass='text-primary'/>
                            <DailyFigureContainer title='New Deaths' value='8' textColorClass='text-danger'/>
                            <DailyFigureContainer title='New Recoveries' value='350' textColorClass='text-success'/>
                        </div>
                        <p class="card-text text-muted text-center mt-2">Last Update</p>
                    </div>
                </div>
                </Fade>
            </div>

     );
}
 
export default DailyFiguresCard;