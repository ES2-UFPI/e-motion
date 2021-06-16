import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.7);
`

export const ModalContainer = styled.View`
    width: 75%;
    height: ${height*0.35}px;
    background: #FCFCFF;
    border-radius: 30px;
    padding: ${width*0.05}px;
    elevation: 20;

    justify-content: space-between;
`

export const Title = styled.Text`
    width: 100%;
    text-align: center;
    padding: ${width*0.01}px;
    font-size: ${width/14}px;
    color: #292B2D;
`

export const Content = styled.Text`
    width: 100%;
    text-align: center;
    font-size: ${width/22}px;
    color: #292B2D;
`

export const ContainerButton = styled.View`
    justify-content: center;
    align-items: center;
`

export const Button = styled.TouchableOpacity`
    background: #61C08C;
    width: 60%;
    padding: ${width*0.02}px;
    border-radius: 10px;
`

export const TextButton = styled.Text`
    width: 100%;
    text-align: center;
    color: #FCFCFF;
    font-size: ${width/22}px;
`