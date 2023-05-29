import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import {useState} from "react";

export default function Toast({message,type}) {
    console.log(message);
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message={message}/>
    );
}