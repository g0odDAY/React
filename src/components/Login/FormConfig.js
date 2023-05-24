import Input from "./Input";
import {maxLengthRule, minLengthRule, passwordMatchRule, requiredRule} from "./inputValidationRules";

const FormConfig = (label,name,type,defaultValue='')=>{
    return{
        renderInput:(handleChange,value,isValid,error,key)=>{
            return (
                <Input
                    key={key}
                    value={value}
                    error={error}
                    isValid={isValid}
                    handleChange={handleChange}
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
    name:{
        ...FormConfig('name','name','text'),
        validationRules:[
            requiredRule("name"),
            minLengthRule("name", 3),
            maxLengthRule("name", 25)
        ]
    },
    email:{
        ...FormConfig('Email','email','email'),
        validationRules: [
            requiredRule("email"),
            minLengthRule("email", 10),
            maxLengthRule("email", 25)
        ]
    },
    password:{
        ...FormConfig('Password','password','password'),
        validationRules: [
            requiredRule("password"),
            minLengthRule("password", 8),
            maxLengthRule("password", 20)
        ]
    },
    confirmPassword:{
        ...FormConfig('Confirm Password','confirmPassword','password'),
        validationRules: [passwordMatchRule()]
    }

}