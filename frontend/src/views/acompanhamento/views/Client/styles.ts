import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const BackGroundPage = styled.View`
    background: #E1948B;
    flex: 1;
`

export const GoBackContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${width*0.10}px;
`

export const GoBackText = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    margin-left: ${width*0.04}px;
    color: #FCFCFF;
`

export const HeaderContainer = styled.View`
    margin-top: ${Constants.statusBarHeight + 20}px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const RegistersContainer = styled.View`
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    background: #FCFCFF;
    flex: 1;
    margin-top: ${Constants.statusBarHeight + 190}px;
    padding-bottom: ${height * 0.1}px;

    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Row = styled.View`
    display: flex;
    width: ${width};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const RegistersBaseText = styled.Text`
    font-style: normal;
    font-weight: normal;
    margin: ${height * 0.04}px;
`
