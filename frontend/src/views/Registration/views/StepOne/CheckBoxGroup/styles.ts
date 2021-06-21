import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Group = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    padding-top: ${width*0.03}px;
`

export const Text = styled.Text`
    color: #292B2D;
    font-size: ${width/22}px;
`