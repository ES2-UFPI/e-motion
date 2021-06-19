import React, { useEffect, useState } from 'react';
import { FlatList,ActivityIndicator} from 'react-native';
import Alert2Options from '../../components/Alert2Options';
import Record_card from '../../components/Record_card';
import { Title,Container,NothingFound,ContainerAll,TextNothingFound } from './styles';
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
    const [loading, setLoading] = useState<boolean>(true);
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

    const [records, setRecords] = useState<Record[]|undefined>([]);

    async function getRecordsFromUser(client_id:string) {

        try {
            setLoading(true)
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
           setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
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
                    date={item.date} 
                    completed={item.completed} 
                    onPressDelete={onPressDelete} 
                    onPress={onPressCard}
                />}
             horizontal={false}
             contentContainerStyle={{
                paddingHorizontal:4,
                paddingVertical:5
              }}
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
