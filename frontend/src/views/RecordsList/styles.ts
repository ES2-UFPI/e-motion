import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';


const { width, height } = Dimensions.get('window');

export const ContainerAll = styled.View`
    height: 100%;
    background: #E1948B;
    flex: 1;  
`

export const Title = styled.Text`
    text-align: center;
    padding: ${width*0.01}px;
    font-size: ${width/16}px;
    font-weight: bold;
    color: #292B2D;
`

export const Container = styled.View`
    flex: 1;
    backgroundColor: #FCFCFF;
    alignItems: center;
    justifyContent: space-between;
    paddingTop:60px;
    paddingHorizontal:10px;
    paddingTop:10px;
    paddingHorizontal:10px;
    borderTopLeftRadius:30px;
    borderTopRightRadius:30px;
    margin-top: ${Constants.statusBarHeight +9}px;
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