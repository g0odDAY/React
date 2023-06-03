import {useReducer} from "react";

const initialState = {
      formData:{
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
        default:
            return state;
    }
}
const useInput = ()=>{
    const[inputState,dispatch] = useReducer(inputStateReducer,initialState);
    const inputHandler = (e,name)=>{
        const value = e.target.value;
        // const regex = /^[0-9]+$/;
        // console.log(regex.test((value)));
        // if(regex.test(value)){
        //     dispatch({type:'INPUT',name,value});
        // };
        const key = e.target.value;
        console.log(key.match(/[a-zA-Z]/));
        if(key.match(/[a-zA-Z]/)){
            e.preventDefault();
            dispatch({type:'INPUT',name,value});
        }
    }
    const selectHandler = (e,name)=>{
        const value= e.target.innerText;
        dispatch({type:'SELECT',name,value});
        dispatch({type:'ERROR_CLEAR',name})

    }
    const submitHandler = (e)=>{
        e.preventDefault();
        const {formData,error} = inputState;
        const emptyField = [];
        Object.entries(formData).forEach(([name,value])=>{
            if(value.trim() === ''){
                emptyField.push(name)
            };
        });
        emptyField.map(name => {
            console.log(name);
            const errorMessage =`${name}을/를 입력해주세요!`;
            dispatch({type:'ERROR',name,error:errorMessage});
        })


    }
    return {
        formData:inputState.formData,
        error:inputState.error,
        inputHandler,
        selectHandler,
        submitHandler
    }
}
export default useInput;