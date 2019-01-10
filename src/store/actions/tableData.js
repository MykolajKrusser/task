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
        type: actionTypes.FETCH_REPO_FAIL
    }
}

export const initTableData = ()=>{
    return dispatch=>{
        axios.get('https://api.github.com/search/repositories?q=react-native-fbads')
        .then(respons=>{
            dispatch(setTableData(respons))
        })
        .catch(error=>{
            dispatch(fetchRepoFailed())
        });
    }
}