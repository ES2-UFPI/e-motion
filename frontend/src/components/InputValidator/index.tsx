import React, { useState } from 'react';
import styled from 'styled-components/native'
import { Dimensions, NativeSyntheticEvent, TextInputChangeEventData, TextInputProps } from 'react-native';

const { width,height } = Dimensions.get('window');

interface Props{
    onChangeText:(value:string,index:number,isValid:boolean)=>void;
    placeholder:string;
    value:string;
    index:number;
    pattern?:string
    error_message?:string
    force_error?:boolean;
    isPassword?:boolean;
}

const Input = styled.TextInput`
    width: 100%;
    height: ${width * 0.13}px;
    border-radius: 10px;
    margin-top: 12px;
    margin-bottom: 11px;
    padding: 10px;
    font-size: ${width/24}px;
    text-align-vertical: center;

    background: #FCFCFF;
    color: #292B2D;
    border: 0.5px solid #91919F;
    elevation: 5;
`
export const InputContainer = styled.View`
    width:90%;
    alignItems: center;
    justifyContent:center;
`
export const ErrorText = styled.Text`
    color: #DD383F;
    font-size: ${width/28}px;
    paddingHorizontal:${width*0.025}px;
    text-align:justify;
    margin-top:5px;
    margin-bottom:2px;
`

    function InputValidator({placeholder,onChangeText,index,pattern,error_message,force_error,isPassword,value,}:Props) {
    
    const [isValid, setIsValid] = useState<boolean>(true);

    function handleValidation(value:string) {
        
        if (force_error) return false;
        
        if (!pattern || value.length < 5 ) return true;

        const condition = new RegExp(pattern, 'g');

        return condition.test(value);
    }

    function onChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
        e.preventDefault();
        const isValid = handleValidation( e.nativeEvent.text);
        onChangeText(e.nativeEvent.text,index,isValid)
        isValid ? setIsValid(true) : setIsValid(false);
    }

    return(
        <InputContainer>
            <Input placeholder={placeholder} onChange={onChange} secureTextEntry={isPassword} value={value} />
            {!isValid && 
            <ErrorText >
               {error_message}
            </ErrorText>}
        </InputContainer>
       
    )
}

export default InputValidator;