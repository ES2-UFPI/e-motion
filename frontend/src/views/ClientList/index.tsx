import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import SearchBarComponent from '../../components/SearchBar';
import ClientCardComponent from '../../components/ClientCard';
import { BackGroundPage, ContainerMain, Item, NothingFound, TextNothingFound } from './styles';

interface Client {
    id: string,
    name: string,
    nickname: string,
    phone: string,
    user: {
      avatar: number,
      email: string,
    }
}

const ClientList = (props: any) => {
    const [clients, setClients] = useState<Client[]>([]);
    const [filteredClients, setFilteredClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const isFocused = useIsFocused();
    const [refresh, setRefresh] = useState<boolean>(false);

    const dimensions = Dimensions.get('window');

    const navigation = useNavigation();

    useEffect(() => {
        navigation.addListener('focus', () => {
                setRefresh(!refresh);           
        });

    }, [navigation]);

    async function getClients() {
        try {
            setLoading(true);

            if(searchQuery === "") {
                const response = await api.get(`professionals/clients`);
                setClients(response.data.clients);
                
            } else {
                 let filteredClients = clients.filter((c: Client) => {
                     return (
                       c.name.toLowerCase().match(searchQuery.toLowerCase()) ||
                       c.nickname.toLowerCase().match(searchQuery.toLowerCase()) ||
                       c.phone.match(searchQuery) ||
                       c.user.email.toLowerCase().match(searchQuery.toLowerCase())
                     );
                });
                setFilteredClients(filteredClients);
            }

            setLoading(false);
        } catch(error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getClients();
    }, [searchQuery,isFocused]);

    function onPressClientCard(id:string){
        navigation.navigate('Acompanhamento', clients.filter(user => user['id'] === id)[0]);
    }

    return (
        <>
        <BackGroundPage>
            <ContainerMain>
                <SearchBarComponent placeholder={'Busque pelo paciente'} setSearchQuery={setSearchQuery}/>
                {
                    loading ?
                    <NothingFound>
                        <ActivityIndicator size={80} color="#fad2d2" />  
                    </NothingFound>
                    :
                    clients && clients.length > 0 ?
                    <FlatList
                    data={searchQuery === "" ? clients: filteredClients}
                    keyExtractor={(item) => item['id']}
                    renderItem={({ item }) => 
                    <Item>
                        <ClientCardComponent 
                            id={item['id']} 
                            name={item['name']} 
                            nickname={item['name']} 
                            email={item['user']['email']} 
                            phone={item['phone']}  
                            onPress={onPressClientCard}
                        />
                    </Item>
                    }
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    style={{
                        paddingLeft: dimensions.width/20,
                        paddingRight: dimensions.width/20,
                        marginTop: dimensions.height/10,
                        width: dimensions.width,
                    }}
                    />
                    :
                    <NothingFound>
                        <TextNothingFound>
                            Nenhum cliente foi encontrado :(
                        </TextNothingFound>  
                    </NothingFound>
                }
            </ContainerMain>
        </BackGroundPage>
        </>
    )
}

export default ClientList;