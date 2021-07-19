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
    borderTopLeftRadius:30px;
    borderTopRightRadius:30px;
    padding-bottom:${height*0.01}px;
`

export const Title = styled.Text`
    color: #161719;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
`

export const Input = styled.TextInput`
    width: ${width*0.88}px;
    height: ${height*0.058}px;
    padding-left: 10px;
    margin-top: 20px;
    margin-bottom: 30px;
    border: 1px solid #91919F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    elevation: 10;
    border-radius: 10px;
    color: #91919F;
`

export const Column = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Row = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const AvatarContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: ${width*0.88}px;
    height: ${height*0.3}px;
    margin: 10px;
    margin-top: 20px;
    padding: 0px;
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