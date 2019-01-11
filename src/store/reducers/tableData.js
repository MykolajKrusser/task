import * as actionsType from '../actions/actionTypes';

const initialState = {
    tableData: null,
    loader: true,
    error:false,
    searchedWord: '',
    pageCount: null,
    showRows: 5,
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionsType.SET_SHOW_ROWS:
            const newShowRows = action.event.target.value
            return{
                ...state,
                showRows: newShowRows
            };
        case actionsType.SET_TABLE_DATA:
            const pageCount = state.showRows
            return{
                ...state,
                tableData: action.data,
                pageCount: action.data.length / pageCount,
                loader: false,
                error: false,
            };
        case actionsType.FETCH_REPO_FAILED:
            return{
                ...state,
                error: true
            };
        case actionsType.SET_SEARCHED_WORD:
            const updatedSearchWord = action.event.target.value
            return{
                ...state,
                searchedWord: updatedSearchWord
            }
        default :
            return state;
    }
}

export default reducer;