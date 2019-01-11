import * as actionsType from '../actions/actionTypes';

const initialState = {
    tableData: null,
    loader: true,
    error:false,
    searchedWord: ''
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionsType.SET_LOCAL_TABLEDATA:
            let localTableData = JSON.parse(localStorage.getItem("data"));
            return{
                ...state,
                tableData: localTableData,
                loader: false,
                error: false,
            };
        case actionsType.SET_TABLE_DATA:
            let newData = action.data;
            localStorage.setItem('data', JSON.stringify(newData));
            return{
                ...state,
                tableData: newData,
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