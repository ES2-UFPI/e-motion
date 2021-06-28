import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    background: #E1948B;
    flex: 1;
`

export const ContainerMain = styled.View`
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    background: #FCFCFF;
    flex: 1;
    padding-top: ${height * 0.05}px;
    padding-bottom: ${height * 0.1}px;

    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.Text`
    color: #292B2D;
    font-size: ${width/14}px;
    text-align: center;
    width: 75%;
`

export const Image = styled.Image`
    width: 70%;
    height: 45%;
`

export const Content = styled.Text`
    color: #292B2D;
    font-size: ${width/16}px;
    width: 85%;
    text-align: center;
`

export const Button = styled.TouchableOpacity`
    background: #E1948B;
    width: 70%;
    border-radius: 10px;
    height: ${height * 0.06}px;

    justify-content: center;
    align-items: center;
`

export const TextButton = styled.Text`
    color: #FCFCFF;
    font-weight: bold;
    font-size: ${width/20}px;
`