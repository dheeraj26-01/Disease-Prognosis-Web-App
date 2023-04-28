import React from 'react'
import '../../App.css'
import './AboutUs.css'


export default function AboutUs() {
    return (
        <div className='about_us_page'>
            <h1 className='about_us'>Get To Know Us</h1>
            <div className='about_us_content'>
                <p>
                    Our web application aims to provide an accurate and timely prediction of various
                    diseases based on the symptoms provided by the user. We utilize machine learning algorithms to
                    analyze the input symptoms and compare them with a dataset containing information on various diseases and their corresponding
                    symptoms.
                </p>
                <p>
                    Our team have used machine learning and data science
                    and have committed tirelessly to ensure that our application is
                    reliable, efficient, and user-friendly. We believe that early detection of
                    diseases can significantly increase the survival rate of patients, and
                    we strive to provide our users with a valuable tool to help them monitor their health and
                    seek medical attention when necessary.
                </p>
            </div>
            <div className='services_container'>
                <h2 className='services_title'>Our Services</h2>
                <div className='services_cards_container'>
                    <div className='service_card'>
                        <h3>Specialist Guidance</h3>
                        <p>Our users have access to a team of highly qualified doctors who can provide professional medical advice and guidance. Our doctors are available 24/7 to answer your questions and provide you with the support you need.</p>
                    </div>
                    <div className='service_card'>
                        <h3>Accessible Facilities</h3>
                        <p>We help our users find nearby clinics that offer the medical services they need. This saves them the trouble of having to travel long distances to access medical care.</p>
                    </div>
                    <div className='service_card'>
                        <h3>Tailored Diagnosis</h3>
                        <p>We have a unique feature that allows our users to seek medical attention for free based on the symptoms they are experiencing. Our system uses advanced algorithms to match the symptoms with possible diseases and recommend appropriate treatment.</p>
                    </div>
                </div>
            </div>
            <div className='quotation_container'>
                <div className='quotation_content'>
                    <p className='quotation_text'>"Don't wait for symptoms to appear before taking care of your health. Prevention is always better than cure. Regular check-ups can help detect health problems early on, when they are most treatable. As Benjamin Franklin once said, 'An ounce of prevention is worth a pound of cure.' So, don't wait until it's too late. Get a check-up sooner rather than later and take charge of your health"</p>
                    <p className='quotation_text'>~Dr. Joseph Lister</p>
                </div>
            </div>
            <div className='pillars_container'>
                <h2 className='pillars_title'>Pillars</h2>
                <div className='pillars_cards_container'>
                    <div className='pillars_card'>
                        <h3>Reliability</h3>
                        <p>We believe that healthcare should be reliable and accessible to everyone. That's why we have a team of expert doctors who are available 24/7 to provide professional medical advice and guidance.</p>
                    </div>
                    <div className='pillars_card'>
                        <h3>Accessibility</h3>
                        <p>We understand that not everyone has access to quality healthcare services, and we are committed to changing that. Our website is designed to provide users with easy access to medical care regardless of their location.</p>
                    </div>
                    <div className='pillars_card'>
                        <h3>Innovation</h3>
                        <p>We are dedicated to using the latest technology to make healthcare more efficient and accessible. Our automated services use machine learning to predict the risk of developing certain diseases and recommend appropriate treatment.</p>
                    </div>
                    <div className='pillars_card'>
                        <h3>Empathy</h3>
                        <p>We understand that dealing with a disease can be a challenging experience. That's why we provide our users with the emotional support they need to navigate through difficult times.</p>
                    </div>
                    <div className='pillars_card'>
                        <h3>Transparency</h3>
                        <p>We believe in being transparent with our users about our services and the information we collect. We are committed to protecting the privacy of our users and ensuring that they have full control over their data.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}