import React, { Component } from 'react';
import DailyFiguresCard from './components/layout/DailyFiguresCard';
import InfoCard from './components/layout/InfoCard';
import TotalActiveGraph from './components/layout/TotalActiveGraph';
import { Fade } from "react-awesome-reveal";
import TitleCard from './components/layout/TitleCard';
import GlobalFiguresCard from './components/layout/GlobalFiguresCard';
import BarChart from './components/layout/BarChart';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="app container-fluid">

                <Fade cascade triggerOnce damping={.25}>
                    <h2 className='text-center mt-3 mb-3'>COVID-19 Dashboard</h2>
                    <TitleCard title='Situational Analysis Dashboard of Sri Lanka'/>
                </Fade>   
                
                <div className='row p-3'>
                    <InfoCard title='Total Cases' value='18,450' textColorClass='text-primary'/>
                    <InfoCard title='Total Deaths' value='53' textColorClass='text-danger'/>
                    <InfoCard title='Total Recovered' value='10,678' textColorClass='text-success'/>
                    <InfoCard title='Total Active' value='5678' textColorClass='text-warning'/>
                </div>
                


                <div className='row p-3 justify-content-between'>
                    <TotalActiveGraph fadeInDirection='left' />
                    <DailyFiguresCard />
                </div>

                <div className='row p-3 justify-content-between'>
                    <BarChart title='Daliy Cases (SL)' xAxis='Date' yAxis='No. of Cases' color='#0275d8' />
                    <BarChart title='Daily Deaths (SL)' xAxis='Date' yAxis='No. of Deaths' color='#d9534f' />
                    <BarChart title='Daily Recoveries (SL)' xAxis='Date' yAxis='No. of Recoveries' color='#5cb85c' />
                </div>

                <div className='row p-3 justify-content-between'>
                    <GlobalFiguresCard/>
                    <TotalActiveGraph fadeInDirection='right'/>
                </div>

                
            </div>

         );
    }
}
 
export default App;
