import {useReducer} from "react";
import useHttp from "./use-http";

const initialState = {
      formData:{
          server:'',
          category:'',
          itemName:'',
          quality:0,
          characteristic:'',
          characteristic_amount:'',
          sub_characteristic:'',
          sub_characteristic_amount:'',
          engrave:'',
          engrave_amount:0,
          sub_engrave:'',
          sub_engrave_amount:0,
          penalty:'',
          penalty_amount:0,
          price:'',
      },
      error:{
          server:'',
          category:'',
          itemName:'',
          quality:'',
          characteristic:'',
          characteristic_amount:'',
          sub_characteristic:'',
          sub_characteristic_amount:'',
          engrave:'',
          engrave_amount:'',
          sub_engrave:'',
          sub_engrave_amount:'',
          penalty:'',
          penalty_amount:'',
          price:'',
      }
}
const inputStateReducer = (state,action)=>{
    switch (action.type){
        case 'SELECT':
            return {...state,formData:{...state.formData,[action.name]:action.value}};
        case 'INPUT':
            return {...state,formData:{...state.formData,[action.name]:action.value}};
        case 'ERROR':
            return {...state,error:{...state.error,[action.name]:action.error}};
        case 'ERROR_CLEAR':
            return {...state,error:{...state.error,[action.name]:''}};
        case 'UP':
            return {...state,formData:{...state.formData,[action.name]:state.formData[action.name] < 6 ? state.formData[action.name] + 1 : state.formData[action.name] }}
        case 'DOWN':
            return {...state,formData:{...state.formData,[action.name]:state.formData[action.name] > 3 ? state.formData[action.name] - 1 : state.formData[action.name] }}
        default:
            return state;
    }
}
const useInput = ()=>{
    const[inputState,dispatch] = useReducer(inputStateReducer,initialState);
    const {sendRequest} = useHttp();
    const inputHandler = (e,name)=>{
        const value = e.target.value;
        dispatch({type:'INPUT',name,value});
        dispatch({type:'ERROR_CLEAR',name});
    }
    const selectHandler = (e,name)=>{
        const value= e.target.innerText;
        dispatch({type:'SELECT',name,value});
        dispatch({type:'ERROR_CLEAR',name});
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        const {formData} = inputState;
        const emptyField = [];
        Object.entries(formData).forEach(([name,value])=>{
            if(!value){
                emptyField.push(name)
            };
        });
        emptyField.map(name => {
            console.log(name);
            const errorMessage =`${name}을/를 입력해주세요!`;
            dispatch({type:'ERROR',name,error:errorMessage});
        })
        if(emptyField.length === 0){
            console.log('폼이 유효합니다.');
            sendRequest({
                url:'https://curious-furnace-340706-default-rtdb.firebaseio.com/items.json',
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:formData
            }).then(r=>r);
        }


    }
    const updownHandler = (type,name)=>{
        dispatch({type,name})
    }
    return {
        formData:inputState.formData,
        error:inputState.error,
        inputHandler,
        selectHandler,
        updownHandler,
        submitHandler
    }
}
export default useInput;