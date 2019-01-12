import * as actionTypes from '../actions/actionTypes';

export const updataComp = (event)=>{
    return {
        type: actionTypes.UPDATA_TABLE_COMP,
        event: event
    }
}