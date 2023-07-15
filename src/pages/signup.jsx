import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { UserAuth, auth } from '../firebase/auth';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { createUser } = UserAuth
    const navigate = useNavigate()

    const signUp = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            navigate('/account')
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    };


    return (
        <Container component={"main"} maxWidth="xs">
            <CssBaseline />
            <Box sx={{ mt: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Avatar
                    sx={{
                        m: 1,
                        bgcolor: "secondary.main",
                    }}
                >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component={"h1"} variant="h5">
                    Sign Up
                </Typography>
                <Box component={"form"} sx={{ mt: 3 }} onSubmit={signUp}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="given-name"
                                fullWidth
                                required
                                name="name"
                                id="name"
                                autoFocus
                                label="Name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="email"
                                fullWidth
                                required
                                name="email"
                                id="email"
                                label="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="new-password"
                                fullWidth
                                type="password"
                                required
                                name="password"
                                id="password"
                                label="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Register
                    </Button>
                    <Grid container justifyContent={"flex-end"}>
                        <Grid item>
                            <Link variant="body2" href="/login">
                                Already have an account? Sign In
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default SignUp;
