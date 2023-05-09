import {useReducer} from "react";

const initialState = {
    value:'',
    isOpen:false,
}
const inputStateReducer = (state,action)=>{
    switch (action.type){
        case 'INPUT':
            return {value:action.value,isOpen: state.isOpen};
        case 'OPEN':
            return {value:state.value,isOpen: !state.isOpen};
        case 'SELECT':
            return {value:action.value,isOpen:false};
        default:
            return state;
    }
}
const useInput = (validate)=>{
    const[inputState,dispatch] = useReducer(inputStateReducer,initialState);
    const validation = validate(inputState.value);

    const inputHandler = (e)=>{
        console.log("input!",e.target.value)
        dispatch({type:'INPUT',value:e.target.value});
    }
    const openHandler = (e)=>{
        console.log('opend!')
        dispatch({type:'OPEN'});
    }
    const selectHandler = (e)=>{
        console.log('select!');
        dispatch({type:'SELECT',value:e.target.innerText})
    }
    return {
        value:inputState.value,
        isOpen:inputState.isOpen,
        validation,
        inputHandler,
        openHandler,
        selectHandler,

    }
}
export default useInput;