import React, { Component } from 'react';
import DailyFiguresCard from './components/layout/DailyFiguresCard';
import InfoCard from './components/layout/InfoCard';
import TotalActiveGraph from './components/layout/TotalActiveGraph';
import { Fade } from "react-awesome-reveal";
import TitleCard from './components/layout/TitleCard';
import GlobalFiguresCard from './components/layout/GlobalFiguresCard';
import BarChart from './components/layout/BarChart';
import { connect } from 'react-redux';
import fetchDataAction from './actions/fetchData';
import * as constants from './constants';
import Loader from 'react-loader-spinner';
import WorldGraph from './components/layout/worldGraph';
class App extends Component {
    componentDidMount(){
        this.props.fetch();
    }
    render() { 
        if(this.props.loading){
            return (<div className="d-flex justify-content-center align-items-center vh-100"><Loader type="ThreeDots" color="#000000" height={50} width={50}/></div>)
        }
        return ( 
            <div className="app container-fluid">

                <Fade cascade triggerOnce damping={.25}>
                    <h2 className='text-center mt-3 mb-3'>COVID-19 Dashboard</h2>
                    <TitleCard title='Situational Analysis Dashboard of Sri Lanka'/>
                </Fade>   
                
                <div className='row p-3'>
                    <InfoCard title='Total Cases' value={this.props.data[constants.LOCAL_TOTAL_CASES].toLocaleString()}textColorClass='text-primary' icon='Search'/>
                    <InfoCard title='Total Deaths' value={this.props.data[constants.LOCAL_TOTAL_DEATHS].toLocaleString()} textColorClass='text-danger' icon='Dead'/>
                    <InfoCard title='Total Recovered' value={this.props.data[constants.LOCAL_TOTAL_RECOVERED].toLocaleString()} textColorClass='text-success' icon='Recovered'/>
                    <InfoCard title='Total Active' value={this.props.data[constants.LOCAL_TOTAL_ACTIVE_CASES].toLocaleString()} textColorClass='text-warning' icon='Active'/>
                </div>
                

                <div className='row p-3 justify-content-between'>
                    <TotalActiveGraph fadeInDirection='left' data={this.props.local_history_summary} title="SL"/>
                    <DailyFiguresCard new_cases={this.props.data[constants.LOCAL_NEW_CASES]}  new_deaths={this.props.data[constants.LOCAL_NEW_DEATHS]} new_recovered='0' last_update={this.props.data[constants.LAST_UPDATE_TIME]}/>
                </div>

                <div className='row p-3 justify-content-between'>
                    <BarChart title='Daliy Cases (SL)' xAxis='Date' yAxis='No. of Cases' color='#0275d8' data={this.props.new_cases_history}/>
                    <BarChart title='Daily Deaths (SL)' xAxis='Date' yAxis='No. of Deaths' color='#d9534f' data={this.props.new_deaths_history}/>
                    <BarChart title='Daily Recoveries (SL)' xAxis='Date' yAxis='No. of Recoveries' color='#5cb85c' data={this.props.new_recoveries_history}/>
                </div>

                <div className='row p-3 justify-content-between d-flex'>
                    <GlobalFiguresCard total_cases={this.props.data[constants.GLOBAL_TOTAL_CASES]}  total_deaths={this.props.data[constants.GLOBAL_DEATHS]} total_recovered={this.props.data[constants.GLOBAL_RECOVERED]} last_update={this.props.data[constants.LAST_UPDATE_TIME]}/>
                    <WorldGraph data={this.props.world_active_summary} color='#0275d8'/>
                </div>

                
            </div>

         );
    }
    
}
const mapStateToProps =(state)=>{
    return{
        error:state.fetch.fetchError,
        data:state.fetch.data,
        loading:state.fetch.isFetching,
        new_cases_history:state.fetch.new_cases_history,
        new_deaths_history:state.fetch.new_deaths_history,
        new_recoveries_history:state.fetch.new_recoveries_history,
        local_history_summary:state.fetch.local_history_summary,
        world_active_summary:state.fetch.world_active_summary
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        fetch:()=>{
            dispatch(fetchDataAction())
        }
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(App);
