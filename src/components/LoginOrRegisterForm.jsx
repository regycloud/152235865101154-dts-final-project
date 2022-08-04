import React, {useEffect, useState} from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, loginDenganEmailDanPassword, registerDenganEmailDanPassword } from "../authentication/firebase";



const LoginOrRegisterForm = ({ loginOrRegister }) => {
    const navigate = useNavigate();
    const [user, isLoading] = useAuthState(auth)
 

    const [credential, setCredential] = useState({
        email: "",
        password: "",
    });
    
    const textFieldEmailOnChangeHandler = (event) => {
        setCredential({
            ...credential,
            email: event.target.value,
        });
    };

    const textFieldPasswordOnChangeHandler = (event) => {
        setCredential({
            ...credential,
            password: event.target.value,
        });
    };

    const loginHandler = () => {
        loginDenganEmailDanPassword(credential.email, credential.password);
    };

    const registerHandler = () => {
        registerDenganEmailDanPassword(credential.email, credential.password);
    };

    const buttonLoginOrRegisterOnClickHandler = () => {
        if (loginOrRegister === "login") {
            loginHandler();
        } else {
            registerHandler();
        }
    };

    useEffect(
        () => {
            if (isLoading) {
                return;
            };

            if (user) {
                navigate("/");
            };

        },
        [user, isLoading, navigate]
    )

    return (
        <Box sx={{backgroundColor: 'grey', minHeight: '90vh'}}>
                <Typography variant="h2" sx={{paddingBottom: '10vh', textAlign:'center', paddingTop: '10vh'}}>
                    {loginOrRegister === "login" ? "Login Page" : "Register"}
                </Typography>


                <Box sx={{borderColor: 'blue', borderStyle: 'solid', display: 'grid', justifyContent: 'center', padding: '50px'}}>
            <Typography>{loginOrRegister === "login" ? "Login to see article details" : "Register for free"}</Typography>
                    <TextField
                        inputProps={{ style: {border: 'white', minWidth: '400px'}}}
                        label="Email"
                        type="email"
                        value={credential.email}
                        multiline
                        onChange={textFieldEmailOnChangeHandler}
                        />
                    <TextField
                        inputProps={{ style: {border: 'white'}}}
                        label="Password"
                        type="password"
                        value={credential.password}
                        onChange={textFieldPasswordOnChangeHandler}
                        /> <br />

                    <Button
                        variant="outlined"
                        size="small"
                        onClick={buttonLoginOrRegisterOnClickHandler}
                        >{loginOrRegister === "login" ? "Login" : "Register Account"}
                        </Button>
                        < br />
                        {loginOrRegister === "login" ? (
                            <Link to="/register" style={{textDecoration: 'none', color: 'black'}}>
                                <Typography variant="h5" sx={{textAlign: 'center'}}>Click here to Register</Typography>
                            </Link>
                            ): (
                                <Link to="/login" style={{textDecoration: 'none', color: 'black'}}>
                                    <Typography variant="h5" sx={{color: 'black', textAlign: 'center'}}>Click Here to Login
                                    </Typography>
                                </Link>
                            )}
                    </Box>
        </Box>

        
    )
};

export default LoginOrRegisterForm