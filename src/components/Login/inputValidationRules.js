const createValidationRule= (ruleName,errorMessage,validateFnc)=>{
    return {
        name:ruleName,
        message:errorMessage,
        validate:validateFnc
    }
}
export const requiredRule=(inputName)=>{
    return createValidationRule('required',`${inputName} has required`,(inputValue,formObj)=>inputValue.length !== 0)
}

export function minLengthRule(inputName, minCharacters) {
    return createValidationRule(
        "minLength",
        `${inputName} should contain atleast ${minCharacters} characters`,
        (inputValue, formObj) => inputValue.length >= minCharacters
    );
}

export function maxLengthRule(inputName, maxCharacters) {
    return createValidationRule(
        "minLength",
        `${inputName} cannot contain more than ${maxCharacters} characters`,
        (inputValue, formObj) => inputValue.length <= maxCharacters
    );
}

export function passwordMatchRule() {
    return createValidationRule(
        "passwordMatch",
        `passwords do not match`,
        (inputValue, formObj) => inputValue === formObj.password.value
    );
}
