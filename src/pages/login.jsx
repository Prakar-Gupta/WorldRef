import React, { useState } from "react";
import { CssBaseline } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Checkbox from '@mui/material/Checkbox';
import { UserAuth } from "../firebase/auth";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const signin = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            localStorage.setItem('login', true);
            navigate('/')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
            window.alert('Invalid Email/Password')
        }
    };

    return (
        <>
            <CssBaseline />
            <div className="header">
                <img src="https://worldref.co/wp-content/uploads/2021/01/WorldRef-black.svg" alt="" />
                <li>
                    <a href="">Services</a>
                    <a href="">Our Work</a>
                    <a href="">App</a>
                    <a href="">My Deals</a>
                    <a href="">Contact Us</a>
                    <a href="">Seller Login in</a>
                </li>
            </div>
            <Container component={"main"} maxWidth="sm">
                <CssBaseline />
                <Box
                    sx={{
                        mt: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        border: "transparent",
                        boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.05)",
                        padding: "32px 48px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            mb: 2,
                        }}
                    >
                        <Typography component={"h1"} variant="h4">
                            Seller Log in
                        </Typography>
                    </Box>
                    <Divider variant="middle" />
                    <Box component={"form"} sx={{ mt: 3 }} onSubmit={signin}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="body1" color="textPrimary" component="div">
                                    Email ID
                                    <span style={{ color: "red" }}>*</span>
                                </Typography>
                                <TextField
                                    autoComplete="email"
                                    fullWidth
                                    required
                                    name="email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                ></TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1" color="textPrimary" component="div">
                                    Password
                                    <span style={{ color: "red" }}>*</span>
                                </Typography>
                                <TextField
                                    autoComplete="new-password"
                                    fullWidth
                                    type="password"
                                    required
                                    name="password"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                ></TextField>
                            </Grid>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>

                                    <Checkbox defaultChecked />
                                    Stay Tuned In
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginLeft: '200px'
                                }}>
                                    <Link variant="body2" href="/forgot-password">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 3,
                                height: "50px",
                                textTransform: "capitalize",
                            }}
                        >
                            Log in
                        </Button>
                        <Grid container justifyContent={"center"}>
                            <Grid item>
                                Don't have an account?{" "}
                                <Link variant="body2" href="/signup">
                                    Create Account
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Login;
