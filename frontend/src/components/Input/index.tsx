import React from 'react';
import styled from 'styled-components/native'
import { Dimensions, TextInputProps } from 'react-native';

const { width } = Dimensions.get('window');

const Input = styled.TextInput<Pick<TextInputProps, 'multiline'>>`
    width: 100%;
    height: ${p => p.multiline ? width * 0.25 : width * 0.15}px;
    border-radius: 10px;
    margin-top: 16px;
    margin-bottom: 14px;
    padding: 10px;
    font-size: ${width/24}px;
    text-align-vertical: ${p => p.multiline ? 'top' : 'center'};
    background: #FCFCFF;
    color: #292B2D;
    border: 0.5px solid #91919F;
    elevation: 5;
`

const InputComponente = (props: TextInputProps) => {
    return(
        <Input {...props}/>
    )
}

export default InputComponente;