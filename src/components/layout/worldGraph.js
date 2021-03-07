import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import Chart from 'react-google-charts';

const WorldGraph = (props) => {
    const sortedData = props.data
    sortedData.sort(function (a, b) {
        if (a[1]<b[1]) return 1;
        else if (a[1]>b[1]) return -1;
        return 0;
    });
    const slicedData = sortedData.slice(0,12);
    return ( 
        <div className='col-lg-7 mt-3 col-md-12 '>
            <Zoom delay={500} triggerOnce> 
                <div className='card shadow'>
                    <div className="card-body">
                        <h5 className="card-title text-center">Countires With Most Active Cases</h5>
                        <Chart
                            width='100%'
                            height={'539px'}
                            chartType="Bar"
                            loader={<div className='center text-muted text-center mt-5'>Loading....</div>}
                            data={[
                                ['Country', 'Active Cases'],
                                ...slicedData
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
 
export default WorldGraph;
