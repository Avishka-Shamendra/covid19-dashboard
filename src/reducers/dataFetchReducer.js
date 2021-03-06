import { ACTION_TYPE_FETCH_DATA, ACTION_TYPE_FETCH_ERROR, ACTION_TYPE_FETCH_HISTORICAL_DATA, ACTION_TYPE_SET_FETCHING, ACTION_TYPE_UNSET_FETCHING } from "../constants";

const initState={
    fetchError:null,
    data:null,
    isFetching:true,
    new_cases_history:[],
    new_deaths_history:[],
    new_recoveries_history:[],
    local_history_sumary:[],
}

const fetchReducer = (state= initState,action) => {
    switch(action.type){
        case ACTION_TYPE_FETCH_DATA:
            return{
                ...state,
                data:action.data
            }
        case ACTION_TYPE_FETCH_HISTORICAL_DATA:
        return{
            ...state,
            new_cases_history:action.new_cases_history,
            new_deaths_history:action.new_deaths_history,
            new_recoveries_history:action.new_recoveries_history,
            local_history_summary:action.local_history_summary,
        }
        case ACTION_TYPE_FETCH_ERROR:
            return{
                ...state,
                fecthError:action.error
            }
        case ACTION_TYPE_SET_FETCHING:
            return{
                ...state,
                isFetching:true,
            }
        case ACTION_TYPE_UNSET_FETCHING:
            return{
                ...state,
                isFetching:false,
            }
        default:
            return state;      
    }
}

export default fetchReducer;