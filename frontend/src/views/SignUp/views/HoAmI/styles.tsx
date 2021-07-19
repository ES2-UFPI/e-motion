import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');

export const ContainerAll = styled.ImageBackground`
    height: 100%;
    background: #E1948B;
    flex: 1;
    flexDirection:column;  
    alignItems: center;
    justifyContent: space-between;
`
export const ContainerLogo = styled.View`
    height: 30%;
    width:100%;
    alignItems: center;
    justifyContent:center;
    padding-top: 30px;
`

export const Container = styled.View`
    height: 70%;
    width:100%;
    backgroundColor: #FCFCFF;
    alignItems: center;
    justifyContent: space-between;
    paddingHorizontal:10px;
    paddingHorizontal:10px;
    borderTopLeftRadius:30px;
    borderTopRightRadius:30px;
    padding-bottom:${height*0.01}px;
`

export const Title = styled.Text`
    color: #161719;
    font-size: ${width/18}px;
    margin-top:${height*0.04}px;
`

export const WarningText = styled.Text`
    color: #161719;
    font-size: ${width/24}px;
    paddingHorizontal:${height*0.025}px;
    text-align:justify;
`

export const Button = styled.TouchableOpacity`
    background: #E1948B;
    width: 92%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    margin-top:10px;
`

export const TextButton = styled.Text`
    color: #FCFCFF;
    font-size: ${width/22}px;
    text-align: center;
    font-weight:bold;
`