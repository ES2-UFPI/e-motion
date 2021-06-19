import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');


export const ContainerAll = styled.View`
    height: 100%;
    background: #E1948B;
    flex: 1;
    
`

export const Container = styled.View`
    flex: 1;
    backgroundColor: #FCFCFF;
    alignItems: center;
    justifyContent: flex-start;
    paddingTop:10px;
    paddingHorizontal:10px;
    borderTopLeftRadius:30px;
    borderTopRightRadius:30px;
    margin-top: ${Constants.statusBarHeight +9}px;
    
`

export const GoBackContainer = styled.View`
    width:100%;
`

export const GoBackButton = styled.TouchableOpacity`
    flex-direction:row;
    alignItems: center;
`

export const GoBackText = styled.Text`
    color: #212325;
    margin-left:5px;
    font-size: ${width/26}px;
`

export const TextWarning = styled.Text`
    color:#292B2D;
    font-size: ${width/18}px;
    text-align:center;
    margin:10px;
    margin-top:20px;
    font-weight: 600;
`

export const CodeContainer = styled.View`
    width:100%;
    margin:20px;
    alignItems: center;
`


export const CodeTexttWarning = styled.Text`
    color:#292B2D;
    font-size: ${width/25}px;
    text-align:center;      
`

export const CodeText = styled.Text`
    color:#292B2D;  
    font-size: ${width/25}px;
    text-align:center;       
    font-weight: bold;
`

export const CodeNumbersContainer = styled.View`
    flex-direction:row;
    alignItems: center;
`

export const CodeNumber = styled.View`
    backgroundColor: #FFE9E9;
    padding:15px;
    margin-left:11px;
    margin-bottom:8px;
`

export const GenerateButton = styled.TouchableOpacity`
    backgroundColor: #E1948B;   
    height:${height/15}px;
    width:${width/1.4}px;
    alignItems: center;
    justifyContent: center;
    border-radius: 10px;
`
export const GenerateButtonText = styled.Text`
    color: #FCFCFF;
    font-weight: bold;   
    font-size: ${width/22}px;
`
