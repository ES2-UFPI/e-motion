import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: ${width*0.04}px;
    padding-right: ${width*0.04}px;

    position: absolute;
    width: ${width*0.90}px;
    height: ${height*0.06}px;
    top: ${height*0.10}px;

    background: #FFFFFF;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);
    elevation: 20;
    border-radius: 10px;
`

export const InputSearch = styled.TextInput`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: #91919F;

    height: ${height*0.06}px;
`