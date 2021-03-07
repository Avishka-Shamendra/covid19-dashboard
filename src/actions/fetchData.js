import fetchHistoricalDataAction from "./fetchHistoricalData";
import fetchWorldDataAction from "./fetchWorldData";
import { setFetchingFlag, unsetFetchingFlag } from "./loadingAction";
const { default: axios } = require("axios")
const {DATA_URL, ACTION_TYPE_FETCH_ERROR, ACTION_TYPE_FETCH_DATA} = require('../constants');

const fetchDataAction= () => {
    return function (dispatch,getState) {
        dispatch(setFetchingFlag())
        axios.get(DATA_URL)
      .then(
            function(response){
                dispatch({type: ACTION_TYPE_FETCH_DATA,data: response.data.data})
                dispatch(fetchHistoricalDataAction())
                dispatch(fetchWorldDataAction())
                dispatch(unsetFetchingFlag())
            }
        ).catch(
            function(response) {
                dispatch({type: ACTION_TYPE_FETCH_ERROR,error: response.error})
                dispatch(unsetFetchingFlag())
            }
        )
      
    }
}

export default fetchDataAction;