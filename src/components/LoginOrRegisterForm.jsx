import React from "react";
import {Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../authentication/firebase";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
    const [user, isLoading] = useAuthState(auth);

    return (
        <Box sx={{width: 100}}>
            <Typography>
                Login
            </Typography>
            <TextField>

            </TextField>
        </Box>
    )
}

export default LoginOrRegisterForm;