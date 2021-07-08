import React, { useState, createContext } from "react";
import Snackbar from '../../components/Snackbar';

export const GlobalContext = createContext({})
export const GlobalConsumer = GlobalContext.Consumer;

export function GlobalSnackbar(props: any) {

    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState<string>('');
    const [type, setType] = useState<string>('ERROR');

    const showSnackbar = () => setVisible(true);
    const hideSnackbar = () => setVisible(false);

    const handleDuration = (duration: number | undefined) => {
        setTimeout(() => {
            setVisible(false);
        }, duration ?? 3000);
    }

    const showError = (message: string, duration?: number) => {
        setType('ERROR');
        setMessage(message);
        showSnackbar();
        handleDuration(duration);
    }

    const showSuccess = (message: string, duration?: number) => {
        setType('SUCCESS');
        setMessage(message);
        showSnackbar();
        handleDuration(duration);
    }

    return (
        <GlobalContext.Provider value={{ showSuccess, showError }}>
            {props.children}
            {
                visible ?
                    <Snackbar
                        type={type}
                        message={message}
                    />
                    : <></>
            }

        </GlobalContext.Provider>
    )
}