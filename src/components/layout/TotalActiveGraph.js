import React from 'react';
import { Zoom } from "react-awesome-reveal";
import Chart from 'react-google-charts';

const TotalActiveGraph = (props) => {
    return ( 
        <div className='col-lg-7 mt-3 col-md-12 '>
            <Zoom delay={500} triggerOnce> 
                <div className='card shadow'>
                    <div className="card-body">
                        <h5 className="card-title text-center">Total vs Active Cases ({props.title})</h5>
                        <Chart
                        width='100%'
                        height={'539px'}
                        chartType="LineChart"
                        loader={<div className='center text-muted text-center mt-5'>Loading....</div>}
                        data={[
                            ['Date','Total Cases', 'Active Cases'],
                            ...props.data.sort(),
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
            </Zoom>
        </div>
     );
}
 
export default TotalActiveGraph;