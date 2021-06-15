import React, { useEffect, useState } from 'react';
import { Alert, FlatList,Text,View } from 'react-native';
import Alert2Options from '../../components/Alert2Options';
import Record_card from '../../components/Record_card';
import { Title,Container,NothingFound } from './styles';
import api from '../../services/api'

interface Record{
    id:string;
    title:string;
    date:string;
    completed:number;
}

export default function RecordsList() {

    const client_id = "1avb";
    const [idCurrent, setIdCurrent] = useState<string>("");
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

    const [records, setRecords] = useState<Record[]|undefined>([]);

    async function getRecordsFromUser(client_id:string) {
        try {
            const reaponse = await api.get(`/reactions/${client_id}`);

           const data = reaponse.data as [any];

           if(data.length < 1){
               setRecords(undefined)
                return
           }

           const records_from_user = data.map(record => {

                const fields = Object.entries(record);

                const fields_cont = fields.filter( field => field[1] != null).length;

                const fields_completed = Math.round(fields_cont / fields.length * 100);

               return {
                id:record.id.toString(),
                title:record.title,
                date:record.date,
                completed:fields_completed
               }
           });

           setRecords(records_from_user)

        } catch (error) {
            console.log(error)
            Alert.alert("ERRO")
        }
    }


    useEffect(() => {
        if(client_id){
            getRecordsFromUser(client_id)
        }
    }, [])


    function handleDelete(){
        //fazer requisicao para deletar then

        const filteredRecord = records?.filter((record) => record.id != idCurrent );
        setRecords(filteredRecord);
        setIdCurrent("");
        setModalIsVisible(false)
    }

    function onPressDelete(id:string){
        setIdCurrent(id);
        setModalIsVisible(true)
    }

    function onPressCard(){

    }

    return (
        <Container >
           <Title> Meus registros </Title>

           {records && records.length > 0 ?
           <FlatList 
             data={records}
             keyExtractor={(item) => item.id}
             renderItem={({ item }) => 
                <Record_card 
                    id={item.id} 
                    title={item.title} 
                    date={item.date} 
                    completed={item.completed} 
                    onPressDelete={onPressDelete} 
                    onPress={onPressCard}
                />}
             horizontal={false}
             keyboardShouldPersistTaps='always'
             keyboardDismissMode='on-drag'
             contentContainerStyle={{
                paddingHorizontal:4,
                paddingVertical:5
              }}
           />
           :
            records === undefined
            ?
                <NothingFound>
                     <Text>
                        Nenhum registo foi encontrado :(
                    </Text>
                    
                </NothingFound>
            :
                <View>
                    <Text>
                        Carregando ....
                    </Text>
                </View>
            
        }

           <Alert2Options 
                visible={modalIsVisible} 
                close={()=> setModalIsVisible(false)} 
                onConfirm={handleDelete} 
                title={"Atenção!"} 
                content="Você tem certeza de que deseja excluir este registro?" 
            />
            
        </Container>
    );
}
