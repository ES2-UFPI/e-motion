import React from 'react';
import styled from 'styled-components/native'
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface RadioButtonProps{
    selected:boolean;
}


const RadioButtonComponent = styled.View`
    height: ${width/18}px;
    width: ${width/18}px;
    borderRadius: 12px;
    borderWidth: 2px;
    borderColor: #91919F;
    alignItems: center;
    justifyContent: center;
    background: #fff;
`
const RadioButtonSelection = styled.View`
    height: ${width/30}px;
    width: ${width/30}px;
    borderRadius: 24px;
    background: #E1948B;
`

const RadioButton = (props: RadioButtonProps) => {
    return(

       <RadioButtonComponent>       
           {props.selected ? <RadioButtonSelection /> : null }
       </RadioButtonComponent>
    )
}

export default RadioButton;