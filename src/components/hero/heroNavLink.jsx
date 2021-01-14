import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'
import './style.scss'

const HeroNavLink = ({ btnText }) => {
    const { setHiddenMenu, activeLink, setActiveLink } = useContext(MovieContext)

    return (
        <button className="heroNavlink" 
            onClick={() => { 
                setActiveLink(btnText)
                setHiddenMenu(true)
            }}
            style={{ color: activeLink === btnText ? "#7fff00" : "#fff" }} >
            { btnText }
        </button>
    )
}

export default HeroNavLink