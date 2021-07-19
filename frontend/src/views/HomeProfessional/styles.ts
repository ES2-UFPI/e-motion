import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #E1948B;
`

export const WhiteContainer = styled.View`
    background-color: #FCFCFF;
    height: ${height}px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    padding: 30px;
    justify-content: space-between;
    align-items: center;
    margin-top: ${height*0.07}px;
`

export const TextName = styled.Text`
    font-size: ${width/14}px;
    text-align: center;
    color: #292B2D;
`

export const IntroText = styled.Text`
    font-size: ${width/16}px;
    text-align: center;
    color: #292B2D;
`

export const Image = styled.Image`
    width: ${width*0.8}px;
    height: ${height*0.4}px;
`

export const Box = styled.View`
    height: ${height*0.8}px;
    align-items: center;
`
