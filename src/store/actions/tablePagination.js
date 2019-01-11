import * as actionTypes from './actionTypes';

export const onChangeRows = (event)=>{
    return {
        type: actionTypes.SET_SHOW_ROWS,
        event: event
    }
}

export const onChangePage = (event)=>{
    return {
        type: actionTypes.SET_NEW_PAGE,
        event: event
    }
}