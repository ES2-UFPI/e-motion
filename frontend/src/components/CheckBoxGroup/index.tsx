import React, { useState } from 'react';
import { FlatList } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Group, Text } from './styles';

const CheckBoxGroup = (props: any) => {

    const { sentimentos } = props;

    const [values, setValues] = useState<boolean[]>(new Array(sentimentos.length).fill(false));
    const [outroValue, setOutroValue] = useState<boolean>(false);

    const onChangeCheckBoxValue = (newValue: boolean, index: number) => {
        const listValues = values.map((value, i) => {
            if (index === i)
                return newValue;
            else
                return value
        })
        setValues(listValues);
    }

    const renderItem = ({ item: sentimento }: any) => (
        <Group>
            <CheckBox
                disabled={false}
                value={values[sentimento.id]}
                onValueChange={(newValue: any) => { onChangeCheckBoxValue(newValue, sentimento.id) }}
                tintColors={{ true: '#E1948B', false: '#91919F' }}
            />
            <Text>{sentimento.name}</Text>
        </Group>
    )

    return (
        <FlatList
            data={sentimentos}
            keyExtractor={data => String(data.id)}
            renderItem={(item: any) => renderItem(item)}
            numColumns={2}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingTop: 10
            }}
            ListFooterComponentStyle={{
                marginBottom: 16
            }}
            ListFooterComponent={
                <>
                    <Group>
                        <CheckBox
                            disabled={false}
                            value={outroValue}
                            onValueChange={(newValue: boolean) => setOutroValue(newValue)}
                            tintColors={{ true: '#E1948B', false: '#91919F' }}
                        />
                        <Text>Outro(s)</Text>
                    </Group>
                </>
            }
        />
    )
}

export default CheckBoxGroup;