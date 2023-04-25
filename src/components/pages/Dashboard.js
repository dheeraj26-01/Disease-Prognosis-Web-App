import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div classname='patient-info-container'>
        <h2>Patient Information</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Age:</strong> 35</p>
        <p><strong>Weight:</strong> 75 kg</p>
      </div>
      <div classname='symptoms-form-container'>
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
    </div>
  );
};

export default Dashboard;
