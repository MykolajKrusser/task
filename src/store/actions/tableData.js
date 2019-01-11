import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setTableData = (data)=>{
    return {
        type: actionTypes.SET_TABLE_DATA,
        data: data
    }
}

export const fetchRepoFailed = ()=>{
    return {
        type: actionTypes.FETCH_REPO_FAILED
    }
}

export const initTableData = (searchedWord)=>{
    return dispatch=>{
        axios.get('https://api.github.com/search/repositories?q=' + searchedWord)
        .then(respons=>{
            dispatch(setTableData(respons.data.items))
        })
        .catch(error=>{
            dispatch(fetchRepoFailed())
        });
    }
}