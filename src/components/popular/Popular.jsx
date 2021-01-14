import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'
import Container from '../container'
import './style.scss'

function Popular() {
    const { popularMovies, getMovieDetail, setActiveLink } = useContext(MovieContext)
    
    return (
        <div className="popularMovies">
            <Container className="container">
                { popularMovies.results && 
                    popularMovies.results.map((popularMovieItem, index) => {
                        return <img key={index} 
                        src={`https://image.tmdb.org/t/p/w400/${popularMovieItem.poster_path}`} alt="poster"
                        onClick={() => {
                            getMovieDetail(popularMovieItem.id);
                            setActiveLink("Details")
                        }} />
                    })
                }
            </Container>
        </div>
    )
}

export default Popular
