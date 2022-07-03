import React, { useContext, useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { authContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import grad from '../files/wp.jpg'

const LoginForm = () => {
    const { login, error } = useContext(authContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleValues() {
        if (!email || !password) {
            alert("заполните поля!");
            return;
        }
        login(email, password, navigate);
    }
    return (
        <Box>
            <img width="100%" className='img' src={grad} alt='' />
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                height={"70vh"}>
                <Typography variant="h3" component="h2">
                    Login
                </Typography>
                {error ? <Alert severity="error">{error}</Alert> : null}
                <TextField
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{ width: "40%", margin: "10px" }}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    style={{ width: "40%", margin: "10px" }}
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                />
                <Button
                    variant="contained"
                    style={{ width: "40%", margin: "10px" }}
                    onClick={handleValues}>
                    Login
                </Button>
            </Box>
        </Box>
    );
};

export default LoginForm; 