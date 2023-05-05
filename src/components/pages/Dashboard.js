import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, app } from "../../firebase.js";
import { getDatabase, ref, onValue } from "firebase/database";
import { motion } from "framer-motion"
// import GoogleMap from './GoogleMap';


const doctors = [
  {
    name: 'Dr. John Smith',
    age: 45,
    experience: '15 years',
    expertise: 'Cardiology',
    contact: {
      phone: '123-456-7890',
      email: 'john.smith@cardiology.com'
    },
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'Dr. Maria Garcia',
    age: 40,
    experience: '10 years',
    expertise: 'Gastroenterology',
    contact: {
      phone: '123-456-7890',
      email: 'maria.garcia@gastroenterology.com'
    },
    image: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    name: 'Dr. William Lee',
    age: 50,
    experience: '20 years',
    expertise: 'Neurology',
    contact: {
      phone: '123-456-7890',
      email: 'william.lee@neurology.com'
    },
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    name: 'Dr. Elizabeth Brown',
    age: 42,
    experience: '12 years',
    expertise: 'Dermatology',
    contact: {
      phone: '123-456-7890',
      email: 'elizabeth.brown@dermatology.com'
    },
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'Dr. David Martinez',
    age: 55,
    experience: '25 years',
    expertise: 'Orthopedics',
    contact: {
      phone: '123-456-7890',
      email: 'david.martinez@orthopedics.com'
    },
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  }
];

const getRandomDoctor = () => {
  const randomIndex = Math.floor(Math.random() * doctors.length);
  return doctors[randomIndex];
};



const Dashboard = () => {
  const [doctor, setDoctor] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const randomDoctor = getRandomDoctor();
    setDoctor(randomDoctor);
    setSubmitted(true);
  };

  const [user] = useAuthState(auth);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
      const database = getDatabase();
      if (user) {
          const userId = user.uid;
          const userRef = ref(database, `users/${userId}`);
          onValue(userRef, (snapshot) => {
              const data = snapshot.val();
              setUserDetails(data);
          });
      }
  }, [user]);

  return (
    <div className='dashboard'>
      <div className='patient-info-container'>
        <div className='profile-photo'>
          <img src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' alt='Patient Profile' />
        </div>
        <div className='patient-information'>
        <p><strong>Name:</strong> {userDetails?.firstName} {userDetails?.lastName}</p>
                <p><strong>Age:</strong> {userDetails?.age}</p>
                <p><strong>Weight:</strong> {userDetails?.weight} kg</p>
                <p><strong>Gender:</strong> {userDetails?.gender}</p>
        </div>
      </div>

      <div className='symptoms-form-container'>
        <form className='symptoms-form' onSubmit={handleSubmit}>
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
          <motion.button type='submit' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}transition={{ type: "spring", stiffness: 400, damping: 17 }}>Submit</motion.button>
        </form>
      </div>

      {submitted && (
        <div className='doctor-container'>
          {doctor && (
            <div className='doctor-info'>
              <div className='doctor-info-left'>
                <img src={doctor.image} alt='Doctor' />
                <p>{doctor.name}</p>
                <p>{doctor.age} years old</p>
                <p>{doctor.experience} experience</p>
              </div>
              <div className='doctor-info-right'>
                <p>Area of Expertise: {doctor.expertise}</p>
                <p>Contact:</p>
                <ul>
                  <li>Phone: {doctor.contact.phone}</li>
                  <li>Email: {doctor.contact.email}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
      <div className='map-container-dashboard'>
        <h2>Map</h2>
        <p>Map goes here</p>
        {/* <GoogleMap /> */}
      </div>
    </div>
  );
};
export default Dashboard