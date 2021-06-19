import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    backgroundColor: #FCFCFF;
    alignItems: center;
    justifyContent: space-between;
    paddingTop:60px;
    paddingHorizontal:10px;

`
