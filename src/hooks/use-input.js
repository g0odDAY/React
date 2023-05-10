import {useReducer} from "react";

const initialState = {
    value:'',
    isOpen:false,
    amount:3,
}
const inputStateReducer = (state,action)=>{
    switch (action.type){
        case 'INPUT':
            return {value:action.value,isOpen: state.isOpen};
        case 'OPEN':
            return {value:state.value,isOpen: !state.isOpen};
        case 'SELECT':
            return {value:action.value,isOpen:false};
        case 'UP':
            if(state.amount >= 6){
                return {amount:6};
            }
            return {amount:state.amount+1};
        case 'DOWN':
            if(state.amount <= 3){
                return {amount: 3};
            }
            return {amount:state.amount-1};
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
    const updownHandler = (type) =>{
        console.log(type);
        dispatch({type})
    }
    return {
        value:inputState.value,
        isOpen:inputState.isOpen,
        amount:inputState.amount,
        validation,
        inputHandler,
        openHandler,
        selectHandler,
        updownHandler
    }
}
export default useInput;