import Input from "../Input";
import {maxLengthRule, minLengthRule, passwordMatchRule, requiredRule} from "./inputValidationRules";

const FormConfig = (label,name,type,defaultValue='')=>{
    return{
        renderInput:(handleChange,value,isValid,error,key)=>{
            return (
                <Input
                    key={key}
                    value={value}
                    name={name}
                    type={type}
                    label={label}
                    error={error}
                    isValid={isValid}
                    handleChange={handleChange}
                    errorMessage={error}
                />
            )
        },
        label,
        value:defaultValue,
        valid:false,
        errorMessage:'',
        touched:false
    }
}
export const signupForm = {
    email:{
        ...FormConfig('이메일','email','email'),
        validationRules: [
            requiredRule("email"),
            minLengthRule("email", 10),
            maxLengthRule("email", 25)
        ]
    },
    password:{
        ...FormConfig('비밀 번호','password','password'),
        validationRules: [
            requiredRule("password"),
            minLengthRule("password", 7),
            maxLengthRule("password", 20)
        ]
    },
    confirmPassword:{
        ...FormConfig('비밀번호 확인','confirmPassword','password'),
        validationRules: [passwordMatchRule()]
    }

}