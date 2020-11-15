import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import Chart from 'react-google-charts';

const BarChart = (props) => {
    return (
            <div className='col-lg-4 col-md-12'>
                <Zoom triggerOnce delay={400}>
                    <div className='card p-3 shadow rounded-lg'>
                        <div className='card-content'>
                            <div className='card-title text-center'>{props.title}</div>
                            <Chart className='card-content'
                            width= "100%"
                            height={'300px'}
                            chartType="Bar"
                            loader={<div className='center text-muted text-center mt-5'>Loading....</div>}
                            data={[
                                [`${props.xAxis}`, `${props.yAxis}`],
                                ['Nov 11', 1000],
                                ['Nov 12', 1170],
                                ['Nov 13', 660],
                                ['Nov 14', 1030],
                                ['Nov 11', 1000],
                                ['Nov 12', 1170],
                                ['Nov 13', 660],
                                ['Nov 14', 1030],
                            ]}
                            options={{
                                colors:[`${props.color}`],
                                legend :{position:'none'},
                            }}
                            />

                        </div>
                    </div>
                </Zoom>
            </div>
        
     );
}
 
export default BarChart;