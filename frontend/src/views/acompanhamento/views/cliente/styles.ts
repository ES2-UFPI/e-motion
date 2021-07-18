import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Info = styled.View`
    display: flex;
    width: ${width}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Row = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column = styled.View`
    display: flex;
    flex-direction: column;
`

export const BackGroundPage = styled.View`
    background: #E1948B;
    flex: 1;
`

export const HeaderContainer = styled.View`
    margin-top: ${Constants.statusBarHeight + 20}px;
    height: ${height * 0.26}px;

    flex-direction: column;
    align-items: center;
`

export const HeaderBaseText = styled.Text`
    font-weight: normal;
    font-style: normal;
    color: #FCFCFF;
`

export const GoBackText = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    margin-right: ${width*0.80}px;
    color: #FCFCFF;
`

export const Avatar = styled.Image`
    width: ${width *0.14}px;
    height: ${width *0.14}px;
    border-radius: ${(width * 0.14)/2}px;
`

export const SettingsContainer = styled.View`
    height: ${height * 0.13}px;
    width: ${width * 0.85}px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 0.6px;
    border-color: #FCFCFF;
`

export const ContactContainer = styled.View`
    height: ${height * 0.10}px;
    width: ${width * 0.85}px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const IconContainer = styled.View`
    height: ${height *0.04}px;
    width: ${width * 0.09}px;

    margin-right: 6px;
    border-radius: 8px;

    background: rgba(255, 233, 233, 0.42);

    justify-content: center;
    align-items: center;
`

export const RegistersContainer = styled.View`
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    background: #FCFCFF;
    flex: 1;

    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const RegistersBaseText = styled.Text`
    font-style: normal;
    margin: ${height * 0.04}px;
    margin-bottom: ${height * 0.01}px;
`