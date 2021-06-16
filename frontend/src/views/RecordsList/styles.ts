import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

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

`

export const NothingFound = styled.View`
    flex: 2;
    alignItems: center;
    justifyContent: center;

`