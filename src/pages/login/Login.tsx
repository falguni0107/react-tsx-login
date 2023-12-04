import { Button, IconButton, InputAdornment, Paper, TextField } from '@mui/material';
import logo from '../../logo.svg';
import styles from './Login.module.css'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Password, Visibility, VisibilityOff } from '@mui/icons-material';
import React from 'react';

export const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const loginForm = () => {
        
    };

    return (
        <div className={styles.SplitLayout}>
            <div className={styles.WallpaperSide}>
                <img src={logo} className={styles.AppLogo} alt="logo" />
            </div>

            <div className={styles.LoginFormSide}>
                <div className={styles.LoginForm}>
                    {/* <Paper elevation={3}> */}
                    <h2 className={styles.Heading}>Login</h2>
                    <div>
                        <TextField
                            sx={{ m: 1, width: '40ch' }}
                            label="username"
                            id="outlined-username-small"
                            type="text"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div>
                        <TextField
                            sx={{ m: 1, width: '40ch' }}
                            label="password"
                            id="outlined-password-small"
                            type={showPassword ? 'text' : 'password'}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>
                    <div>
                        <Button size="small" color="secondary" variant="text">Forgot Password?</Button>
                    </div>
                    <div>
                        <Button size="large" sx={{width: '40ch' }} variant="contained" color="success" onClick={loginForm}>LOGIN</Button>
                    </div>
                    {/* </Paper> */}
                </div>
            </div>
        </div>
    )
};