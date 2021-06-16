import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    height: ${height*0.06}px;
    padding: ${width*0.05}px;
    margin-top: ${Constants.statusBarHeight}px;
    margin-bottom: ${height * 0.02}px;

    background: #E1948B;
`

export const Title = styled.Text`
    color: #FCFCFF;
    font-size: ${width/24}px;
    margin-left: ${width*0.04}px;
`

export const Button = styled.TouchableOpacity`
    margin-right: ${width*0.04}px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`