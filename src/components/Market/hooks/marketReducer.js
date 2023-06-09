import {useCallback, useReducer} from "react";

const initialState = {
    CategoryCode:'',
    PageNo:1,
    Sort:'',
    SortCondition:'DESC',
    CharacterClass:'',
    ItemTier:'',
    ItemGrade:'',
    ItemName:'',
}
const marketStateReducer = (state,action)=>{
    switch(action.type){
        case 'CODE':
            return {...state,PageNo:1,CategoryCode:action.code};
        case 'PAGE':
            return {...state,PageNo:(action.number)};
        case 'SORT':
            return {...state,Sort:action.sort,PageNo:1,SortCondition:state.SortCondition ==='ASC'?'DESC':'ASC'};
        case 'FORM':
            return {...state,...action.formData,PageNo:1};
        default:
            return state;
    }

}
const useMarket = ()=>{
    const [marketState,dispatch] = useReducer(marketStateReducer,initialState);

    const codeHandler = useCallback((e)=>{
        const code = e.target.dataset.code;
        dispatch({ type:'CODE', code });
    },[])

    const pageHandler = useCallback((number) =>{
        dispatch({type:'PAGE',number});
    },[])

    const sortHandler = useCallback((sort)=>{
        dispatch({type:'SORT',sort});
    },[])

    const formHandler = (formData)=>{
        console.log('formData',formData);
        dispatch({type:'FORM',formData});
    }
    return {
        marketState,
        codeHandler,
        pageHandler,
        sortHandler,
        formHandler
    }
}
export default useMarket;