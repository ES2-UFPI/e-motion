import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    margin-top:10px;
    width: 100%;
    height: ${height/30}px;
    backgroundColor: #F1F1FA;
    borderRadius: 50px;
    margin-bottom:51px;
`

export const Progress = styled.View`
    height:100%;
    backgroundColor: #61C08C;
    borderRadius: 50px;
    zIndex: 1;
`

export const ProgressText = styled.Text`
    width: 100%;
    text-align: center;
    padding: ${width*0.01}px;
    font-size: ${width/30}px;
    font-weight: bold;
    color: #292B2D;
    zIndex: 2;
    top:-23px;
    
`