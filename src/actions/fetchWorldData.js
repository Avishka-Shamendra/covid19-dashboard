import * as constants from '../constants';
import { setFetchingFlag, unsetFetchingFlag } from './loadingAction';
const { default: axios } = require("axios");

const fetchWorldDataAction= () => {
    return function (dispatch,getState){
        dispatch(setFetchingFlag())
        axios.get(constants.WORLD_COUNT_DATA_URL)
      .then(
            function(response){
                const countryList = response.data;
                const world_active_summary =countryList.map(dataObj=>{
                    return  [dataObj[constants.WORLD_COUNTRY],dataObj[constants.WORLD_ACTIVE_COUNT]];
                });
                dispatch({type: constants.ACTION_TYPE_FETCH_WORLD_DATA,world_active_summary})
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

export default fetchWorldDataAction;