import React, { useState } from 'react';
import '../../App.css';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase.js";
import AuthDetails from '../AuthDetails';

export default function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [sleepPattern, setSleepPatternChange] = useState('');
    const [smokingHabit, setSmokingHabit] = useState('');
    const [alcoholConsumption, setAlcoholConsumption] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleAge = (event) => {
        setAge(event.target.value);
    };
    const handleWeight = (event) => {
        setWeight(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleSleepPatternChange = (event) => {
        setSleepPatternChange(event.target.value);
    };

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const handleSmokingHabitChange = (event) => {
        setSmokingHabit(event.target.value);
    };

    const handleAlcoholConsumptionChange = (event) => {
        setAlcoholConsumption(event.target.value);
    };


    const navigate = useNavigate()

    const handleLogin = (event) => {
        navigate('/login')
    };

    const handleRegister = (event) => {
        event.preventDefault();
        // registration
        createUserWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {


                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='register-page'>
            <div className='register-container'>
                <video className='register-video' src='videos/video-2.mp4' autoPlay muted loop></video>
                <div className='register-form-container'>
                    <h2 className='register-header'>Create Account</h2>
                    <form onSubmit={handleLogin} className='register-form'>
                        <div className='form-row'>
                            <div className='form-group'>
                                <label>
                                    First Name:
                                    <input type='text' value={firstName} onChange={handleFirstNameChange} />
                                </label>
                                <label>
                                    Last Name:
                                    <input type='text' value={lastName} onChange={handleLastNameChange} />
                                </label>
                                <label>
                                    Gender:
                                    <select value={gender} onChange={handleGenderChange}>
                                        <option value=''>--Please choose an option--</option>
                                        <option value='male'>Male</option>
                                        <option value='female'>Female</option>
                                        <option value='other'>Other</option>
                                    </select>
                                </label>
                            </div>
                            <div className='form-group'>

                                <label>
                                    Age:
                                    <input type='text' value={age} onChange={handleAge} />
                                </label>
                                <label>
                                    Weight:
                                    <input type='text' value={weight} onChange={handleWeight} />
                                </label>
                                <label>
                                    Height (in cm):
                                    <input type='number' value={height} onChange={handleHeightChange} />
                                </label>
                            </div>
                            <div className='form-group'>

                                <label>
                                    Sleep Pattern:
                                    <select value={sleepPattern} onChange={handleSleepPatternChange}>
                                        <option value=''>--Please choose an option--</option>
                                        <option value='regular'>Regular Sleep Schedule</option>
                                        <option value='insomnia'>Insomnia</option>
                                        <option value='sleep-apnea'>Sleep Apnea</option>
                                        <option value='irregular'>Irregular Sleep Schedule</option>
                                    </select>
                                </label>
                                <label>
                                    Smoking habit:
                                    <select value={smokingHabit} onChange={handleSmokingHabitChange}>
                                        <option value=''>--Please choose an option--</option>
                                        <option value='never'>Never smoked</option>
                                        <option value='occasional'>Occasional smoker</option>
                                        <option value='regular'>Regular smoker</option>
                                        <option value='ex-smoker'>Ex-smoker</option>
                                    </select>
                                </label>
                                <label>
                                    Alcohol consumption:
                                    <select value={alcoholConsumption} onChange={handleAlcoholConsumptionChange}>
                                        <option value=''>--Please choose an option--</option>
                                        <option value='never'>Never consumed</option>
                                        <option value='occasional'>Occasional consumer</option>
                                        <option value='regular'>Regular consumer</option>
                                        <option value='ex-consumer'>Ex-consumer</option>
                                    </select>
                                </label>
                            </div>
                            <div className='form-group'>
                                <label>
                                    <label>
                                        Email ID:
                                        <input type='text' value={username} onChange={handleUsernameChange} />
                                    </label>
                                    <label>
                                        Password:
                                        <input type='password' value={password} onChange={handlePasswordChange} />
                                    </label>
                                    Confirm password:
                                    <input type='password' value={confirmPassword} onChange={handleConfirmPassword} />
                                </label>
                            </div>
                            <div className='buttons-register-container'>
                                <button type='submit' onClick={handleLogin}>Login</button>
                                <button onClick={handleRegister}>Register</button>
                            </div>
                        </div>
                    </form>
                    <AuthDetails />
                </div>
            </div>
        </div>
    );
}
