import React from 'react';
import { Fade } from "react-awesome-reveal";
import Chart from 'react-google-charts';

const TotalActiveGraph = (props) => {
    return ( 
        <div className='col-lg-7 mt-3 col-md-12'>
            <Fade direction={props.fadeInDirection} delay={500} triggerOnce>
            <div className='card'>
                <div className="card-body">
                    <h5 className="card-title text-center">Total vs Active Cases (SL)</h5>
                    <Chart
                        width='100%'
                        height={'398px'}
                        chartType="LineChart"
                        loader={<div className='center text-muted text-center mt-5'>Loading....</div>}
                        data={[
                            ['Date','Total Cases', 'Active Cases'],
                            ['Nov 11', 0, 0],
                            [1, 10, 5],
                            [2, 23, 15],
                            [3, 17, 9],
                            [4, 18, 10],
                            [5, 9, 5],
                            [6, 11, 3],
                            [7, 27, 19],
                            [8, 3, 16],
                            [9, 10, 5],
                            [10, 23, 15],
                            [11, 17, 9],
                            [12, 18, 10],
                            [13, 9, 5],
                            [14, 11, 3],
                            [15, 27, 19],
                        ]}
                        options={{
                            colors:['#0275d8','#f0ad4e'],
                            legend:{
                                position:'top'
                            },
                            series: {
                            0: {curveType:'function'},
                            1: { curveType: 'function' },
                            },
                        }}
                        />
                    </div>
                </div>
            </Fade>
        </div>
     );
}
 
export default TotalActiveGraph;