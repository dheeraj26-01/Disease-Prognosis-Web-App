import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase.js";
import { getDatabase, ref, onValue } from "firebase/database";
import { motion } from "framer-motion"
import { GoogleMaps } from '@react-google-maps/api';
import GoogleMap from './GoogleMap';


const doctors = [
  {
    name: 'Dr. John Smith',
    age: 45,
    experience: '15 years',
    expertise: 'Cardiology',
    contact: {
      phone: '8012345679',
      email: 'john.smith@diagnosio.com'
    },
    image: 'https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg'
  },
  {
    name: 'Dr. Maria Garcia',
    age: 30,
    experience: '10 years',
    expertise: 'Gastroenterology',
    contact: {
      phone: '8901234567',
      email: 'maria.garcia@diagnosio.com'
    },
    image: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg'
  },
  {
    name: 'Dr. William Lee',
    age: 40,
    experience: '16 years',
    expertise: 'Neurology',
    contact: {
      phone: '9123456780',
      email: 'william.lee@diagnosio.com'
    },
    image: 'https://img.freepik.com/free-photo/handsome-young-male-doctor-with-stethoscope-standing-against-blue-background_662251-343.jpg'
  },
  {
    name: 'Dr. Elizabeth Brown',
    age: 42,
    experience: '12 years',
    expertise: 'Dermatology',
    contact: {
      phone: '9654321876',
      email: 'elizabeth.brown@diagnosio.com'
    },
    image: 'https://media.istockphoto.com/id/1323303738/photo/medical-doctor-indoors-portraits.jpg?s=170667a&w=0&k=20&c=LoWDLLMsblLcIAzwvUCJEE07am20JkRqAvstUrXLUgw='
  },
  {
    name: 'Dr. David Martinez',
    age: 55,
    experience: '25 years',
    expertise: 'Orthopedics',
    contact: {
      phone: '8765432109',
      email: 'david.martinez@diagnosio.com'
    },
    image: 'https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg'
  },
  {
    name: 'Dr. Sarah Johnson',
    age: 38,
    experience: '14 years',
    expertise: 'Family Medicine',
    contact: {
      phone: '9876543210',
      email: 'sarah.johnson@diagnosio.com'
    },
    image: 'https://st2.depositphotos.com/5906386/8938/i/950/depositphotos_89385466-stock-photo-beautiful-girl-doctor-in-a.jpg'
  },
  {
    name: 'Dr. Michael Thompson',
    age: 28,
    experience: '6 years',
    expertise: 'Internal Medicine',
    contact: {
      phone: '7890123456',
      email: 'michael.thompson@diagnosio.com'
    },
    image: 'https://st4.depositphotos.com/1325771/39154/i/600/depositphotos_391545206-stock-photo-happy-male-medical-doctor-portrait.jpg'
  },
  {
    name: 'Dr. Jessica Wilson',
    age: 41,
    experience: '13 years',
    expertise: 'Pediatrics',
    contact: {
      phone: '7012345678',
      email: 'jessica.wilson@diagnosio.com'
    },
    image: 'https://t3.ftcdn.net/jpg/05/04/25/70/360_F_504257032_jBtwqNdvdMN9Xm6aDT0hcvtxDXPZErrn.jpg'
  },
  {
    name: 'Dr. Christopher Davis',
    age: 47,
    experience: '19 years',
    expertise: 'Ophthalmology',
    contact: {
      phone: '6789012345',
      email: 'christopher.davis@diagnosio.com'
    },
    image: 'https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?b=1&s=170667a&w=0&k=20&c=vUq0J-LgD4FPEV1Ua_0NeQBcJ2xb8EjGe5fdcR1K2x0='
  },
  {
    name: 'Dr. Emily Anderson',
    age: 39,
    experience: '16 years',
    expertise: 'Psychiatry',
    contact: {
      phone: '5678901234',
      email: 'emily.anderson@diagnosio.com'
    },
    image: 'https://t4.ftcdn.net/jpg/03/17/85/49/360_F_317854905_2idSdvi2ds3yejmk8mhvxYr1OpdVTrSM.jpg'
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
          <motion.button type='submit' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>Submit</motion.button>
        </form>
      </div>


      <div className='map-container-dashboard'>
        <div className="result">
          <motion.div
            className="wrapper"
            animate={{
              scale: [0, 1],
              borderRadius: ["50%", "0%"]
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <div className="result-wrapper">
              <h2>Results</h2>
              <div className="results-content">
                You have a disease !!
              </div>
            </div>
          </motion.div>
        </div>

        <div className="maps">
          <GoogleMap />
        </div>
      </div>

      {submitted && (
        <motion.div
          className="doctor-container-wrapper"
          animate={{
            scale: [0, 1],
            borderRadius: ["50%", "0%"]
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <h2>Get In Touch With Our Doctors ~</h2>
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
                  <ul>
                  <p>Contact:</p>
                    <li>Phone: {doctor.contact.phone}</li>
                    <li>Email: {doctor.contact.email}</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};
export default Dashboard