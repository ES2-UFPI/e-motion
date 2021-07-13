import React from 'react';
import {
    Modal,
    Box,
    Text
} from './styles';

const Snackbar = (props: any) => {

    const { type, message } = props;

    return (
        <Modal>
            <Box color={type === 'ERROR' ? "#DD383F" : "#61C08C"}>
                <Text>
                    { message }
                </Text>
            </Box>
        </Modal>
    )
}

export default Snackbar;