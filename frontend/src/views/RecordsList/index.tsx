import React, { useEffect, useState } from 'react';
import { FlatList,ActivityIndicator, RefreshControl} from 'react-native';
import Alert2Options from '../../components/Alert2Options';
import Record_card from '../../components/Record_card';
import { Title,Container,NothingFound,ContainerAll,TextNothingFound } from './styles';
import api from '../../services/api'
import { useNavigation,useIsFocused } from '@react-navigation/native';
import moment from 'moment';

interface Record{
    id:string;
    title:string;
    data_registro:string;
    completed:number;
}

export default function RecordsList({navigation}:any) {
    const isFocused = useIsFocused();
    const [refresh, setRefresh] = useState<boolean>(false);
    const [idCurrent, setIdCurrent] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

    const [records, setRecords] = useState<Record[]|undefined>([]);

    useEffect(() => {
        navigation.addListener('focus', () => {
                setRefresh(!refresh);           
        });

    }, [navigation]);

    async function getRecordsFromUser() {

        try {
            setLoading(true)
            const reaponse = await api.get(`clients/reactions`);

           const data = reaponse.data as [any];

           if(data.length < 1){
               setRecords(undefined)
               setLoading(false);
                return
           }

           const records_from_user = data.map(record => {

                const fields = Object.entries(record);

                const fields_cont = fields.filter( field => (field[1] !== "") && (field[0] !== "title")).length -3;

                const fields_completed = Math.round(fields_cont / (fields.length-3) * 100);

               return {
                id:record.id.toString(),
                title:record.title,
                data_registro:record.data_registro,
                completed:fields_completed
               }
           });

           setRecords(records_from_user)
           setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        getRecordsFromUser()
        console.log(refresh)
    }, [refresh,isFocused])


    async function handleDelete(){

        await api.delete(`reactions/${idCurrent}`)
        .then(()=>{
            const filteredRecord = records?.filter((record) => record.id != idCurrent );
            setRecords(filteredRecord);
            setIdCurrent("");
            setModalIsVisible(false)
        })

    }

    const navigate = useNavigation();

    function onPressDelete(id:string){
        setIdCurrent(id);
        setModalIsVisible(true);
    }

    function onPressCard(id: string){
        navigate.navigate('Registration', { id })
    }


    return (
       <ContainerAll>
            <Container >
           <Title> Meus registros </Title>

           {
           loading ?
           <NothingFound>
                <ActivityIndicator size={80} color="#fad2d2" />  
           </NothingFound>
           
           :
           records && records.length > 0 ?

           <FlatList 
             data={records}
             keyExtractor={(item) => item.id}
             renderItem={({ item }) => 
                <Record_card 
                    id={item.id} 
                    title={item.title} 
                    date={moment(item.data_registro).format('DD/MM/YYYY _ HH:mm').replace("_","às")} 
                    completed={item.completed} 
                    hasDeleteIcon={true}
                    onPressDelete={onPressDelete} 
                    onPress={() => onPressCard(item.id)}
                />}
             horizontal={false}
             contentContainerStyle={{
                paddingHorizontal:4,
                paddingVertical:5
              }}
              refreshControl={
                <RefreshControl colors={['#fad2d2']} refreshing={loading} onRefresh={()=> setRefresh(!refresh)} />
            }
           />
           :
            <NothingFound>
                <TextNothingFound>
                    Nenhum registo foi encontrado :(
                 </TextNothingFound>
                
            </NothingFound>
            
        }

           <Alert2Options 
                visible={modalIsVisible} 
                close={()=> setModalIsVisible(false)} 
                onConfirm={handleDelete} 
                title={"Atenção!"} 
                content="Você tem certeza de que deseja excluir este registro?" 
            />
            
        </Container>
       </ContainerAll>
    );
}
