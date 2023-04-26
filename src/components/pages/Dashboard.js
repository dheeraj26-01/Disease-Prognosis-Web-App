import React from 'react';
import './Dashboard.css';
// import GoogleMap from './GoogleMap';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='patient-info-container'>
      <div className='profile-photo'>
      <img src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' alt='Patient Profile' />
      </div>
      <div className='patient-information'>
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Age:</strong> 35</p>
      <p><strong>Weight:</strong> 75 kg</p>
      <p><strong>Gender:</strong> Male</p>
      </div>
      </div>

      <div className='symptoms-form-container'>
        <form className='symptoms-form'>
          <label htmlFor='symptom1'>Symptom 1:</label>
          <select id='symptom1' name='symptom1'>
            <option value=''>None</option>
            <option value='headache'>Headache</option>
            <option value='fatigue'>Fatigue</option>
            <option value='fever'>Fever</option>
            <option value='cough'>Cough</option>
            <option value='shortness-of-breath'>Shortness of breath</option>
          </select>

          <label htmlFor='symptom2'>Symptom 2:</label>
          <select id='symptom2' name='symptom2'>
            <option value=''>None</option>
            <option value='headache'>Headache</option>
            <option value='fatigue'>Fatigue</option>
            <option value='fever'>Fever</option>
            <option value='cough'>Cough</option>
            <option value='shortness-of-breath'>Shortness of breath</option>
          </select>

          <label htmlFor='symptom3'>Symptom 3:</label>
          <select id='symptom3' name='symptom3'>
            <option value=''>None</option>
            <option value='headache'>Headache</option>
            <option value='fatigue'>Fatigue</option>
            <option value='fever'>Fever</option>
            <option value='cough'>Cough</option>
            <option value='shortness-of-breath'>Shortness of breath</option>
          </select>

          <label htmlFor='symptom4'>Symptom 4:</label>
          <select id='symptom4' name='symptom4'>
            <option value=''>None</option>
            <option value='headache'>Headache</option>
            <option value='fatigue'>Fatigue</option>
            <option value='fever'>Fever</option>
            <option value='cough'>Cough</option>
            <option value='shortness-of-breath'>Shortness of breath</option>
          </select>

          <label htmlFor='symptom5'>Symptom 5:</label>
          <select id='symptom5' name='symptom5'>
            <option value=''>None</option>
            <option value='headache'>Headache</option>
            <option value='fatigue'>Fatigue</option>
            <option value='fever'>Fever</option>
            <option value='cough'>Cough</option>
            <option value='shortness-of-breath'>Shortness of breath</option>
          </select>

          <button type='submit'>Submit</button>
        </form>
      </div>

      <div className='map-container-dashboard'>
        <h2>Map</h2>
        <p>Map goes here</p>
        {/* <GoogleMap /> */}
      </div>

      <div className='doctor-container'>
        <h2>Doctor</h2>
        <p>Doctor goes here</p>
      </div>

    </div>
  );
  };
  export default Dashboard