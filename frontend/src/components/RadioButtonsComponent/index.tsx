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
    flexDirection:row; 
    margin-horizontal:6px;
    margin-vertical:${width/24}px;
`
const RadioButtonText = styled.Text`
    color: #161719;
    font-size: ${width/24}px;
    margin-left: 0px;
`

const RadioButtonContainer = styled.View`
    alignItems: center;
    flexDirection:row; 
    flex-wrap: wrap;
    justifyContent: space-between;
`

const RadioButtonsComponent = (props: RadioButtonsComponentProps) => {
    
    return(
        <RadioButtonContainer key='dsadasd'> 
            {props.radioButtons.map((option) =>{
                return (
                    <Button 
                        key={option.name}  
                        onPress={e => {e.preventDefault(); option.onSelect()}} 
                        disabled={option.isSelected}
                    > 
                        <RadioButton  selected={option.isSelected} />
                        <RadioButtonText> {option.name} </RadioButtonText>
                    </Button>
                )
            }

            )}
        </RadioButtonContainer>
    )
}

export default RadioButtonsComponent;