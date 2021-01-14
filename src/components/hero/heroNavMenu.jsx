import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'
import HeroNavLink from './heroNavLink'
import './style.scss'

const HeroNavMenu = () => {
    const { hiddenMenu } = useContext(MovieContext)
    
    return (
        <div className={ (hiddenMenu ? "hidden" : "") + " heroNavMenu" }>
            <HeroNavLink btnText="Popular" />
            <HeroNavLink btnText="All Movies" />
        </div>
    )
}

export default HeroNavMenu