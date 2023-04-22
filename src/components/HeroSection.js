import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import Fade from 'react-reveal/Fade';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='videos/video-3.mp4' autoPlay loop muted />
        <Fade bottom>
        <h1>Get Checked Up</h1>
        <p>Prioritize your health</p>
        </Fade>

        <Fade big>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>Get Started
            </Button> 

            <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>Feel Good <i className='far fa-play-circle' />
            </Button> 
        </div>
        </Fade>
    </div>
  )
}

export default HeroSection