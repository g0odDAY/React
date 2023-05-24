import {useCallback, useContext, useState} from "react";
import authContext from "../../../Context/auth-context";

const useForm = (formObj)=>{
    const ctx = useContext(authContext);

    const [form,setForm] = useState(formObj);
    const [formData,setFormData] = useState({
        email:'',
        password:''
    });

    const renderFormInputs = ()=>{
        return Object.values(form).map((inputObj)=>{
            const {value,label,errorMessage,valid,renderInput} = inputObj;
            return renderInput(onInputChange,value,valid,errorMessage,label);
        });
    }
    const isInputFieldValid = useCallback((inputField)=>{
        for(const rule of inputField.validationRules){
            if(!rule.validate(inputField.value,form)){
                inputField.errorMessage = rule.message;
                return false;
            }
        }
        return true;
    },[form])
    const onInputChange = useCallback((e)=>{
        const {name,value} = e.target;
        setFormData((prevState)=>({
            ...prevState,
            [name]:value,
        }))
        const inputObj = {...form[name]};
        inputObj.value = value;
        const isValidInput = isInputFieldValid(inputObj);
        if(isValidInput && !inputObj.valid){
            inputObj.valid = true;
        }else if(!isValidInput && inputObj.valid){
            inputObj.valid =false;
        }
        inputObj.touched = true;
        setForm({...form,[name]:inputObj});
    },[form,isInputFieldValid])
    const isFormValid = useCallback(()=>{
        let isValid = true;
        const arr = Object.values(form);
        for(let i = 0;i<arr.length;i++){
            if(!arr[i].valid){
                isValid = false;
                break;
            }
        }
        return isValid;
    },[form])
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log('submit',formData);
        const {email,password} = formData;
        ctx.onSignup(e,email,password);
    }
    return {renderFormInputs,isFormValid,submitHandler};
}
export default useForm;