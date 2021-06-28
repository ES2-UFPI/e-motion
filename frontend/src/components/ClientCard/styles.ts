import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export const Container = styled.TouchableOpacity`
    position: absolute;
    padding: ${width*0.050}px;
    width: ${width*0.90}px;
    height: ${height*0.14}px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`

export const Row = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const DataContainer = styled.View`
    width: 80%;
    display: flex;
    padding:0px;
    flex-direction: column;
    align-items: flex-start;
`

export const Name = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: ${width*0.05}px;
    line-height: 23px;

    color: #161719;
    padding-bottom: ${width*0.02}px;
`

export const ContactInformations = styled.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;

    color: #91919F;
    padding-bottom: ${width*0.01}px;
`