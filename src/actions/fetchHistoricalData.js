import * as constants from '../constants';
import { setFetchingFlag, unsetFetchingFlag } from './loadingAction';
const { default: axios } = require("axios");

const fetchHistoricalDataAction= () => {
    return function (dispatch,getState){
        dispatch(setFetchingFlag())
        axios.get(constants.HISTORICAL_DATA_URL)
      .then(
            function(response){
                
                const dataList = response.data.data;
                dataList.reverse()
                var total_cases=0;
                var active_cases=0;
                const local_history_summary=[];
                dataList.forEach(dataObj=>{
                    total_cases= total_cases+dataObj[constants.HISTORY_DAY_CASES]
                    active_cases= active_cases+dataObj[constants.HISTORY_DAY_CASES]-dataObj[constants.HISTORY_DAY_DEATHS]-dataObj[constants.HISTORY_DAY_RECOVERIES]
                    local_history_summary.push([
                        dataObj[constants.HISTROY_DATE].substring(2,),
                        total_cases,
                        active_cases,
                    ])
                });
                
                const new_cases_history = dataList.map((dataObj)=>{
                   return  {date:dataObj[constants.HISTROY_DATE],count:dataObj[constants.HISTORY_DAY_CASES]};
                });
                const new_deaths_history = dataList.map((dataObj)=>{
                    return  {date:dataObj[constants.HISTROY_DATE],count:dataObj[constants.HISTORY_DAY_DEATHS]};
                });
                const new_recoveries_history = dataList.map((dataObj)=>{
                    return  {date:dataObj[constants.HISTROY_DATE],count:dataObj[constants.HISTORY_DAY_RECOVERIES]};
                });
                dispatch({type: constants.ACTION_TYPE_FETCH_HISTORICAL_DATA,new_cases_history,new_deaths_history,new_recoveries_history,local_history_summary})
                dispatch(unsetFetchingFlag())
                
            }
        ).catch(
            function(response) {
                dispatch({type: constants.ACTION_TYPE_FETCH_ERROR,error: response.error})
                dispatch(unsetFetchingFlag())
            }
        )
      
    }
}

export default fetchHistoricalDataAction;