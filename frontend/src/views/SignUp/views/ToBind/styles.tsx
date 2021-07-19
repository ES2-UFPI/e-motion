import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.ImageBackground`
    width: 100%;
    height: 100%;
    background-color: #E1948B;
`

export const LogoContainer = styled.View`
    height: ${height * 0.3}px;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10px;
`

export const Logo = styled.Image`
    width: ${width*0.4}px;
    height: ${height*0.16}px;
`

export const WhiteContainer = styled.ScrollView`
    background-color: #FCFCFF;
    height: ${height * 0.8}px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    padding: 30px;
`

export const IntroText = styled.Text`
    font-size: ${width/16}px;
    text-align: center;
    color: #292B2D;
`

export const Image = styled.Image`
    width: 80%;
    height: ${height*0.4}px;
`

export const BottomText = styled.Text`
    font-size: ${width/16}px;
    text-align: center;
    color: #292B2D;
    padding: 10px;
`

export const Button = styled.TouchableOpacity`
    background: #E1948B;
    width: 100%;
    height: ${height*0.07}px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

export const TextButton = styled.Text`
    font-size: ${width/22}px;
    color: #FCFCFF;
`

export const ButtonOutline = styled.TouchableOpacity`
    width: 100%;
    height: ${height*0.07}px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`
export const TextButtonOutline = styled.Text`
    font-size: ${width/20}px;
    text-align: center;
    color: #E1948B;
`

export const TextError = styled.Text`
    font-size: ${width/24}px;
    width: 100%;
    color: #DD383F;
    padding-bottom: 10px;
`