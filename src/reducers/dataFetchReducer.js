import { ACTION_TYPE_FETCH_DATA, ACTION_TYPE_FETCH_ERROR, ACTION_TYPE_SET_FETCHING, ACTION_TYPE_UNSET_FETCHING } from "../constants";

const initState={
    fetchError:null,
    data:null,
    isFetching:true,
}

const fetchReducer = (state= initState,action) => {
    console.log(action.type)
    switch(action.type){
        case ACTION_TYPE_FETCH_DATA:
            return{
                ...state,
                data:action.data
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