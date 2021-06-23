import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface CircleProps {
    isSelect: boolean
}


export const Container = styled.View`
    background: #E1948B;
    height: ${height*0.13}px;

    justify-content: center;
    align-items: center;
`
export const ContainerFlux = styled.View`
    flex-direction: row;
    width: 70%;

    justify-content: center;
    align-items: center;
`

export const Circle = styled.View<Pick<CircleProps, 'isSelect'>>`
    background: rgba(255,255,255,0.85);
    width: ${width * 0.1}px;
    height: ${width * 0.1}px;
    border-radius: ${Math.round(width + height) / 2}px;
    border: ${p => p.isSelect ? '1px solid #91919F' : 'none'};
    elevation: ${p => p.isSelect ? 20 : 0};

    justify-content: center;
    align-items: center;
`

export const CircleText = styled.Text`
    font-weight: bold;
    color: #292B2D;
    font-size: ${width/24}px;
`

export const Line = styled.View`
    width: 16%;
    height: ${width * 0.003}px;
    background: rgba(255,255,255,0.85);
`