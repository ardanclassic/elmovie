import React, { useContext } from 'react'
import Container from '../container'
import HeroNavLogo from './heroNavLogo'
import HeroNavMenu from './heroNavMenu'
import HeroNavSearch from './heroNavSearch'
import { MovieContext } from '../../context/MovieContext'
import './style.scss'

const HeroNav = () => {
    const { hiddenMenu, setHiddenMenu } = useContext(MovieContext)

    return (
        <nav className="heroNav">
            <Container>
                <div className="wrapper">
                    <HeroNavLogo />
                    <HeroNavMenu />
                </div>
                <HeroNavSearch />
                <i  id="burgerMenu" 
                    onClick={() => setHiddenMenu(!hiddenMenu)} 
                    className={ hiddenMenu ? "fas fa-bars" : "fas fa-times" }>
                </i>
            </Container>
        </nav>
    )
}

export default HeroNav