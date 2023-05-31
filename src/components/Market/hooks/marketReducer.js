import {useCallback, useReducer} from "react";

const initialState = {
    categoryCode:'',
    currentPage:1,
    sort:'',
    sortCondition:'ASC',
    CharacterClass:'',
    ItemTier:'',
    ItemGrade:'',
    ItemName:'',
}
const marketStateReducer = (state,action)=>{
    switch(action.type){
        case 'CODE':
            return {...state,currentPage:1,categoryCode:action.code};
        case 'PAGE':
            return {...state,currentPage: state.currentPage+(action.number)};
        case 'SORT':
            return {...state,sort:action.sort,currentPage:1,sortCondition:state.sortCondition ==='ASC'?'DESC':'ASC'};
        default:
            return state;
    }

}
const useMarket = ()=>{
    const [marketState,dispatch] = useReducer(marketStateReducer,initialState);

    const codeHandler = useCallback ((e)=>{
        const code = e.target.dataset.code;
        dispatch({ type:'CODE', code });
    },[]);

    const pageHandler =useCallback( (number) =>{
        dispatch({type:'PAGE',number});
    },[])

    const sortHandler = useCallback((sort)=>{
        dispatch({type:'SORT',sort});
    },[])

    return {
        marketState,
        codeHandler,
        pageHandler,
        sortHandler,
    }
}
export default useMarket;