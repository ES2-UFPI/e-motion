import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
    width: 100%;
    padding: ${width*0.025}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #FFFFFF;
    elevation:3;
    border-radius: 15px;
    margin-top:15px;
`

export const DataContainer = styled.View`
    width: 80%;
    display: flex;
    padding:0px;
    flex-direction: column;
    align-items: flex-start;
`

export const Row = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
`

export const Title = styled.Text`
    width: 100%;
    padding: ${width*0.01}px;
    font-size: ${width/26}px;
    color: #161719;
`

export const Date = styled.Text`
    width: 100%;
    font-size: ${width/26}px;
    font-style: normal;
    font-weight: bold;
    color: #161719;
`

export const DeleteButton = styled.TouchableOpacity`
    width: 20%;
    align-items: flex-end;
`

