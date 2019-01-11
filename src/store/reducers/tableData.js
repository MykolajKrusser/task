import * as actionsType from '../actions/actionTypes';

const initialState = {
    tableData: null,
    tableDataLength: null,
    loader: true,
    error:false,
    searchedWord: '',
    pageCount: null,
    firstRow: 0,
    showRows: 5,
    pageIndex: null
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
           
        case actionsType.SET_SHOW_ROWS:
            const newShowRows = action.event.target.value;
            const newPageCount = state.tableDataLength / newShowRows;
            return{
                ...state,
                showRows: newShowRows,
                pageCount: newPageCount
            };
        case actionsType.SET_TABLE_DATA:
            const pageCount = state.showRows
            return{
                ...state,
                tableData: action.data,
                pageCount: action.data.length / pageCount,
                tableDataLength: action.data.length,
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