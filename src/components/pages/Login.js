import React, { useState } from 'react';
import '../../App.css';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'


import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";


import { auth } from "../../firebase.js";
import AuthDetails from '../AuthDetails';


const provider = new GoogleAuthProvider();

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault();
        // login
        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
            console.log(userCredential);
            navigate('/dashboard')
            
        })
            .catch((error) => {
            console.log(error);
        });
      console.log("loggedin")
        
    };

    const handleGoogleLogin = (event) => {

        signInWithPopup(auth, provider)
        .then((userCredential) => {
            console.log(userCredential);
            navigate('/dashboard')
        })
        .catch((error) => {
            console.log(error);
        });
        console.log("loggedin")
    }

    const handleRegister = (event) => {
        event.preventDefault();
        // registration
        navigate('/register')
    };

    return (
        <div className='login-page'>
            <div className='login-container'>
                <video className='login-video' src='videos/video-1.mp4' autoPlay muted loop></video>
                <div className='login-form-container'>
                    <h2 className='login-header'>Sign In</h2>
                    <form onSubmit={handleLogin} className='login-form'>
                        <label>
                            Email ID:
                            <input type='text' value={username} onChange={handleUsernameChange} required='required'/>
                        </label>
                        <label>
                            Password:
                            <input type='password' value={password} onChange={handlePasswordChange} />
                        </label>
                        <div className='buttons-container'>
                            <button type='submit-login' onClick={handleLogin}>Login</button>   
                            <button onClick={handleRegister}>Register</button>
                            <button className='googleBtn' onClick={handleGoogleLogin}><FcGoogle/></button>
                            
                        </div>
                    </form>
                    <AuthDetails />
                </div>
            </div>
        </div>
    );
}
