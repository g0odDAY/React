const createValidationRule= (ruleName,errorMessage,validateFnc)=>{
    return {
        name:ruleName,
        message:errorMessage,
        validate:validateFnc
    }
}
export const requiredRule=(inputName)=>{
    return createValidationRule('required',`${inputName}은/는 필수 입력 값 입니다.`,(inputValue,formObj)=>inputValue.length !== 0)
}

export function minLengthRule(inputName, minCharacters) {
    return createValidationRule(
        "minLength",
        `${inputName}은/는 최소${minCharacters}자리 여야 합니다.`,
        (inputValue, formObj) => inputValue.length >= minCharacters
    );
}

export function maxLengthRule(inputName, maxCharacters) {
    return createValidationRule(
        "minLength",
        `${inputName}은/는 최대${maxCharacters}자리 여야 합니다.`,
        (inputValue, formObj) => inputValue.length <= maxCharacters
    );
}

export function passwordMatchRule() {
    return createValidationRule(
        "passwordMatch",
        `비밀번호가 일치하지않아요.`,
        (inputValue, formObj) => inputValue === formObj.password.value
    );
}
