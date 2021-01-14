import React from 'react'
import './style.scss'
import HeroNav from './heroNav'
import Output from '../output/Output'

const Hero = () => {
    return (
        <div className="hero">
            <HeroNav />
            <Output />
        </div>
    )
}

export default Hero