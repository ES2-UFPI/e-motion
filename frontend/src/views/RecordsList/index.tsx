import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Alert2Options from '../../components/Alert2Options';
import Record_card from '../../components/Record_card';
import { Title,Container } from './styles';

interface Record{
    id:string;
    title:string;
    date:string;
    completed:number;
}

export default function RecordsList() {

    const [idCurrent, setIdCurrent] = useState<string>("");
    const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

    const [records, setRecords] = useState<Record[]>([
        {id:"1A", title: "Vi uma praia", date: "24/05/2021  às 14:30",completed:10},
        {id:"2B", title: "Vi uma praia", date: "24/05/2021  às 14:30",completed:80},
        {id:"3C", title: "Vi uma praia", date: "24/05/2021  às 14:30",completed:100},
        {id:"4D", title: "Vi uma praia", date: "24/06/2020  às 14:30",completed:20} 
    ])

    function handleDelete(){
        //fazer requisicao para deletar then

        const filteredRecord = records.filter((record) => record.id != idCurrent );
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
