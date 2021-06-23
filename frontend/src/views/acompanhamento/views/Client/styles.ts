import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const BackGroundPage = styled.View`
    background: #E1948B;
    flex: 1;
`

export const HeaderContainer = styled.View`
    margin-top: ${Constants.statusBarHeight + 20}px;
    height: ${height * 0.30}px;

    flex-direction: column;
    align-items: center;
`

export const GoBackText = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    margin-right: ${width*0.80}px;
    color: #FCFCFF;
`

export const AvatarContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000000;
`

export const SettingsContainer = styled.View`
    height: ${height * 0.15}px;
    width: ${width * 0.85}px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-color: #FCFCFF;
`

export const ContactContainer = styled.View`
    height: ${height * 0.15}px;
    width: ${width * 0.85}px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const RegistersContainer = styled.View`
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    background: #FCFCFF;
    flex: 1;
    padding-bottom: ${height * 0.1}px;

    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Row = styled.View`
    display: flex;
    width: ${width}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Column = styled.View`
    display: flex;
    flex-direction: column;
`

export const RegistersBaseText = styled.Text`
    font-style: normal;
    margin: ${height * 0.04}px;
`

export const HeaderBaseText = styled.Text`
    font-weight: normal;
    font-style: normal;
    color: #FCFCFF;
`