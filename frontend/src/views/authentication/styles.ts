import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.ImageBackground`
    width: 100%;
    height: 100%;
    background-color: #E1948B;
`

export const LogoContainer = styled.View`
    height: ${height * 0.5}px;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.Image`
    width: ${width*0.4}px;
    height: ${height*0.16}px;
`

export const IntroText = styled.Text`
    font-size: ${width/22}px;
    color: #FCFCFF;
`

export const InputsContainer = styled.View`
    background-color: #FCFCFF;
    height: ${height * 0.6}px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    padding: 30px;
    padding-top: 50px;

`

export const InputsBox = styled.View`
    height: 20%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const CopyrightBox = styled.View`
    height: 40%;
    justify-content: center;
    align-items: center;
`

export const CopyrightText = styled.Text`
    color: #91919F;
`

export const InputBox = styled.View`
    background-color: #FCFCFF;
    height: ${height * 0.07}px;
    width: 100%;
    border-radius: 10px;
    elevation: 10;
    padding: 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export const Input = styled.TextInput`
    flex: 1;
    padding-left: 10px;
    color: #91919F;
`

export const Button = styled.TouchableOpacity`
    background-color: #E1948B;
    height: ${height * 0.07}px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`

export const TextButton = styled.Text`
    font-size: ${width/22}px;
    color: #FCFCFF;
`

export const SignUpButton = styled.TouchableOpacity`
    margin-top: 30px;
`

export const SignUpText = styled.Text`
    text-align: center;
    color: #E1948B;
    font-weight: bold;
    font-size: ${width/20}px;
`