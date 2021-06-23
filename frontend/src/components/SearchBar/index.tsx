import React, { Dispatch, SetStateAction} from 'react';
import { Container, InputSearch } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
    placeholder: string;
    searchQuery: string;
    setSearchQuery?: Dispatch<SetStateAction<string>>;
}

export default function SearchBar({placeholder, searchQuery, setSearchQuery}: Props) {
    return(
        <Container>
            <InputSearch
                placeholder={placeholder}
                value={searchQuery}
                onChangeText={setSearchQuery}
            >
            </InputSearch>
            <Icon name="search" size={20}/>
        </Container>
    )
}