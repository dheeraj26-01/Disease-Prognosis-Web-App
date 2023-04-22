import React from 'react'
import '../../App.css'


export default function AboutUs() {
    return (
    <div>
    <h1 className='about_us'>About Us</h1>
    <div className='about_us_content'>
    <p>
    Our web application aims to provide an accurate and timely prediction of various diseases based on the symptoms provided by the user. We utilize machine learning algorithms to analyze the input symptoms and compare them with a dataset containing information on various diseases and their corresponding symptoms.
    </p>
    <p>
    Our team have used machine learning and data science and have committed tirelessly to ensure that our application is reliable, efficient, and user-friendly. We believe that early detection of diseases can significantly increase the survival rate of patients, and we strive to provide our users with a valuable tool to help them monitor their health and seek medical attention when necessary.
    </p>
    </div>
    </div>
    );
    }