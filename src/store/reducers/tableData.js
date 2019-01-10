import * as actionsType from '../actions/actionTypes';

const initialState = {
    tableData: null,
    loader: true,
    error:false,
    searchedWord: ''
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionsType.SET_TABLE_DATA:
            return{
                ...state,
                tableData: action.data,
                loader: false,
                error: false,
            };
        case actionsType.FETCH_REPO_FAILED:
            return{
                ...state,
                error: true
            };
        case actionsType.SET_SEARCHED_WORD:
            const updatedSearchWord = action.event.target.value;
            return{
                ...state,
                searchedWord: updatedSearchWord
            }
        default :
            return state;
    }
}

export default reducer;