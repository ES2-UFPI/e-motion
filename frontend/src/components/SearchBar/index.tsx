import React, { Dispatch, SetStateAction} from 'react';
import { Container, InputSearch } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
    placeholder: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
}

export default function SearchBar({placeholder, setSearchQuery}: Props) {
    return(
        <Container>
            <InputSearch
                placeholder={placeholder}
                onChangeText={(e) => {setSearchQuery(e)}}
            >
            </InputSearch>
            <Icon name="search" size={20}/>
        </Container>
    )
}