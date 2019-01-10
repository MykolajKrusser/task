import * as actionTypes from './actionTypes';

export const searchedWordHandler = (event)=>{
    return {
        type: actionTypes.SET_SEARCHED_WORD,
        event: event
    }
}