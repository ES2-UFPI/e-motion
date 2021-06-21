import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    background: #E1948B;
`

export const ScrollView = styled.ScrollView`
    flex: 1;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    background: #FCFCFF;

`

export const ContentContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: ${width*0.1}px;
`

export const SectionTtile = styled.Text`
    color: #292B2D;
    font-weight: bold;
    width: 100%;
    text-align: center;

    font-size: ${width/20}px;
`

export const ContainerButton = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
`

export const Button = styled.TouchableOpacity`
    background: #61C08C;
    width: 45%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
`

export const TextButton = styled.Text`
    color: #FCFCFF;
    font-size: ${width/22}px;
    margin-right: 5px;
    text-align: center;
`