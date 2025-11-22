import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { Toaster } from 'react-hot-toast'
import SuccessAlert from "../components/smallComponents/customAlerts/SuccessAlert.jsx";
import ErrorAlert from "../components/smallComponents/customAlerts/ErrorAlert.jsx";

const AlertContext = createContext();

export const AlertProvider = ({children}) => {

    const successAlert = (message) => {
        toast.custom((t) => (
        <SuccessAlert t={t} message={message} />
       ), {
        duration: 4000,
        position: 'top-right',
       });
    }

    const errorAlert = (message) => {
        toast.custom((t) => (
            <ErrorAlert t={t} message={message} />
        ), {
            duration: 4000,
            position: 'top-right',
        });
    }

    const contextValue = { successAlert, errorAlert };

    return (
        <AlertContext.Provider value={contextValue}>
            <Toaster />
            {children}            
        </AlertContext.Provider>
    )

};

export const useAlert = () => {
        const context = useContext(AlertContext);
        if (!context) {
            throw new Error("useAlert must be used within an AlertProvider");
        }
        return context;
    };


export default AlertContext;
