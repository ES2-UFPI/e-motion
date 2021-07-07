import React, { useState, createContext } from "react";
import Snackbar from '../../components/Snackbar';

export const GlobalContext = createContext({})
export const GlobalConsumer = GlobalContext.Consumer;

export function GlobalSnackbar (props: any) {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState(null);

    const showSnackbar = () => setVisible(true);
    const hideSnackbar = () => setVisible(false);

    return(
        <GlobalContext.Provider value={{showSnackbar, hideSnackbar, setMessage, setType}}>
            {props.children}
            <Snackbar />
        </GlobalContext.Provider>
    )
}