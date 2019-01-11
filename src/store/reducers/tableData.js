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
        case actionsType.SET_NEW_PAGE:
            let newPageIndex = action.event.selected + 1
            let nextFirstRow = state.firstRow
            let nextShowRows = state.showRows
            if(state.pageCount === 2){
                if(newPageIndex === 1){
                    nextFirstRow = 0
                    nextShowRows = 15
                }
                if(newPageIndex === 2){
                    nextFirstRow = 15
                    nextShowRows = 30
                }
            }
            if(state.pageCount === 3){
                if(newPageIndex === 1){
                    nextFirstRow = 0
                    nextShowRows = 10
                }
                if(newPageIndex === 2){
                    nextFirstRow = 10
                    nextShowRows = 20
                }
                if(newPageIndex === 3){
                    nextFirstRow = 20
                    nextShowRows = 30
                }
            }
            if(state.pageCount === 6){
                if(newPageIndex === 1){
                    nextFirstRow = 0
                    nextShowRows = 5
                }
                if(newPageIndex === 2){
                    nextFirstRow = 5
                    nextShowRows = 10
                }
                if(newPageIndex === 3){
                    nextFirstRow = 10
                    nextShowRows = 15
                }
                if(newPageIndex === 4){
                    nextFirstRow = 15
                    nextShowRows = 20
                }
                if(newPageIndex === 5){
                    nextFirstRow = 20
                    nextShowRows = 25
                }
                if(newPageIndex === 6){
                    nextFirstRow = 25
                    nextShowRows = 30
                }
            }
            
            return{
                ...state,
                pageIndex: newPageIndex,
                firstRow: nextFirstRow,
                showRows: nextShowRows
            };
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