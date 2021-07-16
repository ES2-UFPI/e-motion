import React from 'react';
import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
import RadioButton from '../RadioButton';

const { width } = Dimensions.get('window');

interface RadioButtons{
    name:string;
    isSelected:boolean;
    onSelect:()=>void;
}

interface RadioButtonsComponentProps{
    radioButtons:RadioButtons[];
}

const Button = styled.TouchableOpacity`
    flex: 1;
    flexDirection:row; 
    alignItems: center;
    justifyContent: center;
`
const RadioButtonText = styled.Text`
    color: #161719;
    font-size: ${width/24}px;
    margin-left: 5px;
`

const RadioButtonContainer = styled.View`
    height:15%;
    flexDirection:row; 

`

const RadioButtonsComponent = (props: RadioButtonsComponentProps) => {
    
    return(
        <RadioButtonContainer>
            {props.radioButtons.map((option) =>{
                return (
                    <Button 
                        key={option.name}  
                        onPress={e => {e.preventDefault(); option.onSelect()}} 
                        disabled={option.isSelected}
                    > 
                        <RadioButton selected={option.isSelected} />
                        <RadioButtonText> {option.name} </RadioButtonText>
                    </Button>
                )
            }

            )}
        </RadioButtonContainer>
    )
}

export default RadioButtonsComponent;