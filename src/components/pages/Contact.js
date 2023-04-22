import React from 'react'
import '../../App.css'
import './Contact.css'
import Map from '../Map'

export default function Contact(){
    return (
        <div>
            <h1 className='contact_us'>Contact Us</h1>
            <div className='contact_us_content'>
                <p>We are always happy to hear from our users. 
                Please feel free to contact us for any feedback 
                or queries you may have. Our team is committed to providing the best 
                possible service and support to our users. 
                Whether you have questions about the disease 
                prediction system or need help navigating the
                web application, our customer service representatives
                are available to assist you. We also welcome any 
                feedback you may have regarding the system's accuracy or features.
                Your input helps us improve the system and provide a 
                better user experience. Please don't hesitate 
                to reach out to us via email or phone. 
                We look forward to hearing from you!</p>
                <p>Our office is located at:</p>
                <p>123 Main Street</p>
                <p>City, State 12345</p>
                <p>Email: contact@ourwebsite.com</p>
                <p>Phone: 555-123-4567</p>
                <div className="map-container">
                    <div className="map-overlay">
                        <h2>Visit Us</h2>
                        <p>Our office is located at:</p>
                        <p>123 Main Street</p>
                        <p>City, State 12345</p>
                    </div>
                    <Map />
                </div>
            </div>
        </div>
    );
}
