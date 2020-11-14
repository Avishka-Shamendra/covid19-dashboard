import React, { Component } from 'react';
import DailyFiguresCard from './components/layout/DailyFiguresCard';
import SLDataCard from './components/layout/SLDataCard';
import SLGraph from './components/layout/SLGraph';
import { Fade, Slide } from "react-awesome-reveal";

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="app container-fluid">
                <Fade cascade triggerOnce>
                        <h2 className='text-center mt-3 mb-3'>COVID-19 Dashboard</h2>
                            <div className='card p-3 mb-3 rounded-lg shadow'>
                                <div className='card-content text-center'>
                                    <h5>Situational Analysis Dashboard of Sri Lanka</h5>
                                </div>
                            </div>
                    
                    
                    <div className='row p-3'>
                        <SLDataCard title='Total Cases' value='18,450' textColorClass='text-primary'/>
                        <SLDataCard title='Total Deaths' value='53' textColorClass='text-danger'/>
                        <SLDataCard title='Total Recovered' value='10,678' textColorClass='text-success'/>
                        <SLDataCard title='Total Active' value='5678' textColorClass='text-warning'/>
                    </div>
                </Fade>
                <div className='row p-3 justify-content-between'>
                    <SLGraph />
                    <DailyFiguresCard />
                </div>
                
            </div>

         );
    }
}
 
export default App;
