import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface BoxProps {
    color: string
}

export const Modal = styled.View`
    width: 100%;
    height: ${height*0.07}px;
    position: absolute;
    margin-top: ${height * 0.95}px;
    padding-right: ${width/30}px;
    padding-left: ${width/30}px;
`;

export const Box = styled.View<Pick<BoxProps, 'color'>>`
    background-color: ${(p: BoxProps) => p.color};
    border-radius: 3px;
    height: 100%;
    padding-left: ${width/40}px;
    padding-right: ${width/40}px;
    justify-content: center;
    elevation: 5;
`;

export const Text = styled.Text`
    font-size: ${width/22}px;
    color: #FCFCFF;
`