import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const BackGroundPage = styled.View`
    background: #E1948B;
    flex: 1;
`

export const ContainerMain = styled.View`
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    background: #FCFCFF;
    flex: 1;
    margin-top: ${Constants.statusBarHeight + 20}px;
    padding-top: ${height * 0.05}px;
    padding-bottom: ${height * 0.1}px;

    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Item = styled.View`
     margin-bottom: ${height/6}px;
`

export const NothingFound = styled.View`
    width:100%;
    alignItems: center;
    justifyContent: center;
     font-size: ${width/16}px;
    flex: 1;
`

export const TextNothingFound = styled.Text`
     font-size: ${width/21}px;

`