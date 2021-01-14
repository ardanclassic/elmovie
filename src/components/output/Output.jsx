import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'
import Container from '../container'
import MovieDetail from '../movies/MovieDetail'
import Movies from '../movies/Movies'
import MoviesPagination from '../movies/MoviesPagination'
import Popular from '../popular/Popular'
import './style.scss'

// import { Switch, Route } from "react-router-dom";

function Output() {
    const { activeLink } = useContext(MovieContext)

    return (
        <div className="output">
            { activeLink === "Popular" && (
                <Container>
                    <Popular />
                </Container>
            )}
            { activeLink === "All Movies" && (
                <Container>
                    <Movies />
                    <MoviesPagination />
                </Container>
            )}
            { activeLink === "Details" && (
                <Container>
                    <MovieDetail />
                </Container>
            )}
        </div>
    )
}

export default Output
