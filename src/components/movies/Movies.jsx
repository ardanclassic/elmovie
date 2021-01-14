import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'
import Container from '../container'
import Loader from '../loader'
import './style.scss'

function Movies() {
    const { movies, isLoading, setActiveLink, getMovieDetail } = useContext(MovieContext)

    return (
        <div className="movies">
            <Container className="container">
                { movies.results && movies.results.length === 0 && (
                    <h1 className="error">Movie not found</h1>
                )}
                { !isLoading ? 
                    (
                        movies.results && 
                        movies.results.map((movieItem, index) => (
                            <img key={index} 
                                 src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`} alt="poster"
                                 onClick={() => {
                                     getMovieDetail(movieItem.id);
                                     setActiveLink("Details")
                                }} />
                        ))
                    ) : <Loader />
                }
            </Container>
        </div>
    )
}

export default Movies
